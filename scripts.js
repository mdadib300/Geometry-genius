// ----------------- Long but Basic Process ------------------
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



// --------------------- Precise process with using function


// Function to get value from the input
function getValue(identification){
    const ValueString = document.getElementById(identification);
    const Value = parseFloat(ValueString.value);
    return Value;
}

// Displaying the area in the UI
function displayArea(areaIdentification, areaValue){
    const areaLocation = document.getElementById(areaIdentification);
    areaLocation.innerText = areaValue.toFixed(2);
}


// Now the work is easier!
function calculateParallelogramArea(){
    // getting b
    const b = getValue("parallelogram-b");
    // getting h
    const h = getValue("parallelogram-h");
    // calculation
    const area = b*h;
    // area display
    displayArea("parallelogram-area", area);
}

// after removing the comments, see how tiny the code is!
function calculatePentagonArea(){
    const p = getValue("pentagon-p");
    const b = getValue("pentagon-b");
    const area = 0.5*p*b;
    displayArea("pentagon-area", area);
}

function calculateRectangleArea(){
    const w = getValue("rectangle-w");
    const l = getValue("rectangle-l");
    const area = w*l;
    displayArea("rectangle-area", area);
}

function calculateRhombusArea(){
    const d1 = getValue("rhombus-d1");
    const d2 = getValue("rhombus-d2");
    const area = 0.5*d1*d2;
    displayArea("rhombus-area", area);
}






// ------------------- PROJECT COMPLETED! - 21/04/2025 ------------------  //