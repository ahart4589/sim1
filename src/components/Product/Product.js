import React from 'react'

export default function Product(props){
    return(
        <div style={{backgroundColor: 'white', color:'black'}}>
            name: {props.product.name}
            price: {props.product.price}
            imgurl: {props.product.imgurl}
            <button onClick={()=>props.deleteProduct(props.id)}>
                delete
            </button>
        </div>
    )
}