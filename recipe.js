let recipeID = 0;

document.getElementById('newIngredient').addEventListener('click', () => {

    let table = document.getElementById('recipeTable');
    let row = table.insertRow(1);

    row.setAttribute('id', `ingredient-${recipeID}`);
    row.insertCell(0).innerHTML = document.getElementById('ingredient').value;
    row.insertCell(1).innerHTML = document.getElementById('amount').value;

    let actions = row.insertCell(2);
    actions.appendChild(deleteButton(recipeID++));

    document.getElementById('ingredient').value = '';
    document.getElementById('amount').value = '';
});

document.getElementById('newRecipe').addEventListener('click', () => {
    let recipeHeader = document.getElementById('recipeHeader');
    recipeHeader.innerHTML = document.getElementById('recipe').value;
});

document.getElementById('deleteRecipe').addEventListener('click', () => {
    let recipeHeader = document.getElementById('recipeHeader');
    recipeHeader.innerHTML = '';
    document.getElementById('recipe').value = '';
});

document.getElementById('deleteAll').addEventListener('click', () => {

    for (let x = recipeID; x >= 0; x--) {
        let elementToDelete = document.getElementById(`ingredient-${x}`);
        
        if(elementToDelete) {
            elementToDelete.parentNode.removeChild(elementToDelete);
        }
    }

    recipeID = 0;
})

function deleteButton(id) {
    
    let btn = document.createElement('btn');
    btn.setAttribute('id', id);
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`ingredient-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };

    return btn;
}
