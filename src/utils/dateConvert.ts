// funkcja konwersji daty na bardziej ludzki format
export function dateConvert(date: string) {
  const temp = new Date(date);
  const dateToReturn =
    temp.getFullYear() +
    "-" +
    temp.getMonth().toString().padStart(2, "0") +
    "-" +
    temp.getDay().toString().padStart(2, "0") +
    "-" +
    temp.getHours().toString().padStart(2, "0") +
    ":" +
    temp.getMinutes().toString().padStart(2, "0");

  return dateToReturn;
}
