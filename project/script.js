// Set the payment amount for each service type
const TEMPORARY_CAREGIVER_PAYMENT = 300;
const FULLTIME_CAREGIVER_PAYMENT = 1500;

// Sample caretaker data
const caretakerData = [
  { name: 'John', rating: '4.5' },
  { name: 'Ravi Kumar', rating: '4.7' },
  { name: 'Michael', rating: '4.6' },
  { name: 'Suresh', rating: '4.8' },
  { name: 'Keerthi', rating: '4.4' }
];

// Track selected service type
let selectedServiceType = null;

document.getElementById('login-form').onsubmit = function (e) {
  e.preventDefault();
  document.getElementById('login').style.display = 'none';
  document.getElementById('service-selection').style.display = 'block';
};

// Temporary Caregiver Navigation
document.getElementById('temporary-caregiver').onclick = function () {
  selectedServiceType = 'temporary';
  document.getElementById('service-selection').style.display = 'none';
  document.getElementById('temp-caregiver').style.display = 'block';
};

// Full-Time Caregiver Navigation
document.getElementById('fulltime-caregiver').onclick = function () {
  selectedServiceType = 'fulltime';
  document.getElementById('service-selection').style.display = 'none';
  document.getElementById('fulltime-caregiver-section').style.display = 'block';
};

// Temporary Caregiver Form Submission with Validation
document.getElementById('temp-form').onsubmit = function (e) {
  e.preventDefault();

  // Get form values
  const fromDate = new Date(document.getElementById('from-date').value);
  const toDate = new Date(document.getElementById('to-date').value);
  const fromTime = document.getElementById('from-time').value;
  const toTime = document.getElementById('to-time').value;

  // Validate date and time
  if (toDate < fromDate) {
    alert('Error: "To Date" should not be earlier than "From Date".');
    return;
  }

  if (toDate.getTime() === fromDate.getTime() && toTime <= fromTime) {
    alert('Error: "To Time" should not be earlier than or equal to "From Time" on the same date.');
    return;
  }

  // Display payment page if validation passes
  document.getElementById('total-payment').textContent = `Total Payment: $${TEMPORARY_CAREGIVER_PAYMENT}`;
  document.getElementById('temp-caregiver').style.display = 'none';
  document.getElementById('payment-page').style.display = 'block';
};


// Full-Time Caregiver Form Submission
document.getElementById('fulltime-form').onsubmit = function (e) {
  e.preventDefault();
  document.getElementById('total-payment').textContent = `Total Payment: $${FULLTIME_CAREGIVER_PAYMENT}`;
  document.getElementById('fulltime-caregiver-section').style.display = 'none';
  document.getElementById('payment-page').style.display = 'block';
};

// Payment Option Buttons
document.getElementById('credit-debit-card').onclick = function () {
  document.getElementById('payment-form').style.display = 'block';
};

// UPI Payment Button
document.getElementById('upi').onclick = function () {
  document.getElementById('payment-form').style.display = 'none';
  document.getElementById('upi-qr').style.display = 'block';
};

// Payment Form Submission
document.getElementById('payment-form').onsubmit = function (e) {
  e.preventDefault();
  document.getElementById('payment-page').style.display = 'none';
  document.getElementById('payment-success').style.display = 'block';
  setTimeout(showCaretakerDetails, 5000);
};

// Show Caretaker Details
function showCaretakerDetails() {
  document.getElementById('payment-success').style.display = 'none';
  document.getElementById('caretaker-details').style.display = 'block';

  let selectedCaretaker;
  if (selectedServiceType === 'temporary') {
    selectedCaretaker = caretakerData[Math.floor(Math.random() * caretakerData.length)];
  } else if (selectedServiceType === 'fulltime') {
    selectedCaretaker = caretakerData.slice(0, 3); // Pick the first three as a sample
  }

  const caretakerContainer = document.getElementById('caretaker-info');
  caretakerContainer.innerHTML = ''; // Clear existing content

  if (selectedServiceType === 'fulltime') {
    selectedCaretaker.forEach(caretaker => {
      caretakerContainer.innerHTML += `
        <p><strong>Name:</strong> ${caretaker.name}</p>
        <p><strong>Rating:</strong> ${caretaker.rating}</p>
      `;
    });
  } else {
    caretakerContainer.innerHTML = `
      <p><strong>Name:</strong> ${selectedCaretaker.name}</p>
      <p><strong>Rating:</strong> ${selectedCaretaker.rating}</p>
    `;
  }
}

// Back to Login
document.getElementById('back-to-login').onclick = function () {
  document.getElementById('caretaker-details').style.display = 'none';
  document.getElementById('login').style.display = 'block';
};

// SOS Button
document.getElementById('sos-button').onclick = function () {
  document.getElementById('sos-alert').style.display = 'block';
  setTimeout(function () {
    document.getElementById('sos-alert').style.display = 'none';
  }, 2000);
};

// Apply for Job Navigation
document.getElementById('apply-for-job').onclick = function () {
  document.getElementById('service-selection').style.display = 'none';
  document.getElementById('apply-job').style.display = 'block';
};

// Job Application Form Submission
document.getElementById('apply-form').onsubmit = function (e) {
  e.preventDefault();
  document.getElementById('apply-job').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';
};

// Back to Login from Thank You Page
document.getElementById('back-to-login-from-thankyou').onclick = function () {
  document.getElementById('thank-you').style.display = 'none';
  document.getElementById('login').style.display = 'block';
};


