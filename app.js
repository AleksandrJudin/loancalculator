document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
     console.log('Calculating...');

     //UI Vars

     const amount = document.getElementById('amount');
     const interest = document.getElementById('interest');
     const year = document.getElementById('years');
     const mounthlyPayment = document.getElementById('monthly-payment');
     const totalPayment = document.getElementById('total-payment');
     const totalInterest = document.getElementById('total-interest');

     const principal = parseFloat(amount.value);
     const colculatedInterest = parseFloat(interest.value) / 100 / 12;
     const colculatedPayments = parseFloat(years.value) * 12;


     //Расчитываем стоимость ежемесячного платежа
     const x = Math.pow(1 + colculatedInterest, colculatedPayments);
     const mounthly = (principal * x * colculatedInterest) / (x - 1);

     if(isFinite(mounthly)) {
          mounthlyPayment.value = mounthly.toFixed(2);
          totalPayment.value = (mounthly * colculatedPayments).toFixed(2);
          totalInterest.value = ((mounthly * colculatedPayments)- principal).toFixed(2);
     } else {
          
          showError('Please check your numbers')
     }
     resultShow();
     e.preventDefault();
}

// Ошибка при пустом значение
function showError(error) {
     const errorDiv = document.createElement('div'); 
     errorDiv.className = 'alert alert-danger'; 
     errorDiv.appendChild(document.createTextNode(error)); 
     const card = document.querySelector('.card');
     const heading = document.querySelector('.heading');
     card.insertBefore(errorDiv, heading);
     setTimeout(clearError, 3000)
}


//Изчезновение ошибки
function clearError() {
     document.querySelector('.alert').remove();
}

//Появление результата 

function resultShow() {
     const result = document.getElementById('result');
     if (amount.value || interest.value || years.value === '') {
           result.style.display = 'none';
     } else {
         result.style.display = 'block';
     }

     return result;
}