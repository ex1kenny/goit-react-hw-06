import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import FilterContact from "../FilterContact/FilterContact";

function App() {
  return (
    <div>
      <h1 className={css.p}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <FilterContact />
    </div>
  );
}

export default App;
