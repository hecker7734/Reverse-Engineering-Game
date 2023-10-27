const codeContainer = document.getElementById("result");
let level = 0
let es = document.getElementById('encoded-string');
let df = document.getElementById('decode-function');
const levels =
    [
        ["Z2FtZS5zY29yZT00Mg=="],
        ['WjJGdFpTNXRiMjVs#ZVQwMU5EQXdNQT09#'],
        ["#AMwETP*RHbhVG**IXZ5F$GbwZ*M00TZy92Yz5SZtF2Z"]
    ]

const Diff =
    [
        ["Easy"],
        ['Easy'],
        ["Medium"]
    ]
es.textContent = levels[level]
code(level)

function decode() {
    if (df.value == rgf45[level]) {
        next()
    }
}

function next() {
    while (codeContainer.firstChild) {
        codeContainer.removeChild(codeContainer.firstChild);
    }

    level += 1;
    es.textContent = levels[level]
    code(level)

}

function code(level) {
    // Define an array of keywords with associated colors
    const keywords = ['let', 'var', 'const', 'if', 'else', 'for', 'while', 'function', 'btoa', 'atob', ")", "("];
    const keywordsColor = ['blue', 'blue', 'blue', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'blue', 'blue'];

    function highlight(string) {
        let stringarray = string.split(" ");
        let result = ""; // Initialize an empty string to accumulate the highlighted code
        for (let i = 0; i < stringarray.length; i++) {
            if (keywords.indexOf(stringarray[i]) !== -1) {
                result += `<span style="color:${keywordsColor[keywords.indexOf(stringarray[i])]}">${stringarray[i]}</span> `;
            } else {
                result += `<span style="color:yellow">${stringarray[i]}</span> `;
            }
        }
        if (Diff[level] == "Easy") {
            result += `\n\n\n\n\n\n <span class="result" style="color:#00ff00">Easy</span> `;
        } else if (Diff[level] == "Medium") {
            result += `\n\n\n\n\n\n <span class="result" style="color:#ff800a">Medium</span> `;
        }
        return result.trim(); // Trim extra space at the end
    }

    const codeElement = document.createElement("pre");
    codeElement.innerHTML = highlight(escObsf[level]);
    codeContainer.appendChild(codeElement);
}