/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
/// TODO
var respace = function(dictionary, sentence) {
  return sentence.length - dictionary.join().length
};

dictionary = ["looked","just","like","her","brother"]
sentence = "jesslookedjustliketimherbrother"

respace(dictionary, sentence)