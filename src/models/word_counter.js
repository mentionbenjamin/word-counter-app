const PubSub = require('../../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:word-inputted', (event) => {
      const inputtedWord = event.detail;
      const result = this.countWords(inputtedWord);
      PubSub.publish('WordCounter:result', result);
  });
};

WordCounter.prototype.countWords = function (word) {
  return word.trim().split(/\s+/).length;
};

module.exports = WordCounter;
