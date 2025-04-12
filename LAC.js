document.addEventListener('DOMContentLoaded', function() {
    if (window.location.protocol === 'https:') {
        const targetDiv = document.getElementById('accessCounter');
        if (targetDiv) {
            targetDiv.innerHTML = `
                <img src="https://counter.256server.com/crlf?theme=moebooru" class="center" alt="アクセスカウンター">
                <p class="gray center">↑アクセスカウンター</p>
            `;
        }
    }
});