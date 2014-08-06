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
        setDeliverySameSize()

    }
    if (id == 5) {
        $("#textbox").val(returnCopyText())
    }
    if (id == "delivery") {
        var textToTranslate = getTextboxValue()
        translate(textToTranslate)
        ShowCopyIfAble()
        setDeliverySameSize()

    }
}

var stepOne = false

function startIntro() {
    var intro = introJs();
    intro.setOptions({
        showStepNumbers: false,
        steps: [{
            intro: "Welcome, my friend, to EmojiCode. EmojiCode is a new language that lets you encode any message into pure emojis. You can use the arrow keys to navigate through this li'l tour."

        }, {
            element: document.querySelector('#textbox'),
            intro: "To get started, type your message in here. Go on, don't be afraid!",
        }, {
            element: document.querySelector('#translate'),
            intro: "Then press this button to translate it to EmojiCode...",
            position: 'top'
        }, {
            element: document.querySelector('#delivery'),
            intro: "Behold! Your message has been translated to EmojiCode! EmojiCode is randomized so you can\'t learn to read it.",
            position: 'bottom'
        }, {
            element: document.querySelector('#textbox'),
            intro: "Once you have the EmojiCode, copy it and send the encoded message to a friend so they can translate it back...",
            position: 'bottom'
        }, {
            element: document.querySelector('#translate'),
            intro: "After you've pasted in the encoded message, press this button again to decode it...",
            position: 'top'
        }, {
            element: document.querySelector('#delivery'),

            intro: 'Way Cool!',
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

function mobileIntro() {
    var intro = introJs();
    intro.setOptions({
        showStepNumbers: false,
        steps: [{
            intro: "Welcome, my friend, to EmojiCode. EmojiCode is a new language that lets you encode any message into pure emojis."

        }, {
            element: document.querySelector('#textbox'),
            intro: "To get started, type your message in here. Go on, don't be afraid!",
        }, {
            element: document.querySelector('#translate'),
            intro: "Then press this button to translate it to EmojiCode...",
            position: 'top'
        }, {
            element: document.querySelector('#delivery'),
            intro: "Behold! Your message has been translated to EmojiCode! EmojiCode is randomized so you can\'t learn to read it.",
            position: 'bottom'
        }, {
            element: document.querySelector('#textbox'),
            intro: "Once you have the EmojiCode, copy it and send the encoded message to a friend so they can translate it back...",
            position: 'bottom'
        }, {
            element: document.querySelector('#translate'),
            intro: "After you've pasted in the encoded message, press this button again to decode it...",
            position: 'top'
        }, {
            element: document.querySelector('#delivery'),

            intro: 'Way Cool!',
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

function chromeTips() {
    var intro = introJs();
    intro.setOptions({
        showStepNumbers: false,
        steps: [{
            element: document.querySelector('#chrome-menu'),
            intro: "Install <a href='https://chrome.google.com/webstore/detail/chromoji-emoji-for-google/cahedbegdkagmcjfolhdlechbkeaieki' target='_blank'>Chromoji</a> or try Firefox or Safari. Chrome doesn't like emojis :(",
        }]
    });
    intro.start()
}