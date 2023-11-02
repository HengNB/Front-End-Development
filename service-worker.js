
const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'Team.html',
  'assets/css/style.css',
  'MyWork/CSS/Team.css',
  'MyWork/CSS/img/9-SCENE.SVG',
  'assets/vendor/bootstrap/css/bootstrap.min.css',
  'assets/vendor/bootstrap/css/bootstrap.min.css.map',
  'assets/vendor/bootstrap/css/bootstrap.css.map',
  'assets/vendor/bootstrap/css/bootstrap-grid.min.css',
  'assets/vendor/bootstrap/css/bootstrap-grid.css', 
  'assets/vendor/bootstrap/css/bootstrap-grid.min.css.map',
  'assets/vendor/bootstrap/css/bootstrap-grid.css.map',
  'assets/vendor/bootstrap/css/bootstrap-reboot.min.css',
  'assets/vendor/bootstrap/css/bootstrap-reboot.css', 
  'assets/vendor/bootstrap/css/bootstrap-reboot.min.css.map',
  'assets/vendor/bootstrap/css/bootstrap-reboot.css.map',
  'assets/vendor/remixicon/remixicon.css',
  'assets/vendor/owl.carousel/assets/owl.carousel.css',
  'assets/vendor/owl.carousel/assets/owl.carousel.min.css',
  'assets/vendor/owl.carousel/assets/owl.theme.default.css',
  'assets/vendor/owl.carousel/assets/owl.theme.default.min.css',
  'assets/vendor/owl.carousel/assets/owl.theme.green.css',
  'assets/vendor/owl.carousel/assets/owl.theme.green.min.css',
  'assets/vendor/animate.css/animate.min.css',
  'assets/vendor/animate.css/animate.css',
  'assets/vendor/animate.css/animate.compat.css',
  'assets/vendor/aos/aos.css',
  'Image/Founder/Jimmy.jpg',
  'Image/img/5-SCENE.svg',
  'Image/img/img-one.png',
  'Image/img/img-two.png',
  'Image/img/img-three.png',
  'Image/Tutor/Aaditya.png',
  'Image/Tutor/Anthony.jpg',
  'Image/Tutor/Chai.jpg',
  'Image/Tutor/James.jpg',
  'Image/Tutor/Jonas.jpg',
  'Image/Tutor/Kaith.jpg',
  'Image/Tutor/Sofia.jpg',
  'Image/Tutor/William.jpg',
  'Image/Tutor/Wong.jpg',
  'https://cdn.lineicons.com/2.0/LineIcons.css'
  

  
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});
