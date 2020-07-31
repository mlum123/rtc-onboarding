const userNotExistAlert = document.getElementById('user-not-exist-alert');
const wrongPasswordAlert = document.getElementById('wrong-password-alert');

function logInSuccessful(){
	
	for (i = 0; i < users.length; i++){
		if(document.getElementById("email").value === users[i].email){
			if(document.getElementById("password").value === users[i].password){
				return false;
			}
			showWrongPasswordMessage();
			return false;
		}
	}

	showUserNotExistMessage();
	return false;
}


function showWrongPasswordMessage(){
	userNotExistAlert.classList.add("hide");
	wrongPasswordAlert.classList.remove("hide");
}

function showUserNotExistMessage(){
	userNotExistAlert.classList.remove("hide");
	wrongPasswordAlert.classList.add("hide");
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
