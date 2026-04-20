# Fonora.ai → Handoff für headuphigh.de

Dieses Dokument beschreibt den **realen Zustand** des fonora.ai Projekts (Stand 16.04.2026), damit eine zweite Cloudflare-Pages-Seite (headuphigh.de) mit demselben Pattern gebaut werden kann. Kein erfundener Stack, nur was wirklich drin ist.

---

## 1. STACK

**Kein Framework.** Pure Vanilla HTML/CSS/JS.

- **Keine package.json**, kein Build-Step, kein Node-Runtime auf Cloudflare — es werden nur statische Dateien ausgeliefert
- **Generator-Script**: `generate-landing-pages.js` (Node.js, lokal ausgeführt) stampft 19 Landingpages aus einem Daten-Array in HTML-Dateien
- **Deployment**: Cloudflare Pages, verbunden mit GitHub (`github.com/pelcita/fonora-website`), Auto-Deploy bei jedem `git push` auf `main`. **Alternativ/parallel**: CLI-Deploy via `npx wrangler pages deploy` mit `CLOUDFLARE_API_TOKEN`

**Libraries (alle per CDN, nicht gebündelt):**
- **Animation**: GSAP 3.12.2 + ScrollTrigger (cdnjs)
- **Smooth Scroll**: Lenis 1.1.18 (unpkg)
- **Fonts**: Google Fonts (Plus Jakarta Sans 400/600/700/800, Inter 400/500/600)
- **CSS**: Inline `<style>` Block in jeder HTML-Datei, CSS-Variablen für Farben/Fonts. Keine Tailwind, kein SCSS.
- **Forms**: Native HTML + `fetch()` an n8n Webhook
- **SEO**: Inline Schema.org JSON-LD in jeder Seite, manuell gepflegte `sitemap.xml`

---

## 2. ORDNERSTRUKTUR

```
fonora/
├── index.html                       # Hauptseite (~79 KB, alle CSS+JS inline)
├── datenschutz.html                 # Standalone, eigene Styles
├── impressum.html                   # Standalone, eigene Styles
├── robots.txt                       # Sitemap-Verweis
├── sitemap.xml                      # Manuell vom Generator befüllt
├── llms.txt                         # Für LLM-Crawler (Branchen-Liste)
├── generate-landing-pages.js        # Node-Script, erzeugt alle Branchen-Seiten
├── fuer-dachdecker/
│   └── index.html                   # Eine Landingpage = ein Ordner mit index.html
├── fuer-solaranlagen/index.html
├── ... (19 Branchen-Ordner total)
├── blog/
│   ├── index.html                   # Blog-Übersicht (manuell + n8n-gepatcht)
│   ├── ki-telefonassistent-vs-callcenter-2026/index.html
│   └── handwerker-verlieren-auftraege-ohne-telefonassistenz/index.html
├── images/                          # ~80 Bilder: Nora-Portraits, Logos, Branchen-Shots
├── Bilder/                          # Quellordner unoptimiert (nicht produktiv verwendet, nicht in Sitemap)
├── n8n-blog-workflow*.json          # Drei Versionen des n8n Workflows als Backup
└── .git/                            # GitHub-Repo pelcita/fonora-website
```

**Keine `_headers`, keine `_redirects`, keine `functions/` Ordner** — Cloudflare Pages liefert nur statische Dateien aus. URL-Redirects werden über **Cloudflare Page Rules** im Dashboard gesteuert (siehe Stolperstein 1).

---

## 3. LANDINGPAGE-TEMPLATE

### So ist EINE Landingpage aufgebaut

Eine Landingpage ist **eine einzelne `index.html` in einem eigenen Ordner** (`fuer-[branche]/index.html`). Keine externen CSS/JS-Dateien — alles inline. Jede Seite ist ~30-40 KB und komplett eigenständig ladbar.

**Sektionen-Reihenfolge in jeder Landingpage:**
1. Custom Cursor (SVG Telefonhörer)
2. Navigation (fixiert, mit Scroll-Transparenz)
3. Breadcrumb (fonora.ai / [Branche])
4. Hero (Canvas-Soundwave + Branchen-Headline + Hero-Image)
5. Stats (3 animierte Zahlen)
6. Pain Points (4 branchenspezifische Probleme)
7. Features "Nora für [Branche]" (Split-Layout mit Checkliste)
8. Demo-Formular (orange Section, POST an n8n)
9. Testimonial (1 Zitat pro Seite)
10. FAQ (4 branchenspezifische Fragen, Accordion)
11. Related Branchen (3 Links zu anderen Landingpages)
12. Final CTA (Cal.com Link)
13. Footer (Links zu Datenschutz/Impressum)

