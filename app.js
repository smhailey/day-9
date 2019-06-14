// let cars = [
//   { name: 'Saab' },
//   { name: 'Chevy' },
//   { name: 'Ford' },
//   { name: 'Kia' },
//   { name: 'Honda' }
// ];
// cars.forEach(
//   function (item) {
//     document.write(item.name);
//     console.log(item.name);
//   }
// );



// let person = {
//   firstName: "Theo",
//   middleName: "",
//   lastName: "Gerrard"
// }
// let string1 = "";
// function truthyExtractor() {
//   for (let property1 in person) {
//     string1 += person[property1];
//   }
//   document.write(string1);
//   console.log(string1);
// }
// truthyExtractor(person)



// let sentence = 'When i went to the mall i bought a pair of shoes.';

// function uppercase(str) {
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "i") {
//       arr[i] = "I";
//     }
//   }
//   let newSentence = arr.join(" ");
//   return newSentence
// }
// uppercase(sentence)
// console.log(uppercase(sentence))




// let jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

// function letterCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() == letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// letterCount(jsHistory, "A")
// console.log(letterCount(jsHistory, "A"))




let text = 'I scream, you scream, we all scream for icecream';

function uppercaseWord(str, word) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == word) {
      arr[i] = word.toUpperCase();
    }
    else if (arr[i] == (word + ",")) {
      arr[i] = (word.toUpperCase() + ",");
    }
  }
  let newText = arr.join(" ");
  return newText
}

uppercaseWord(text, "scream")
console.log(uppercaseWord(text, "scream"))