import "./style.css";
import tpl from "./tpl.html";

const $tpl = $(tpl);
let TEST = null;
let answers = [];

let qIndex = 0;
let _trueAnswer = 0;
let _falseAnswer = 0;

export default function (){
  $vnjs.current.data.tests = {};
  this.$store.$screen.append($tpl)

  this.on('test', data=>{

      if(data){
            $tpl.show();
            TEST = data;
            qIndex = 0;
            answers = [];
            _trueAnswer = 0;
            _falseAnswer = 0;
            $('.vnjson__test-name').html(TEST.name);
            renderQuetion.call(this);
      }
      else{
         $tpl.hide();
      }


  })

}

let _quetionItem = null;
function renderQuetion (){
  _quetionItem = TEST.quetions[qIndex];

  $('.vnjson__test-variants').html('');



  $('.vnjson__test-quetion').html(_quetionItem.quetion);
  _quetionItem.variants.map( (item, index)=>{

    let tplItem = `<div class="vnjson__variants-item" data-index="${index}">${item}</div>`;
    $('.vnjson__test-variants').append(tplItem);
  })

}

/**
 * @click
 */

let click = true;
$tpl.find('.vnjson__test-variants').on('click', '.vnjson__variants-item', function (){
  let index = $(this).data('index');

  if(click){
      if(index===_quetionItem.correct-1){
            if(TEST['self-control']===true){
                $(this).addClass('vnjson__variants-item_success');
            }
            else{}
            ++_trueAnswer;
            answers.push({answer: true, quetion: _quetionItem})

      }
      else{
            if(TEST['self-control']===true){
                $(this).addClass('vnjson__variants-item_fail');
                // навешиваем класс на правильный ответ
                $('.vnjson__variants-item').toArray().map(item=>{
                    if($(item).data('index')===TEST.quetions[qIndex].correct-1){
                        $(item).addClass('vnjson__variants-item_success');
                    }
                });
                
            }
            else{}
            ++_falseAnswer;
            answers.push({answer: false, quetion: _quetionItem})
      }
    click = false;
    next();
  }


});


function next(){

  setTimeout(()=>{
        click = true;
        ++qIndex;
        if(qIndex===TEST.quetions.length){
            $vnjs.current.data.tests[TEST.name] = answers;

            $('.vnjson__test-result-item_true').html(_trueAnswer);
            $('.vnjson__test-result-item_false').html( _falseAnswer);
            $('.vnjson__test-result').show();
        }
        else{
            renderQuetion(); 
        }
       
   }, 800);

}


$tpl.find('.vnjson__test-next-btn').on('click', function (){
    $vnjs.exec({next: true, test: false});
    $('.vnjson__test-result').hide();

});
