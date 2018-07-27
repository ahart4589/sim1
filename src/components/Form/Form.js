import React, {Component} from 'react' 
import axios from 'axios'

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgurl: '',
        }
    }
    handleName = (event) => {
        this.setState({name: event.target.value})
    }

    handlePrice = (event) => {
        this.setState({price: event.target.value})
    }

    handleImgurl = (event) => {
        this.setState({imgurl: event.target.value})
    }

    cancelInput = () => {
        this.setState({
            name: '',
            price: 0,
            imgurl: '',
        })
    }

    addProduct = () => {
      const {name,price,imgurl} = this.state
      const newProduct = {name,price, imgurl}
        axios.post('/api/product',newProduct).then(results =>{
            this.props.updateProducts(results.data)
            this.setState({
                name: '',
                price: 0,
                imgurl: ''
            })
        })
    }

    render(){
        return(
            <div style={{}}>
                <input placeholder='Product Name' value={this.state.name} onChange={this.handleName}/>
                <input placeholder='Product price' value={this.state.price} onChange={this.handlePrice}/>
                <input placeholder='Product img url' value={this.state.imgurl} onChange={this.handleImgurl}/>
                <button onClick={this.cancelInput}>Cancel</button>
                <button onClick={this.addProduct}>Add</button>
            </div>
        )
    }
}