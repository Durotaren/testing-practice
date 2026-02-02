export function caesarCipher(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt();
    if (code >= 97 && code <= 122) {
      const num = ((code - 97 + 3) % 26) + 97;
      result += String.fromCharCode(num);
    } else if (code >= 65 && code <= 90) {
      const num = ((code - 65 + 3) % 26) + 65;
      result += String.fromCharCode(num);
    } else {
      result += str[i];
    }
  }
  return result;
}
