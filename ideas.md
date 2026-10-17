# Ideas and issues

Things to change in the app later. Newest first.

## 2026-10-17 · Full-screen notice in the Play Store app

> I noticed that when I install the app it still says that it's using full screen mode, is that needed?
> but other normal apps don't show it

The notice comes from Chrome: when a game starts, the page asks for full screen again
(`index.html`, `goFullScreen()`), and Chrome then shows its own "swipe to exit full
screen" message every time. Normal apps go full screen through Android directly and never
get that message.

Possible fix: in the Play Store app, skip that request, since the app already starts full
screen through the manifest. Keep it in the normal browser. Risk: on some phones a thin
strip around the camera stays in the bar colour. Needs a check on a real Android phone.
No new app version needed, the website change is enough, so it is safe during the
closed test.
