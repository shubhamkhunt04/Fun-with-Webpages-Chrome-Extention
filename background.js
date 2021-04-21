chrome.runtime.onInstalled.addListener(() => {
  console.log('installed successfully');
});

chrome.bookmarks.onCreated.addListener(() => {
  alert('Bookmark Saved');
});
