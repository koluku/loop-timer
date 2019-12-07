importScripts('/loop-timer/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/loop-timer/_nuxt/4f672db555da8ab3212e.js",
    "revision": "e6a45102c6152f78450bcf7970924bba"
  },
  {
    "url": "/loop-timer/_nuxt/99469b22ff836abd9b34.js",
    "revision": "8a37e3a9de27da2dd6e48df1f42a50cc"
  },
  {
    "url": "/loop-timer/_nuxt/c2ada9f22877ef27202b.js",
    "revision": "b73f4ab6216bca24d5ca67a176f902d8"
  },
  {
    "url": "/loop-timer/_nuxt/dfd433ced184988085ba.js",
    "revision": "78c0f6cb13d447486ddc59a1a2440b90"
  },
  {
    "url": "/loop-timer/_nuxt/f604afca52a4f8c8f068.js",
    "revision": "4ab95af2feff05f2c3fdd903575a5c66"
  }
], {
  "cacheId": "loop-timer",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/loop-timer/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/loop-timer/.*'), workbox.strategies.networkFirst({}), 'GET')