### Wie die 19 Pages sich Code/Content teilen

**Nicht über Shared-Components — sondern über einen einzigen Generator.**

`generate-landing-pages.js` enthält:
- **Ein Daten-Array `pages[]`** mit einem Eintrag pro Branche (~60 Zeilen Content je Branche: slug, title, keywords, hero-Zeilen, stats, painPoints, featureFraming, testimonial, faqs, relatedBranchen)
- **Eine Image-Map `branchenBilder{}`** die Slug → Bilddatei mappt
- **Eine `generatePage(page)` Funktion** (~1000 Zeilen) die aus dem Template + Daten eine vollständige HTML-Datei zurückgibt
- **Am Ende**: Schleife über alle Pages, schreibt `fuer-[slug]/index.html` und aktualisiert `sitemap.xml`

**Ausführung:** `node generate-landing-pages.js` — schreibt alle Dateien in einem Rutsch neu. Keine Dependencies außer `fs` und `path`.

### Neue Branche hinzufügen — Schritt für Schritt

1. **Bild** in `images/nora-[branche].png` legen (ohne Hintergrund, ~480px hoch)
2. **Image-Map** in `generate-landing-pages.js` erweitern:
   ```js
   'fuer-[branche]': 'nora-[branche].png',
   ```
3. **Seiten-Objekt** in `pages[]` hinzufügen (Kopie einer existierenden als Vorlage, alle Text-Felder anpassen)
4. **Hauptseite `index.html`**: Branche in Trust-Ticker und FAQ-Links-Liste ergänzen (manuell, nicht im Generator)
5. **Script ausführen**: `node generate-landing-pages.js` → neue Ordner + aktualisierte Sitemap
6. **Deployen**: `git push` (triggert Cloudflare via GitHub) oder `npx wrangler pages deploy`
7. **Search Console**: URL zur Indexierung anfordern + Sitemap neu einreichen

---

## 4. BLOG / n8n-WORKFLOW

**Wichtig: Der Blog ist NICHT im Generator — er wird separat von n8n verwaltet.**

### Wie n8n Artikel in die Seite schreibt

n8n schreibt **direkt via GitHub API** ins Repo. Cloudflare Pages erkennt den Push und baut neu.

**Workflow `Fonora Weekly Blog v3` (Datei: `n8n-blog-workflow-v3.json`):**

1. **Schedule Trigger** — jeden Montag 9:00 Uhr (Europe/Berlin)
2. **Blog Index laden** — GitHub API GET `/repos/pelcita/fonora-website/contents/blog/index.html`
3. **Thema wählen** — Claude Sonnet analysiert bestehendes HTML und wählt einen noch nicht geschriebenen Artikel aus einer fest codierten Liste von 20 Topics. Output: JSON mit `slug`, `title`, `category`, `excerpt`
4. **Template laden** — holt `blog/ki-telefonassistent-vs-callcenter-2026/index.html` als HTML-Template (der älteste, manuell gepflegte Artikel dient als Stil-Vorlage)
5. **Artikel schreiben** — Claude Sonnet 4 generiert den kompletten Artikel als HTML (800-1200 Wörter, Du-Form, Deutsch, mit internen Links zu Branchen-Seiten). Output wird als Base64 für GitHub API kodiert
6. **Artikel hochladen** — PUT `/contents/blog/[slug]/index.html`
7. **Blog Index updaten** — Blog-Card HTML + BlogPosting Schema werden in `blog/index.html` eingefügt (Regex-Replace an Marker-Positionen)
8. **Sitemap updaten** — Neue URL wird vor `</urlset>` in `sitemap.xml` eingefügt

### Format der Artikel

**Kein Frontmatter, kein Markdown — pures HTML.** Jeder Artikel ist eine komplette HTML-Seite mit:
- Eigenem `<head>` mit Meta-Tags, Schema.org BlogPosting, OpenGraph
- Inline CSS (kopiert vom Template)
- Artikel-Content im `<article>` Tag
- About-Section "Die Frau hinter Fonora" mit Olga-Bild
- Footer + Navigation

### Cloudflare-Rebuild trigger

