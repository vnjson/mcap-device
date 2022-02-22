import serve            from 'rollup-plugin-serve'
import styles           from 'rollup-plugin-styles'
import yaml             from '@rollup/plugin-yaml'
import { babel }        from '@rollup/plugin-babel'
import url              from '@rollup/plugin-url'
import copy             from 'rollup-plugin-copy'
import files            from 'rollup-plugin-import-file'
import scenesToJson     from 'scenes-to-json'
import chokidar         from 'chokidar'
import html             from 'rollup-plugin-html'
import fs               from 'fs'
import YAML             from 'yaml'


const config = YAML.parse(fs.readFileSync('./config.yaml', 'utf8'))


export default {
  input: `${config.src}/main.js`,
  output: {
    file: `public/js/app.js`,
    name: 'app',
    format: 'iife',
    sourcemap: false
  },
  plugins: [
    yaml(),
    html(),
    styles(),
    url({
      fileName: '[hash][extname]',
      destDir: `./public/assets`
    }),
    babel({ 
      babelHelpers: 'bundled',
      //presets: ['env'],
      plugins: [
            ["babel-plugin-root-import", { "rootPathSuffix": `${config.src}`}]
      ]
    }),
    copy({
      targets: [{ src: `${config.src}/static/*`, dest: `public/` }]
    }),

    files({
      output: `public/assets`,
      extensions: /\.(waw|ogg|mp3)$/,
      hash: false,
    }),

    serve({
      contentBase:[`./public/`],
      port: config.port||9000
    }),

  ],

  watch: [
  	`${config.src}/plugins`,
    `${config.src}/static`,
    `${config.src}/main.js`,
    `${config.src}/plugins.js`,
    `${config.src}/plugins/**/*.html`
  ]
};


function buildScenes (){

  let src = `${config.src}/scenes`
  let dist = `./public/scenes`
  let basePath = `./scenes`

  scenesToJson(src, dist, (err, data)=>{
      console.clear()
      if(err){
          console.dir(err.reason);
          console.log('line', err.mark.line, 'column', err.mark.column)
          console.log(err.mark.snippet);
      }
      else{
        console.log('[ scenes building ]')
      }
  }, basePath)

}

buildScenes()

chokidar.watch(`${config.src}/scenes`).on('change', (event, path) => {
  buildScenes()
});


