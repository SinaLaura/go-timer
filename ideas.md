# Ideas and issues

Things to change in the app later. Newest first.

## 2026-10-18 · Old logo on the Play Store app's loading screen

When the Play Store app opens, its loading screen still shows the old G logo. All icons
in this repo are already the new Go Girls* stone (since 12 Oct), so a website change
can't fix it: the loading screen is built into the app package when it is made.

Fix: build a new app package from https://sinalaura.github.io/go-timer (the same tool as
the first time, e.g. PWABuilder), with a **higher version number** and the **same signing
key** as before, then upload it to the closed test in the Play Console. Testers get it as
an update. Phones that installed an older version may need to open the app once more
after the update.

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
