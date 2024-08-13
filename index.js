const txts=document.querySelector(".animate-text").children;
txtsLen=txts.length;;
let index=0;
const textInTimer=3000;
const textOutTimer=2600;
function animateText() {
    for (let i=0; i<txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function() {
        txts[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function() {
        if (index === txtsLen-1) {
            index=0;
        } else {
            index++;
        }
        animateText();
    }, textInTimer);
}
window.onload=animateText;

function showError() {
    let errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';
}

// Event listener to check if the embed fails to load
window.addEventListener('load', function() {
    let pdf = document.getElementById('resume-pdf');

    // Check if the PDF is loaded
    pdf.addEventListener('load', function() {
        // If the load event is fired, the PDF is loaded correctly
    }, { once: true });

    // Fallback if the PDF fails to load
    setTimeout(function() {
        if (pdf.src && pdf.contentDocument === null) {
            showError();
        }
    }, 1000); // Delay to allow time for PDF to attempt to load
});
