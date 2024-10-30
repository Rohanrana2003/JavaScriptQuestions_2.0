let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let para2 = document.getElementById('para2');

let a = document.querySelectorAll('a');

let check1Dark = JSON.parse(localStorage.getItem('check1'));
let check2Dark = JSON.parse(localStorage.getItem('check2'));

if (check1Dark) {
    check1.checked = true;
}
if (check2Dark) {
    check2.checked = true;
}

changeFullDarkMode();
changeContentDarkMode();

check1.addEventListener('change', () => {
    changeFullDarkMode();
    changeContentDarkMode();
})
check2.addEventListener('change', changeContentDarkMode);


function changeFullDarkMode() {
    if (check1.checked) {
        a.forEach(e=>e.style.color = 'white')
    } else {
        a.forEach(e=>e.style.color = 'black')
    }
    changeTheme(check1, document.body, 'check1');
}

function changeContentDarkMode() {
    changeTheme(check2, para2, 'check2');
}

function changeTheme(checkbox, element, id) {

    if (checkbox.checked) {
        element.classList.remove('white');
        element.classList.add('dark');

        localStorage.setItem(id, true);

    } else {
        element.classList.remove('dark');
        element.classList.add('white');

        localStorage.setItem(id, false);
    }
}

