$(document).ready(function() {

    $("#translate").on("click", function() {
        var textToTranslate = getTextboxValue()
        translate(textToTranslate)
        $("#delivery").removeClass("delivery-background")
    })
    $(document).on("click", "#chrome-menu", function(event) {
        event.preventDefault()
        addChromeMessage()
    })
    checkForChrome()
    setInterval(function() {
        disableButtonsWithNoText()
        setDeliverySameSize()
    }, 50);


    $('#copy').zclip({
        path:'ZeroClipboard.swf',
        copy:$('#delivery').text()
    });

    // The link with ID "copy-description" will copy
    // the text of the paragraph with ID "description"


    $('a#copy-dynamic').zclip({
        path:'ZeroClipboard.swf',
        copy:function(){return $('input#dynamic').val();}
    });

    // The link with ID "copy-dynamic" will copy the current value
    // of a dynamically changing input with the ID "dynamic"

})

//
// CODE FOR TRANSLATING
//

// Turns a string of emojis into a split array

var translate = function(textInput){

    if(moreEmojisThanText(textInput)){
     translateFromEmojiToEnglish(textInput)
    } else {
    translateFromEnglishToEmoji(textInput)
    }
}


var moreEmojisThanText = function(textInput){
    var emojis = 0;
    var nonEmojiChars = 0;
    var emojiSplit = emojiStringToArray(textInput)
    for(i=0; i < emojiSplit.length; i++){
        if (returnEnglishCharFromEmoji(emojiSplit[i])){
            emojis += 1
        } else {
            nonEmojiChars += emojiSplit[i].length
        }
    }
    return (emojis > nonEmojiChars)
}


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
