function updateShiftValue(rangeId, spanId) {
    const shift = document.getElementById(rangeId).value;
    document.getElementById(spanId).textContent = shift;
}

function cipher() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        outputText += char;
    }
    
    document.getElementById('outputText').value = outputText;
}

function decipher() {
    const inputText = document.getElementById('decipherInputText').value;
    const shift = parseInt(document.getElementById('decipherShift').value);
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        }
        outputText += char;
    }
    
    document.getElementById('decipherOutputText').value = outputText;
}