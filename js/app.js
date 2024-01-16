const elHomeBtn = document.querySelector('.home-btn')
const elInput1 = document.querySelector('.input1');
const elInput2 = document.querySelector('.input2');
const elBtn = document.querySelector('.btn');
const elResult = document.querySelector('.rezult');

// ============================= BTN START ============================= //

elBtn.addEventListener('mouseover', () => {
    elBtn.style.cssText = `
        cursor: pointer;
        transition: all 1s ease;
        background: linear-gradient(158deg, red, blue);
        filter: blur(1px);
    `
})

elBtn.addEventListener('mouseout', () => {
    elBtn.style.cssText = `
        padding: 10px 20px;
        cursor: pointer;
        background-color: red;
        color: white;
        border: none;
        border-radius: 10px;
        transition: all 1s ease;
    `
})


elBtn.addEventListener('click', () => {
    elResult.textContent = `Javobi: ${Number(elInput1.value) + Number(elInput2.value)}`;
    elResult.style.display = 'inline-block';

    if (elInput1.value == '') {
        elResult.textContent = 'Iltimos: raqam kiriting';
    } else if (elInput2.value == '') {
        elResult.textContent = 'Iltimos: raqam kiriting';      
    }
})



// ============================= BTN END ============================= //

// ============================= INPUTS START ============================= //

elInput1.addEventListener('input', () => {
    elResult.style.display = 'none';
})

elInput2.addEventListener('input', () => {
    elResult.style.display = 'none';
})

// ============================= INPUTS END ============================= //