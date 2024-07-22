const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Kate Seo";
    }, 0);
    setTimeout(() => {
        text.textContent = "a programmer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "a designer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "a student";
    }, 12000);
    setTimeout(() => {
        text.textContent = "an explorer";
    }, 16000);
}

textLoad();
setInterval(textLoad, 20000);