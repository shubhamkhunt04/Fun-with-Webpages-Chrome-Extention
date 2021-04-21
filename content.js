// console.log("hey shubham, this is content.js")
chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  // req(Message)
  let alltag = document.all;

  if (req.msg === 'textcolor') {
    Array.from(alltag).forEach((element) => {
      element.style.color = req.txt;
    });
  } else if (req.msg === 'bgcolor') {
    let bodys = document.body;
    bodys.style.backgroundColor = req.txt;
  } else if (req.msg === 'fontsize') {
    Array.from(alltag).forEach((element) => {
      element.style.fontSize = req.txt + 'px';
    });
  } else if (req.msg === 'pdfbtn') {
    window.print();
  } else if (req.msg === 'imagechange') {
    let filename = [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
    ];

    let allimages = document.images;
    Array.from(allimages).forEach((element) => {
      let index = Math.floor(Math.random() * 10);

      let file = 'images/' + filename[index];
      let url = chrome.extension.getURL(file);
      console.log(element);
      element.setAttribute('src', url);
      element.setAttribute('srcset', url);
      console.log(index);
    });
  } else if (req.msg === 'effect') {
    console.log('effect clicked');

    //====================== daynamic css start===========================
    // Include CSS file
    function addCSS(filename) {
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('link');
      style.href = filename;
      style.type = 'text/css';
      style.rel = 'stylesheet';
      head.append(style);
    }
    //====================== daynamic css end===========================
    switch (req.txt) {
      case 'compress':
        let path1 = chrome.extension.getURL('compress.css');
        addCSS(path1);
        break;
      case 'flying':
        let path2 = chrome.extension.getURL('flying.css');
        addCSS(path2);
        break;
      case 'autozoominout':
        let path3 = chrome.extension.getURL('autozoominout.css');
        addCSS(path3);
        break;
      case 'rotate':
        let path4 = chrome.extension.getURL('rotate.css');
        addCSS(path4);
        break;
      case 'skew':
        let path5 = chrome.extension.getURL('skew.css');
        addCSS(path5);
        break;
      case 'vibratetext':
        let path6 = chrome.extension.getURL('vibratetext.css');
        addCSS(path6);
        break;
    }
  } else if (req.msg === 'paragraphreplacer') {
    let paragraph = document.getElementsByTagName('p');
    Array.from(paragraph).forEach((element) => {
      element.innerHTML = req.txt;
    });
  }
});

// =============================code for toggel button=====================================

//     const button = document.createElement('button');
//     button.id = "darkModeButton";
//     button.textContent = "Do It Dark";

//     const input = document.createElement('input');
//     input.type = "checkbox";
//     input.id = "colorSetting";

//     document.querySelector('#bgcolor').prepend(button, input, 'Auto apply ?');

//     button.addEventListener('click', colorchanger);
//     input.addEventListener('click', enableColormode);

//     checkSetting();

// };

// function checkSetting() {
//     chrome.storage.local.get(['enabled'], (result) => {
//         const isEnable = result.enabled;
//         console.log(isEnable);

//         document.getElementById('colorSetting').checked = result.enabled;

//         if (isEnable) {
//             enableColormode();
//         }
//     })
// }

// function enableColormode() {
//     const isEnable = document.getElementById('colorSetting').checked;
//     const setting = {
//         enabled: isEnable
//     };

//     chrome.storage.local.set(setting, () => {
//         console.log("Stored :-", setting);
//     })
// }

// function colorchanger() {
//     document.getElementsByTagName('body')[0].style.backgroundColor = "black";
// }

// =================mycode========================********************************************************************
