//your JS code here. If required.
function submitForm(){
	//collect all the values from the above form
      var firstName =  document.getElementById("firstName").value;	
      var lastName =  document.getElementById("lastName").value;	
      var phoneNumber=  document.getElementById("phoneNumber").value;	
      var EmailId =  document.getElementById("EmailId").value;	

//create a message
var message=
	"First Name:" +firstName+"\n"+
	"Last Name:" +lastName+"\n"+
	"Phone Number:"+phoneNumber+"\n"+
	"Email ID:"+EmailId;
alert(message);


}


	
	