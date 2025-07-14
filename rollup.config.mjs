// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './index.ts',
  output: [{
    dir: 'dist',
    format: 'es'
  }, {
    file: 'dist/index.iife.js',
    format: 'iife',
    name: 'MyLibrary'
  }],
  // external: ['lit', 'lit/decorators.js'],
  plugins: [nodeResolve(), typescript()]
};