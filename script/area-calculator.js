function calculateTriangleArea() {
    // triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // triangle hight value
    const hightField = document.getElementById('triangle-height');
    const hightValueText = hightField.value;
    const hight = parseFloat(hightValueText);
    console.log(hight)

    // calculate area
    const area = 0.5 * base * hight;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area
}



function calculateRectangleArea() {
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);


    // get rectangle length

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);


    // calculate area
    const area = width * length;

    // show rectangle area
    const rectangleAreaArea = document.getElementById('rectangle-area');
    rectangleAreaArea.innerText = area;
}


// reuseable function ---> reduce duplicate code

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height)


    const area = base * height;
    setElementInnerText('parallelogram-area', area)
}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
}

// reuseable get input value field in number.
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}


//  reuseable set span, p, div etc text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}