const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
  ' ': ' '
};

function decode(expr) {
let codeLetter;
let morseLetter = '';
let morseArray = [];
let decodeLetter;
let returnString = '';


  while (expr.length >= 10) {
    codeLetter = Number(expr.substr(0, 10));
    codeLetter = String(codeLetter);
    expr = expr.slice(10, expr.length);

    if (codeLetter == 'NaN') {
      morseArray.push(' ');
    } else {
      codeLetter = codeLetter.match(/.{1,2}/g);
      for (let i in codeLetter) {
        if (codeLetter[i] == 10 ) {
          morseLetter = morseLetter + '.';
        } else {
          morseLetter = morseLetter + '-';
        }
    }

    morseArray.push(morseLetter);
    morseLetter = '';

  }
    

  }

  for(let x in morseArray) {
    morseLetter = morseArray[x];
    decodeLetter = MORSE_TABLE[morseLetter];
    returnString = returnString + decodeLetter;
  }

  return returnString;
}


module.exports = {
  decode
}