// Select the display and buttons
const display = document.querySelector('.Display');
const buttons = document.querySelectorAll('button');
let history = []; // Array to store calculation history

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim(); // Get the button text content

    if (value === 'C') {
      display.value = ''; // Clear display
    } else if (value === '⌫') {
      display.value = display.value.slice(0, -1); // Backspace
    } else if (value === '=') {
      try {
        // Evaluate the expression in the display
        const result = eval(display.value);
        history.push(`${display.value} = ${result}`); // Save to history
        display.value = result; // Show result
      } catch (error) {
        display.value = 'Error'; // Handle invalid input
      }
    } else if (value === 'History') {
      showHistory(); // Show history
    } else if (value === "%") {
        try {
            // Evaluate the expression in the display
            const result = eval((display.value)/100);
            history.push(`${display.value} = ${result}`); // Save to history
            display.value = result; // Show result
          } catch (error) {
            display.value = 'Error'; // Handle invalid input
          }  
    }
    else {
      display.value += value; // Append value to the display
    }
  });
});

// Show history function
function showHistory() {
  if (history.length === 0) {
    alert('No history available.'); // No history
  } else {
    alert(`Calculation History:\n${history.join('\n')}`); // Display history
  }
}
