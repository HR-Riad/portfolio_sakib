document.getElementById('login-submit').addEventListener('click',function(){
    // console.log('button clicked');
   /*  get user emaill */
    const emailField = document.getElementById('user-email');
    const UserEmail = emailField.value; 

   /*  get user pass */
   const PassField = document.getElementById('user-pass');
   const UserPass = PassField.value;

 /*    check email and password */
 
   if(UserEmail == 'ahsakib20@gmail.com' && UserPass == 'secret' ){
    //    console.log('valid user');
    window.location.href = 'home.html';
   }
   else {
      alert('invalid user');
   }

})