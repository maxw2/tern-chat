// rollup.config.js
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import terser from '@rollup/plugin-terser';
import { visualizer } from "rollup-plugin-visualizer";


export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/index.iife.js',
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
    typescript(),
    terser(),
    visualizer({
      filename: 'stats.html', // 生成的分析文件
      open: false, // 打包完成后自动打开报告
      template: 'treemap', // 使用的图表类型，默认为'treemap'
      gzipSize: true, // 显示gzip压缩后的大小
      brotliSize: true, // 显示brotli压缩后的大小
    })
  ],
})
