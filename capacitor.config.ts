import type { CapacitorConfig } from '@capacitor/cli'

/**
 * SOM App — shell nativo (Capacitor) da Área do Cliente da Maracatu Digital.
 *
 * Abre o SOM ao vivo (server.url) direto na Área do Cliente. Carregar o site ao
 * vivo mantém o app sempre atualizado; só geramos build novo quando muda algo
 * nativo (permissões/ícone/config). O login já direciona o conteúdo: cliente
 * comum → Área do Cliente; candidato → Central de Campanha. Câmera (selfie de
 * identidade) e localização usam as APIs web do WKWebView, liberadas pelas
 * NSCameraUsageDescription / NSLocationWhenInUseUsageDescription do Info.plist.
 */
const config: CapacitorConfig = {
  appId: 'com.maracatudigital.som',
  appName: 'Maracatu',
  webDir: 'mobile-shell',
  server: {
    url: 'https://alfer-svg.github.io/som-frontend/cliente.html',
    iosScheme: 'https',
    cleartext: false,
  },
  ios: {
    // permite que a câmera (getUserMedia) rode inline no WKWebView
    limitsNavigationsToAppBoundDomains: false,
  },
  plugins: {
    Keyboard: {
      resize: 'body' as any,
      resizeOnFullScreen: true,
    },
  },
}

export default config
