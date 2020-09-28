const text = "Hello, thank you for taking a look at mini-project of mine. Hope you enjoyed";


let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length - 1) {
        index = 0;
    }
}

setInterval(writeText, 100);