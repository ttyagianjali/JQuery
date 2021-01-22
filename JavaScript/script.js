function newItem(){
// adding new item to the list

    let li= $('<li></li>');
    let inputValue= $('#input').val();
    li.append(inputValue);

    if(inputValue === ''){
        alert('You must enter something!');
    }
    else{
        $('#list').append(li);
    }

    // crossing out item from the list of items.
    function crossOut(){
        li.toggleClass('strike');
    }
    li.on('dblclick', crossOut);
    

    // adding the delete button
    let crossOutButton= $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);
        function deleteListItem(){
            li.addClass('delete')
        }

    

    $('#list').sortable();

}
    

    
