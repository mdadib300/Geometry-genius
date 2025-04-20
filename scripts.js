function calculateTriangleArea(){
    // Getting Triangle Base
    const triangleBase = document.getElementById("triangle-base");
    const triangleBaseValue = triangleBase.value;
    const Base = parseFloat(triangleBaseValue);
    // Getting Triangle Height
    const triangleHeight = document.getElementById("triangle-height");
    const triangleHeightValue = triangleHeight.value;
    const Height = parseFloat(triangleHeightValue);
    // Calculating Area
    const triangleArea = 0.5*Base*Height;
    // Displaying Area
    const triangleAreaSpan = document.getElementById("triangle-area");
    triangleAreaSpan.innerText = triangleArea;
}


function calculateEllipseArea(){
    // a
    const ellipseA = document.getElementById("ellipse-a");
    const a = parseFloat(ellipseA.value);
    // b
    const ellipseB = document.getElementById("ellipse-b");
    const b = parseFloat(ellipseB.value);
    // area
    const area = 3.14*a*b;
    // Display
    const areaSpan = document.getElementById("ellipse-area");
    areaSpan.innerText = area.toFixed(2);
}