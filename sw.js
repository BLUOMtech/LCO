self.addEventListener("install", e => {
  self.skipWaiting();
  console.log("Service Worker installed");
});

self.addEventListener("fetch", e => {
  // optional: add caching here
});
