export const addToWishList = (product) =>{
    return{
        type:"ADDTOWISHLIST",
        payLoad : product
    }
}
export const removeFromWishList = (item) =>{
    return{
        type:"REMOVEFROMWISHLIST",
        payLoad : item
    }
}