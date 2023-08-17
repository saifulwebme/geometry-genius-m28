function calculateTriangleArea(){
    // triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // triangle hight value
    const hightField = document.getElementById('triangle-height');
    const hightValueText = hightField.value;
    const hight = parseFloat (hightValueText);
    console.log(hight)

    // calculate area
    const area = 0.5 * base * hight;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area
}



function calculateRectangleArea (){
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