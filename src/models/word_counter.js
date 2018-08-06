const PubSub = require('../../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:word-inputted', (event) => {
      const inputtedWord = event.detail;
      const result = this.countTheWordsFunction(inputtedWord);
      PubSub.publish('WordCounter:result', result);
  });
};

module.exports = WordCounter;
