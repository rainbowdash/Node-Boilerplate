module.exports = {
	sanity1: function () {
		//console.log('sanity 1 called');
		return 0;
	},
	sanity2: function(){
		//console.log('sanity 2 called');
		return "Sanity 2";
	},
	sanity3: function(){
		//console.log('sanity 3 called');
		if (true == true) {
			return true;
		}
	},
	sanity4: function(a){
		if (a == 0){
			//console.log('the value is 0');
			return "0";
		}
		else if (a > 0) {
			//console.log('the value is positive');
			return "positive";
		}
		else{
			//console.log('the value is negative')
			return "negative";
		}
	},
	//Sanity 5 is used to check the coverage reporters.
	//Do not write unit test for now
	sanity5: function(b){
		return b+1;
	}
};