/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactSlice";
import { selectNameFilter } from "../../redux/filterSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const inputFilter = useSelector(selectNameFilter);
  const items = useSelector(selectContacts);
  const visibleUsers = items.filter((items) =>
    items.name.toLowerCase().includes(inputFilter.toLowerCase())
  );
  return (
    <div className={css.container}>
      {visibleUsers.map((item) => (
        <Contact data={item} key={item.id} />
      ))}
    </div>
  );
}
