
//get base value
function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);

    //get height value

    const parallelogramWeightInput = document.getElementById('parallelogram-weight');
    const parallelogramWeightText = parallelogramWeightInput.value;
    const weight = parseFloat(parallelogramWeightText);
    console.log(weight);

    //calculate Area

    const area = base*weight;
    console.log('Area of the parallelogram is: ',area);

    // 
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;




}