var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/computer.png'){
        myImage.setAttribute('src','images/computer2.png');
    } else {
        myImage.setAttribute('src','images/computer.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Enter Your Name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

