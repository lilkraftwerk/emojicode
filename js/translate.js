$(document).ready(function() {
    $("#text2emoji").on("click", function() {
        var textToTranslate = getTextboxValue()
        translateFromEnglishToEmoji(textToTranslate)
    })
    $("#emoji2text").on("click", function() {
        var textToTranslate = getTextboxValue()
        translateFromEmojiToEnglish(textToTranslate)
    })
    $(document).on("click", "#chrome-menu", function(event) {
        event.preventDefault()
        addChromeMessage()
    })
    checkForChrome()
    setInterval(function() {
        disableButtonsWithNoText()
    }, 50);
})

//
// CODE FOR TRANSLATING
//

// Turns a string of emojjis into a split array
var emojiStringToArray = function(str) {
    split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
    arr = [];
    for (var i = 0; i < split.length; i++) {
        char = split[i]
        if (char !== "") {
            arr.push(char);
        }
    }
    return arr;
};




var emojiToCodePoint = function(emoji) {
    return punycode.ucs2.decode(emoji)
}

var formatCodePoint = function(codePoint) {
    return "&#" + String(codePoint) + ";"
}

// emoji to english
var translateFromEmojiToEnglish = function(inputString) {
    var splitString = emojiStringToArray(inputString)
    var textArray = []
    for (i = 0; i < splitString.length; i++) {
        if (splitString[i] == " ") {
            textArray.push(splitString[i])
        } else {
            var thisEnglishChar = returnEnglishCharFromEmoji(splitString[i])
            textArray.push(thisEnglishChar)
        }
    }
    var joinedString = textArray.join("")
    deliverText(textArray)
}

var returnEnglishCharFromEmoji = function(emoji) {
    var thisCodePoint = emojiToCodePoint(emoji)
    var thisFormattedCode = formatCodePoint(thisCodePoint)
    console.log(emojiToEnglish[thisFormattedCode])
    return emojiToEnglish[thisFormattedCode]
}

var charCodeToDec = function(charCode) {
    return "&#" + String(charCode) + ";"
}

var replaceEachEmojiInString = function(splitString) {
    for (i = 0; i < splitString.length; i++) {
        var thisEmoji = splitString[i]
    }
    return splitString.join("")
}

//get value in textbox
var getTextboxValue = function() {
    return $("#textbox").val()
}

//split input string into array
var splitInputString = function(inputString) {
    return inputString.split("")
}

//for each in the split string, replace with random emoji for given char's dictionary
var getRandomEmojiFromArray = function(emojiArray) {
    var randomEmojiIndex = Math.floor(Math.random() * emojiArray.length)
    var charToReturn = emojiArray[randomEmojiIndex]
    return emojiArray[randomEmojiIndex]
}

var replaceEachCharInString = function(splitString) {
    for (i = 0; i < splitString.length; i++) {
        var thisChar = splitString[i]
        if (englishToEmojiDictionary[thisChar] === undefined) {
            splitString[i] = ""
        } else {
            var thisEmojiArray = returnEmojiArray(thisChar)
            var thisEmoji = getRandomEmojiFromArray(thisEmojiArray)
            splitString[i] = thisEmoji
        }
    }
    return splitString.join("")
}

var returnEmojiArray = function(character) {
    return englishToEmojiDictionary[character]
}

var translateFromEnglishToEmoji = function(inputString) {
    var splitString = splitInputString(inputString)
    var translatedSentence = replaceEachCharInString(splitString)
    deliverText(translatedSentence)
}

//
// CODE FOR UI
//


window.onload = function() {
    setDeliverySameSize()
}

var disableButtonsWithNoText = function() {
    if ($("#textbox").val().length > 0) {
        $("button").removeClass("pure-button-disabled")
    } else {
        $("button").addClass("pure-button-disabled")
    }
}


// Show Chrome users a warning since Chrome hates emojis :(
var checkForChrome = function() {
    if (window.chrome) {
        var chromeMenuItem = "<li id='chrome-menu'><a href='#'><img src='img/crying.jpg'> Not seeing emojis? <img src='img/crying.jpg'></li>"
    }
    $(chromeMenuItem).insertAfter($("#about-item"))
}

var addChromeMessage = function() {
    var chromeWarning = "<div id='chrome'><em><img src='img/crying.jpg'></em><br>No emojis? Install <a href='https://chrome.google.com/webstore/detail/chromoji-emoji-for-google/cahedbegdkagmcjfolhdlechbkeaieki' target='_blank'>Chromoji</a> or try Firefox or Safari. Chrome doesn't like emojis :(</div>"
    $("#chrome-warning").html(chromeWarning)
}

var addHiddenDivThatSomehowMakesChromojiWork = function() {
    if ($("#hidden-chromoji").length) {} else {
        $("<div id='hidden-chromoji'></div>").insertBefore($("#delivery"))
    }
}

var deliverText = function(valueToDeliver) {
    $("#delivery").html(valueToDeliver)
    setDeliveryAuto()
    addHiddenDivThatSomehowMakesChromojiWork()
}

// Consistent sizing for #Delivery box
var setDeliverySameSize = function() {
    $("#delivery").height($("#textbox").height())
}

var setDeliveryAuto = function() {
    $("#delivery").height('auto')
}