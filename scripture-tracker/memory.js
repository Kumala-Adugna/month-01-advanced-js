const verses = [];
let nextId = 1;
function addVerse(reference, text){
    const verseObject = {
        id : nextId,
        reference,
        text,
         memorized: false
    };
    verses.push(verseObject);
    nextId++;
    return verseObject;
}
console.log(addVerse("Psalm 46:1", "God is our refuge and strength, an ever-present help in trouble."));
console.log(addVerse("Jer 29:11", "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."));
console.log(verses.length)

function getReference(index) {
    if (index < 0 || index >= verses.length) {
        return "NOT FOUND";
    } 
    else {
        return verses[index].reference;
    }
}

console.log(getReference(0));
console.log(getReference(2));
function markMemorized(index) {
  if (index < 0 || index >= verses.length) {
    return "NOT FOUND";
  }
  verses[index].memorized = true;
  return verses[index];
}
console.log(markMemorized(10));
markMemorized(0);
console.log(verses);

function describeVerse(verse) {
   return { id: verse.id, reference: verse.reference };
   let label;
   if (verse.memorized) {
        label = "memorized";
    } else {
        label = "learning";
 }
    return { id: verse.id, reference: verse.reference, label };
}
console.log(describeVerse(verses[0]));
function getRandomVerse() {
    const min = 0;
    const max = verses.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    return verses[randomIndex];
}
console.log(describeVerse(getRandomVerse()));
console.log(describeVerse(getRandomVerse()));

function maskLastWord(text) {
   let sample = text;
   console.log(sample.length);
   const lastSpaceIndex = sample.lastIndexOf(" ");
   const firstPart = sample.substring(0, lastSpaceIndex);
   console.log(firstPart);
   console.log("_".repeat(sample.length - lastSpaceIndex - 1));
   const maskedText = firstPart + " " + "_".repeat(sample.length - lastSpaceIndex - 1);
   return maskedText;
}
console.log(maskLastWord(verses[0].text));