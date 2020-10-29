//goToAnotherPage(LogIn Button Event Handlar)
const loginbtn = document.getElementById('btnlogin');
loginbtn.addEventListener('click', loginfunc);
function loginfunc(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";

    const transectionArea = document.getElementById('transection-area');
    transectionArea.style.display = "block";
}
//Deposit Button Event Handlar
const depbtn = document.getElementById('deposit');
depbtn.addEventListener('click', depositPart);

function depositPart(){
    const depositNumber = getInputNumber("depositAmount");

    UpdateSpanText("currentDeposit",depositNumber);
    UpdateSpanText("addBalance",  depositNumber);

    document.getElementById('depositAmount').value = "";
}

function UpdateSpanText(id, depositNumber){
    const nBalance = document.getElementById(id).innerText;
    const balanceAmount = parseFloat(nBalance);
    const totalBalance = depositNumber + balanceAmount;
    document.getElementById(id).innerText = totalBalance;
}

 //Withdraw Button Event Handlar

const withDrawButton = document.getElementById('withdraw');
withDrawButton.addEventListener('click', WithdrawBtn);

function WithdrawBtn(){
    const withdrawNumber = getInputNumber("withdrawMoney");
    
    UpdateSpanText("currentWithdraw", withdrawNumber);
    UpdateSpanText("addBalance", -1*withdrawNumber);
    document.getElementById("withdrawMoney").value="";
}

function getInputNumber(id){
    const WithdrawBalance = document.getElementById(id).value;
    const withdrawNumber = parseFloat(WithdrawBalance);
    return withdrawNumber;
}