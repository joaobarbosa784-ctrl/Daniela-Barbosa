# Base44 Setup Notes

## Project type
Static Webflow-exported website (plain HTML/CSS/JS + image/video assets). No build step, no backend, no package manager.

## Running
- `docker compose -f docker-compose.base44.yml up -d`
- nginx:alpine serves the repo root on host port 3000.
- No external credentials or secrets required.

## Editing
- Edit HTML/CSS/JS files directly; reload the preview to see changes (nginx serves files from the bind mount, but the browser must refresh — call `reload_preview` after edits).
