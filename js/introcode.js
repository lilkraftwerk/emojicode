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
    console.log(id)
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
        console.log("here here here")
        ShowCopyIfAble()

    }
    if (id == 5) {
        $("#textbox").val(returnCopyText())
    }
    if (id == "delivery") {
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
            intro: "WELCOME TO EMOJICODE. EmojiCode lets you encode any message into pure emojis."

        }, {
            element: document.querySelector('#textbox'),
            intro: "To get started, type a message in here",
        }, {
            element: document.querySelector('#translate'),
            intro: "Press this button to translate it to EmojiCode",
            position: 'top'
        }, {
            element: document.querySelector('#step4'),
            intro: "Behold! Your message has been translated to EmojiCode! EmojiCode is randomized so you can\'t learn to read it.",
            position: 'left'
        }, {
            element: document.querySelector('#textbox'),
            intro: "Copy and send your EmojiCode to a friend. They can paste it into this box to translate it back",
            position: 'bottom'
        }, {
            element: document.querySelector('#translate'),
            intro: "Press this button again to decode the message!",
            position: 'top'
        }, {
            element: document.querySelector('#step4'),
            intro: 'Amazing!',
        }]
    });



    intro.onchange(function(targetElement) {
        var target = $(targetElement)
        getStepAndDoThings(target[0].id)
    })

    intro.oncomplete(function() {
        stepOne = false;
    })
    intro.start();
}