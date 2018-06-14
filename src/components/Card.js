import React, { Component } from "react";
// Css
import "./css/Card.css";
// Data
import Data from "./DummyData";

class Card extends Component {
  state = {
    zoom: false,
    NumberOfItemsInCart: 0,
    itemsInCart: [],
    selectedCard: ""
  };
  render() {
    // Method to zoom in on the item clicked || not finished ||
    const handleCheck = (data) => {
      this.setState({
        zoom: true,
        selectedCard: data.title,
        // itemsInCart: itemsInCart[(data.item)]
      });
    };
    const addItem = (data) => {
    //////////// PROP COMES FROM ShopPage /////////
      this.props.addItemToCart(data);
    };
    const deleteItem = (data) => {
    //////////// PROP COMES FROM ShopPage /////////
      this.props.deleteItemFromCart(data);
    };
    return (
      <div className="band">
        {Data.map((item, index) => {
          return (
            <div
              key={item.id}
              className="items"
              onClick={() => handleCheck(Data[index])}
              index={this.state.index}
            >
              <div className="thumb">{item.title} </div>
              <img className="item-images" src={item.img} alt={item.title} />
              <div className="item-footer"> Price ${item.price}/lb </div>
              <button className="btn btn-details"> Details </button>
              <button onClick={()=>addItem(Data[index])} className="btn btn-danger">
                +
              </button>
              <button onClick={()=>deleteItem(Data[index])} className="btn btn-danger">
                -
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
