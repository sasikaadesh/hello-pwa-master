window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://github.com/sasikaadesh/hello-pwa-master/sw.js');
  }
}
