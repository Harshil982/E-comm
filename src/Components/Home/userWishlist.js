import React from 'react';
import { useSelector } from 'react-redux'

function UserWishlist(props) {
    const myState = useSelector((state) => state.handleWishList)
    console.log(myState);
    return (
        <div>
            {myState.wishListDataRedux.length === 0 ? <h2>Nothing in WishList</h2> :
                <div>
                    {myState.wishListDataRedux.map((item, index) => (
                        <div key={index} style={{border : "2px solid dodgerblue",margin:"5vw"}}>
                            <p>{index+1}</p>
                            <p>{item.item}</p>
                            <p>{item.Price}</p>
                            <p>{item.discount}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default UserWishlist;








