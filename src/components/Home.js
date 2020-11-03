import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    state = {
      loading:true,
      items:[]
    };
    async componentDidMount(){
      const url ="http://demo9206388.mockable.io/sarthak";
      const response = await fetch(url);
      const data =await response.json();
      this.setState({items:data,loading:false})
      localStorage.setItem("names", JSON.stringify(data));

    }


    handleClick = (id)=>{
        this.props.addToCart(id);
        alert("Item added Succesfully");
    }


    render(){

        let itemList = this.state.items.map(item=>{
            return(
              this.state.loading? <div>Loading...</div>:
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.image} alt="Image_"/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>
                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price} Rs</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">All Products</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
