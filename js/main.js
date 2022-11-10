//Random Picker
let hitMeBtn = document.getElementById("randomPickerButton");
let randomParaDiv = document.getElementById("randomPicker");
let randomValuePara = document.getElementById("randomValuePara");

console.log(randomValuePara);

function randompickerbtn() {
    let hexValues = '123456789abcdef';
    let genValue = '#';
    for(let i = 0; i < 6; i++){
        genValue += hexValues[Math.floor(Math.random() * 15)];
    }
    // console.log(genValue);
    // console.log(randomValuePara);
    randomValuePara.innerText = genValue;
    randomParaDiv.style.backgroundColor = genValue;
}

function hexFindbtn() {

}

function RGBFindbtn() {
  
}

function RangeSelector() {
  
}

// hex to rgb converter

// Elements of HEX to RGB 
let hexInput = document.getElementById("hexCInp");
let convertButton = document.getElementById("HexConvertButton");
let rgbOutput = document.getElementById("hexCOut");

String.prototype.convertToRGB = function () {
  
};

function hexConvbtn() {
  
}

function rgbConvbtn() {
  
}
