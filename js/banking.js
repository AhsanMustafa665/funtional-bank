// deposit
let depositValue = document.getElementById('deposit-value')
let depositOutput = document.getElementById('deposit-output')

// Withdraw
let withdrawValue = document.getElementById('withdraw-value');
let withdrawOutput = document.getElementById('withdraw-output');

// balance
let balanceOutput = document.getElementById('balance-output');

function addMoney(currentAmount, newAmount) {
    let result = Number(currentAmount) + Number(newAmount);
    return result;
}
function getMoney(currentAmount, newAmount) {
    let result = Number(currentAmount) - Number(newAmount);
    return result;
}

function deposit() {
    let totalDeposit = addMoney(depositOutput.innerText, depositValue.value)
    depositOutput.innerText = totalDeposit;
    const totalBalance = addMoney(balanceOutput.innerText, depositValue.value);
    balanceOutput.innerText = totalBalance;

    // clean-up
    depositValue.value = '';
}

function withdraw() {
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);
    withdrawOutput.innerText = totalWithdraw;

    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
    balanceOutput.innerText = totalBalance;

    // clean-up
    withdrawValue.value = '';
}












