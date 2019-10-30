function playSound(myObj) { 
    console.log(myObj.id);
    var sound = document.getElementById(myObj.id);
    sound.play(); 
} 