function calculateRectangleArea(){
   
    //get width 
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width)

    //get length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length)

    //calculate rectangle area
    const area = width*length;
    console.log('Calculate Rectangle Area: ',area)
    //display rectangle area 
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;


}