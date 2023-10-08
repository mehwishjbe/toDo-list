const addButton = document.getElementById('add-btn');
const inputField = document.getElementById('input-field');
const listedItems = document.getElementById('listed-items');

addButton.addEventListener('click', function(){
    if(inputField.value === ""){
        alert('enter text');
    }else{
        const div = document.createElement('div');
        listedItems.appendChild(div);

        const textField = document.createElement('span')
        textField.innerText = inputField.value;
        div.appendChild(textField);

        console.log(listedItems);
        inputField.value = "";

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';

    deleteButton.addEventListener('click', function(){
        listedItems.removeChild(div);
    });
    div.appendChild(deleteButton);
    
    
    }
});

   