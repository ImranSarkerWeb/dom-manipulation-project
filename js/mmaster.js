const allInput = document.querySelectorAll('input');


//function

function getValueFromIputFieldByID(elementId) {
    const fieldElement = document.getElementById(elementId)
    const value = parseFloat(fieldElement.value)
    return value;
}


function setDataById(elementId, value) {
    const fieldElement = document.getElementById(elementId)
    fieldElement.innerText = value;
}

//value grabbing



document.getElementById('calculate').addEventListener('click', function () {
    const income = getValueFromIputFieldByID('income')
    const foodCost = getValueFromIputFieldByID('food')
    const rent = getValueFromIputFieldByID('rent')
    const clothesCost = getValueFromIputFieldByID('clothes')

    if (income > 0 && foodCost >= 0 && rent >= 0 && clothesCost >= 0) {
        const totalExpense = foodCost + rent + clothesCost;
        if(income>=totalExpense){
        const elementTotalExpense = document.getElementById('total-expense')
        elementTotalExpense.innerText = totalExpense;
        const balance = income - totalExpense;
        const elementBalance = document.getElementById('balance')
        elementBalance.innerText = balance;
        }else{
            alert('Your expense exceds your income.')
        }
    }else{
        alert('fill the input field.')
    }
})

document.getElementById('save').addEventListener('click', function(){
    const income = getValueFromIputFieldByID('income')
    const savingPercent = getValueFromIputFieldByID('save-percentage')
    
    const saving = (savingPercent/100)*income
    
    const savinElement = document.getElementById('saving-amount')
    savinElement.innerText = saving;

    //total expense
    const elementTotalExpense = document.getElementById('total-expense')
    const totalExpense = parseFloat(elementTotalExpense.innerText);

    //set remaining value
    const remainingElement = document.getElementById('remaining-balance')
    remainingElement.innerText = income - (saving + totalExpense)
})


// all input validation
for (let i = 0; i < allInput.length; i++) {
    allInput[i].addEventListener('keyup', function (e) {
        let value = e.target.value
        if (isNaN(value)) {
            alert('please input positve number')
            e.target.value = ''
        }

    })
}