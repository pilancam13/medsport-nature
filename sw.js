self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('medsport-store').then((cache) => cache.addAll([
      'index.html',
      'manifest.json',
      'logo.jpg'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});