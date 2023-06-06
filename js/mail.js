// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  document.body.classList.add('loading-cursor');
  var form = event.target;

  // Perform additional form validation if needed
  // ...

  // Send the form data using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Handle the server response if needed
      // ...

      

      var res_txt = document.getElementById('response').textContent = xhr.responseText;

      if (res_txt === "Message sent successfully"){

        document.getElementById('response').classList.toggle("response_on");

      }else{

        document.getElementById('response').classList.toggle("response_error");
      }

      document.body.classList.remove('loading-cursor');
      
// time out  and fade out
      setTimeout(function () {

        document.getElementById('response').style.display = 'none';
        location.reload();
        
        
      }, 4000);

      form.reset();
    }
  };
  xhr.send(new FormData(form));
}

// Attach the submitForm function to the form's submit event
var form = document.getElementById('emailForm');
form.addEventListener('submit', submitForm);