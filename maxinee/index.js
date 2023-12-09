const conversions = {
    binary: {
      to: {
        octal: (number) => parseInt(number, 2).toString(8),
        decimal: (number) => parseInt(number, 2).toString(10),
        hexadecimal: (number) => parseInt(number, 2).toString(16).toUpperCase()
      }
    },
    octal: {
      to: {
        binary: (number) => parseInt(number, 8).toString(2),
        decimal: (number) => parseInt(number, 8).toString(10),
        hexadecimal: (number) => parseInt(number, 8).toString(16).toUpperCase()
      }
    },
    decimal: {
      to: {
        binary: (number) => parseInt(number, 10).toString(2),
        octal: (number) => parseInt(number, 10).toString(8),
        hexadecimal: (number) => parseInt(number, 10).toString(16).toUpperCase()
      }
    },
    hexadecimal: {
      to: {
        binary: (number) => parseInt(number, 16).toString(2),
        octal: (number) => parseInt(number, 16).toString(8),
        decimal: (number) => parseInt(number, 16).toString(10)
      }
    }
  };

  function validateInput() {
  const sourceConversion = document.getElementById('sourceConversion').value;
  const numberInput = document.getElementById('numberInput').value.trim();

  const isValid = {
    binary: /^[01]*$/,
    octal: /^[0-7]*$/,
    decimal: /^\d*$/,
    hexadecimal: /^[0-9A-Fa-f]*$/
  };

  if (!numberInput) {
    alert('Please enter a number.');
    return false;
  }

  if (!isValid[sourceConversion].test(numberInput)) {
    alert(`Invalid ${sourceConversion} input. Please enter a valid ${sourceConversion} number.`);
    document.getElementById('numberInput').value = '';
    return false;
  }

  return true;
}

function convertNumber() {
  const sourceConversion = document.getElementById('sourceConversion').value;
  const destinationConversion = document.getElementById('destinationConversion').value;
  const numberInput = document.getElementById('numberInput');
  const convertedOutput = document.getElementById('convertedOutput');
  const outputDiv = document.getElementById('output');

  if (sourceConversion === destinationConversion) {
    alert("Choose another destination number system.");
    return;
  }

  if (validateInput()) {
    const result = conversions[sourceConversion].to[destinationConversion](numberInput.value);
    convertedOutput.value = result;
    outputDiv.style.display = 'block';
  }
}

  function clearFields() {
    document.getElementById('numberInput').value = '';
    document.getElementById('convertedOutput').value = '';
    document.getElementById('output').style.display = 'none';
  }

  function logout() {
    alert('Logging out...');
  }