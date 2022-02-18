const initialState = {
    wishListDataRedux : []
}

const handleWishList = (state = initialState, action) =>{
    switch (action.type) 
    {
        case "ADDTOWISHLIST":
            return {
                ...state,
                wishListDataRedux: [...state.wishListDataRedux,action.payLoad]
            }
        case "REMOVEFROMWISHLIST":
            const temp = state.wishListDataRedux.filter((val) => val.item!==action.payLoad)
            return{
                ...state,
                wishListDataRedux : temp
            }
        default :
            return state
    }
}
export default handleWishList;