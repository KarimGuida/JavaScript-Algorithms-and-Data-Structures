// Sometimes you may want to store data in a flexible Data Structure.
// A JavaScript object is one way to handle flexible data.
// They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
];
  
myMusic.push({"artist": "Linkin Park", "title": "Pushing Me Away", "release_year": 2000, "formats": ["CD", "BluRay"]});