const sentence = "Hello world";

const isPalindrom = (word) => {
  const wordReverse = word.split("").reverse().join("");
  const result = word === wordReverse;
  return result;
};

const forbidden = ["truffes", "truffe", "salop", "salo"];

const containsForbidenWords = (message) => {
  for (const sentence of message.split(" ")) {
    if (forbidden.includes(sentence.toLowerCase())) {
      return true;
    }
  }
  return false;
};

const removeForbidenWords = (message) => {
  const hasforbiddenWorlds = containsForbidenWords(message);

  if (!hasforbiddenWorlds) {
    return message;
  } else {
    return message
      .split(" ")
      .map((word) => {
        if (forbidden.includes(word.toLowerCase())) return "xxx";
        else return word;
      })
      .join(" ");
  }
};

module.exports = {
  sentence,
  isPalindrom,
  containsForbidenWords,
  removeForbidenWords,
};
