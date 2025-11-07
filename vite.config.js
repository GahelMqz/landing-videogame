import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

import { VitePWA } from 'vite-plugin-pwa';

const pwaConfig = {
    registerType: 'autoUpdate', // El Service Worker se registra y actualiza automáticamente
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'assets/*'], // Añade todas las imágenes y recursos estáticos
    manifest: {
        name: 'Mi Aplicación Fullpage PWA',
        short_name: 'MiPWA',
        description: 'Una aplicación de scroll completo con modo offline.',
        theme_color: '#ffffff', // Color primario de la app
        icons: [ // Define los iconos necesarios
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable' // Para Android, icono adaptable
            }
        ]
    },
    // CLAVE PARA OFFLINE: Configuración de caché
    workbox: {
        // Rutas que siempre deben ser precargadas (CSS, JS, index.html)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        // Estrategia para las páginas que no están precargadas
        runtimeCaching: [
            {
                urlPattern: ({ url }) => url.origin === self.location.origin,
                handler: 'NetworkFirst', // Intenta red, si falla, usa caché (ideal para el contenido principal)
                options: {
                    cacheName: 'app-runtime-cache',
                    expiration: {
                        maxEntries: 10,
                        maxAgeSeconds: 60 * 60 * 24 * 7, // 1 semana
                    },
                },
            },
        ],
    },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

})
