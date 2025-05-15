export const getImageURL = (image) => {
    return new URL(`../assets/${image}`, import.meta.url).href;
}

export const checkPageValidity = (validator, page) => {
    if (validator.map(item => item.link.includes(page)).includes(true)) {
        return true
    } else {
        return false
    }
}

export const matchAnimal = (array, animal) => {
    return array.filter(item => item.link === animal)[0]
}