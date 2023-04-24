const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const tipOutput = document.getElementById('tip-output');
const totalOutput = document.getElementById('total');
const calculateButton = document.getElementById('calculate');

function calculateTip() {
  const billAmount = billInput.value;
  const tipPercentage = tipInput.value / 100;
  const tipAmount = billAmount * tipPercentage;
  const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);
  totalOutput.textContent = '$' + totalAmount.toFixed(2);
}

tipInput.addEventListener('input', function() {
  const tipValue = tipInput.value + '%';
  tipOutput.textContent = tipValue;
});

calculateButton.addEventListener('click', calculateTip);
