 const accButtons = document.querySelectorAll('.faq__accordion-button');
 accButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const item = this.parentElement;
        item.classList.toggle('active');
    });
 });