**Passiv via GitHub Integration.** n8n pusht via GitHub API → Cloudflare Pages erkennt den Commit automatisch → baut und deployed innerhalb von ~30 Sekunden. **Kein separater Webhook nötig.**

### Secrets / Tokens

In n8n unter Credentials:
- `GitHub Token` (HTTP Header Auth, Name: `Authorization`, Value: `Bearer ghp_...`) — braucht Repo-Schreibrechte auf `pelcita/fonora-website`
- **Anthropic API Key ist im Workflow-Code hardcoded** (siehe Stolperstein 4 — das ist ein Problem)

---

## 5. CLOUDFLARE PAGES SETUP

**Projekt-Name: `fonora-website`** (nicht `fonora` — wichtig für wrangler-Befehle!)

**Build-Einstellungen:**
- Build command: **leer** (keine Builds, pure statische Dateien)
- Build output directory: **`/`** (Repo-Root)
- Root directory: **`/`**
- Node-Version: irrelevant (kein Build)

**Custom Domains (unter Workers & Pages → fonora-website → Custom domains):**
- `fonora.ai` (primär)
- `www.fonora.ai`
- Beide via CNAME auf `fonora-website.pages.dev`, beide via Cloudflare Proxy

**DNS in Cloudflare:**
- `fonora.ai` CNAME → `fonora-website.pages.dev` (Proxy ON)
- `www` CNAME → `fonora-website.pages.dev` (Proxy ON)

**Redirect Page Rule (kritisch):**
- Pattern: `www.fonora.ai/*`
- Action: 301 Forwarding URL → `https://fonora.ai/$1`
- **Richtung ist wichtig** — www → non-www (Canonical-URLs zeigen alle auf non-www)

**CLI-Deploy:**
```bash
CLOUDFLARE_API_TOKEN="cfut_..." npx wrangler pages deploy . --project-name fonora-website
```
Token braucht die Permissions: `Account → Cloudflare Pages → Edit`, `User → User Details → Read`, `User → Memberships → Read`

---

## 6. FORMS / LEAD-FLOWS

**Ein Formular**: "Nora ruft dich an" auf Hauptseite + allen Landingpages.

**Flow:**
1. User füllt Formular aus (Anrede, Vor-/Nachname, Firma, Telefonnummer, Anrufe pro Tag)
2. Client-seitige JS-Validierung (nur "nicht-leer" Checks)
3. `fetch('https://ocrey.app.n8n.cloud/webhook/fonora-demo', { method: 'POST', body: JSON })` — **kein Worker dazwischen**
4. n8n-Workflow: legt Contact in HubSpot an, triggert via Fonio.ai einen Anruf zur eingegebenen Nummer, in dem Nora den Kunden anruft und das Demo macht
5. Frontend tauscht Formular gegen Success-Message aus

**CORS:** n8n Webhook antwortet mit `Access-Control-Allow-Origin: *` (default). Keine Preflight-Probleme, weil nur `application/json` POST ohne Custom Headers.

**Spam-Schutz:** **Keiner.** Kein reCAPTCHA, kein Honeypot, kein Rate-Limit auf Client-Seite. Einziger Schutz: n8n-seitige Logik (nicht in diesem Repo).

**DSGVO:** Checkbox-Hinweistext unter Formular: "DSGVO-konform · Keine Weitergabe · Kein Spam". Keine echte Einwilligungs-Checkbox. Cookie-Banner seit Commit `2273e59` auf allen 21 Unterseiten, aber nicht mit der Formular-Abgabe verknüpft.

**Cal.com-Button:** Separater CTA "Kennenlerncall buchen" → öffnet `https://cal.eu/headuphigh/fonora.ai-erstgeprach` in neuem Tab. Keine API-Integration, reiner Link.

---

## 7. SEO & PERFORMANCE

**Sitemap (`sitemap.xml`):**
- Manuell vom Generator-Script befüllt (für Landingpages), von n8n ergänzt (für Blogs)
- **WICHTIG:** `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` — im ursprünglichen Template war ein Typo `sitemapg.org`, der Google-Fehler "Falscher Namensraum" verursachte (siehe Stolperstein 2)

**robots.txt** (4 Zeilen):
```
User-agent: *
Allow: /
Sitemap: https://fonora.ai/sitemap.xml
```

