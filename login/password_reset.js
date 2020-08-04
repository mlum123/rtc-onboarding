const userNotExistAlert = document.getElementById("password-not-match-alert");
const resetSuccessfulPage = document.getElementById("reset-successful");
const resetHint = document.getElementById("reset-hint");
const resetForm = document.getElementById("reset-password-form");
const sendEmailBtn = document.getElementById("send-email-btn");

function resetSuccessfulShow(){

	if(checkUserExist()){
		resetSuccessfulPage.classList.remove("hide");
		resetHint.classList.add("hide");
		resetForm.classList.add("hide");
		userNotExistAlert.classList.add("hide");
		sendEmailBtn.classList.add("hide");
	}
	else{
		userNotExistAlert.classList.remove("hide");	
	}

}

function checkUserExist(){
	for (i = 0; i < users.length; i++){
		if(document.getElementById("email").value === users[i].email){
			return true;
		}
	}
	return false;

}


const users = [
	{
		firstName: 'Jessica',
		lastName: 'Smith',
		email: 'jessica@gmail.com',
		password: 'asdfg'
		
	},
	{
		firstName: 'Jane',
		lastName: 'Johnson',
		email: 'jjohnson@gmail.com',
		password: 'hello'
	}

]
