export default function getTriangleText(text, number, decrease) {
  try {
    let i = 1;
    let added = 0;
    let length = text.length;
    let remain = length;
    while (number - i * decrease < remain && number - i * decrease > 0) {
      if (text[remain - number + i * decrease] == " ") {
        text = text.slice(0, remain - number + i * decrease) + "\n" + text.slice(remain - number + i * decrease + 1);
        i++;
      } else if (text[remain - number + i * decrease - 1] == " ") {
        text = text.slice(0, remain - number + i * decrease) + "\n" + text.slice(remain - number + i * decrease);
        i++;
      } else {
        text = text.slice(0, remain - number + i * decrease) + "-\n" + text.slice(remain - number + i * decrease);
        i++;
      }
      remain -= number - i * decrease;
    }
    return text;
  } catch (err) {
    console.log(err);
  }
}
