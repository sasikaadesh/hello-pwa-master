var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  'https://github.com/sasikaadesh/hello-pwa-master/index.html',
  'https://github.com/sasikaadesh/hello-pwa-master/css/style.css',
  'https://github.com/sasikaadesh/hello-pwa-master/js/main.js'
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
