/* native [jump] [next] [timeout] */
/* debug */
import debug              from './plugins/debug/index.js'
import debugDialogBox     from './plugins/debug-dialog-box/index.js'
/* basic */
import assetsLoader       from './plugins/assets-loader/index.js'
import screen             from './plugins/screen/index.js'


import dialogBox          from './plugins/dialog-box/index.js'
import hands              from './plugins/hands/index.js'
import cloud              from './plugins/cloud/index.js'
import audio              from './plugins/audio/index.js'
import animate            from './plugins/animate/index.js'
import frame              from './plugins/frame/index.js'
import menu               from './plugins/menu/index.js'
import mainMenu           from './plugins/main-menu/index.js'
import term               from './plugins/term/index.js'
import show               from './plugins/show/index.js'
import showAuto           from './plugins/show-auto/index.js'
import scene              from './plugins/scene/index.js'
import soundHover         from './plugins/sound-hover/index.js'
import table              from './plugins/table/index.js'
import clear              from './plugins/clear/index.js'
import data               from './plugins/data/index.js'
import qa                 from './plugins/qa/index.js'
import chess              from './plugins/chess/index.js'
import setName            from './plugins/set-name/index.js'
import wiki               from './plugins/wiki/index.js'
import crossWord          from './plugins/crossword/index.js'
import test               from './plugins/test/index.js'
import slide              from './plugins/slide/index.js'
import content            from './plugins/content/index.js'
import voice              from './plugins/voice/index.js'
import html               from './plugins/html/index.js'
import discordLog         from './plugins/discord-log/index.js'
import statusBar          from './plugins/status-bar/index.js'
import mcPlayer           from './plugins/mc-player/index.js'
import paintBoard         from './plugins/paint-board/index.js'
import clipBoard          from './plugins/clipboard/index.js'
import video              from './plugins/video/index.js'

import typewrite          from './plugins/typewrite/index.js'
import area               from './plugins/area/index.js'
import selectWord         from './plugins/select-word/index.js'
import dragItems          from './plugins/drag-items/index.js'
import checkMC            from './plugins/mc-check/index.js'
import consoleVnjson      from './plugins/console/index.js'
import blocks             from './plugins/blocks/index.js'
import staticApp          from './plugins/static-app/index.js'
import HUD                from './plugins/hud/index.js'
import mcExec             from './plugins/mc-exec/index.js'
import dialogBoxInfo      from './plugins/dialog-box-info/index.js'

export default function(){

  if($vnjs.debug){
    this.use(debug)
    this.use(debugDialogBox)
  }
  this.use(assetsLoader)
  this.use(screen)

  /*components*/
  this.use(scene)
  this.use(show)
  this.use(showAuto)
  this.use(audio)
  this.use(frame)
  this.use(animate)
  this.use(menu)
  this.use(mainMenu)
  this.use(term)
  this.use(cloud)
  this.use(soundHover)
  this.use(table)
  this.use(clear)
  this.use(dialogBox)
  this.use(hands)
  this.use(data)
  this.use(qa)
  this.use(chess)
  this.use(setName)
  this.use(wiki)
  this.use(crossWord)
  this.use(test)
  this.use(slide)  
  this.use(content)
  this.use(voice)
  this.use(html)
  this.use(discordLog)
  this.use(statusBar)
  this.use(mcPlayer)
  this.use(paintBoard)
  this.use(clipBoard)
  this.use(video)
  this.use(typewrite)
  this.use(area)
  this.use(selectWord)
  this.use(dragItems)
  this.use(checkMC)
  this.use(consoleVnjson)
  this.use(blocks)
  this.use(staticApp)
  this.use(HUD)
  this.use(mcExec)
  this.use(dialogBoxInfo)
  this.on('next', ()=>{
      setTimeout(()=>this.next(), 10)
  })

  
}