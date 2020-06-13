import vue from 'rollup-plugin-vue'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace';

export default [{
    input: 'src/index.ts',
    output: {
        format: 'umd',
        file: 'dist/bundle.js'
    },
    plugins: [
        resolve(),
        vue(),
        postcss(),
        // typescript(),
        // with @rollup/plugin-typescript
        typescript({
          include: [/\.tsx?$/, /\.vue\?.*?lang=ts/]
        }),
    ]
}, {
    input: 'src/index.ts',
    output: {
        format: 'esm',
        file: 'dist/bundle-esm.js'
    },
    plugins: [
        resolve(),
        vue(),
        postcss(),
        // typescript(),
        // with @rollup/plugin-typescript
        typescript({
          include: [/\.tsx?$/, /\.vue\?.*?lang=ts/]
        }),
        replace({
          'process.env.NODE_ENV': "'production'"
        }),
    ]
}, {
    input: 'src/Test.vue',
    output: {
        format: 'esm',
        file: 'dist/bundle-single-vue-esm.js'
    },
    plugins: [
        resolve(),
        vue(),
        postcss(),
        // typescript(),
        // with @rollup/plugin-typescript
        typescript({
          include: [/\.tsx?$/, /\.vue\?.*?lang=ts/]
        }),
        replace({
          'process.env.NODE_ENV': "'production'"
        }),
    ]
}, {
    input: 'src/component.ts',
    output: {
        format: 'esm',
        file: 'dist/bundle-component-esm.js'
    },
    plugins: [
        resolve(),
        vue(),
        postcss(),
        // typescript(),
        // with @rollup/plugin-typescript
        typescript({
          include: [/\.tsx?$/, /\.vue\?.*?lang=ts/]
        }),
        replace({
          'process.env.NODE_ENV': "'production'"
        }),
    ]
}]
