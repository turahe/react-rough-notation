const resolve = require('@rollup/plugin-node-resolve')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const commonJS = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')

const pkg = require('./package.json')

module.exports = {
  external: ['rough-notation'],
  input: 'src/index.ts',
  strictDeprecations: true,
  output: [
    {
      exports: 'named',
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      strict: false,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal({}),
    resolve(),
    commonJS({
      include: 'node_modules/**',
    }),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      outDir: 'dist',
      sourceMap: true,
    }),
  ],
}
