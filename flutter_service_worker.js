'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "95bf28686d2ab1559e5554b6b66bf40b",
"assets/AssetManifest.bin.json": "c21a15e4b7596bbd17ae53a8dbace415",
"assets/AssetManifest.json": "fd63241ac92b56cd3a4196589e1ecb05",
"assets/assets/data/about_libraries.xml": "f51017a7ac78fe713bf5d06073dfdf77",
"assets/assets/images/additional.svg": "6425c0d4a769a93409051323f35cc1d5",
"assets/assets/images/agreement.svg": "1a11b521da3a8ff72562df191e4fedaf",
"assets/assets/images/android.svg": "bd89b93f8dbd8198ab84a1f827dedf28",
"assets/assets/images/applications.svg": "29d348abcf117d6fd22933ffe0eb740c",
"assets/assets/images/app_icon.png": "de4c2472c56635bfb0ecb0520b57d1b9",
"assets/assets/images/app_icon_android.png": "b8003373ea2b1e5b2b242b4c9717a5c3",
"assets/assets/images/attention.svg": "ed633aac965fe5d47c68699ba2b24c34",
"assets/assets/images/changelog.svg": "8baf349cf34f94d38522c01c96ca414d",
"assets/assets/images/close.svg": "013398c0bf60acda0ea9b7ab0edd38c9",
"assets/assets/images/code.svg": "893587c395a7d9bef408ac149442dccb",
"assets/assets/images/education.svg": "76e039cca63ab790a49c5edebae397dd",
"assets/assets/images/email.svg": "f32d2f3197b2c9e5673a25d3bef479bf",
"assets/assets/images/error.svg": "6ea65ab12bb4a0c2e767cc83842fff5e",
"assets/assets/images/facebook.svg": "c509a4c46008514b5a5084d2596c99e4",
"assets/assets/images/get_app.svg": "82a14089e7710706318010dc009345d4",
"assets/assets/images/google_play.svg": "d9232d58f90c622d1e7c1ac49c067163",
"assets/assets/images/help.svg": "49a4a7578472cb476a44e77ec4b0abe3",
"assets/assets/images/info.svg": "e6f3903f6a68e6685aa1a0f8b17d5791",
"assets/assets/images/joystick.svg": "dd13c78075bd873fc5a7275cc02ddd07",
"assets/assets/images/lib_dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/images/lib_flame.svg": "8aee73a04ac172f9fc0efa5b5070a0c8",
"assets/assets/images/lib_flutter.svg": "ffb1ad68e663914e6ee80e64e490c521",
"assets/assets/images/main-icon.svg": "a5588bb92faf7532108e410b73329312",
"assets/assets/images/menu.svg": "74f0d35a96899475379ab2670dd273fd",
"assets/assets/images/microsoft_store.svg": "7f40b3720ac8ab83af14bf4417acbb35",
"assets/assets/images/multimedia.svg": "13e1758243d951a14aba75cfd8322225",
"assets/assets/images/music_off.svg": "d84abd8b71f57fa2bf19780bef5f7fed",
"assets/assets/images/music_on.svg": "8dc8412ef2f34445d3d37e839818c6e7",
"assets/assets/images/paint-brush.svg": "7ce851264803820cfe0c74c48a248900",
"assets/assets/images/play-video.svg": "1a622f7ecb8bd5afb01815efdca66262",
"assets/assets/images/programmer.svg": "28de1f29801b07fe6ff74874faeeb63b",
"assets/assets/images/settings.svg": "dca161b4f2ca1f17560c4b50752ae7af",
"assets/assets/images/shield.svg": "5a46ab3adb26e6f88caa89b5498ceeb9",
"assets/assets/images/smartphone.svg": "04580288eea19b1e9ff2faef40b99330",
"assets/assets/images/temp_education.png": "2ea6505cf6962b9959fbd927bf0d1ef9",
"assets/assets/images/temp_resources.png": "1ccfa22247a694a69b6d1126be3448ff",
"assets/assets/images/thank-you.svg": "5cf814f59c47bd6546e26f811765f21b",
"assets/assets/images/twitter.svg": "232c36e0e377e32fbb20a34ff902fe55",
"assets/assets/images/unlock.svg": "36fed6e0f5138a246cad22187db20240",
"assets/assets/images/warning.svg": "780f8c6a32ee134cb747a1f9e80b3077",
"assets/assets/images/windows.svg": "c9ff169f516405a33bd3618063ee8431",
"assets/assets/images/world-wide-web.svg": "8ad0a0e20877e04e3beee98bc431e7a1",
"assets/assets/images/youtube.svg": "ecc3e083cc992259af28a7a7c40b6df8",
"assets/CHANGELOG.md": "aff006b2ca3b854878c8b26d956fc8fd",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "13815949007b0181eb6e8a346b42ea79",
"assets/NOTICES": "1a16312258c7e0361ceacba1d0f5fd08",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "095308346bad2bbc80d2432f30404440",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "f635d2d89463d7a9ca5f0248bec987d0",
"icons/Icon-192.png": "0cc28298fb4703fefe18b998d23212ff",
"icons/Icon-512.png": "66f164b9a93867da1116b158f8af9e48",
"icons/Icon-maskable-192.png": "0cc28298fb4703fefe18b998d23212ff",
"icons/Icon-maskable-512.png": "66f164b9a93867da1116b158f8af9e48",
"index.html": "61a2e360afa0fcacdb20a3917f1ba8c4",
"/": "61a2e360afa0fcacdb20a3917f1ba8c4",
"main.dart.js": "f771381e5b2605605ff581c11556a2a8",
"manifest.json": "35fb3be9666483b0a0fa51e40db216e0",
"version.json": "1b3a28a62c4ee4f47d95e6fee3112418"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
