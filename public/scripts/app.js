// Name: Suprem Vanam
// Student ID: 301177430
// Date: 20-JUNE-2021

// IIFE - Immediately Invoked Function Expression

(function() {
    function Start()
    {
    	console.log("App started...");
    	let deleteButton =  document.querySelectorAll('.btn-danger');

    	for(button of deleteButton)
    	{
    		button.addEventListener('click', (event) =>{
    			if(!confirm('Are you sure?'))
    			{
    				event.preventDefault();
    				window.location.assign('/list');
    			}
    		});
    	}
    }
    window.addEventListener("load", Start);
})();