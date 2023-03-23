import { Component } from "react";


import "./style.scss";

class Product extends Component {
  render() {
    const { count, name, cost, amount, img, id } = this.props.product

    return (
      <div className={"product"}>
        <div className="box">
          <img
          src={img}
          alt="гриб"
          className="product__image"
          />
        </div>
        <h4 className="product__name">{name}</h4>
        <p className="pruduect__cost">Цена: {cost}</p>
        <p className="pruduect__count">В корзине: {count}</p>
        <p className="pruduect__amount">Всего: {amount}</p>
        <div className="productManage">
          <button
            type="button"
            className="productManage__button"
            onClick={() => this.props.addToCart(id, "addToCart")}
          >
            +
          </button>

          <button
            type="button"
            className="productManage__button"
            onClick={() => this.props.removeFromCart(id, "removeFromCart")}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Product;