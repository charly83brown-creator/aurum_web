Netlify deployment guide

1. Crear una cuenta en Netlify si no tienes una.
2. En el panel de Netlify, elige `Add new site > Import from Git`.
3. Conecta tu repositorio GitHub/GitLab/Bitbucket.
4. Selecciona el repositorio del proyecto.
5. En Build settings, configura:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. En Environment variables, añade:
   - `VITE_SUPABASE_URL` = `https://neyplvljynancgtiimrl.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = tu clave anónima de Supabase
   - Si usas Google Sheet webhook: `VITE_SHEET_WEBHOOK` = tu URL de Apps Script
7. Guarda y despliega.

Notas:
- Netlify detectará `netlify.toml` y usará `dist`.
- Si usas `npm install` en el build, Netlify ya lo hará automáticamente.
- Puedes usar `npm run preview` localmente para ver el build antes.
