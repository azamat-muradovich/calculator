const themeBtn = document.querySelector('#theme-btn')
const themeBtnImg = document.querySelector('#theme-btn img')
const headLink = document.querySelector('#head-link')
const htmlTag = document.documentElement

console.log(themeBtnImg);

themeBtn.addEventListener('click', () => {
    if (htmlTag.getAttribute('data-theme') == 'dark') {

        htmlTag.setAttribute('data-theme', 'light')
        themeBtnImg.setAttribute('src', './images/dark-theme-btn.svg')
        headLink.setAttribute('href', './images/light-theme-btn.svg')

    } else {

        htmlTag.setAttribute('data-theme', 'dark')
        themeBtnImg.setAttribute('src', './images/light-theme-btn.svg')
        headLink.setAttribute('href', './images/dark-theme-btn.svg')

    }
})

// calc 

let a = '' // First number = Brinchi son
let b = '' // Second number = Ikkinchi son
let sign = '' // Math operator = Matematik operator
let finish = false;

function allClear() {
    a = ''
    b = ''
    sign = ''
    finish = false
    screenResult.textContent = ''
}

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', '*', '/']

// ekranga chiqarish 

const screenResult = document.querySelector('#result')
const calcBtns = document.querySelector('.calc__buttons')
const clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', () => allClear())

calcBtns.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return
    if (event.target.classList.contains('ac')) return
    screenResult.textContent = ''
    const key = event.target.textContent


    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            screenResult.textContent = a
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            screenResult.textContent = b
        } else {
            b += key
            screenResult.textContent = b
        }
        return
    }
    if (action.includes(key)) {
        sign = key
        screenResult.textContent = sign
        return
    }

    if (key == '=') {
        if (b === '') b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = (+a) - (+b)
                break;
            case '*':
                a = (+a) * (+b)
                break;
            case '/':
                if (b === '0') {
                    screenResult.textContent = 'Хатолик'
                    a = ''
                    b = ''
                    sign = ''
                    return
                }
                a = (+a) / (+b)
                break;
        }
        finish = true
        screenResult.textContent = a
    }
})