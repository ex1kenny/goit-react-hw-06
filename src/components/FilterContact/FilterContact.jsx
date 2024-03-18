import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactSlice";
import { selectNameFilter } from "../../redux/filterSlice";
import ContactList from "../ContactList/ContactList";
import NoContact from "../NoContact/NoContact";

function FilterContact() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const FilterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <>
      {FilterContact.length > 0 ? (
        <ContactList contacts={FilterContact} />
      ) : (
        <NoContact />
      )}
    </>
  );
}

export default FilterContact;
