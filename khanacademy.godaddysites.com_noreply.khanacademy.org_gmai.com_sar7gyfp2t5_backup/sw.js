"use strict";

const CACHE_NAME = 'khanacademy.godaddysites.com-1584974669428';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/more","/other","/donate"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/5c2b28b7ec7cfd8c/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/e4583986ffca917f/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/528b44326832e29c/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/d9787835c3387738/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/15b5147a8b4dee57/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CIntersectionObserver%2CIntl.~locale.en-US","//img1.wsimg.com/blobby/go/gpub/2a4f73fcd74c5421/script.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.57.1.js","//img1.wsimg.com/blobby/go/gpub/1398cf8a54b58329/script.js","//img1.wsimg.com/blobby/go/gpub/1b5a00162defe865/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/b1e44eaf8cb69e64/script.js","//img1.wsimg.com/blobby/go/gpub/60b25d5722ed2be1/script.js","//img1.wsimg.com/blobby/go/gpub/2af54f8ad0dd474a/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/d2c113fedb4aecdd/script.js","//img1.wsimg.com/blobby/go/gpub/1abb539582913de5/script.js","//img1.wsimg.com/blobby/go/gpub/70b94c42ef48f212/script.js","//img1.wsimg.com/blobby/go/gpub/a721888b3234242d/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/ce603ae7861aa2e/script.js","//fonts.googleapis.com/css?family=Lato:400,700","//fonts.googleapis.com/css?family=Lusitana:400,700","//fonts.googleapis.com/css?family=Raleway:700,400","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/a397ce58f90046d3/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/5ad87d31da83280f/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/a635ad6cb054bba1/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/831ce9d3bda4fc6c/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/63dbbfdc67348aa8/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/6938428e8ad8a60a/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/458664d20259ee86/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/98aef7820f2996af/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/edf6232aae55b40a/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/781ba2fe07e6861d/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/17d497de71510d7c/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/7330e636faf63c82/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/dea64c01b7f7e1a7/styles.css","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/181008a25db0b8b4/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/7a8f88abe85e0693/script.js","//img1.wsimg.com/blobby/go/f524f10b-626d-4ed1-8169-652587b4d1ea/gpub/373c9c33b38f8703/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://f524f10b-626d-4ed1-8169-652587b4d1ea.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect"]');
const networkOnlyUrlsRegex = JSON.parse('["khanacademy.godaddysites.com/m/api/.*","khanacademy.godaddysites.com(?:/.*)?/ola/services/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/f524f10b-626d-4ed1-8169-652587b4d1ea/feed/post/","https://blog.apps.secureserver.net/v1/website/f524f10b-626d-4ed1-8169-652587b4d1ea/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["khanacademy.godaddysites.com(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets);
  });
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
  self.skipWaiting();
  event.waitUntil(preCacheResources().catch(function (installErr) {
    console.log('sw: precaching failed with: ', installErr);
  }));
});

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE_NAME;
    }).map(function (key) {
      return caches.delete(key);
    }));
  });
}

self.addEventListener('activate', function (event) {
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
  event.waitUntil(clearOldCache().then(function () {
    clients.claim(); // eslint-disable-line no-undef
  }));
});

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true;
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function isNetworkThenCacheRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
    return true;
  }

  if (networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(fetch(event.request).then(function (networkResponse) {
    return caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function () {
    // network failed, try to serve a cached response or offline page if there is one
    return caches.match(event.request);
  }));
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (networkResponse) {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    });
  }).catch(function (err) {
    // TODO: respond with `offline.html` as the final fallback for page requests
    // and use appropriate response for other cases
    return err;
  }));
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url);

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event);
  }

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event);
  }

  return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);