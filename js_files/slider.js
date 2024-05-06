const setAttributesByArray = (place, valueArray) => {
    place.setAttribute("style", valueArray.join('; '));
}

export { setAttributesByArray };