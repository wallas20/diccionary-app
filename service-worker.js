const CACHE_NAME = "diccionario-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./css/index.css",
  "./js/index.js",
  "./manifest.json"
];

// instalar
self.addEventListener("install", event => {
  self.skipWaiting(); // 🔥 importante
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// activar
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // 🔥 importante
});

// fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
