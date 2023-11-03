import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: { // Ustawienie ścieżek absolutnych. Trzeba jeszcze dodać jsconfig.json z kodem {"compilerOptions":{"baseUrl": ".","paths": {"src/*": ["./src/*"]}}}
        alias: {
            src: "/src",
        },
    },
})
