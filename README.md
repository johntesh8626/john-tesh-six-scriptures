# Six Scriptures Landing Page

Static Netlify landing page for John Tesh's Six Scriptures PDF lead magnet.

- Live URL: https://john-tesh-six-scriptures.netlify.app
- Kit form ID: `9408026`
- Meta pixel ID: `1366422343752638`
- Lead magnet PDF is delivered through Kit's incentive email.
- Kit form must keep `Auto-confirm new subscribers` enabled so paid Facebook opt-ins are counted in Kit without a second confirmation click.
- Meta `Lead` must fire only after Kit confirms submission through `ckjs:submission:complete`.

Deploy from this folder with:

```bash
netlify deploy --prod --site 8622eb57-aeef-42bd-984c-fe94c01a3baf --dir .
```

Before deploying tracking-related changes, run:

```bash
node scripts/verify-lead-tracking.mjs
```
