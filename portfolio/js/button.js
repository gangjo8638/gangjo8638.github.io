var ii = 1;
var getimgno = document.getElementById("boximg");
function clickright() {
if (ii < 5) {
    ii++;
    getimgno.setAttribute(
    "src",
    "img2/dju" +
    ii +
        ".png"
    );
    
    console.log(ii);
} else if ((ii = 5)) {
    ii = 1;
    getimgno.setAttribute(
    "src",
    "img2/dju" +
        ii +
        ".png"
    );
    console.log(ii);
}
}
function clickleft() {
if (ii > 0) {
    ii--;
    getimgno.setAttribute(
    "src",
    "img2/dju" +
        ii +
        ".png"
    );
    
    console.log(ii);
} else if ((ii = 1)) {
    ii = 5;
    getimgno.setAttribute(
    "src",
    "img2/dju" +
        ii +
        ".png"
    );
    console.log(ii);
} 

}
function clickdot(n) {
getimgno.setAttribute(
    "src",
    "img2/dju" + n + ".png"
);
}




//2번째

var ii2 = 1;
var getimgno2 = document.getElementById("boximg2");
function clickrigh2() {
if (ii2 < 5) {
    ii2++;
    getimgno2.setAttribute(
    "src",
    "img2/port" +
    ii2 +
        ".png"
    );
    
    console.log(ii2);
} else if ((ii2 = 5)) {
    ii2 = 1;
    getimgno2.setAttribute(
    "src",
    "img2/port" +
        ii2 +
        ".png"
    );
    console.log(ii2);
}
}
function clickleft2() {
if (ii2 > 0) {
    ii2--;
    getimgno2.setAttribute(
    "src",
    "img2/port" +
    ii2 +
        ".png"
    );
    
    console.log(ii2);
} else if ((ii2 = 1)) {
    ii2 = 5;
    getimgno2.setAttribute(
    "src",
    "img2/port" +
    ii2 +
        ".png"
    );
    console.log(ii2);
} 

}
function clickdot2(n) {
    getimgno2.setAttribute(
    "src",
    "img2/port" + n + ".png"
);
}
