//
// CODE FOR UI
//


window.onload = function() {
    setDeliverySameSize()
}

var disableButtonsWithNoText = function() {
    if ($("#textbox").val().length > 0) {
        $("button").removeClass("pure-button-disabled")
        $("#textbox").removeClass("textarea-background")
    } else {
        $("button").addClass("pure-button-disabled")
        $("#textbox").addClass("textarea-background")
    }
    if ($("#delivery").text().length > 0) {
        $("#delivery").removeClass("delivery-background")
    } else {
        $("#delivery").addClass("delivery-background")
    }
}


// Show Chrome users a warning since Chrome hates emojis :(
var checkForChrome = function() {
    if (window.chrome) {
        var chromeMenuItem = "<li id='chrome-menu'><a href='#'> Not seeing emojis? </li>"
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
    highlightDeliveryBox()
}

// Consistent sizing for #Delivery box
var setDeliverySameSize = function() {
    if ($("#delivery").height() < $("#textbox").height()) {
    $("#delivery").height($("#textbox").height())
    }
}

var setDeliveryAuto = function() {
    $("#delivery").height('auto')
}

var highlightDeliveryBox = function(){
    $("#delivery").effect("highlight", {color:"#0ABFBC"}, 300)
}