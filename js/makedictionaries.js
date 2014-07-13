
// createEmojiToEnglishDictionary
//loop through each key in english dictionary
// get the array, for each entry in the array, set the key equal to
var emojiToEnglish = {}

var makeEmojiToEnglishDictionary = function(){
  for(key in englishToEmojiDictionary){
    var thisArray = englishToEmojiDictionary[key]
    for(i = 0; i < thisArray.length; i++){
      var currentEmoji = thisArray[i]
      emojiToEnglish[currentEmoji] = key
    }
  }
}

// create englishToEmojidictionary

var englishToEmoji = {}

var doge = function() {
    for (i = 0; i < cleanedEmojis.length; i++) {
        $("#doge").append(String(i) + " " + cleanedEmojis[i] + "<br>")
    }
}

// set each english character to emojis
// set each key in the dictionary to an empty array
var makeCharObject = function() {
    for (i = 0; i < allChars.length; i++) {
      var thisChar = allChars[i]
      englishToEmoji[thisChar] = []
    }
}



// add six random emojis to the array, removing them one at a time from the cleaned emojis array

var getAndDeleteRandomEmoji = function(){
  var randomEmojiIndex = Math.floor(Math.random() * cleanedEmojis.length)
  return cleanedEmojis.splice(randomEmojiIndex, 1)
}


var fillArrayWithRandomEmojis = function(){
  for(key in englishToEmoji){
    for(i=0; i<6; i++){
      var thisEmoji = getAndDeleteRandomEmoji()
      englishToEmoji[key].push(thisEmoji[0])
    }
  }
}

var makeEnglishToEmojiDictionary = function(){
  makeCharObject()
  fillArrayWithRandomEmojis()
}
