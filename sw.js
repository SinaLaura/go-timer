// Keeps a copy of the app on the phone, so it also opens without internet.
// It answers from that copy right away, then fetches a fresh one in the
// background, so a change that was pushed shows up on the next launch.

const CACHE = 'go-timer';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const copy = await c.match(req, { ignoreSearch: true });
    const fresh = fetch(req).then(res => {
      if (res.ok) c.put(req, res.clone());
      return res;
    });
    if (copy) {
      e.waitUntil(fresh.catch(() => {}));
      return copy;
    }
    return fresh;
  }));
});
