// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


window.onload = function () {
    document.getElementById('nameform').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.send('service_u4xvp73', 'template1234', {
            user_fname: document.getElementById('user_fname').value,
            user_lname: document.getElementById('user_lname').value,
            user_email: document.getElementById('user_email').value,
            user_phone: document.getElementById('user_phone').value,
            user_message: document.getElementById('user_message').value,
        }).then(function(response){
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("jumbotron").innerHTML = "SUCCESS!";
        }, function(error){
            console.log('FAILED...', error);
            document.getElementById("jumbotron").innerHTML = "FAILED!" + error;
        });
            
    });
}