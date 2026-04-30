const CACHE = "site-v1";

const ASSETS = [
  "../",
  "../index.html",
  "../css/styles.css",
  "../js/app.js",
  "../js/reveal.js",
  "../js/ui.js",
  "../assets/icons/favicon.svg",
  "../assets/images/placeholder.webp"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
