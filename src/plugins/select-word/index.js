import "./style.css";
import tpl from "./tpl.html";
const $tpl = $(tpl);
let correct = null;
let _scriptData = false;
export default function () {
    this.store.screen.append($tpl);
    const $dropZone = $tpl.find(".select-word__dropzone");
    let indexItem = 0;
    this.on("select-word", (data) => {
        _scriptData = data;
        $dropZone.removeClass("select-word__dropzone--disable");
        $dropZone.empty();
        handler(data);
    });
    $tpl.find(".select-word__variants").on(
        "click",
        ".select-word__item",
        function (e) {
            correct = _scriptData.answers.correct - 1;
            // удаляю активный класс
            $(this)
                .parent()
                .find(".select-word__item")
                .toArray()
                .forEach((node) =>
                    $(node).removeClass("select-word__item--active")
                );
            // вешаю активный класс на выбранный элемент
            $(this).addClass("select-word__item--active");
            // подсвечиваю дропзону
            $dropZone.addClass("select-word__dropzone--active");
            indexItem = Number(this.dataset.index);
        }
    );
    $dropZone.on("click", () => {
        if (correct === null) return;

        $dropZone.addClass("select-word__dropzone--disable");
        //$tpl.find('.select-word__variants').removeClass('select-word__variants--disable')
        let answerItemHTML = $(
            `<div class="select-word__item">${_scriptData.answers.variants[indexItem]}</div>`
        );
        $dropZone.html(answerItemHTML);
        // проверяю на правильность ответ пользователя
        if (indexItem === correct) {
            setTimeout(() => {
                this.exec(_scriptData.onSuccess);
                this.exec({ "select-word": false });
            }, 1000);
        } else {
            setTimeout(() => {
                this.exec(_scriptData.onFailure);
                this.exec({ "select-word": false });
            }, 1000);
        }
    });
}

function handler(scriptData) {
    if (scriptData) {
        $tpl.show();
        const { quetion, answers } = scriptData;
        if (quetion?.css) {
            $tpl.find(".select-word__quetion").css(quetion.css);
        }
        if (answers?.css) {
            $tpl.find(".select-word__variants").css(answers.css);
        }
        $tpl.find(".select-word__text").html(quetion.text);
        $tpl.find(".select-word__variants").empty();
        //$tpl.find('.select-word__variants').removeClass('select-word__variants--disable')
        answers.variants.forEach((item, index) => {
            const str = $(
                `<div class="select-word__item" data-index="${index}">${item}</div>`
            );
            $tpl.find(".select-word__variants").append(str);
        });
    } else {
        $tpl.hide();
        correct = null;
    }
}
