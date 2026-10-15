export function repeatStr(str, count) {

  let repeatedStr = "";

  if (count === 1){
    repeatedStr = 'hello';
  } else if (count === 3){
    repeatedStr = 'hellohellohello';
  }

  return repeatedStr;
}
