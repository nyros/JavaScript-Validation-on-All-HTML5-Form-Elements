// JavaScript Document

//JavaScript Validation for Account information

//Function for formValidation()
function formValidation()
{		
		//variable declaration for elements of the form
		
		var uid=document.register.username;
		var pid=document.register.password;
		var fname=document.register.firstname;
		var lname=document.register.lastname;
		var pic=document.register.picture;
		var gen=document.register.gender;
		var day=document.register.day;
		var month=document.register.month;
		var year=document.register.year;
		var hob=document.register.hobbies;
		var hto=document.register.haveto;
		var pno=document.register.phone;
		
		//code for checking of validations using if condition
		
		//validation for checking userid
		if(userid_validation(uid,5,8))
		{
		
		//statement for increasing the width of progressbar
		document.getElementById("progress_increment").style.width="70px";
		
		//statement for increasing the percentage
		document.getElementById("percent").innerHTML="10% validation completed";
		
		//validation for checking password
			if(passid_validation(pid,6))
			{
			document.getElementById("progress_increment").style.width="140px";
			document.getElementById("percent").innerHTML="20% validation completed";
			
			//validation for checking firstname
				if(fname_validation(fname,2,6))
				{
				document.getElementById("progress_increment").style.width="210px";
				document.getElementById("percent").innerHTML="30% validation completed";
				
				//validation for checking lastname
					if(lname_validation(lname,2,15))
					{
					document.getElementById("progress_increment").style.width="280px";
					document.getElementById("percent").innerHTML="40% validation completed";
					
					//validation for checking upload of a picture
						if(pic_validation(pic))
						{
						document.getElementById("progress_increment").style.width="350px";
						document.getElementById("percent").innerHTML="50% validation completed";
						
						//validation for checking the gender radio button 
							if(gen_validation(gen))
							{
							document.getElementById("progress_increment").style.width="370px";
							document.getElementById("percent").innerHTML="60% validation completed";
							
							//validation for checking date of birth using select box
							//validation to select day using select box
								if(day_validation(day))
								{
								document.getElementById("progress_increment").style.width="390px";
								document.getElementById("percent").innerHTML="63% validation completed";
								
								//validation to select month using select box
									if(month_validation(month))
									{
									document.getElementById("progress_increment").style.width="420px";
									document.getElementById("percent").innerHTML="66% validation completed";
									
									//validation to select year using select box
										if(year_validation(year))
										{
										document.getElementById("progress_increment").style.width="490px";
										document.getElementById("percent").innerHTML="70% validation completed";
										
										//validation for checking selection of hobbies using checkbox
											if(hob_validation(hob))
											{
											document.getElementById("progress_increment").style.width="540px";
											document.getElementById("percent").innerHTML="80% validation completed";
											
											//validation to select the country using select box
												if(hto_validation(hto))
												{
												document.getElementById("progress_increment").style.width="630px";
												document.getElementById("percent").innerHTML="90% validation completed";
												
												//validation for phonenumber
													if(pno_validation(pno))
													{
													document.getElementById("progress_increment").style.width="700px";
													document.getElementById("percent").innerHTML="100% validation completed";
													
													//to display message after entire validation completed
														validationMessage();
													}//username 
												}//password
											}//firstname
										}//lastname
									}//picture
								}//gender
							}//day
						}//month
					}//year
				}//hobbies
			}//have to be
		}//
		return false;
}//formValidation() close

//function for Validation of Username
function userid_validation(uid,mx,my)  
{  
    var uid_len = uid.value.length;  
	var chars=/[^A-Za-z\d]/;
	
	if (uid_len == 0)  
    {    
    alert("Please enter your username"); 
	uid.focus(); 
	return false;  
    } 
	else if(uid.value.match(chars))
	{
	alert("Please enter alphanumeric characters only,Special characters are not allowed"); 
	uid.focus(); 
	return false;  
	}
	else if(uid_len >= my || uid_len < mx)
	{
	alert("username must lie between "+mx+" to "+my); 
	uid.focus(); 
	return false;  
	}
    return true;  
	
}  


