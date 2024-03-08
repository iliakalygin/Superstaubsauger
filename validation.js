function validateForm() {
  let nameInput = document.getElementById('name');
  let cardNumberInput = document.getElementById('card-number');
  let expiryInput = document.getElementById('expiry');
  let cvvInput = document.getElementById('cvv');

  // Reguläre Ausdrücke für Validierung
  let nameRegex = /^[a-zA-Z\s]+$/;
  let cardNumberRegex = /^[\d]{16}$/;
  let expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  let cvvRegex = /^[\d]{3}$/;

  // Name validieren
  if (!nameRegex.test(nameInput.value)) {
    alert('Bitte geben Sie einen gültigen Namen ein (nur Buchstaben und Leerzeichen).');
    nameInput.focus();
    return false;
  }

  // Kreditkartennummer validieren
  if (!cardNumberRegex.test(cardNumberInput.value)) {
    alert('Bitte geben Sie eine gültige 16-stellige Kreditkartennummer ein.');
    cardNumberInput.focus();
    return false;
  }

  // Ablaufdatum validieren
  if (!expiryRegex.test(expiryInput.value)) {
    alert('Bitte geben Sie ein gültiges Ablaufdatum im Format MM/JJ ein.');
    expiryInput.focus();
    return false;
  }

  // CVV validieren
  if (!cvvRegex.test(cvvInput.value)) {
    alert('Bitte geben Sie einen gültigen 3-stelligen CVV-Code ein.');
    cvvInput.focus();
    return false;
  }

  // Wenn alle Eingaben gültig sind, weiterleiten zur Datei "danke.html"
  window.location.href = 'loading_screen.html';
  return false; // Verhindern, dass das Formular abgeschickt wird
}