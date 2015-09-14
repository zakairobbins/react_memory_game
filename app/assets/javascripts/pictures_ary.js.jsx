var pictures = ["/assets/batman.png", "/assets/greenlantern.jpg", "/assets/justiceleague.jpg", "/assets/sandman.jpg", "/assets/superman.jpg", "/assets/wonderwoman.jpg", "/assets/batman.png", "/assets/greenlantern.jpg", "/assets/justiceleague.jpg", "/assets/sandman.jpg", "/assets/superman.jpg", "/assets/wonderwoman.jpg"]

function randomNum(min, max){
  return Math.floor(Math.random() * (max) + min);
}

function assignUnique(pictures) {
  for (var i = 0; i < pictures.length; i++) {
    var idx = randomNum(0, pictures.length);
    return pictures.splice(idx, 1);
  };
}


// var pictures = ["/assets/aquaman.jpg", "/assets/atom.jpg", "/assets/batman.png", "/assets/drfate.jpg", "/assets/greenlantern.jpg", "/assets/hawkman.jpg", "/assets/hourman", "/assets/justiceleague.jpg", "/assets/justicesociety.jpg", "/assets/martianmanhunter.jpg", "/assets/sandman.jpg", "/assets/spectre.jpg", "/assets/superman.jpg", "/assets/theflash.jpg", "/assets/wonderwoman.jpg"]