**Meta-Tags in jeder Seite:**
- `title` (~60 Zeichen, mit "| fonora.ai" Suffix)
- `description` (~155 Zeichen)
- `keywords` (branchenspezifisch)
- `canonical` (non-www!)
- OpenGraph (og:type, og:url, og:title, og:description, og:image, og:locale=de_DE)
- Twitter Cards (summary_large_image)
- `geo.region=DE`, `geo.placename=Deutschland`

**Schema.org JSON-LD pro Landingpage:**
- `Service` (name, provider, areaServed, audience)
- `FAQPage` (aus den 4 FAQs der Seite)
- `BreadcrumbList` (fonora.ai → Branche)

**Hauptseite zusätzlich:**
- `Organization`, `SoftwareApplication` mit `AggregateRating` (4.9/5, 47 Reviews), `FAQPage` (9 Fragen)

**Bilder:**
- Format: PNG (freigestellt) mit schwarzem/transparentem Hintergrund
- Lazy Loading: **nicht überall** — nur in neueren Blog-Commits (`b7870c4`). Hauptseite + Landingpages laden Hero-Bilder eager
- Keine Cloudflare Images, kein AVIF/WebP-Fallback — PNG direkt
- Alt-Tags: keyword-optimiert im Generator-Script

**Performance:**
- Inline CSS/JS = keine Extra-Requests, aber ~30-40 KB pro Page (unkomprimiert)
- Google Fonts: 2 Families = 2 Requests (verschiebbar auf self-hosted Fonts für Verbesserung)
- GSAP + Lenis + ScrollTrigger = ~130 KB externe JS (CDN, gecached)

---

## 8. STOLPERSTEINE — ehrlich und konkret

**Das sind die fünf Dinge, die wirklich Zeit gekostet haben:**

### Stolperstein 1: www vs. non-www Redirect

Ursprünglich gab es eine Cloudflare Page Rule `fonora.ai/* → www.fonora.ai/$1`, während alle Canonical-Tags auf `fonora.ai` (non-www) zeigten. **Google sah das als Umleitungsfehler** und indexierte 10 Landingpages nicht. Fix: Page Rule umdrehen auf `www.fonora.ai/* → fonora.ai/$1`.

**Bei headuphigh.de:** Von Anfang an **eine Richtung** festlegen (empfehle non-www) und sowohl DNS als auch Canonical-Tags konsequent darauf ausrichten.

### Stolperstein 2: Typo im Sitemap-Namespace

Ursprüngliches Template hatte `xmlns="http://www.sitemapg.org/schemas/sitemap/0.9"` (extra `g`). Search Console meldete "Falscher Namensraum", akzeptierte die Sitemap aber trotzdem teilweise. **Unbedingt `sitemaps.org` mit `s`** prüfen.

### Stolperstein 3: Cloudflare-Projekt-Name ≠ Domain-Name

Das Pages-Projekt heißt `fonora-website`, nicht `fonora`. Beim ersten CLI-Deploy-Versuch schlug `npx wrangler pages deploy . --project-name fonora` mit "Project not found" fehl. **Vor dem ersten Deploy immer `npx wrangler pages project list` ausführen.**

### Stolperstein 4: Anthropic API Key in n8n-Workflow-JSON

Die exportierten n8n-Workflow-JSON-Dateien (`n8n-blog-workflow*.json`) enthalten den **Anthropic API Key im Klartext** in den Code-Node-Parametern. Diese Dateien liegen im öffentlichen Git-Repo. **Das ist ein aktives Leak.**

**Bei headuphigh.de unbedingt:**
- Keys **nur in n8n Credentials** speichern, niemals direkt in Code-Nodes
- Workflow-Exporte **nicht ins Git-Repo committen** (in `.gitignore`)
- Bestehenden Key **rotieren** (für fonora im Nachgang nötig!)

### Stolperstein 5: Eine Landingpage = eine Komplett-HTML

Weil jede Seite komplett eigenständig ist (CSS+JS inline), führt jede Style-Änderung zu 19 + 2 Blog + 3 Standalone = 24 Dateien, die geändert werden müssen. Im Generator-Script nur über eine Stelle, **aber der Blog-Index und die Blog-Artikel werden vom n8n-Workflow separat gepflegt und sind nicht im Generator**. Style-Drift zwischen Landingpages und Blog-Artikeln passiert dadurch schnell.

**Bei headuphigh.de** erwägen:
- Minimal-Framework (Astro, Eleventy) mit echten Shared Components → ein Layout-File, kein Code-Duplikat
- Oder Blog-Artikel **auch vom Generator** erzeugen lassen, mit Markdown-Input

