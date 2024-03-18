import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import NoContact from "../NoContact/NoContact";

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactSlice";
import { selectNameFilter } from "../../redux/filterSlice";

function App() {
  const userSelector = useSelector(selectContacts);
  const userNameFilter = useSelector(selectNameFilter);
  const forUser = userSelector.filter((value) =>
    value.name.toLowerCase().includes(userNameFilter.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.p}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {(userSelector.length === 0 || forUser.length === 0) && <NoContact />}
    </div>
  );
}

export default App;
