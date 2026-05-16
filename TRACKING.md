# Six Scriptures Tracking Guardrails

This page is used for paid Facebook lead generation, so the Meta and Kit counts must stay aligned.

## Current Setup

- Live page: https://john-tesh-six-scriptures.netlify.app
- Kit form: `9408026` / `six scriptures pdf`
- Meta pixel: `1366422343752638`
- Meta lead event: `Lead`
- Kit incentive PDF: `six-scriptures-v-10-real-minibook.pdf`

## Rules

1. Keep Kit `Auto-confirm new subscribers` turned on for this form.
2. Keep Kit `Send incentive email` turned on so the PDF is still delivered.
3. Fire Meta `Lead` only after Kit emits `ckjs:submission:complete`.
4. Do not fire Meta `Lead` on page view, button click, form open, or raw form submit.
5. Keep a low test budget until Meta-reported leads and confirmed Kit subscribers are close enough to trust.

## Preflight Before Scaling Spend

1. Run `node scripts/verify-lead-tracking.mjs`.
2. Submit one fresh test email through the live page.
3. Confirm the email appears in Kit as a subscriber without needing a confirmation click.
4. Confirm Meta Events Manager shows one `Lead` event only after the form submission completes.
5. Compare daily Meta leads against Kit subscribers before raising the campaign budget.

If Meta leads jump far ahead of Kit subscribers again, pause scale spend first, then check Kit auto-confirm and the `ckjs:submission:complete` listener.
