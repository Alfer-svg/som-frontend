// Service Worker do SOM — Web Push (notificação do sistema mesmo com a aba fechada).
// Escopo = pasta onde está o app (no GitHub Pages, /som-frontend/).
const ICON = 'assets/icon.png?v=7';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

// Chegou um push do backend → mostra a notificação do sistema.
self.addEventListener('push', (event) => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; }
  catch { d = { title: 'SOM', body: (event.data && event.data.text()) || '' }; }
  const title = d.title || 'Nova mensagem';
  const options = {
    body: d.body || '',
    icon: ICON,
    badge: ICON,
    tag: d.cardId ? ('som-card-' + d.cardId) : 'som',
    renotify: true,
    data: { cardId: d.cardId || '' },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Clicou na notificação → foca a aba do SOM (ou abre uma) e manda abrir o card.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const cardId = (event.notification.data && event.notification.data.cardId) || '';
  const base = new URL('./', self.location).href; // .../som-frontend/
  const target = base + (cardId ? ('?card=' + encodeURIComponent(cardId)) : '');
  event.waitUntil((async () => {
    const abertos = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of abertos) {
      if (c.url.startsWith(base) && 'focus' in c) {
        await c.focus();
        c.postMessage({ tipo: 'abrir-card', cardId });
        return;
      }
    }
    if (clients.openWindow) await clients.openWindow(target);
  })());
});
