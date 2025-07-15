// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: './index.ts',
  output: [
    {
      dir: 'dist',
      format: 'umd',
      name: 'li'
    }
  ],
  // external: ['lit', 'lit/decorators.js'],
  plugins: [commonjs(), nodeResolve(), typescript()],
})
