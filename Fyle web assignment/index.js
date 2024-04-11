document.querySelectorAll('i[data-target]').forEach(item => {
  item.addEventListener('mouseover', function() {
      const target = this.getAttribute('data-target');
      const popover = document.getElementById(target);  
      const arrow = popover.querySelector('.arrow');  
      arrow.style.visibility = 'visible';
      popover.style.visibility = 'visible';
  });

  item.addEventListener('mouseout', function() {
      const target = this.getAttribute('data-target');
      const popover = document.getElementById(target);
      const arrow = popover.querySelector('.arrow');
      arrow.style.visibility = 'hidden';
      popover.style.visibility = 'hidden';
  });
});

const form = document.getElementById('income-tax-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();


   const grossIncome = parseFloat(document.getElementById('gross-annual-income').value);
   const extraIncome = parseFloat(document.getElementById('extra-income').value) ;
   const deductions = parseFloat(document.getElementById('total-deductions').value);
  
  const ageGroup = document.getElementById('age-group').value;

  const grossIncomeIcon = document.querySelector('.error-icon[data-target="first-button"]');
const extraIncomeIcon = document.querySelector('.error-icon[data-target="second-button"]');
const deductionsIcon = document.querySelector('.error-icon[data-target="third-button"]');
console.log(grossIncome, extraIncome, deductions);
if (isNaN(grossIncome)) {
    grossIncomeIcon.style.visibility = 'visible';
    const toolTip= document.getElementsByClassName('tool-tip')[0];
    toolTip.style.visibility= 'visible';
} else {
    grossIncomeIcon.style.visibility = 'hidden';
    const toolTip= document.getElementsByClassName('tool-tip')[0];
    toolTip.style.visibility= 'hidden';
}

if (isNaN(extraIncome)) {
    extraIncomeIcon.style.visibility = 'visible';
    const toolTip= document.getElementsByClassName('tool-tip')[1];
    toolTip.style.visibility= 'visible';
} else {
    extraIncomeIcon.style.visibility = 'hidden';
    const toolTip= document.getElementsByClassName('tool-tip')[1];
    toolTip.style.visibility= 'hidden';
}

if (isNaN(deductions)) {
    deductionsIcon.style.visibility = 'visible';
    const toolTip= document.getElementsByClassName('tool-tip')[2];
    toolTip.style.visibility= 'visible';
} else {
    deductionsIcon.style.visibility = 'hidden';
    const toolTip= document.getElementsByClassName('tool-tip')[2];
    toolTip.style.visibility= 'hidden';
}

      const taxableIncome = Math.max(0, grossIncome + extraIncome - deductions - 800000);

      let taxRate;
      if (ageGroup === '0-40') {
          taxRate = 0.3;
      } else if (ageGroup === '40-60') {
          taxRate = 0.4;
      } else if (ageGroup === '60-100') {
          taxRate = 0.1;
      } else {
          console.error("Invalid age group selected");
          return;
      }

      const taxAmount = taxableIncome * taxRate;

      if(!isNaN(taxAmount)){
        const page= document.getElementsByClassName('container')[0];
        const form =  document.getElementById('income-tax-form');
        const button= document.getElementsByClassName('button2')[0];
        const amount= document.getElementsByClassName('amount')[0];
        amount.innerHTML = `${taxAmount}`
        page.style.visibility= 'visible';
        form.style.display= 'none'
        button.addEventListener('click', () => {
          page.style.visibility = 'hidden';
         form.style.display = 'block';
      });   
    }
    console.log(taxAmount);
});



