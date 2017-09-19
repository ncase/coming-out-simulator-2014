//reset choices pad
var labels = Object.keys(choices);
var height = (labels.length*30);
var padding = (120-height)/2;
choicesDOM.style.height = height+"px";
choicesDOM.style.padding = padding+"px 0";

Start();
