# ResumeForge 2.0 — Mushak 3.0

ResumeForge is a cross-platform resume/CV builder with the Mushak AI assistant.

## What was fixed/upgraded

- ResumeForge logo is bundled in the web UI and Windows app icon.
- Electron now uses a secure preload bridge with `contextIsolation` enabled.
- AI requests are handled in the Electron main process instead of exposing an API key to the browser UI.
- Mushak 3.0 supports GPT-5.6 Luna when `OPENAI_API_KEY` is configured.
- Chat can use the Responses API web-search tool from the secure desktop process.
- Resume summary, skills, experience bullets, research statement, cover letter, interview prep, and resume review can use the upgraded AI.
- If no API key is configured, the existing offline Mushak fallback continues to work.
- AI/network errors now time out cleanly and fall back instead of breaking the app.
- Added syntax validation for Electron and renderer scripts.

## Install dependencies

From this folder:

```powershell
npm install
```

## Run the desktop app

```powershell
npm run electron:dev
```

## Enable GPT-5.6 Luna

Do **not** put an API key inside `web/index.html`, JavaScript, Git, or a mobile/web bundle.

On Windows PowerShell/CMD, set the environment variable before starting the app:

```powershell
setx OPENAI_API_KEY "YOUR_API_KEY_HERE"
```

Close and reopen the terminal, then run:

```powershell
npm run electron:dev
```

Optional model override:

```powershell
setx MUSHAK_MODEL "gpt-5.6-luna"
```

If `OPENAI_API_KEY` is missing, ResumeForge still works with its local AI fallback.

## Build Windows installer

```powershell
npm run electron:build
```

The installer/portable output is created in `dist/`.

## Web version

Open `web/index.html` directly, or serve the `web` folder with any local static web server. The secure OpenAI bridge is only available in the Electron desktop build; the normal web version uses the offline fallback.

## Android / iOS

Capacitor configuration is included. Install dependencies first, then use:

```powershell
npx cap add android
npx cap sync android
npx cap open android
```

For iOS, use a macOS machine with Xcode:

```text
npx cap add ios
npx cap sync ios
npx cap open ios
```

The OpenAI key should not be embedded into a mobile app. Use a secure backend for production mobile AI requests.
