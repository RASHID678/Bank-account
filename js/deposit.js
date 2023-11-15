document.getElementById('deposit-button').addEventListener('click', function(){
    // start deposit //
    const depositFild = document.getElementById('deposit-fild');
    const depositString = depositFild.value;
    const depositNumber = parseFloat(depositString);

    const oldDeposit = document.getElementById('old-deposit');
    const oldDepositString = oldDeposit.innerText;
    const oldDepositNumber = parseFloat(oldDepositString);

    const totalDeposit = oldDepositNumber + depositNumber;

    depositFild.value = '';
    if(isNaN(depositNumber)){
        alert('Please enter a valid amount of number');
        return;
    }

    oldDeposit.innerText = totalDeposit;

    // emd Deposit//

    // start Blance//

    const oldBlance = document.getElementById('old-blance');
    const oldBlanceString = oldBlance.innerText;
    const oldBlanceNumber = parseFloat(oldBlanceString);

    const newBlance = depositNumber + oldBlanceNumber;
    oldBlance.innerText = newBlance;


})