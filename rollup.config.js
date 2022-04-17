import styles           from 'rollup-plugin-styles';
import yaml             from '@rollup/plugin-yaml';
import { babel }        from '@rollup/plugin-babel';
import url              from '@rollup/plugin-url';
import copy             from 'rollup-plugin-copy';
import files            from 'rollup-plugin-import-file';
import scenesToJson     from 'scenes-to-json';
import chokidar         from 'chokidar';
import html             from 'rollup-plugin-html';
import fs               from 'fs';
import YAML             from 'yaml';



const config = YAML.parse(fs.readFileSync('./config.yaml', 'utf8'))

const production = false;

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
      presets: ['@babel/preset-env'],
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
    })
  ],

  watch: [
    `${config.src}/plugins`,
    `${config.src}/static`,
    `${config.src}/main.js`,
    `${config.src}/plugins.js`,
    `${config.src}/plugins/**/*.html`
  ]
};

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = config.port||9000;


/**
 * Собираем yaml - сцены
 */

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
          io.emit('yaml-error', err);
      }
      else{
        console.log('[ scenes building ]');
        io.emit('yaml-error', null);
      }
  }, basePath)

}

buildScenes();

chokidar.watch(`${config.src}/scenes`).on('change', (event, path) => {
  buildScenes();
});

/**
 * Подключаем раздачу статики и сокеты
 */

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});



http.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});