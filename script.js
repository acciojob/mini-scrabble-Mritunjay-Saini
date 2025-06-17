//your code here
    const textInput = document.getElementById('evaluatedText');
    const letterCount = document.getElementById('letterCount');

    textInput.addEventListener('input', () => {
      letterCount.textContent = textInput.value.length;
    });
 
