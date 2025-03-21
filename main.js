function checkDelimiter(str) {
    let stack = [];
    let delimiter = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            stack.push(str[i]);
        } else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
            let last = stack.pop();
            if (str[i] !== delimiter[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

let text = prompt("Ingresa el texto a revisar:");

console.log(checkDelimiter(text));