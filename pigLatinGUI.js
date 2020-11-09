const pigLatin = () => {
  bubbleAppear()
  let str = document.getElementById('translate-input').value
  console.log(str)
  let strArray = str.toLowerCase().trim().split(" ");
  let translatedArray = [];
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;

  for (let word in strArray) {
    str = strArray[word];
    if (vowels.includes(str[0])) {
      translatedArray.push(str + "yay");
    } else {
      for (let char of str) {
        if (vowels.includes(char)) {
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      translatedArray.push(
        str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
      );
    }
  }
  console.log(translatedArray.join(" "));
  document.getElementById('speechBubble').innerHTML = translatedArray.join(" ")
  return translatedArray.join(" ");
};

// let rectangle = $("#Rectangle");
let speechBubble = $("#speechBubble");


const bubbleAppear = () => {
  speechBubble.css({
    "animation-name": "expand-bounce",
    "animation-duration": "0.25s"
  })
}

const bubbleDisappear = () => {
  speechBubble.css({
    "animation-name": "shrink",
    "animation-duration": "0.1s"
  })
}
