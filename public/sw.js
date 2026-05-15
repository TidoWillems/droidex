const CACHE = 'droidex-v1'

self.addEventListener('install', (event) => {
  self.skipWaiting()

  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll([
        '/droidex/',
        '/droidex/manifest.webmanifest',
      ])
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request)
    })
  )
})
