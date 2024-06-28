document.addEventListener('DOMContentLoaded', function() {
   const sections = document.querySelectorAll('.hello');
    const text = document.querySelectorAll('h3');

    sections.forEach((section, index) => {
        section.addEventListener('click', function(event) {
            // Remove 'active' class from all other sections
            sections.forEach((otherSection, otherIndex) => {
                if (otherIndex !== index && otherSection.classList.contains('active')) {
                    otherSection.classList.remove('active');
                    text[otherIndex].classList.remove('active'); // Remove 'active' class from corresponding text
                }
            });

            // Toggle 'active' class on the clicked section
           section.classList.toggle('active');
            text[index].classList.toggle('active'); // Toggle 'active' class on corresponding text
        });
    });
});
