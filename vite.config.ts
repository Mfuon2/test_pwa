import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['v-list-recognize-title'].includes(tag)
        }
      }
    }),
    vuetify({
      autoImport: true
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest:
        {
          "name": "UnitTrust",
          "short_name": "aamc",
          "start_url": "/",
          "display": "standalone",
          "background_color": "#ffffff",
          "lang": "en",
          "description": "aamc application",
          "icons": [
            {
              "src": "/aamc-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "/aamc-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
            },
            {
              "src": "/aamc-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
            },
            {
              "src": "/windows11/SmallTile.scale-100.png",
              "sizes": "71x71"
            },
            {
              "src": "/windows11/SmallTile.scale-125.png",
              "sizes": "89x89"
            },
            {
              "src": "/windows11/SmallTile.scale-150.png",
              "sizes": "107x107"
            },
            {
              "src": "/windows11/SmallTile.scale-200.png",
              "sizes": "142x142"
            },
            {
              "src": "/windows11/SmallTile.scale-400.png",
              "sizes": "284x284"
            },
            {
              "src": "/windows11/Square150x150Logo.scale-100.png",
              "sizes": "150x150"
            },
            {
              "src": "/windows11/Square150x150Logo.scale-125.png",
              "sizes": "188x188"
            },
            {
              "src": "/windows11/Square150x150Logo.scale-150.png",
              "sizes": "225x225"
            },
            {
              "src": "/windows11/Square150x150Logo.scale-200.png",
              "sizes": "300x300"
            },
            {
              "src": "/windows11/Square150x150Logo.scale-400.png",
              "sizes": "600x600"
            },
            {
              "src": "/windows11/Wide310x150Logo.scale-100.png",
              "sizes": "310x150"
            },
            {
              "src": "/windows11/Wide310x150Logo.scale-125.png",
              "sizes": "388x188"
            },
            {
              "src": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
              "sizes": "256x256"
            },
            {
              "src": "/android/android-launchericon-512-512.png",
              "sizes": "512x512"
            },
            {
              "src": "/android/android-launchericon-192-192.png",
              "sizes": "192x192"
            },
            {
              "src": "/android/android-launchericon-144-144.png",
              "sizes": "144x144"
            },
            {
              "src": "/android/android-launchericon-96-96.png",
              "sizes": "96x96"
            },
            {
              "src": "/android/android-launchericon-72-72.png",
              "sizes": "72x72"
            },
            {
              "src": "/android/android-launchericon-48-48.png",
              "sizes": "48x48"
            },
            {
              "src": "/ios/16.png",
              "sizes": "16x16"
            },
            {
              "src": "/ios/20.png",
              "sizes": "20x20"
            },
            {
              "src": "/ios/29.png",
              "sizes": "29x29"
            },
            {
              "src": "/ios/32.png",
              "sizes": "32x32"
            },
            {
              "src": "/ios/40.png",
              "sizes": "40x40"
            },
            {
              "src": "/ios/50.png",
              "sizes": "50x50"
            },
            {
              "src": "/ios/57.png",
              "sizes": "57x57"
            },
            {
              "src": "/ios/58.png",
              "sizes": "58x58"
            },
            {
              "src": "/ios/60.png",
              "sizes": "60x60"
            },
            {
              "src": "/ios/64.png",
              "sizes": "64x64"
            },
            {
              "src": "/ios/72.png",
              "sizes": "72x72"
            },
            {
              "src": "/ios/76.png",
              "sizes": "76x76"
            },
            {
              "src": "/ios/80.png",
              "sizes": "80x80"
            },
            {
              "src": "/ios/87.png",
              "sizes": "87x87"
            },
            {
              "src": "/ios/100.png",
              "sizes": "100x100"
            },
            {
              "src": "/ios/114.png",
              "sizes": "114x114"
            },
            {
              "src": "/ios/120.png",
              "sizes": "120x120"
            },
            {
              "src": "/ios/128.png",
              "sizes": "128x128"
            },
            {
              "src": "/ios/144.png",
              "sizes": "144x144"
            },
            {
              "src": "/ios/152.png",
              "sizes": "152x152"
            },
            {
              "src": "/ios/167.png",
              "sizes": "167x167"
            },
            {
              "src": "/ios/180.png",
              "sizes": "180x180"
            },
            {
              "src": "/ios/192.png",
              "sizes": "192x192"
            },
            {
              "src": "/ios/256.png",
              "sizes": "256x256"
            },
            {
              "src": "/ios/512.png",
              "sizes": "512x512"
            },
            {
              "src": "/ios/1024.png",
              "sizes": "1024x1024"
            }
          ],
          "theme_color": "#114cac",
          "id": "com.apollo.co.ke",
          "orientation": "portrait",
          "display_override": [
            "standalone"
          ],
          "categories": [
            "books",
            "business",
            "education",
            "entertainment",
            "finance",
            "fitness",
            "lifestyle",
            "magazines",
            "medical"
          ]
        }
      ,
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/api'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          }
        ]
      }
    })
  ],
  base: '/',
  server: {
    port: 5173, // or any other port you want to use
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  build: {
    chunkSizeWarningLimit: 1024 * 1024 // Set the limit to 1 MB
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue']
  }
});
