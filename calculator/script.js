document.getElementById('btn-1').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-1').innerHTML
    console.log();
});

document.getElementById('btn-2').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-2').innerHTML
    console.log();
});

document.getElementById('btn-3').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-3').innerHTML
    console.log();
});

document.getElementById('btn-4').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-4').innerHTML
    console.log();
});

document.getElementById('btn-5').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-5').innerHTML
    console.log();
});

document.getElementById('btn-6').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-6').innerHTML
    console.log();
});

document.getElementById('btn-7').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-7').innerHTML
    console.log();
});

document.getElementById('btn-8').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-8').innerHTML
    console.log();
});

document.getElementById('btn-9').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-9').innerHTML
    console.log();
});

document.getElementById('btn-10').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-10').innerHTML
    console.log();
});

document.getElementById('btn--').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn--').innerHTML
    console.log();
});

document.getElementById('btn-+').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-+').innerHTML
    console.log();
});

document.getElementById('btn-*').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-*').innerHTML
    console.log();
});

document.getElementById('btn-/').addEventListener('click', () => {
    document.getElementById('input').value = document.getElementById('input').value + document.getElementById('btn-/').innerHTML
    console.log();
});

document.getElementById('btn-=').addEventListener('click', () => {
    document.getElementById('input').value = eval(document.getElementById('input').value)
    console.log(document.getElementById('input').value);
});

document.getElementById('btn-c').addEventListener('click', () => {
    document.getElementById('input').value = ""
});

window.addEventListener('keydown', (e) => {
    try {
        if (e.key === 'Enter') {
            document.getElementById('input').value = eval(document.getElementById('input').value)
        }
        else if (e.key === 'c') {
            document.getElementById('input').value = ''
        }
        else if (e.key === '1') {
            document.getElementById('input').value = document.getElementById('input').value + '1'
        }
        else if (e.key === '0') {
            document.getElementById('input').value = document.getElementById('input').value + '0'
        }
        else if (e.key === '2') {
            document.getElementById('input').value = document.getElementById('input').value + '2'
        }
        else if (e.key === '3') {
            document.getElementById('input').value = document.getElementById('input').value + '3'
        }
        else if (e.key === '4') {
            document.getElementById('input').value = document.getElementById('input').value + '4'
        }
        else if (e.key === '5') {
            document.getElementById('input').value = document.getElementById('input').value + '5'
        }
        else if (e.key === '6') {
            document.getElementById('input').value = document.getElementById('input').value + '6'
        }
        else if (e.key === '7') {
            document.getElementById('input').value = document.getElementById('input').value + '7'
        }
        else if (e.key === '8') {
            document.getElementById('input').value = document.getElementById('input').value + '8'
        }
        else if (e.key === '9') {
            document.getElementById('input').value = document.getElementById('input').value + '9'
        }
        else if (e.key === '-') {
            document.getElementById('input').value = document.getElementById('input').value + '-'
        }
        else if (e.key === '*') {
            document.getElementById('input').value = document.getElementById('input').value + '*'
        }
        else if (e.key === '/') {
            document.getElementById('input').value = document.getElementById('input').value + '/'
        }
        else if (e.key === '+') {
            document.getElementById('input').value = document.getElementById('input').value + '+'
        }
        else {
            document.getElementById('input').value = document.getElementById('input').value +''
        }
    } catch (error) {
        
    }
})