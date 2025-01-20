import base62 from 'base62/lib/ascii.js';

// 文本转base64
const name = 'duoduoxu';
const buf = Buffer.from(name);
const base64Data = buf.toString('base64');

console.log(base64Data);

// 数字(0-61)转base62
const base62Data = base62.encode(59);
console.log(base62Data);

function generateRandomStr(len) {
  let str = '';
  for (let i = 0; i < len; i++) {
    const randomNum = Math.floor(Math.random() * 62);
    str += base62.encode(randomNum);
  }
  return str;
}

// bP1Yn
console.log(generateRandomStr(5));
