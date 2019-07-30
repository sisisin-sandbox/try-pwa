navigator.serviceWorker.register('https://hoge-f4ea3.firebaseapp.com/sw.js');

let defferdPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  console.log(e);
  defferdPrompt = e;
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.install-button').addEventListener('click', e => {
    console.log('aaa');
    if (defferdPrompt) {
      defferdPrompt.prompt();
    }
  });
});
