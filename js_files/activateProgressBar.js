const progressBar = document.querySelector(".progress-bar");

const activateProgressBar = () => {
    const scrollProgressBar = () => {
        console.log(window.innerHeight);
        console.log(window.scrollY);
        const progressPercentage =((window.scrollY*1.23) / document.documentElement.offsetHeight) * 100;
    
        const val = Math.floor(progressPercentage);
        progressBar.style.width = val + '%';
    
        if (val < 0) {
            progressBar.style.width = '0%';
        }
    };
    
    window.addEventListener('scroll', scrollProgressBar);
}

export default activateProgressBar;