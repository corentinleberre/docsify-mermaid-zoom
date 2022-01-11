import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/index.js',
    plugins: [
      terser()
    ],
    output: {
      file: 'dist/docsify-mermaid-zoom.js',
      format: 'cjs'
    }
};