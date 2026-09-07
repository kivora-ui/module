import { copyFileSync } from 'node:fs';
copyFileSync(new URL('../node_modules/@bwip-js/generic/LICENSE', import.meta.url), new URL('../dist/LICENSE.bwip-js', import.meta.url));
