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
    const perPerson_Percentage = document.getElementById('people_percentage').value;
   
    // calculate total tip percentages
    const totalTip = parseFloat((bill * (perTip_Percentage / 100)).toFixed(2));
    const totalBill = parseFloat((bill + totalTip).toFixed(2));

    // calculate total tip for per person 
    const perPerson = (totalTip / perPerson_Percentage).toFixed(2);
    const perPerson_totalBill = (totalBill / perPerson_Percentage).toFixed(2);

    // display total tip amount on web page 
    const totalTipText = document.getElementById('totalTip').textContent = `${totalTip}`;
    const totalAmountText = document.getElementById('total_amount').textContent = `${totalBill}`;

    // display tip percentage on web page
    const tipAmountText = document.getElementById('tip_amount').textContent = `${perTip_Percentage}%`;

    // display person percentage on web page
    const perPersonText = document.getElementById('totalPeople').textContent = perPerson_Percentage;

    // display tip calculation on the page
    document.getElementById('perPerson_tip').textContent = totalTip;
    document.getElementById('totalCalculation').textContent = perPerson_totalBill;
}
calculateTip();

