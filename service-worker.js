if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"3f55b6986e1e114e0f601b808608af68","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"3f55b6986e1e114e0f601b808608af68","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"874fd88c227ce8213cc30158ea46c11b","url":"static/css/22.4247d24c.chunk.css"},{"revision":"17c389cf17272b648b44e76c5263a4fd","url":"static/js/0.ad9a7acd.chunk.js"},{"revision":"40dc3276b68aafadcc0cf32f15fe1115","url":"static/js/1.a996bdd1.chunk.js"},{"revision":"1e2d8bda169d572ec1b29248e63a9868","url":"static/js/12.335c408b.chunk.js"},{"revision":"3c557b45c0366b55d623f12f9fc95d85","url":"static/js/13.88bcac78.chunk.js"},{"revision":"09e9ab0fedd5e1cde5822665165480af","url":"static/js/14.5246f925.chunk.js"},{"revision":"2158afa938ce65b9535ab2612376d100","url":"static/js/15.e7ae42c9.chunk.js"},{"revision":"2eda117f2428b672888bc32c334914b6","url":"static/js/16.8694e312.chunk.js"},{"revision":"83854c3ab0b16a92ed2b3762e13d8faf","url":"static/js/17.483025af.chunk.js"},{"revision":"c709c3305a595726c28e5147211161d4","url":"static/js/18.24e97891.chunk.js"},{"revision":"b4f2536f05f6df94bbf457eefbaf209e","url":"static/js/19.8deb59b8.chunk.js"},{"revision":"1719be0aed4a647ef0a0b11dca617c68","url":"static/js/2.2d42af5e.chunk.js"},{"revision":"3e35be4a4913871459a9589ebc408632","url":"static/js/20.d08930df.chunk.js"},{"revision":"4377cee5ee16d77a43ff8e562f29f586","url":"static/js/21.4dfe6413.chunk.js"},{"revision":"d12122c2a2dc22a14e7a29bbebed88f8","url":"static/js/22.fdb74a24.chunk.js"},{"revision":"671aa9e3053dfbe72b71fe50a0060550","url":"static/js/23.2a4a4641.chunk.js"},{"revision":"4f4c11f12a39772ae90903e805e33299","url":"static/js/24.7544d23d.chunk.js"},{"revision":"ef1f006a40695899b4a4a10e680d7b39","url":"static/js/25.82ae13c4.chunk.js"},{"revision":"5ad538e94f6644ddafb510b383ec87a4","url":"static/js/26.e50c5add.chunk.js"},{"revision":"fb1dbc752ad000e016ebfc0cf4ac7b1e","url":"static/js/27.f619f22a.chunk.js"},{"revision":"a57f99411020ad9418a3dcb5e20f24dd","url":"static/js/28.e25afc5d.chunk.js"},{"revision":"14d5d3f7403d4c47e2ff772eabb1f047","url":"static/js/29.08874256.chunk.js"},{"revision":"463082aa674800b89671181663c0d84d","url":"static/js/3.ccfb77d9.chunk.js"},{"revision":"29a28751182924115a25ca6121be3212","url":"static/js/30.94079f5e.chunk.js"},{"revision":"fd747e60801ff1e1eaff793d2b88ebda","url":"static/js/31.8ae7389e.chunk.js"},{"revision":"17950661b437a3526fd0007a07d5cfdf","url":"static/js/32.09a520fa.chunk.js"},{"revision":"c1d83d236432e2fcdcffa9ff96b4e729","url":"static/js/33.dacfc8ac.chunk.js"},{"revision":"200749eaf56e2caf32d8544a8c53af24","url":"static/js/34.e219231e.chunk.js"},{"revision":"5bb2bf9c5b9cd6187406e70753826d4c","url":"static/js/35.c10a81c7.chunk.js"},{"revision":"099843ec54a492afeab2f710e904f41a","url":"static/js/36.3cbdfada.chunk.js"},{"revision":"0a872ac0718b8189a5fad502d287835f","url":"static/js/37.88cc5032.chunk.js"},{"revision":"8344c3764b376c940de0ab863c9d7ec1","url":"static/js/38.f49c0175.chunk.js"},{"revision":"3b263afe2bce708f333341c094931018","url":"static/js/39.03dfa6d5.chunk.js"},{"revision":"e0450f8439a75e23a0b36876cd4ed985","url":"static/js/4.fff38bbd.chunk.js"},{"revision":"396bf5aa3e11306bd2883cbab9344864","url":"static/js/40.eaa737f1.chunk.js"},{"revision":"3484ae9bf6123a5c7430f88d7568130d","url":"static/js/41.2b9169cb.chunk.js"},{"revision":"8ca7435ac5d4e03fb0dcb49f2e5e9c6d","url":"static/js/42.7bdb0b64.chunk.js"},{"revision":"2a9e78fe87743aa0628b4b009430870b","url":"static/js/43.1be26e32.chunk.js"},{"revision":"6fc923a948b31e576d8c44e6d2aa32fe","url":"static/js/44.ea356ea1.chunk.js"},{"revision":"74904f048f96d60835396923806d8ee7","url":"static/js/45.a57e3044.chunk.js"},{"revision":"834f9e4e920894ca288fd13a36902a64","url":"static/js/46.cbd2eb23.chunk.js"},{"revision":"63bc879f94d8e5de52f9aebe8ea89ce6","url":"static/js/47.f59ff91e.chunk.js"},{"revision":"3fe53582a410ab46a4503e9c4d26ae68","url":"static/js/5.13c10a2c.chunk.js"},{"revision":"3807bd3660042b16b6a131fb09d61747","url":"static/js/6.4f7bcb53.chunk.js"},{"revision":"666c1ba1cab90d93658d1527f90e1d89","url":"static/js/7.6f9a959e.chunk.js"},{"revision":"ba9fed54d75d937e49c6aaa06a84fd95","url":"static/js/8.c6e348fa.chunk.js"},{"revision":"60986cfe0b08e4dc9f82c10c78b6850a","url":"static/js/9.758369c0.chunk.js"},{"revision":"4afc997c993d5032e040e100ee83931c","url":"static/js/main.7f09bd76.chunk.js"},{"revision":"b242868b3463bd6c2b8ef3799d77e06f","url":"static/js/runtime-main.536bad02.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
