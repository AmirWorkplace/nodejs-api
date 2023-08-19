import path from 'path';

const pathname = new URL(import.meta.url).pathname;
export const rootDir = path.resolve(pathname, '../../');
export const publicPath = path.join(rootDir, 'public');
