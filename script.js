const buttons = Array.from(document.querySelectorAll('#calculator button'));

const screen = document.getElementById('screen');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        switch (value) {
            case '=':
                screen.value = eval(screen.value);
                break;
            case 'C':
                screen.value = '';
                break;
            default:
                screen.value += value;
                break;
        }
    });
});
