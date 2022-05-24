// import Section from "./components/Section";
// import ProductList from "./components/ProductList";
import "./App.css";
import Tabs from "./components/Tabs";
import { items } from "./data/items";

function App() {
  return (
    <div className="App">
      {/* <Section>
        <ProductList />
      </Section> */}
      <Tabs items={items} />
    </div>
  );
}

export default App;
