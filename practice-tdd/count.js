export function countChar(stringOfCharacters, findCharacter) {
  let numOfChar = 0;

  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters.charAt(i) === findCharacter) {
      numOfChar++;
    }
  }

  return numOfChar;
}
