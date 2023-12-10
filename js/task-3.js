function getElementWidth(content, padding, border){
const contentPx = parseFloat(content);
const paddingPx = parseFloat(padding);
const borderPx = parseFloat(border);
return contentPx + paddingPx * 2 + borderPx * 2; 
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200