//function for Validation of Password
function passid_validation(pid,mx)  
    {  
    var passid_len = pid.value.length;  
	var chars=/[^A-Za-z\d]/;
	
    if (passid_len == 0)  
    {  
    alert("Please enter your password");  
    pid.focus();  
    return false;  
    } 
	else if(pid.value.match(chars))
	{
	alert("Please enter alphanumeric characters only,Special characters are not allowed"); 
	pid.focus(); 
	return false;  
	}
	else if(passid_len < mx)  
    {  
    alert("Password should be maximum of 6 characters");  
    pid.focus();  
    return false;  
    }  
    return true;  
}

//function for Validation of Firstname
function fname_validation(fname,mx,my)  
{  
    var fname_len = fname.value.length;  
    if (fname_len == 0)  
    {    
    alert("Please enter your firstname"); 
	fname.focus(); 
	return false;  
    }  
	else if(fname_len >= my || fname_len < mx)
	{
	alert("Firstname must lie between "+mx+" to "+my); 
	fname.focus(); 
	return false;  
	}
    return true;  
}  

//function for Validation of Lastname
function lname_validation(lname,mx,my)  
{  
    var lname_len = lname.value.length;  
    if (lname_len == 0)  
    {    
    alert("Please enter your lastname"); 
	lname.focus(); 
	return false;  
    }  
	else if(lname_len >= my || lname_len < mx)
	{
	alert("lastname must lie between "+mx+" to "+my); 
	lname.focus(); 
	return false;  
	}
    return true;  
}  

//function for Validation of Picture
function pic_validation(pic)  
{  
    var pic_len = pic.value.length;  
    if (pic_len == 0 )  
    {  
    alert("You must upload a picture"); 
	pic.focus(); 
	return false;  
    }  
    return true;  
}  

//function for Validation of Gender
function gen_validation(gen)  
{  
   for (var i = 0; i < gen.length; i++) 
	{		
        if (gen[i].checked) 
		{
            return true;
        }
    }
    alert("You must enter your gender");
	return false;
}  

//function for Validation of Day
function day_validation(day)
{
	if (day.selectedIndex == 0)
	{
        alert("Please select the day");
        return false;
    } else {
        return true;
    }
}

//function for Validation of Month
function month_validation(month)
{
	if (month.selectedIndex == 0)
	{
        alert("Please select the month");
        return false;
    } 
	else 
	{
        return true;
    }
}

//function for Validation of Year
function year_validation(year)
{
	if (year.selectedIndex == 0)
	{
        alert("Please select the year");
        return false;
    } 
	else 
	{
        return true;
    }
}

//function for Validation of Hobbies
function hob_validation(hob)  
{  
    for (var i = 0; i < hob.length; i++) 
	{		
        if (hob[i].checked) 
		{
            return true;
        }
    }
    alert("You must enter your hobby");
	return false;
}  

//function for Validation of selecting country
function hto_validation(hto)
{
	if (hto.selectedIndex == 0)
	{
        alert("Please select what do you want to be.");
        return false;
    }
	else 
	{
        return true;
    }
}

//function for Validation of PhoneNo
function pno_validation(pno)  
{  
   var pno_len = pno.value.length; 
	var pno_char = /^[-]?\d*\.?\d*$/;
	var pno_num = /^[0-9]+$/; 
	var pattern =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	  //condition for checking of number
	  
	  	if(pno.value.match(pno_num))
		{
			if(pno.value.match(pattern)) //condition for checking of pattern
			{
		  		return true;
			}
			else
			{
				alert("Invalid pattern , pattern should be in 8978245650"); 
				pno.focus();
				return false; 
			}
				
		}
		
		else if(pno_len==0)
		{
			alert("Please Enter Your Phone Number"); 
			pno.focus();
			return false; 
		}
		else  
		{  
			alert("Phone Number Should Not Be in Alphabets or Special Characters");  
			pno.focus();
			return false;  
		}  

}

//function for validation of a message
function validationMessage(){
	
	document.getElementById("message").innerHTML="Well Done! you sucessfully read this important alert message";
}


