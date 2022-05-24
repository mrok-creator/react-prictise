import { Component } from "react";

import PropTypes from "prop-types";

import "./productList.css";

import { items } from "./items";

const updatedItems = items.map((item) => ({ ...item, open: false }));

class ProductList extends Component {
  state = {
    items: [...updatedItems],
  };

  handleChoose = (id) => {
    this.setState(({ items }) => {
      const newItems = items.map((item) => ({
        ...item,
        open: id === item.id ? true : false,
      }));

      return {
        items: newItems,
      };
    });
  };

    render() {
        const { items } = this.state;
        const elements = items.map(({ id, name, description, open }) => (
            <li className={open ? 'bold': 'normal'} key={id} onClick={() => this.handleChoose(id)}>
        <p className="title">{name}</p>
        <p className="descr">{description}</p>
      </li>
    ));
    return <ul className="list">{elements}</ul>;
  }
}

export default ProductList;
