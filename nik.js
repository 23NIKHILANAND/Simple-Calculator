let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let scrval = '';
for (item of buttons) {
    item.addEventListener('click', (e)=>{
        btn = e.target.innerText;
        console.log('Button text is ', btn);
        if (btn == 'X') {
            btn = '*';
            scrval += btn;
            screen.value = scrval;
        }
        else if (btn == 'C') {
            scrval = "";
            screen.value = scrval;
        }
        else if (btn == '=') {
            screen.value = eval(scrval);
        }
        else {
            scrval += btn;
            screen.value = scrval;
        }

    })
}

