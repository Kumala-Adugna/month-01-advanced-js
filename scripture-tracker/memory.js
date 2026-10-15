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