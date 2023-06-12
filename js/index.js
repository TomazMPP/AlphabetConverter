const basicAlphabetMapping = {
  'А': 'A',
  'Б': 'B',
  'Ц': 'C',
  'Д': 'D',
  'Е': 'E',
  'Ф': 'F',
  'Г': 'G',
  'Х': 'H',
  'И': 'I',
  'Й': 'J',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Щ': 'Q',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'В': 'V',
  'Ш': 'W',
  'КС': 'X',
  'Ы': 'Y',
  'З': 'Z',
  'а': 'a',
  'б': 'b',
  'ц': 'c',
  'д': 'd',
  'е': 'e',
  'ф': 'f',
  'г': 'g',
  'х': 'h',
  'и': 'i',
  'й': 'j',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'щ': 'q',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'в': 'v',
  'ш': 'w',
  'кс': 'x',
  'ы': 'y',
  'з': 'z',
  'Э': 'E',
  'э': 'e',
};

const complexAlphabetMapping = {
  'ЩИ': 'QI',
  'щи': 'qi',
  'Ще': 'Qe',
  'ще': 'qe',
  'ЙО': 'IO',
  'йо': 'io',
  'Йу': 'IU',
  'йу': 'iu',
  'ЙА': 'IA',
  'йа': 'ia',
  'ЦУ': 'TSU',
  'цу': 'tsu',
  'Ё': 'YO',
  'ё': 'yo',
  'Ю': 'YU',
  'ю': 'yu',
  'Я': 'YA',
  'я': 'ya',
};

const convertCyrillicToLatin = (text) => {
  let convertedText = '';
  let i = 0;
  while (i < text.length) {
    let currentChar = text[i];
    let nextChar = text[i + 1];
    let nextNextChar = text[i + 2];
    if (nextNextChar && complexAlphabetMapping[nextChar + nextNextChar]) {
      convertedText += complexAlphabetMapping[nextChar + nextNextChar];
      i += 3;
    } else if (complexAlphabetMapping[currentChar + nextChar]) {
      convertedText += complexAlphabetMapping[currentChar + nextChar];
      i += 2;
    } else if (basicAlphabetMapping[currentChar]) {
      convertedText += basicAlphabetMapping[currentChar];
      i++;
    } else {
      convertedText += currentChar;
      i++;
    }
  }
  return convertedText;
};

const convertLatinToCyrillic = (text) => {
  let convertedText = '';
  let i = 0;
  while (i < text.length) {
    let currentChar = text[i];
    let nextChar = text[i + 1];
    let nextNextChar = text[i + 2];
    if (nextNextChar && Object.values(complexAlphabetMapping).includes(currentChar + nextChar + nextNextChar)) {
      const complexKey = Object.keys(complexAlphabetMapping).find(key => complexAlphabetMapping[key] === currentChar + nextChar + nextNextChar);
      convertedText += complexKey;
      i += 3;
    } else if (Object.values(complexAlphabetMapping).includes(currentChar + nextChar)) {
      const complexKey = Object.keys(complexAlphabetMapping).find(key => complexAlphabetMapping[key] === currentChar + nextChar);
      convertedText += complexKey;
      i += 2;
    } else if (basicAlphabetMapping[currentChar]) {
      convertedText += basicAlphabetMapping[currentChar];
      i++;
    } else {
      convertedText += currentChar;
      i++;
    }
  }
  return convertedText;
};

const cyrillicTextarea = document.getElementById('cyrillic');
const latinTextarea = document.getElementById('latin');
const copyCyrillicButton = document.getElementById('copyCyrillic');
const clearCyrillicButton = document.getElementById('clearCyrillic');
const copyLatinButton = document.getElementById('copyLatin');
const clearLatinButton = document.getElementById('clearLatin');

const updateLatinTextarea = () => {
  const cyrillicText = cyrillicTextarea.value;
  const convertedText = convertCyrillicToLatin(cyrillicText);
  latinTextarea.value = convertedText;
};

const updateCyrillicTextarea = () => {
  const latinText = latinTextarea.value;
  const convertedText = convertLatinToCyrillic(latinText);
  cyrillicTextarea.value = convertedText;
};

const copyTextToClipboard = (textAreaId) => {
  const textArea = document.getElementById(textAreaId);
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  document.execCommand('copy');
};

const clearTextarea = (textAreaId) => {
  document.getElementById(textAreaId).value = '';
};

cyrillicTextarea.addEventListener('input', updateLatinTextarea);
latinTextarea.addEventListener('input', updateCyrillicTextarea);

copyCyrillicButton.addEventListener('click', () => {
  copyTextToClipboard('cyrillic');
});

clearCyrillicButton.addEventListener('click', () => {
  clearTextarea('cyrillic');
});

copyLatinButton.addEventListener('click', () => {
  copyTextToClipboard('latin');
});

clearLatinButton.addEventListener('click', () => {
  clearTextarea('latin');
});