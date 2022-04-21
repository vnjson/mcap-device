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

  const src = `${config.src}/scenes`;
  const dist = `./public/scenes`;

  scenesToJson(src, dist, (err, sceneName, labelName)=>{
      console.clear();
      if(err){
          console.log("\x1b[2m"+err.reason+"\x1b[33m");
          console.log("\x1b[31m"+sceneName+'/'+ labelName+"\x1b[0m");
          console.log('\x1b[36mline', err.mark.line, 'column', err.mark.column+"\x1b[0m");
          console.log("\x1b[33m"+err.mark.snippet + "\x1b[0m");
          io.emit('yaml-error', err, sceneName, labelName);
      }
      else{
        console.log('\x1b[35m[\x1b[36m scenes build\x1b[35m ] \x1b[0m')
        io.emit('yaml-error', null);
      }
  })

}

buildScenes();
/**
 * Наблюдаю за изменениями в каталоге /scenes
 */
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