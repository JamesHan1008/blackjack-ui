import React from "react";


const ListDealers = ({ dealers, handleClick }) => {
    let dealers_list = dealers.map((dealer) => {
        return (
            <li key={ dealer.id } onClick={() => handleClick(dealer.id)}>
                <a href="#">{ dealer.name }</a>
            </li>
        );
    });

    return (
        <div>
            <ul>
                { dealers_list }
            </ul>
        </div>
    );
}

export default ListDealers;
