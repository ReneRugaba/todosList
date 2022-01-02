let ul = document.querySelector('#list');
let inputAddLi= document.querySelector('.addLi');
const buttonSubmitForm = document.querySelector('.submitForm');
let liInUl = document.querySelectorAll('li');

/**
 * remove element in ul
 * @param {Event} e 
 */
function deleteLiInUl(e){
    const li = e.target.parentElement;
    const parent =li.parentElement;
    parent.removeChild(li);
   
}

/**
 * remove focus and add readonly attribut when user press Enter in li
 * 
 * @param {Event} e 
 */
function inputAfterUpdate(e){
    e.stopPropagation();
    e.preventDefault();
    if (e.key === 'Enter') {
        e.target.setAttribute('readonly','readonly');
        e.target.blur();
    }
}

/**
 * remove readonly and add focus in input target to update
 * 
 * @param {Event} e 
 */
function inputBeforeUpdate(e){
    let inputTarget=e.target.parentElement.firstChild;
    inputTarget.removeAttribute('readonly')
    inputTarget.focus();
    inputTarget.addEventListener("keyup",inputAfterUpdate);
}

/**
 * create li
 * 
 * @param {*} textNode 
 * @returns HTMLElement
 */
function createLiElement(textNode){
    if (textNode) {
        let li=document.createElement('li');
        const updateLi = document.createElement('i');
        const deleteLi = document.createElement('i');
        updateLi.setAttribute('class','fas fa-edit');
        updateLi.addEventListener('click',inputBeforeUpdate)
        deleteLi.setAttribute('class','fas fa-trash-alt');
        deleteLi.addEventListener('click',deleteLiInUl)
        let input = document.createElement('input');
        input.value = textNode;
        input.setAttribute('readonly','readonly');
        input.setAttribute('class','listInput');
        li.append(input);
        li.appendChild(updateLi);
        li.appendChild(deleteLi);
        return li;
    }else{
        return false;
    }
}

/**
 * add li in ul
 * this function are executed when user 
 * @param {event} e 
 */
function execClickEventForm(e){
    e.stopPropagation();
    e.preventDefault();
    let textInput = inputAddLi.value;
    inputAddLi.value="";
    let li = createLiElement(textInput);
    if(li){
        ul.appendChild(li);
    }

}

buttonSubmitForm.addEventListener('click',execClickEventForm);

