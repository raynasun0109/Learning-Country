export const removeProduct=(item)=>{
    return {
        type:"removeProduct",
        good:item
    }
}

export const addProduct=(item)=>{
    return {
        type:"addProduct",
        good:item
    }
}

export const removeCountry=(item)=>{
    return {
        type:"removeCountry",
        country:item
    }
}

export const addCountry=(item)=>{
    return {
        type:"addCountry",
        country:item
    }
}
