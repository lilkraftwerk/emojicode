var getStepAndDoThings = function(id) {
    var sayings = [
        "The rain in Spain falls mainly on the plain.",
        "Hello world.",
        "Horses are excellent",
        "Lemonade was a popular drink and it still is",
        "Punch it, Chewie!",
        "Doot doola doot doot...",
        "All emojis are beautiful",
        "Pizza party tonight at my place!",
        "Woof woof woof I'm a precious little doggie arf arf arf"
    ]
    var randomSaying = sayings[Math.floor(Math.random() * sayings.length)]
    if (id == "textbox") {
        if (stepOne) {
            $("#textbox").val(returnCopyText())
        } else {
            $("#textbox").val(randomSaying)
            stepOne = true
        }
    }
    if (id == "step4") {
        var textToTranslate = getTextboxValue()
        translate(textToTranslate)
        ShowCopyIfAble()

    }
    if (id == 5) {
        $("#textbox").val(returnCopyText())
    }
    if (id == 7) {
        var textToTranslate = getTextboxValue()
        translate(textToTranslate)
        ShowCopyIfAble()

    }
}

var stepOne = false

function startIntro() {
    var intro = introJs();
    intro.setOptions({
        showStepNumbers: false,
        steps: [{
            intro: "WELCOME TO EMOJICODE. Translate any message into PURE EMOJIS and back again."

        }, {
            element: document.querySelector('#textbox'),
            intro: "Type a message in here.",
        }, {
            element: document.querySelector('#translate'),
            intro: "Press this button to translate it to EmojiCode",
            position: 'top'
        }, {
            element: document.querySelector('#step4'),
            intro: 'Behold! Your message is now encoded.',
            position: 'left'
        }, {
            element: document.querySelector('#textbox'),
            intro: "Send it to a friend and they can translate it back into English.",
            position: 'bottom'
        }, {
            element: document.querySelector('#translate'),
            intro: "Press this button again to decode the message!",
            position: 'top'
        }, {
            element: document.querySelector('#delivery'),
            intro: 'W O W !',
        }]
    });

    intro.onchange(function(targetElement) {
        var target = $(targetElement)
        getStepAndDoThings(target[0].id)
    })

    intro.start();
}