export function countChar(stringOfCharacters, findCharacter) {
  let numOfa = 0;

  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters.charAt(i) === findCharacter) {
      numOfa++;
    }
  }

  return numOfa;
}
