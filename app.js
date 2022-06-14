const sentence = "Hello world";

const isPalindrom = (word) => {
  const wordReverse = word.split("").reverse().join("");
  const result = word === wordReverse;
  //   console.log("result : ", result);
  return result;
};

const containsForbidenWords = (message) => {
  const forbidden = ["truffe", "salop"];
};

module.exports = { sentence, isPalindrom, containsForbidenWords };
