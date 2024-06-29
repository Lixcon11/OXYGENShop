const upButton = document.querySelector(".main__up-button");

const getUp = () => {
    upButton.addEventListener("click", () => {
        setTimeout(() => {
            document.documentElement.scrollTop = 0;
        }, 200);
    });
    window.addEventListener("scroll", () => {
        if(window.scrollY){
            upButton.classList.remove("smooth-disappear")
            upButton.classList.add("smooth-appear")
        }
        else {
            upButton.classList.remove("smooth-appear")
            upButton.classList.add("smooth-disappear")
        }
    })
}

export default getUp;