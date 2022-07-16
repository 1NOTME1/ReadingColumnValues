const input = document.querySelector('#val');
const btn = document.querySelector('#btn');

btn.addEventListener('click', Cal);
input.onkeyup = function (e) { if (e.keyCode == 13) Cal(); }

function Cal() {
    let value = document.querySelector('#val').value;
    value = value.toUpperCase();
    let newConvertedValue = '';
    let newConvertedValueString = '';

    for (let i = 0; i < value.length; i++) 
    {
            if (!isNaN(value.charAt(i)))
                newConvertedValue += value.charAt(i);
            else
                newConvertedValueString += value.charAt(i);
    }
    const letterToNumber = lettersToNumber(newConvertedValueString)
    // console.log(newConvertedValue); console.log(newConvertedValueString); console.log(letterToNumber);
    
    if (value == "") {
        document.querySelector("#result").style.color = "red";
        document.querySelector("#result").innerHTML = "Wprowadz poprawne dane!";

    } else {
        document.querySelector("#result").style.color = "white";
        document.querySelector("#result").innerHTML = value + " = " + letterToNumber + "." + newConvertedValue;
        document.querySelector("#resultLong").innerHTML = "Komórka " + value + " ma wartość: " + letterToNumber + "." + newConvertedValue;

    }

}

function lettersToNumber(letters){
    return letters.split('').reduce((r, a) => r * 26 + parseInt(a, 36) - 9, 0);
}


