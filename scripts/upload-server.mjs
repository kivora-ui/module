import { Server } from '@tus/server';
import { FileStore } from '@tus/file-store';
import { mkdirSync } from 'node:fs';
const directory = new URL('../.uploads/', import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, '$1');
mkdirSync(directory, { recursive: true });
const server = new Server({ path: '/files', maxSize: 50 * 1024 * 1024,
  onIncomingRequest: async req => { if (req.method === 'PATCH' && process.env.UPLOAD_DEMO_DELAY_MS) await new Promise(resolve => setTimeout(resolve, Math.min(1000, Number(process.env.UPLOAD_DEMO_DELAY_MS) || 0))); },
  allowedOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  datastore: new FileStore({ directory }),
});
server.listen({ host: '127.0.0.1', port: 1080 });
console.log('Kivora demo uploads: http://127.0.0.1:1080/files');
