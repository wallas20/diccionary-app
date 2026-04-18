const CACHE_NAME = "diccionario-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/css/index.css",
  "/js/index.js",
  "/manifest.json",
  "/icono.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
