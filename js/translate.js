$(document).ready(function() {
    $("#text2emoji").on("click", function() {
        var textToTranslate = getTextboxValue()
        translateFromEnglishToEmoji(textToTranslate)
    })
    $("#emoji2text").on("click", function() {
        var textToTranslate = getTextboxValue()
        translateFromEmojiToEnglish(textToTranslate)
    })
})


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

//for each in the split string, replace with random emoji from dictionary

var getRandomEmojiFromArray = function(emojiArray) {
    var randomEmojiIndex = Math.floor(Math.random() * emojiArray.length)
    return emojiArray[randomEmojiIndex]
}

var replaceEachCharInString = function(splitString) {
    for (i = 0; i < splitString.length; i++) {
        var thisChar = splitString[i]
        var thisEmojiArray = returnEmojiArray(thisChar)
        var thisEmoji = getRandomEmojiFromArray(thisEmojiArray)
        splitString[i] = thisEmoji
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


var deliverText = function(valueToDeliver) {
    console.log(valueToDeliver)
    $("#delivery").html(valueToDeliver)
}