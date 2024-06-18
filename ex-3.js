const languages = ["Pyton", "C++", "C#", "PHP"];
let message;
const find_language = "Java Script";
let find = false;
for (let i = 0; i < languages.length; i += 1) {
  if (languages[i] === find_language) {
    find = true;
  }
}
if (find !== true) {
  message = "Значення Java Script в списку немає, додаємо в масив";
  console.log(message);
  languages.push(find_language);
}
console.log(languages);
