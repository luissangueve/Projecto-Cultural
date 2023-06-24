let ul= document.querySelector('nav .ul');

function openMenu(){/**vai ser usado na div com class menu-icon na nav */
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}