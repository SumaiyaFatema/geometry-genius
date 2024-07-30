/***
 * objective : get base, height of a triangle. calculate by area by using provided the formula
 * 
 * Step-1 : get base value of the triangle
 * step-2: added an id in the base input field 
 * step-3: getelementbyid  to access the input field
 * step-4:  get value from the input field.(value is string now, 14 no line)
 * step-5: convert the value to a number. use parsefloat 
 */

function calculateTriangleArea(){
    //get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base)

    //get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height) 

    //calculate triangle area
    const triangleArea = 0.5*base*height;
    console.log('Area of the triangle is: ',triangleArea)

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}