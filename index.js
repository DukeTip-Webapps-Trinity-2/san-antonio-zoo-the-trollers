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