import "./style.css";
import tpl from "./tpl.html";

const $tpl = $(tpl);
let TEST = null;
let answers = [];

let qIndex = 0;
let _trueAnswer = 0;
let _falseAnswer = 0;

/**
 * STYLES
 */
 function reset (){
  qIndex = 0;
  answers = [];
  _trueAnswer = 0;
  _falseAnswer = 0;
  $vnjs.current.data.trueAnswer = 0
  $vnjs.current.data.falseAnswer = 0
  $('.vnjson__test').css('background-color', 'wheat')
  $('.vnjson__variants-item').css('background-color','unset')
  $('.vnjson__test-next-btn').css('background-color', 'black')
  $('.vnjson__variants-item_success').css('background-color', 'unset')
  $('.vnjson__variants-item_fail').css('background-color', 'unset')
  $('.vnjson__test-result').css('background-color', 'wheat')
}

function applyStyles (){

  $('.vnjson__test').css('background-color', TEST['color-background'])
  $('.vnjson__variants-item').css('background-color', TEST['color-item'])
  $('.vnjson__test-next-btn').css('background-color', TEST['color-item'])
  $('.vnjson__variants-item_success').css('background-color', TEST['color-item-correct'])
  $('.vnjson__variants-item_fail').css('background-color', TEST['color-item-incorrect'])
  $('.vnjson__test-result').css('background-color', TEST['color-result'])
}


export default function (){

  this.$store.$screen.append($tpl)

  this.on('test', data => {
      if(data){
            $tpl.show()
            TEST = data
            reset()
            renderQuetion.call(this)
      }
      else{
         $tpl.hide()
      }
  })
}

let _quetionItem = null;
function renderQuetion (){
  _quetionItem = TEST.quetions[qIndex];


  $('.vnjson__test-name').html(TEST.name);
  const $imageContaner = $('.vnjson__test-quetion-img')
  // AUDIO
  if(_quetionItem?.audio){
      $vnjs.emit('audio', _quetionItem.audio)
  }
  $('.vnjson__test-variants').html('');

  if(_quetionItem.image){
    const url = $vnjs.getAssetByName(_quetionItem.image).url
    $imageContaner.attr('src', url).show()
  }
  else{
    $imageContaner.hide()
  }

  $('.vnjson__test-quetion-val').html(_quetionItem.quetion);
  _quetionItem.variants.map( (item, index)=>{

    let tplItem = `<div class="vnjson__variants-item" data-index="${index}">${item}</div>`;
    $('.vnjson__test-variants').append(tplItem);
  })
  applyStyles()
}

/**
 * @click
 */

let click = true;
$tpl.find('.vnjson__test-variants').on('click', '.vnjson__variants-item', function (){
  let index = $(this).data('index');

  if(click){
      if(index===_quetionItem.correct-1){
            if(TEST['self-control']){
                  $(this).addClass('vnjson__variants-item_success')
            }
            ++_trueAnswer;
            answers.push({answer: true, quetion: _quetionItem})

      }
      else{
            if(TEST['self-control']){

                    $(this).addClass('vnjson__variants-item_fail');
                    // навешиваем класс на правильный ответ
                    $('.vnjson__variants-item').toArray().map(item => {
                        if($(item).data('index')===TEST.quetions[qIndex].correct-1){
                            $(item).addClass('vnjson__variants-item_success');
                        }
                    });
                    applyStyles()

            }
            ++_falseAnswer;
            answers.push({answer: false, quetion: _quetionItem})
      }
    click = false;
    applyStyles()
    nextStep();
  }


});


function nextStep(){

  const timer = typeof TEST['self-control']==='number'?TEST['self-control']:1000
  setTimeout(()=>{
        click = true;
        ++qIndex;
        if(qIndex===TEST.quetions.length){
            /**
             * Записываем результаты в data
             */
            $vnjs.current.data.trueAnswer = _trueAnswer
            $vnjs.current.data.falseAnswer = _falseAnswer

            $('.vnjson__test-result-item_true').html(_trueAnswer);
            $('.vnjson__test-result-item_false').html( _falseAnswer);
            $('.vnjson__test-result').show();
        }
        else{
            renderQuetion(); 
        }
       
   }, timer);

}


$tpl.find('.vnjson__test-next-btn').on('click', function (){
    $vnjs.exec({next: true, test: false});
    $('.vnjson__test-result').hide();

});

