console.log('Hey Shubham,This is popup.js');

document.getElementById('textcolor').addEventListener('input', (e) => {
  let params = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = {
      txt: e.target.value,
      msg: 'textcolor',
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});

document.getElementById('bgcolor').addEventListener('input', (e) => {
  let params = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = {
      txt: e.target.value,
      msg: 'bgcolor',
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});

document.getElementById('fontsize').addEventListener('input', (e) => {
  let params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = {
      txt: e.target.value,
      msg: 'fontsize',
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});
document.getElementById('pdfbtn').addEventListener('click', (e) => {
  let params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = {
      txt: 'pdf Generator',
      msg: 'pdfbtn',
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});

document.getElementById('imagechange').addEventListener('click', (e) => {
  let params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = {
      txt: 'Image changer',
      msg: 'imagechange',
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});

document.getElementById('effect').addEventListener('input', (e) => {
  let params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = {
      txt: e.target.value,
      msg: 'effect',
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});

document.getElementById('paragraphreplacer').addEventListener('input', (e) => {
  let params = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = {
      txt: e.target.value,
      msg: 'paragraphreplacer',
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});
