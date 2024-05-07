const setAttributesByArray = (place, valueArray) => {
    place.setAttribute("style", valueArray.join('; '));
}



const divWithImages = (imageArray) => {
    const newDiv = document.createElement("div");

    imageArray.forEach(element => {
        const image = new Image();
        image.src = element;
        newDiv.appendChild(image);
    });

    return newDiv;
};

export { setAttributesByArray, divWithImages };