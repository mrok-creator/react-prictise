import { Component } from "react";
import PropTypes from "prop-types";

import s from "./searchForm.module.css";

class SearchForm extends Component {
  state = {
    name: "",
  };
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  setCharacterName = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit({ ...this.state });

    this.setState({
      name: "",
    });
  };

  render() {
    const { name } = this.state;

    return (
      <form action="" onSubmit={this.setCharacterName}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
          required
        />
      </form>
    );
  }
}

export default SearchForm;
