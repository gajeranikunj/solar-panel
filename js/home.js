window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if (scroll > 30) {
        document.getElementById("nav").style.backgroundColor = 'white';
        document.getElementsByClassName("logo")[0].style.color = 'black';

    } else {
        document.getElementById("nav").style.backgroundColor = 'transparent';
        document.getElementsByClassName("logo")[0].style.color = 'white';
    }
});



var randomNumber1 = 0;
var randomNumber2 = 0;
var randomNumber3 = 0;
var randomNumber4 = 0;
window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if (scroll>2050) {
      console.log(scroll);  
    };
    if (scroll > 3300 && randomNumber1 == 0) {
        function updateNumber1() {
            if (randomNumber1 <= 97) {
                document.getElementById("Clients").innerText = randomNumber1;
                randomNumber1++;
            }
            else {
                clearInterval(clr1);
            }
        }
        var clr1 = setInterval(updateNumber1, 30);
    }
    if (scroll > 3300 && randomNumber1 == 0) {
        function updateNumber2() {
            if (randomNumber2 <= 175) {
                document.getElementById("awer-Projects").innerText = randomNumber2;
                randomNumber2++;
            }
            else {
                clearInterval(clr2);
            }
        }
        var clr2 = setInterval(updateNumber2, 10);
    }
    if (scroll > 3660 && randomNumber3 == 0) {
        function updateNumber3() {
            if (randomNumber3 <= 150) {
                document.getElementById("Completed-Projects").innerText = randomNumber3;
                randomNumber3++;
            }
            else {
                clearInterval(clr3);
            }
        }
        var clr3 = setInterval(updateNumber3, 13);
    }
    if (scroll > 3660 && randomNumber4 == 0) {
        function updateNumber4() {
            if (randomNumber4 <= 255) {
                document.getElementById("Square-Feet").innerText = randomNumber4 + "K";
                randomNumber4++;
            }
            else {
                clearInterval(clr4);
            }
        }
        var clr4 = setInterval(updateNumber4, 10);
    }
});
// .................text updat start...................
var textArray = ["temp1", "temp2", "temp3", "temp4"];
var index = 0;
var charIndex = 0;
var initialDelay = 1000;
var characterDelay = 200;
var wordDelay = 400;
var myDiv = document.getElementById('chang');

function typeWriter() {
    var currentText = textArray[index];
    if (charIndex < currentText.length) {
        myDiv.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, characterDelay);
    } else {
        myDiv.textContent += "";
        charIndex = 0;
        index = (index + 1) % textArray.length;
        setTimeout(clearText, wordDelay);
    }
}

function clearText() {
    myDiv.innerHTML = "";
    setTimeout(typeWriter, initialDelay);
}

setTimeout(typeWriter, initialDelay);
// .................text updat end...................
