import React, {Component} from 'react'
import axios from 'axios'

import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventoryList: []
        }
    }
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then(response => {
            this.setState({
                inventoryList: response.data
            })
            // this.props.updateProducts(response.data)
        })
    }

    render(){
         
        return(
            <div style={{backgroundColor: 'red', color: 'white', fontFamily:'Tahoma'}}>
                Shelfie
                {
                 this.props.inventoryList.map((product, index) => {
                    return <div>
                    <Product key={index} product={product} deleteProduct = {this.deleteProduct} updateProducts={this.updateProducts}/>
                    
                    </div>
                    })
                }
            </div>
        )   
    }
}