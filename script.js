document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.hello');
    const text = document.querySelectorAll('h3');

    sections.forEach(section => {
        section.addEventListener('click', function(event) {
            // Remove 'active' class from all other sections
            sections.forEach(otherSection => {
                if (otherSection !== section && otherSection.classList.contains('active')) {
                    otherSection.classList.remove('active');
                   
					
                }
            });

            // Toggle 'active' class on the clicked section
            section.classList.toggle('active');
          
        });
    });
});
