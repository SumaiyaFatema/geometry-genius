function calculateRhombusArea(){
    const d1 = getInputValueById('rhombus-d1');
    console.log(d1)

    const d2 = getInputValueById('rhombus-d2');
    console.log(d2)

    const Area = 0.5 * d1 * d2;
    console.log('Rhombus Area:', Area)

    setInnerById('rhombus-area', Area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}