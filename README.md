# Scripture Memory Tracker

A small command-line program, written in plain JavaScript, that helps me keep track of Bible verses I'm memorizing. It stores verses in memory, marks them as memorized, picks a random one to review, and hides the last word of a verse so I can test myself.

Built in Month 1 of my backend roadmap to practice functions, arrays, objects, and string methods.

## How to run

You need [Node.js](https://nodejs.org) (LTS version). No other dependencies.

```
node memory.js
```

The bottom of `memory.js` adds a few verses and prints the results of each function.

## How it works

Each verse is an object:

```js
{ id: 1, reference: "Psalm 46:1", text: "...", memorized: false }
```

All verses live in the `verses` array. A counter, `nextId`, gives each new verse a unique id.

## Functions

| Function | What it does | Returns |
|---|---|---|
| `addVerse(reference, text)` | Creates a verse, adds it to `verses`, and increases `nextId` | The new verse object |
| `getReference(index)` | Looks up the reference at a position in the array | The reference string, or `"NOT FOUND"` for a bad index |
| `markMemorized(index)` | Sets `memorized` to `true` for the verse at that position | The updated verse, or `"NOT FOUND"` for a bad index |
| `describeVerse(verse)` | Builds a one-line summary | A string like `1: Psalm 46:1 [memorized]` or `2: Jer 29:11 [learning]` |
| `getRandomVerse()` | Picks a random verse for review | A verse object |
| `maskLastWord(text)` | Replaces the last word of a verse with underscores | The text with the last word hidden |

## Example output

```
1: Psalm 46:1 [memorized]
2: Jer 29:11 [learning]
```

## Known limitations

- Data is not saved. Everything is lost when the program ends.
- `markMemorized` and `getReference` take an array **index**, not an id.
- `maskLastWord` treats trailing punctuation as part of the last word, so the period is hidden too.
- `getRandomVerse` returns `undefined` if there are no verses yet.

## What I want to improve next

- Look verses up by `id` instead of index, using array methods like `find`.
- Use a loop to test `getRandomVerse` many times.
- Save verses to a JSON file and load them back.
- Leave trailing punctuation visible in `maskLastWord`.


## Notes

Verse text was typed by hand from my own Bible.