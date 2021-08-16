
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amounValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amounValue;
}
//bank websit advance
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    //get balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
})
//withdraw balance reduce
document.getElementById('withDraw-btn').addEventListener('click', function () {
    const withdrawAmount=getInputValue('withDraw-input')
    //update withdraw total
    const withdrawTotal = document.getElementById('withDraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithDrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithDrawTotal + withdrawAmount;
    //update balance sit
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})