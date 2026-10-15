export function repeatStr(str, count) {

  if (count < 0){
    throw new Error("/Error: count should be non negative integer/");
  }

  let repeatedStr = "";

  for (let i=0; i<count; i++){
    repeatedStr += str;
  }

  return repeatedStr;
}
