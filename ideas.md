# Ideas and issues

Things to change in the app later. Newest first.

## 2026-10-18 · Old logo on the loading screen (parked)

When the app opens, the loading screen still shows the old G logo. The app's own screen
has no logo, and all icons in this repo are already the new Go Girls* stone (since
12 Oct), so the old one is a copy saved on the phone. Parked for now: wait and see
whether it changes by itself.

- **Home-screen web app:** Android updates the saved logo by itself, but that can take
  days. Faster: remove it from the home screen and add it again.
- **Play Store app:** the loading screen is built into the app package, so it only
  changes with a new app version (higher version number, same signing key, uploaded in
  the Play Console).
- **Maybe also:** the app's saved offline copy (`sw.js`) may still hold the old icon
  files. Possible fix: let it throw away its saved copy once and load everything fresh.

## 2026-10-18 · Feedback from a friend

Done on 18 Oct:
- ~~Colours only while the clock runs.~~ The hearts now also show while paused.
- ~~Error message doesn't match the colours, and isn't translated.~~ It was the browser's
  own bubble. Now the app shows its own message under the fields, in the app's colours
  and language.
- ~~German: comma before "ohne".~~ Removed.
- ~~German: "Klänge und Stimme".~~ Now "Ton und Stimme".

Decided against:
- Scroll wheel for minutes and seconds instead of typing them: too much for what it
  gives. Typing stays.

## 2026-10-17 · Full-screen notice in the Play Store app

After installing the app from the Play Store, a notice says it is running in full-screen
mode. Other apps don't show this. Is it needed?

The notice comes from Chrome: when a game starts, the page asks for full screen again
(`index.html`, `goFullScreen()`), and Chrome then shows its own "swipe to exit full
screen" message every time. Normal apps go full screen through Android directly and never
get that message.

Possible fix: in the Play Store app, skip that request, since the app already starts full
screen through the manifest. Keep it in the normal browser. Risk: on some phones a thin
strip around the camera stays in the bar colour. Needs a check on a real Android phone.
No new app version needed, the website change is enough, so it is safe during the
closed test.
