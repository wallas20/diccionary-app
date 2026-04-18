const CACHE_NAME = "diccionario-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/css/index.css",
  "/js/index.js",
  "/manifest.json"
];

// instalar y guardar archivos
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Cache creado");
        return cache.addAll(urlsToCache);
      })
  );
});

// activar (limpiar cache viejo si cambias versión)
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
});

// responder cuando no hay internet
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});