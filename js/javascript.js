var  btn_update = document.querySelector('.btn-update');
var btn_save = document.querySelector('.btn-save');
var name_input = document.querySelector('.name-input');
var email_input= document.querySelector('.email-input');
var phone_input = document.querySelector('.phone-input');
var web_input = document.querySelector('.web-input');

var table = document.querySelector('table')
var name_td = document.querySelector('.row-data .name-td')
var email_td = document.querySelector('.row-data .email-td')
var phone_td = document.querySelector('.row-data .phone-td')
var web_td = document.querySelector('.row-data .web-td')
var edit = document.querySelector('.row-data .edit')
var remove = table.querySelector('.row-data .remove')


btn_save.addEventListener('click', () => {

    var new_row = [
        {tag:'tr', class:'row-data', value:''},
        {tag:'td', class:'name-td', value: name_input.value},
        {tag:'td', class:'email-td', value: email_input.value},
        {tag:'td' , class :'phone-td' , value: phone_input.value },
        {tag:'td', class : 'web-td' , value: web_input.value},
        {tag:'td' , class: 'edit' , value: 'Edit'},
        {tag:'td' , class: 'remove' , value: 'Remove'},
    ]


    for (let i = 0 ; i < new_row.length; i++ ){
        let element = document.createElement(new_row[i].tag);
        element.className = new_row[i].class;
        element.innerHTML = new_row[i].value;
        if(name_input.value && email_input.value && phone_input.value && web_input.value){
         if(element.tagName==='TR'){
             document.querySelector('table tbody').appendChild(element);
         }else {
             document.querySelector('table tbody tr:last-child').appendChild(element);
         }
        }
    }
clearValueForm(name_input , email_input , phone_input , web_input )

})

document.addEventListener('click', (event) => {
    var rowParent = event.target.parentElement;
    if (event.target.className == 'edit') {
        name_input.value = rowParent.querySelector('.name-td').innerHTML;
        email_input.value = rowParent.querySelector('.email-td').innerHTML;
        phone_input.value = rowParent.querySelector('.phone-td').innerHTML;
        web_input.value = rowParent.querySelector('.web-td').innerHTML;
        btn_save.classList.add('hide');
        btn_update.classList.remove('hide');
        rowParent.classList.add('updating');
        // singleRowUpdate();

    }
    if (event.target.classList == 'remove') {
        event.target.parentElement.remove();
        clearValueForm(name_input, email_input, phone_input, web_input);
    }
    if (event.target.classList == 'btn-update') {
        var rowUpdate = document.querySelector('.updating');
        updateForm(rowUpdate, name_input, 0);
        updateForm(rowUpdate, email_input, 1);
        updateForm(rowUpdate, phone_input, 2);
        updateForm(rowUpdate, web_input, 3);

        clearValueForm(name_input, email_input, phone_input,web_input);
        removeClass(rowUpdate, 'updating')
        removeClass(btn_save, 'hide')
        addClass(btn_update, 'hide')



    }
})



function clearValueForm(...element) {
    for (let i = 0; i < element.length; i++) {
        element[i].value = '';
    }
}


function singleRowUpdate() {
    const rowUpdate = document.querySelectorAll('.updating');
    if (rowUpdate.length > 0) {
        for (let i = 0; i < rowUpdate.length; i++) {
            rowUpdate[i].classList.remove('updating');
        }
    }
}


function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}
function updateForm(parentRow, input, index) {
    parentRow.childNodes[index].innerHTML = input.value;
}







