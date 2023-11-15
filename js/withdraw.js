document.getElementById('withdraw-button').addEventListener('click', function(){
    //start withdraw//
    const withdrawFild = document.getElementById('withdraw-fild');
    const withdrawFildString = withdrawFild.value;
    const withdrawFildnumber = parseFloat(withdrawFildString);
    withdrawFild.value = '';
    if(isNaN(withdrawFildnumber)){
        alert('Please enter a valid amount of number')
        return;
    }
    const oldWithdraw = document.getElementById('old-withdraw');
    const oldWithdrawString = oldWithdraw.innerText;
    const oldWithdrawNumber = parseFloat(oldWithdrawString);
    
        // start Blance//

    const oldBlance = document.getElementById('old-blance');
    const oldBlanceString = oldBlance.innerText;
    const oldBlanceNumber = parseFloat(oldBlanceString);
    
    if(withdrawFildnumber > oldBlanceNumber){
        alert('Your account do not have enough blance');
        return;
    }
    const totalWithdraw = withdrawFildnumber + oldWithdrawNumber;
    
    oldWithdraw.innerText = totalWithdraw;

        oldBlance.innerText = oldBlanceNumber - withdrawFildnumber;
})