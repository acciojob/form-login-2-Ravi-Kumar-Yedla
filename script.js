//your JS code here. If required.
function submitForm(){
	//collect all the values from the above form
      var first =  document.getElementById("firstName");	
      var last =  document.getElementById("lastName");	
      var num=  document.getElementById("phoneNumber");	
      var email =  document.getElementById("EmailId");	

//create a message
var message=
	"First Name:" +firstName+"\n"+
	"Last Name:" +lastName+"\n"+
	"Phone Number:"+phoneNumber+"\n"+
	"Email ID:"+EmailId+"\n"+
alert(message);

}


	
	