### Was du NICHT 1:1 übernehmen solltest

- **Inline-CSS/JS-Pattern** — bei 20+ Seiten wird das unwartbar. Besser: Astro oder Eleventy.
- **Manuelle Sitemap-Patches durch n8n** — Regex-Replace an Marker-Positionen ist fragil. Besser: Sitemap bei jedem Build neu generieren.
- **Anthropic-Key im n8n Code-Node** — siehe oben.
- **Das 130-Zeilen-Generator-Script als "Template"** — es hat keine Tests, keine Types, keine Validierung.
- **Fehlende Shared Styles** — ein gemeinsames `styles.css` + Link-Tag erspart 80% der HTML-Größe.

### Was ich heute neu anders machen würde

1. **Astro** als Framework. Content-Collections für Branchen + Blog. TypeScript für Page-Daten.
2. **Ein einziges `Layout.astro`** mit Nav/Footer → alle Pages erben.
3. **Markdown-Frontmatter** für Blog-Artikel → n8n schreibt nur `.md` ins `src/content/blog/` statt komplettes HTML.
4. **Shared CSS-Datei** (oder CSS-Modules) statt inline-Styles.
5. **Cloudflare Worker** als Form-Proxy → validiert + rate-limited vor dem n8n-Call, Anti-Spam.
6. **Environment Variables über Cloudflare Pages** (keine hardcoded Tokens).
7. **Build Hook** als `.github/workflows/` + preview-deployments per PR.

---

## 9. ASSETS & BRAND

### Farben (CSS-Variablen in jeder HTML-Datei)

```css
:root {
  --navy:   #091440;   /* Primary Dark */
  --orange: #e85d04;   /* Accent / CTA */
  --ivory:  #f8f5ee;   /* Background hell */
  --white:  #ffffff;
}
```

Keine zentrale Tokens-Datei — CSS-Variablen sind in jeder `<style>` Block dupliziert.

### Fonts (Google Fonts, via `<link>` in jeder Seite)

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
--font-headline: 'Plus Jakarta Sans', sans-serif;  /* h1-h6, Logo, CTAs */
--font-body: 'Inter', sans-serif;                  /* Body, Nav, Formulare */
```

### Icon-Set

**Kein Icon-Set.** SVGs werden **inline** im HTML definiert, pro Use-Case:
- Custom Cursor: Telefonhörer-SVG (24x24, #e85d04)
- Scroll-Indicator, FAQ-Accordion (+/×), Success-Checkmark — alle inline
- Keine Icon-Font, kein Font-Awesome, keine SVG-Sprite

### Logos

- `images/1-removebg-preview.png` — primäres Logo (orange "fonora" Schrift auf transparent)
- `images/logo-fonora-hell.png` — helle Variante für dunkle Hintergründe
- `images/favicon.png` + `images/icon.png` — Favicons

### Analytics

**Keine Analytics aktiv eingebaut.** Kein Google Analytics, kein Plausible, kein Cloudflare Web Analytics im HTML. Tracking läuft nur über:
- Cloudflare-interne Request-Statistiken (Dashboard)
- Google Search Console für SEO-Impressionen
- HubSpot nach Formular-Submit

**Bei headuphigh.de** empfehle: Cloudflare Web Analytics aktivieren (kostenlos, cookie-less, DSGVO-freundlich) — ein `<script>`-Tag am Seitenende reicht.

---

## Kompakte Checkliste für headuphigh.de

- [ ] Repo anlegen, Cloudflare Pages mit GitHub verbinden
- [ ] **Projekt-Name = eindeutiger Slug festlegen**, mit `wrangler pages project list` verifizieren
- [ ] DNS + Custom Domain einrichten, Redirect-Richtung FEST festlegen (non-www empfohlen)
- [ ] Keine Inline-CSS/JS-Duplikation — Astro oder Eleventy verwenden
- [ ] Sitemap-Namespace: `sitemaps.org` (ohne g)
- [ ] Canonical-Tags und Sitemap auf **gleiche** Domain-Variante
- [ ] n8n-Credentials korrekt verwenden (KEINE API-Keys in Code-Nodes)
- [ ] `.gitignore` für Workflow-Exporte
- [ ] Cookie-Banner + DSGVO-Einwilligung vor Formular-Submit
- [ ] Cloudflare Web Analytics aktivieren
- [ ] Search Console Property anlegen + Sitemap einreichen
