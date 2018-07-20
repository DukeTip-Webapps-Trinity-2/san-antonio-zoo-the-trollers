window.onload = function () {
    document.querySelector('h1').onmouseover = h1OnMouseOver;
    document.querySelector('h1').onmouseover = h1OnMouseOver;
    document.querySelector('h2').onmouseover = h1OnMouseOver;
    document.querySelector('h2').onmouseover = h2OnMouseOver;
    // document.querySelector('ul li').onmousover = liMouseOver;
    console.log(document.querySelectorAll('ul li'));
    for (let i of document.querySelectorAll('ul li')) {
        i.onmouseover = liMouseOver;
        i.onmouseout = liMouseOut;
    }
}

$(document).ready(function () {
    $('h1').hover(h1OnMouseOver, h1OnMouseOut);
    $('h2').hover(h1OnMouseOver, h2OnMouseOut);
    $('ul li').hover(liMouseOver, liMouseOut);
});
function h1OnMouseOver() {
    $(this).text("Exhibits");
    $(this).css({
        "color": "#",
        "backgroundColor": "#"

    });
}
function h1OnMouseOut() {
    $(this).text("Exhibits");
    $(this).css({
        "color": "#",
        "backgroundColor": "#"
    })
}
function h2OnMouseOut() {
    $(this).text("#");
    $(this).css({
        "color": "#",
        "backgroundColor": "#"
    })
}
function liMouseOver() {
    $(this).text("");
    $(this).css({
        "color": "#",
        "backgroundColor": "#"
    })
}

// function h1OnMouseOver(){
//     this.innerHTML = "The mouse is over ";
//     this.style.color = "white";
//     this.style.backgroundColor  = "black";
// }

// function h1OnMouseOut(){
//     this.innerHTML = "This is a header";    
//     this.style.color  = "white";
//     this.style.backgroundColor = "black";
// }

// function h1OnMouseOut(){   
//     this.innerHTML = "This is a subheader";
//     this.style.color = "#00009C";
//     this.style.backgroundColor = "white";        
// }

 function myActive(val) {
    if (val = yes) {
        return "Thank you for participating! We hope your visit was great!";
    }
    if (val = no) {
        return "Thank you for participating, and make sure to check out the San Antonio Zoo!";
    }

}  
