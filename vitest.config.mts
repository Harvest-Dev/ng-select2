/// <reference types="vitest" />
import angular from '@analogjs/vite-plugin-angular';

import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [
        angular({
            tsconfig: 'projects/ng-select2-component/tsconfig.vitest.json',
        }) as any,
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['projects/ng-select2-component/src/test-setup.ts'],
        include: ['projects/ng-select2-component/**/*.vitest.ts'],
        css: true,
        reporters: ['default'],
        coverage: {
            provider: 'v8',
            include: ['projects/ng-select2-component/src/lib/**/*.ts'],
            exclude: ['**/*.spec.ts', '**/*.vitest.ts', '**/test-setup.ts', '**/public_api.ts', '**/index.ts'],
        },
    },
    resolve: {
        alias: {
            'ng-select2-component': 'projects/ng-select2-component/src/public_api',
        },
    },
});
