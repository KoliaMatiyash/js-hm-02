const languages = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];
for (let i = 0; i < languages.length; i += 1) {
  const language = languages[i];
  const new_language = language.slice(2);
  languages[i] = new_language;
}
console.log(languages);
