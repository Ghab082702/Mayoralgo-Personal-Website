function submitClick() {
    if (formValidation()) {
      alert("Thank you for your time! Your details and inquiries have been submitted!");
      return true;
    } else {
      return false;
    }
  }

  function formValidation() {
    flag = true;

    if (document.myForm.user_name.value == "") {
      alert("Please fill in your Name!");
      flag = false;
    }

    // Validate letters only as Name
    if (!/^[a-zA-Z]*$/g.test(document.myForm.user_name.value)) {
      alert("Enter alphabetic characters as Name!");
      flag = false;
    }

    // Validate emails
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)* (\.\w{2,3})+$/.test(myForm.user_email.value)) //Regular expressions to validate email
    {
      //alert("Enter Valid Email Address!");
      //flag = false;
    }

    // Validate Phone number
    if (document.myForm.user_phone.value == "") {
      alert("Please fill in your Phone Number!");
      flag = false;
    }

    if (!/^[0-9]*$/g.test(myForm.user_phone.value)) {
      alert("Enter numeric values as Phone Number!");
      flag = false;
    }

    if ((document.myForm.userGender[0].checked == false) && (document.myForm.userGender[1].checked == false)) {
      alert("Please select your gender!");
      flag = false;
    }

    if (document.myForm.userAge.selectedIndex == 0) {
      alert("Please select your Age from the drop-down list!");
      flag = false;
    }

    if (document.myForm.termsAndConditions.checked == false) {
      alert("Please check the Terms and Conditions box!");
      flag = false;
    }
  

    return flag;
  }