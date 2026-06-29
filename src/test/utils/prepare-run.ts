import { mkdir, rm } from 'fs/promises';

await rm('reports', { recursive: true, force: true });
await rm('test-results', { recursive: true, force: true });

await mkdir('reports', { recursive: true });
await mkdir('test-results/screenshots', { recursive: true });
await mkdir('test-results/trace', { recursive: true });