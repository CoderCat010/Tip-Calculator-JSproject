const rangeSliders = document.querySelectorAll('input[type="range"]');

// loop through each one range input by foreach 
rangeSliders.forEach(function(slider){
    slider.addEventListener('input', calculateTip)
})

// call the calculateTip function when bill's value changes.
const billInput = document.getElementById('bill');
billInput.addEventListener('change', calculateTip);

// calculateTip function
function calculateTip(){
    // parsefloat bill input value
    const bill = parseFloat(billInput.value);
    billInput.value = bill.toFixed(2);
   
    // get tip percentage per person
    const perTip_Percentage = document.getElementById('tip_percentage').value;
    // get total people percentage 
    const perPerson_Percentage = document.getElementById('people_amount').value;
   
    
}


