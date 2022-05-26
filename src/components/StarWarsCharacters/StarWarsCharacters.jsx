import { Component } from "react";
import { searchPeople } from "../../shared/api/starwars";

import SearchForm from "./SerchForm";
import CharacterInfo from "./CharacterInfo";

import style from "./starWarsCharacters.module.css";

class StarWarsCharacters extends Component {
  state = {
    character: {},
    isLoading: false,
    error: null,
    name: "",
  };

  async componentDidUpdate(prevProps, prevState) {
    const { name } = this.state;

    if (name !== prevState.name) {
      this.setState({ isLoading: true });
      try {
        const result = await searchPeople(name);

        this.setState({
          character: { ...result },
          isLoading: false,
        });
      } catch (error) {
        this.setState({
          isLoading: false,
          error: error.message,
        });
      }
    }
  }

  setName = ({ name }) => {
    this.setState({
      name,
    });
  };

  render() {
    const { character, isLoading } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.setName} />
        {Object.values(character).length > 0 && (
          <CharacterInfo {...character} />
        )}
        {isLoading && <p>Loading...</p>}
      </>
    );
  }
}

export default StarWarsCharacters;
