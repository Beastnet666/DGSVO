document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.payclick-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            if (url) {
                // Hier könnte ein Tracking-Event oder Delay eingebaut werden
                window.open(url, '_blank');
            }
        });
    });
});
