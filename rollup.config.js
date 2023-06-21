// import our third party plugins
import VuePlugin from 'rollup-plugin-vue'
import pkg from './package.json' assert {type: "json"}// import our package.json file to re-use the naming

export default {
    // this is the file containing all our exported components/functions
    input: 'src/index.js',
    // this is an array of outputted formats
    output: [
        {
            file: pkg.module, // the name of our esm library
            format: 'umd', // the format of choice
            sourcemap: false, // ask rollup to include sourcemaps
            globals: {
                vue: 'Vue'
            }
        }
    ],
    // this is an array of the plugins that we are including
    plugins: [
        VuePlugin()
    ],
    // ask rollup to not bundle Vue in the library
    external: ['vue']
}