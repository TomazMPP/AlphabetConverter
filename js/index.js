const basicAlphabetMapping = {
    'A': 'А',
    'B': 'Б',
    'C': 'Ц',
    'D': 'Д',
    'E': 'Е',
    'F': 'Ф',
    'G': 'Г',
    'H': 'Х',
    'I': 'И',
    'J': 'Й',
    'K': 'К',
    'L': 'Л',
    'M': 'М',
    'N': 'Н',
    'O': 'О',
    'P': 'П',
    'Q': 'Щ',
    'R': 'Р',
    'S': 'С',
    'T': 'Т',
    'U': 'У',
    'V': 'В',
    'W': 'Ш',
    'X': 'КС',
    'Y': 'Ы',
    'Z': 'З',
    'a': 'а',
    'b': 'б',
    'c': 'ц',
    'd': 'д',
    'e': 'е',
    'f': 'ф',
    'g': 'г',
    'h': 'х',
    'i': 'и',
    'j': 'й',
    'k': 'к',
    'l': 'л',
    'm': 'м',
    'n': 'н',
    'o': 'о',
    'p': 'п',
    'q': 'щ',
    'r': 'р',
    's': 'с',
    't': 'т',
    'u': 'у',
    'v': 'в',
    'w': 'ш',
    'x': 'кс',
    'y': 'ы',
    'z': 'з'
  };
  
  const convertCyrillicToLatin = (text) => {
    let convertedText = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const convertedChar = basicAlphabetMapping[char] || char;
      convertedText += convertedChar;
    }
    return convertedText;
  };
  
  const convertLatinToCyrillic = (text) => {
    let convertedText = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const convertedChar = basicAlphabetMapping[char] || char;
      convertedText += convertedChar;
    }
    return convertedText;
  };
  
  const cyrillicTextarea = document.getElementById('cyrillic');
  const latinTextarea = document.getElementById('latin');
  
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
  
  cyrillicTextarea.addEventListener('input', updateLatinTextarea);
  latinTextarea.addEventListener('input', updateCyrillicTextarea);