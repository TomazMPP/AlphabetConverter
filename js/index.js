const alphabetMapping = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'yo',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'y',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'kh',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ъ': '',
    'ы': 'y',
    'ь': '',
    'э': 'e',
    'ю': 'yu',
    'я': 'ya',
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'Yo',
    'Ж': 'Zh',
    'З': 'Z',
    'И': 'I',
    'Й': 'Y',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'Kh',
    'Ц': 'Ts',
    'Ч': 'Ch',
    'Ш': 'Sh',
    'Щ': 'Shch',
    'Ъ': '',
    'Ы': 'Y',
    'Ь': '',
    'Э': 'E',
    'Ю': 'Yu',
    'Я': 'Ya'
}

function convertCyrillicToLatin(text) {
    let convertedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const convertedChar = alphabetMapping[char] || char;
        convertedText += convertedChar;
    }
    return convertedText;
}

function convertLatinToCyrillic(text) {
    let convertedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        let convertedChar = char;
        for (const key in alphabetMapping) {
            if (alphabetMapping[key] === char.toLowerCase()) {
                convertedChar = key;
                break;
            }
        }
        convertedText += convertedChar;
    }
    return convertedText;
}

// Função de atualização dos textareas
function updateTextareas() {
    const cyrillicTextarea = document.getElementById('cyrillic');
    const latinTextarea = document.getElementById('latin');
    const cyrillicText = cyrillicTextarea.value;
    const latinText = latinTextarea.value;

    if (cyrillicText.length > 0) {
        const convertedText = convertCyrillicToLatin(cyrillicText);
        latinTextarea.value = convertedText;
    }
    else if (latinText.length > 0) {
        const convertedText = convertLatinToCyrillic(latinText);
    }
}

document.addEventListener('input', updateTextareas);