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
            $('.stream__test-name').html(TEST.name);
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

  $('.stream__test-variants').html('');



  $('.stream__test-quetion').html(_quetionItem.quetion);
  _quetionItem.variants.map( (item, index)=>{

    let tplItem = `<div class="stream__variants-item" data-index="${index}">${item}</div>`;
    $('.stream__test-variants').append(tplItem);
  })

}

/**
 * @click
 */

let click = true;
$tpl.find('.stream__test-variants').on('click', '.stream__variants-item', function (){
  let index = $(this).data('index');

  if(click){
      if(index===_quetionItem.correct-1){
            if(TEST['self-control']===true){
                $(this).addClass('stream__variants-item_success');
            }
            else{}
            ++_trueAnswer;
            answers.push({answer: true, quetion: _quetionItem})

      }
      else{
            if(TEST['self-control']===true){
                $(this).addClass('stream__variants-item_fail');
                // навешиваем класс на правильный ответ
                $('.stream__variants-item').toArray().map(item=>{
                    if($(item).data('index')===TEST.quetions[qIndex].correct-1){
                        $(item).addClass('stream__variants-item_success');
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

            $('.stream__test-result-item_true').html(_trueAnswer);
            $('.stream__test-result-item_false').html( _falseAnswer);
            $('.stream__test-result').show();
        }
        else{
            renderQuetion(); 
        }
       
   }, 800);

}


$tpl.find('.stream__test-next-btn').on('click', function (){
    $vnjs.exec({next: true, test: false});
    $('.stream__test-result').hide();

});
