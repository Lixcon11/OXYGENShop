const upButton = document.querySelector(".main__up-button");

const getUp = () => {
    upButton.addEventListener("click", () => {
        setTimeout(() => {
            document.documentElement.scrollTop = 0;
        }, 200);
    });
    window.addEventListener("scroll", () => {
        if(window.scrollY){
            upButton.style.animationName = "smooth-appear";
        }
        else {
            upButton.style.animationName = "smooth-disappear";
        }
    })
}

export default getUp;