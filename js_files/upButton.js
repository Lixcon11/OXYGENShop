const upButton = document.querySelector(".main__up-button");

const getUp = () => {
    upButton.addEventListener("click", () => {
        setTimeout(() => {
            document.documentElement.scrollTop = 0;
        }, 200);
    })
}

export default getUp;