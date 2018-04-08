addEventListener('install', event => {
    skipWaiting();
  
    event.waitUntil(async function () {
      const cache = await caches.open(staticCacheName);
      await cache.addAll(toCache);
    }());
  });

addEventListener('activate', event => {
    event.waitUntil(async function () {
        const keys = await caches.keys();
        await Promise.all(
        keys.map(key => {
            if (key !== staticCacheName) return caches.delete(key);
        })
        );
    }());
});