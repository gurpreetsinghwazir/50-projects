let sections = document.querySelectorAll("img");
console.log(sections.value);


sections.forEach(section => {
    section.addEventListener('click', display);
});





	// remove active class from all another section 
	// and add it to the selected section
	
	function display(event) {
		// Remove active class from all other sections
		sections.forEach(section => {
			section.classList.remove('hello');
		});
	
		// Add active class to the clicked section
		event.target.classList.add('active');
	}