document.addEventListener('DOMContentLoaded', function() {
    if (window.location.protocol === 'https:') {
        const targetDiv = document.getElementById('accessCounter');
        if (targetDiv) {
            targetDiv.innerHTML = `
                <img src="https://count.getloli.com/@CR-LF?name=CR-LF&theme=gelbooru&padding=8&offset=0&align=top&scale=1&pixelated=1&darkmode=auto" class="center" alt="アクセスカウンター" width="50%">
                <p class="gray center">↑アクセスカウンター(無断転載禁止)</p>
            `;
        }
    }
});