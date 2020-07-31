const userNotExistAlert = document.getElementById('user-not-exist-alert');
const wrongPasswordAlert = document.getElementById('wrong-password-alert');

function logInSuccessful(){
	if(checkLogIn() === 2){
		showUserNotExistMessage();
	}
	else if(checkLogIn() === 1){
		showWrongPasswordMessage();
	}
	else{
		document.getElementById('log-in-btn').addEventListener('click',()=>{
		    
		    	window.location.href = '../dashboard.html';
		}); 
    		
	}

	
}


function showWrongPasswordMessage(){
	userNotExistAlert.classList.add("hide");
	wrongPasswordAlert.classList.remove("hide");
}

function showUserNotExistMessage(){
	userNotExistAlert.classList.remove("hide");
	wrongPasswordAlert.classList.add("hide");
}

function checkLogIn(){
	for(i = 0; i < users.length;i++){
		if (document.getElementById('email').value === users[i].email){
			if(document.getElementById('password').value === users[i].password){
				return 0;
			}
			return 1;
		}
	}
	return 2;
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
