const addButton = document.getElementById('add-btn');
const inputField = document.getElementById('input-field');
const listedItems = document.getElementById('listed-items');

addButton.addEventListener('click', function(){
    const div = document.createElement('div');
    listedItems.appendChild(div);
    div.innerText = inputField.value;
    console.log(listedItems);
    inputField.value = "";
});