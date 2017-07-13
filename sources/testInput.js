class testInput{
	testName(name){
		if(name !== ''){
			return true;
		}
	}
	testRole(role){
		if(role !== ''){
			return true;
		}
	}
	testEmail(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	}
}

export default new testInput();