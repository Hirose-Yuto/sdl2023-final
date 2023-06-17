import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig((opt) => {
    return {
        root: 'src',
        build: {
            outDir: '../dist',
            rollupOptions: {
                input: {
                    background: resolve(__dirname, 'src/background.ts'),
                    content_script: resolve(__dirname, 'src/content-script.ts'),
                    popup: resolve(__dirname, 'src/popup.ts'),
                    popup_html: resolve(__dirname, 'src/popup.html')
                },
                output: {
                    entryFileNames: '[name].js',
                },
            },
        },
    };
});