import { Component } from "react";
import Header from "src/components/Header/Header";
import Product from "src/components/Product/Product"
import products from "src/constants";
import productsSearch from "src/helper/productsSearch";
import "./style.scss";


class Market extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProducts: products,
      basketSum: 0,
      message: ""
    }
  }

  search = (searchProductText) => {
    this.setState({ allProducts: productsSearch(products, searchProductText.trim()) })
  }

  addToCart = (id) => {
    const currentProduct = products.find(product => product.id === id);

    if (currentProduct.amount > 0) {
      this.setState(prevState => ({ basketSum: prevState.basketSum + currentProduct.cost }));
      currentProduct.amount--;
      currentProduct.count++;
    }
  }

  removeFromCart = (id) => {
    const currentProduct = products.find(product => product.id === id);

    if (currentProduct.count > 0) {
      this.setState(prevState => ({ basketSum: prevState.basketSum - currentProduct.cost }));
      currentProduct.amount++;
      currentProduct.count--;
    }
  }
  render() {
    return (
      <div>
        <Header
          search={this.search}
          basketSum={this.state.basketSum}
        />
        <div className="productListContent">
          {this.state.allProducts.map(product => (
            <Product
              key={product.id}
              product={product}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Market;