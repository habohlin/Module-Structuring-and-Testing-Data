export function getOrdinalNumber(num) {

  if ((num - 11) % 100 === 0){
    return num + "th";
  }

  if ((num - 1) % 10 === 0){
    return num + "st";
  }

  if ((num - 12) % 100 === 0) {
    return num + "th";
  }

  if ((num - 2) % 10 === 0){
    return num + "nd"
  }

  if ((num - 13) % 100 === 0) {
    return num + "th";
  }

  if ((num - 3) % 10 === 0) {
    return num + "rd";
  }

  return num + "th";

}
