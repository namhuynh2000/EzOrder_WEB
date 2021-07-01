const splash = document.querySelector('.splash');
const progress = document.querySelector('.progress-bar');



document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(()=> {
        splash.remove();
    }, 2000)
    
    setTimeout(()=> {
        progress.parentElement.remove();
    }, 1000)
    
})
progress.style.width = `100%`;
progress.setAttribute('aria-valuenow', `100`);
