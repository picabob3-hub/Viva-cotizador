const CACHE_NAME = 'viva-v2'; // CAMBIADO A V2 PARA FORZAR ACTUALIZACIÓN
const assets = ['./', './index.html', './VIVAICONO.PNG'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
