import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

const input = 'src/index.ts'

export default defineConfig([
  {
    input,
    output: [
      {
        file: 'dist/index.mjs',
        format: 'esm',
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
    ],
    plugins: [
      alias(),
      resolve({
        preferBuiltins: true,
      }),
      json(),
      commonjs(),
      esbuild(),
      terser(),
    ],
  },
  {
    input,
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
])
