function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    input.value = value.substring(0, 19);
  }
  function validateMonth(input) {
    let value = input.value.replace(/\D/g, '');
    
    value = value.substring(0, 2);
    
    if (value.length === 2) {
      const month = parseInt(value, 10);
      if (month < 1 || month > 12) {
        value = value.substring(0, 1);
      }
    }
    
    input.value = value;
  }
  
  function formatMonth(input) {
    if (input.value.length === 1 && input.value > 0) {
      input.value = '0' + input.value;
    }
  }
  
  function validateYear(input) {
    let value = input.value.replace(/\D/g, '');
    
    value = value.substring(0, 4);
    
    if (value.length === 4) {
      const year = parseInt(value, 10);
      if (year < 2024 || year > 2035) {
        value = value.substring(0, 3);
      }
    }
    
    input.value = value;
  }
  
  function formatYear(input) {
    if (input.value.length === 2 && input.value > 23) {
      input.value = '20' + input.value;
    }
  }