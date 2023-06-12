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
  'з': 'z'
};

const convertCyrillicToLatin = (text) => {
  let convertedText = '';
  let currentChar = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    currentChar += char;
    if (basicAlphabetMapping[currentChar]) {
      convertedText += basicAlphabetMapping[currentChar];
      currentChar = '';
    }
  }
  if (currentChar) {
    convertedText += currentChar;
  }
  return convertedText;
};

const convertLatinToCyrillic = (text) => {
  let convertedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const convertedChar = Object.keys(basicAlphabetMapping).find(
      key => basicAlphabetMapping[key] === char
    ) || char;
    convertedText += convertedChar;
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
