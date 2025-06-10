document.addEventListener('DOMContentLoaded', function() {
    // control accordion
    const accButtons = document.querySelectorAll('.faq__accordion-button');
    accButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            item.classList.toggle('active');
        });
    });


    // Open modal
    document.querySelectorAll('[data-modal-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-modal-target');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    // Close modal
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal on outside click
    window.addEventListener('click', e => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });


    // Handle check
    document.querySelectorAll('[data-check]').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-check');
            const input = document.getElementById(id);
            if (input) {
                input.checked = true;
            }
        });
    });

    // Handle uncheck
    document.querySelectorAll('[data-uncheck]').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-uncheck');
            const input = document.getElementById(id);
            if (input) {
                input.checked = false;
            }
        });
    });
});