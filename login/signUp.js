const signUpButton = document.getElementById('sign-up-button')
const signUpForm = document.getElementById('sign-up-form')
const signUpSuccessfulPage = document.getElementById('sign-up-successful')

function signUpSuccessfulShow(){
	if(userExist()){
		document.getElementById('user-already-exist-alert').classList.remove('hide');
		document.getElementById('password-not-match-alert').classList.add('hide');
	}
	else if(document.getElementById('password').value != document.getElementById('confirm-password').value){
		document.getElementById('password-not-match-alert').classList.remove('hide');
        document.getElementById('user-already-exist-alert').classList.add('hide');
	}
	else {
		signUpForm.classList.add('hide');
		signUpSuccessfulPage.classList.remove('hide');
		document.getElementById('password-not-match-alert').classList.add('hide');
		document.getElementById('user-already-exist-alert').classList.add('hide');

    }
}

function userExist(){
	for(i = 0; i < users.length;i++){
		if (document.getElementById('email').value === users[i].email){
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