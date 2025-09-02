// J3T-AGENCY Service Worker - Optimisé SEO 2025
// Version: 2.0.0 - Compatible avec les dernières mises à jour Google

const CACHE_NAME = 'j3t-agency-cache-v2.0.0';
const CACHE_STATIC_NAME = 'j3t-agency-static-v2.0.0';
const CACHE_DYNAMIC_NAME = 'j3t-agency-dynamic-v2.0.0';

// Ressources critiques à mettre en cache (optimisées pour Core Web Vitals)
const STATIC_ASSETS = [
  '/',
  '/site.webmanifest',
  '/favicon.ico',
  '/robots.txt',

  // Pages principales
  '/about-us',
  '/services',
  '/realisations',
  '/contact',
];

// URLs à ne jamais mettre en cache
const NO_CACHE_URLS = [
  '/api/',
  '/admin/',
  '/analytics/',
  'google-analytics.com',
  'googletagmanager.com',
  'facebook.com',
  'twitter.com',
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installation en cours...');

  event.waitUntil(
    Promise.all([
      // Cache statique
      caches.open(CACHE_STATIC_NAME).then((cache) => {
        console.log('[SW] Mise en cache des ressources statiques');
        return cache.addAll(STATIC_ASSETS);
      }),

      // Préchargement des ressources critiques
      self.skipWaiting(),
    ]).catch((error) => {
      console.error("[SW] Erreur lors de l'installation:", error);
    })
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation en cours...');

  event.waitUntil(
    Promise.all([
      // Nettoyage des anciens caches
      caches.keys().then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName !== CACHE_STATIC_NAME &&
                cacheName !== CACHE_DYNAMIC_NAME &&
                cacheName.startsWith('j3t-agency-')
            )
            .map((cacheName) => {
              console.log('[SW] Suppression ancien cache:', cacheName);
              return caches.delete(cacheName);
            })
        )
      ),

      // Prise de contrôle immédiate
      self.clients.claim(),
    ])
  );
});

// Stratégie de mise en cache intelligente
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignorer les URLs de tracking et API
  if (NO_CACHE_URLS.some((url) => event.request.url.includes(url))) {
    return;
  }

  // Stratégie Cache First pour les ressources statiques
  if (STATIC_ASSETS.includes(requestUrl.pathname)) {
    event.respondWith(cacheFirstStrategy(event.request, CACHE_STATIC_NAME));
    return;
  }

  // Stratégie Network First pour les pages HTML
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstStrategy(event.request));
    return;
  }

  // Stratégie Cache First pour les autres ressources
  event.respondWith(cacheFirstStrategy(event.request, CACHE_DYNAMIC_NAME));
});

// Cache First Strategy (pour les ressources statiques)
async function cacheFirstStrategy(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      // Mise à jour en arrière-plan pour les ressources critiques
      if (STATIC_ASSETS.includes(new URL(request.url).pathname)) {
        fetch(request)
          .then(
            (response) => response.ok && cache.put(request, response.clone())
          )
          .catch(() => {}); // Ignorer les erreurs silencieusement
      }
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Erreur Cache First:', error);
    return new Response('Erreur de réseau', { status: 408 });
  }
}

// Network First Strategy (pour les pages HTML)
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await Promise.race([
      fetch(request),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 3000)
      ),
    ]);

    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_DYNAMIC_NAME);
      await cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', error.message);

    const cache = await caches.open(CACHE_DYNAMIC_NAME);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // Page offline de fallback
    if (request.headers.get('accept')?.includes('text/html')) {
      const offlineResponse = await cache.match('/offline.html');
      return (
        offlineResponse ||
        new Response('Page hors ligne non disponible', {
          status: 503,
          statusText: 'Service non disponible',
        })
      );
    }

    return new Response('Ressource non disponible', { status: 503 });
  }
}

// Background Sync pour les formulaires (optionnel)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(handleFormSubmission());
  }
});

// Gestion des formulaires en arrière-plan
async function handleFormSubmission() {
  try {
    // Récupérer les données du formulaire depuis IndexedDB
    // et les envoyer quand la connexion est rétablie
    console.log('[SW] Synchronisation des formulaires en attente');
  } catch (error) {
    console.error('[SW] Erreur sync formulaire:', error);
  }
}

// Push notifications (optionnel pour l'engagement)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      vibrate: [100, 50, 100],
      actions: [
        {
          action: 'open',
          title: 'Voir',
          icon: '/icons/action-open.png',
        },
      ],
    };

    event.waitUntil(self.registration.showNotification('J3T-AGENCY', options));
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_MARK') {
    // Envoi des métriques de performance si nécessaire
    console.log('[SW] Performance mark:', event.data.mark);
  }
});
