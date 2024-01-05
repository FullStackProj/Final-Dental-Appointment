document.addEventListener('DOMContentLoaded', function () {
   
    var myLink = document.getElementById('myLink');
  
    if (myLink) {
       
        myLink.addEventListener('click', function (event) {
            event.preventDefault(); 
            alert('Link clicked!');
        });
    }
});
