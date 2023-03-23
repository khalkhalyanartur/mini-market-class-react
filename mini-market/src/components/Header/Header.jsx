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
    this.props.search("");
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
          onClick={() => this.props.search(this.state.searchText)}
        >
          Найти
        </button>
        <p>
          Стоимость заказа: {this.props.basketSum}
        </p>
      </div>

    )
  }
}


export default Header;