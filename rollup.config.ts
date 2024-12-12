// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const config = [
  {
    input: {
      main: 'src/index.ts',
      post: 'post/index.ts',
      pre: 'pre/index.ts'
    },
    output: {
      esModule: true,
      dir: 'dist',
      format: 'es',
      sourcemap: true
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  }
]

export default config
