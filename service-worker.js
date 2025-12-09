const CACHE='v1';
const FILES=[
 'index.html','horoscope.html','kundli.html','matchmaking.html','tarot.html',
 'numerology.html','ai-chat.html','style.css','offline.html',
 'assets/icons/icon-72.png','assets/icons/icon-96.png','assets/icons/icon-128.png',
 'assets/icons/icon-192.png','assets/icons/icon-384.png','assets/icons/icon-512.png'
];
self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});
self.addEventListener('fetch',e=>{
 e.respondWith(caches.match(e.request)
   .then(r=>r||fetch(e.request).catch(()=>caches.match('offline.html'))));
});