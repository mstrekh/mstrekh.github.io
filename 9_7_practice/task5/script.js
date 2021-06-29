const duplicateField = document.getElementById('duplicateField');
const btnOutput = document.getElementById('btn_output');
const inputText = document.getElementById('input_text');
 
inputText.addEventListener('keyup', () => {
    duplicateField.textContent = inputText.value;
    duplicateField.style = "border:1px solid rgb(40, 167, 69); border-radius: 2em ; padding: 5px;";
})

btnOutput.addEventListener('click', () => {
    const consoleValue = inputText.value;
    console.log(consoleValue);
    inputText.value = '';
    duplicateField.textContent = '';
    duplicateField.style = '';
})