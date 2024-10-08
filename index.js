/* This code block is defining a constructor function for the TxtType object. The function takes three
parameters: el (an HTML element), toRotate (an array of strings to be typed out), and period (an
optional parameter that sets the delay between each character being typed). The function initializes
several properties of the TxtType object, including the text to be typed out, the loop number, and
whether or not characters are currently being deleted. Finally, the function calls the tick()
method, which is responsible for creating the typewriter effect on the selected element. */
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

/* The `TxtType.prototype.tick` function is responsible for creating the typewriter effect on the
selected element. It first determines which string in the `toRotate` array to type out based on the
current loop number. It then checks whether characters are currently being deleted or added to the
`txt` property and updates it accordingly. The function then sets the innerHTML of the selected
element to the current `txt` value wrapped in a span with the class "wrap". The function also sets a
random delay time for the next character to be typed out and updates the `isDeleting` property and
loop number as necessary. Finally, the function calls itself recursively after the specified delay
time using `setTimeout`. */
TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

/* This code block is defining a function that will be executed when the window has finished loading.
The function selects all elements with the class "typewrite" and initializes a new instance of the
TxtType object for each element. The TxtType object is defined in the first code block and is
responsible for creating a typewriter effect on the selected element. The function also creates a
new CSS style element and appends it to the document body, which adds a border to the text being
typed out. */
window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

/**
 * The function toggles the display of an HTML element with the ID "menenen".
 */
function showmenu() {
    if(document.getElementById('menenen').style.display == "block"){
    document.getElementById('menenen').style.display = "none";
    }
    else{
    document.getElementById('menenen').style.display = "block";
    }
}

/**
 * The function hides an HTML element with the ID "menenen".
 */
function none(){
    document.getElementById('menenen').style.display = "none";

}
