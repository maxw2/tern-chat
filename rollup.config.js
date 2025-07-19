// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: './index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',

    },
    {
      dir: 'dist',
      format: 'iife',
      name: 'tern'
    }
  ],
  // external: ['lit', 'lit/decorators.js'],
  plugins: [
    del({ targets: 'dist' }),
    commonjs(),
    nodeResolve({
      extensions: ['.js', '.ts']
    }),
    typescript()
  ],
})
