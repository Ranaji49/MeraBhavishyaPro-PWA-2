const CACHE = 'v1';
const FILES = [
  '/index.html',
  '/horoscope.html',
  '/kundli.html',
  '/matchmaking.html',<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
</script>

  '/tarot.html',
  '/numerology.html',
  '/ai-chat.html',
  '/style.css',
  '/offline.html',

  '/icon-72.png',
  '/icon-96.png',
  '/icon-128.png',
  '/icon-192.png',
  '/icon-384.png',
  '/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(r => r || fetch(e.request)
      .catch(() => caches.match('/offline.html')))
  );
});
