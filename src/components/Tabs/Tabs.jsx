import { Component } from "react";

import "./tabs.css";

class Tabs extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    const data = localStorage.getItem("activeTabs");
    const index = JSON.parse(data);

    if (index) {
      this.setState({
        index,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { index } = this.state;
    if (prevState.index !== index) {
      localStorage.setItem("activeTabs", index);
    }
  }

  handleClick(index) {
    this.setState({
      index,
    });
  }

  render() {
    const { items } = this.props;
    const { index } = this.state;

    const elements = items.map(({ title, id }, idx) => (
      <li
        className={idx === index ? "active" : ""}
        key={id}
        onClick={() => this.handleClick(idx)}
      >
        {title}
      </li>
    ));
    const { content } = items[index];
    return (
      <>
        <div className="tabs">
          <ul className="tabs__caption">{elements}</ul>

          <div className="tabs__content  active">
            <p>{content}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Tabs;
