import { Component } from "react";
import "./style.scss";

class Product extends Component {
  render() {
    const { count, name, cost, amount, img, id } = this.props.product

    return (
      <div className="product">
        <div className="product__box">
          <img
            src={img}
            alt="гриб"
            className="product__image"
          />
        </div>
        <h4 className="product__name">{name}</h4>
        <p>Цена: {cost}</p>
        <p>В корзине: {count}</p>
        <p>Всего: {amount}</p>
        <div>
          <button
            type="button"
            onClick={() => this.props.addToCart(id, "addToCart")}
          >
            +
          </button>
          <button
            type="button"
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