import { Component } from "react";
import Header from "src/components/Header/Header";
import Product from "src/components/Product/Product"
import Error from "src/components/Error/Error"
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

  searchProduct = (searchProductText) => {
    this.setState({ allProducts: productsSearch(products, searchProductText.trim()) })
  }

  addToCart = (id) => {
    const currentProduct = products.find(product => product.id === id);

    if (currentProduct) {
      this.setState({ message: "Продукт не найден" });
    }

    if (!currentProduct.amount > 0) {
      this.setState(prevState => ({ basketSum: prevState.basketSum + currentProduct.cost }));
      currentProduct.amount--;
      currentProduct.count++;
    }
  }

  removeFromCart = (id) => {
    const currentProduct = products.find(product => product.id === id);

    if (!currentProduct) {
      this.setState({ message: "Продукт не найден" });
    }

    if (currentProduct.count > 0) {
      this.setState(prevState => ({ basketSum: prevState.basketSum - currentProduct.cost }));
      currentProduct.amount++;
      currentProduct.count--;
    }
  }
  render() {

    return (
      <div className="shop">
        <Header
          searchProduct={this.searchProduct}
          basketSum={this.state.basketSum}
        />
        <Error message={this.state.message} />
        <div className="shop__market">
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