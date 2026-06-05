const rangeSliders = document.querySelectorAll('input[type="range"]');

// loop through each one range input by foreach 
rangeSliders.forEach(function(slider){
    slider.addEventListener('input', calculateTip)
})

// call the calculateTip function when bill's value changes.
const billInput = document.getElementById('bill');
billInput.addEventListener('change', calculateTip);



