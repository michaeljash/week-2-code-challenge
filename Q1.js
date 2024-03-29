function swapCase(inputString) {
    let swappedString = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}

// Example usage:
let input = "The Quick Brown Fox";
let output = swapCase(input);
console.log(output); // Output: "tHE qUICK bROWN fOX"