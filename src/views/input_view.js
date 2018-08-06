const PubSub = require('../../helpers/pub_sub.js');

const InputView = function () {

}

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#text');
  input.addEventListener('input', (event) => {
    const inputtedWord = event.target.value;
    // console.log('Inputted word:', inputtedWord);
    PubSub.publish('InputView:word-inputted', inputtedWord);
  });
};

module.exports = InputView;
