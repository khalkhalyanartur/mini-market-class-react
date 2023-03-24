import { Component } from "react";
import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    }
  }

  clearSearch = () => {
    this.props.searchProduct("");
    this.setState({ searchText: "" });
  }

  render() {
    return (
      <div className="header">
        <input
          type="text"
          className="header__input"
          placeholder="Название товара"
          value={this.state.searchText}
          onChange={event => this.setState({ searchText: event.target.value })}
        />
        <button
          type="button"
          className="header__button"
          onClick={this.clearSearch}
        >
          Очистить
        </button>
        <button
          type="button"
          className="header__button"
          onClick={() => this.props.searchProduct(this.state.searchText)}
        >
          Найти
        </button>
        <p className="header__total">

          Стоимость заказа: {this.props.basketSum}
        </p>
      </div>

    )
  }
}

export default Header;