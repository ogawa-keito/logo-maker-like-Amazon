'use strict'

function make(e) {
    var logo = e;
    var sprits = logo.split('');
    const logo_area = document.getElementById('logos');
    logo_area.innerHTML = '';
    
    for(let i = 0; i < sprits.length; i ++) {
        logo_area.insertAdjacentHTML('beforeend','<img class="img" src="font/' + sprits[i] + '.gif">');
    }
    logo_area.insertAdjacentHTML('beforeend', '<img src="font/arrow.png" class="arrow">');
}


function start() {
    const string = document.getElementById('string').value;
    make(string);

}
 