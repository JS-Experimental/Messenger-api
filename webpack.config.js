import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'api.bundle.js'
    },
    target: 'node',
    plugins: ["@babel/plugin-syntax-dynamic-import"],
    // externals: ['pg-hstore'],
};