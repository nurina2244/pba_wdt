// Initialize Bootstrap Tooltips and Popovers on DOM Load[cite: 1]
document.addEventListener('DOMContentLoaded', function () {
  // Initialize Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize Popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

/**
 * User-Defined JavaScript Validation for Contact Us Modal Form[cite: 1]
 * Validates: Name, Email, Message, and Mandatory Ethical Consent Checkbox[cite: 1]
 */
function validateContactForm(event) {
  event.preventDefault();
  let isValid = true;

  // Form Input Elements
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const consentCheckbox = document.getElementById('ethicalConsent');

  // Error Message Elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const consentError = document.getElementById('consentError');

  // Regular Expression for Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 1. Validate Name
  if (nameInput.value.trim() === '') {
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameError.style.display = 'none';
  }

  // 2. Validate Email
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  // 3. Validate Message
  if (messageInput.value.trim() === '') {
    messageError.style.display = 'block';
    isValid = false;
  } else {
    messageError.style.display = 'none';
  }

  // 4. Validate Mandatory Ethical Consent Checkbox[cite: 1]
  if (!consentCheckbox.checked) {
    consentError.style.display = 'block';
    isValid = false;
  } else {
    consentError.style.display = 'none';
  }

  // Success Execution
  if (isValid) {
    alert('Thank you! Your message has been sent successfully.');
    document.getElementById('contactForm').reset();

    // Close Modal Programmatically
    var modalEl = document.getElementById('contactModal');
    var modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) {
      modal.hide();
    }
  }

  return isValid;
}

/**
 * Handles Tour Booking Submission
 */
function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById('bookName').value.trim();
  const packageSelected = document.getElementById('packageSelect').value;
  const date = document.getElementById('travelDate').value;

  alert(`Booking Request Submitted!\nName: ${name}\nPackage: ${packageSelected}\nTravel Date: ${date}`);
  document.getElementById('bookingForm').reset();
}