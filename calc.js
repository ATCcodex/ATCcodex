var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var estFeed = document.getElementById('estFeed');
var machineConstant = document.getElementById('machineConstant');
var resultField1 = document.getElementById('resultField1');
var circumferenceResult = document.getElementById('circumferenceResult');
var eResult = document.getElementById('eResult');
var fResult = document.getElementById('fResult');
var actualFeedResult = document.getElementById('actualFeedResult');
var actualStrokesResult = document.getElementById('actualStrokesResult');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event) {
    
    if (!numField1.value || !numField2.value || !machineConstant.value || !estFeed.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var w = parseFloat(machineConstant.value);
        var z = parseFloat(estFeed.value);
        
        var pitchDiameter = x / y;
        var circumference = pitchDiameter * 3.14159265358979;
        var step1 = circumference / z;
        var step2 = step1 / w;
        var step3 = step2 + 1;
        var f = 122 / step3;
        var roundedF = Math.round(f);
        var e = 122 - roundedF;
        var actualFeed = circumference / ((e / f) * w);
        var roundedCircumference = circumference.toFixed(2);
        var roundedStrokes = Math.round(step1);
        var roundedFeed = actualFeed.toFixed(4);
        var roundedPd = pitchDiameter.toFixed(4);
        
        
        
        resultField1.innerText = "Pitch Diameter: " + roundedPd;
        circumferenceResult.innerText = "Circumference: " + roundedCircumference;
        eResult.innerText = "E: " + e;
        fResult.innerText = "F: " + roundedF;
        actualStrokesResult.innerText = "Actual Strokes: " + roundedStrokes;
        actualFeedResult.innerText = "Actual Feed Per Stroke: " + roundedFeed; 
        
        event.preventDefault();
    }

});