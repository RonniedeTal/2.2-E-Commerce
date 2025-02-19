
// Exercise 6
function validate() {
	var error ;
	// Get the input fields
	let submit=document.getElementById("btn")
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress")
	let fLastN = document.getElementById("fLastN")
	let fPassword = document.getElementById("fPassword")
	let fPhone = document.getElementById("fPhone")

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress")
	let errorLastN = document.getElementById("errorLastN")
	let errorPassword = document.getElementById("errorPassword")
	let errorPhone = document.getElementById("errorPhone")
	
	
	// Validate fields entered by the user: name, phone, password, and email

	const validateInputs=()=>{
		const emailReg=/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi
		

		if(fName.value == ""||fName.value==null){
			// error=errorName.value
			errorName.innerHTML="holi"
			fName.style.border = "1px solid red"
			return false
		}
		if(!emailReg.test(fEmail.value)){
			alert("ingrese valido")
			fEmail.style.border = "1px solid red"
			return false
		}
		return true
	}
	document.addEventListener("click", (e)=>{
		// if(fName.value == ""||fName.value==null){
		// 	let errorm=document.getElementById("invalid-feedback").value
		// 	e.preventDefault()
		// 	errorName.innerHtml=errorm
		
		// }
		if(e.target===submit){
			e.preventDefault()
			validateInputs()
		console.log("holi");
		}
		
		
	})

	

	// if(fEmail.value == ""){
	// 	error++;
	// }
	 
	// if(error>0){
	// 	alert("Error");
	// }else{
	// 	alert("OK");
	// }

}
