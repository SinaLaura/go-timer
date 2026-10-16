# Google Play: testing

The tester email addresses are in `testers.private.md`, next to this file. That file is
never uploaded (see `.gitignore`).

## Links

- **Internal test** (works now, no review needed):
  https://play.google.com/apps/internaltest/4701066929459954754
- **Closed test** (works once Google has approved the review):
  https://play.google.com/apps/testing/io.github.sinalaura.gotimer
- **App in the Play Store:**
  https://play.google.com/store/apps/details?id=io.github.sinalaura.gotimer
- **Tester list in the Play Console** (your developer account is `/u/1/` in the Claude
  app's browser):
  https://play.google.com/console/u/1/developers/5939543703697332171/app/4972900202990513240/tracks/4699056884168814824?tab=testers

Both tests use the same email list, *Go Girls\* Timer - Go Clock Testers*.

## Workflow

1. **Add a tester:** their Google account email (the one in the Play Store on their
   Android phone) goes on the email list in the Play Console. Also add it to
   `testers.private.md`.
2. **Before the closed test is approved:** send them the internal test link. They open
   it, accept, and install the app.
3. **Once Google approves** (an email from Google Play): send everyone the closed test
   link. They open it signed into the same Google account and tap **"Tester werden"**.
   Anyone who already has the app from the internal test keeps it; no new install.
4. **14 days** with at least 12 testers signed up to the closed test, without a break.
   Ask them to open the app now and then.
5. **Then:** on the Dashboard, *Produktionszugriff beantragen* (apply for production).

## Status

- 16 Oct 2026: store listing done, closed test sent to Google for review.
