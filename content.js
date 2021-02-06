console.log('Chrome extension go!?');

var paragraphs = document.getElementsByTagName("p");
var count = document.getElementsByTagName("p").innerHTML.length;

var images = document.getElementsByTagName('img');

for (var i = 0; i < paragraphs.length; i++) {
    for (var j = 0; j < count.length; j++) {
    paragraphs[i].innerHTML = "baked beans";
    count[j].innerHTML = "baked beans";
    }
}

for (var i = 0; i < images.length; i++) {
    images[i].src = "bakedbeans.jpg";
}

