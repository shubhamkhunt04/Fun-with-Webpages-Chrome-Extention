console.log("Hey Shubham,This is popup.js");


document.getElementById('textcolor').addEventListener('input', (e) => {
    // console.log("textcolor clicked");

    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {

        let message = {
            txt: e.target.value,
            msg: "textcolor"
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
})

document.getElementById('bgcolor').addEventListener('input', (e) => {
    // console.log("bgcolor clicked");

    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let message = {
            txt: e.target.value,
            msg: "bgcolor"
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
})


document.getElementById('fontsize').addEventListener('input', (e) => {
    // console.log("fontsize clicked");

    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let message = {
            txt: e.target.value,
            msg: "fontsize"
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
})
document.getElementById('pdfbtn').addEventListener('click', (e) => {
    // console.log("pdfbtn clicked");
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let message = {
            txt: "pdf Generator",
            msg: "pdfbtn"
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
})

document.getElementById('imagechange').addEventListener('click', (e) => {
    // console.log("imagechange clicked");
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let message = {
            txt: "Image changer",
            msg: "imagechange"
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
})

document.getElementById('effect').addEventListener('input', (e) => {
    // console.log("effect clicked");
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let message = {
            txt: e.target.value,
            msg: "effect"
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
})

document.getElementById('paragraphreplacer').addEventListener('input', (e) => {
    // console.log("paragraphreplacer clicked");

    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {

        let message = {
            txt: e.target.value,
            msg: "paragraphreplacer"
        }
        chrome.tabs.sendMessage(tabs[0].id, message);
    }
})