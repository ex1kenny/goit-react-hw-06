/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactSlice";
import { selectNameFilter } from "../../redux/filterSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const inputFilter = useSelector(selectNameFilter);
  const value = useSelector(selectContacts);
  const visibleUsers = value.filter((value) =>
    value.name.toLowerCase().includes(inputFilter.toLowerCase())
  );
  return (
    <div className={css.container}>
      {visibleUsers.map((item) => (
        <Contact data={item} key={item.id} />
      ))}
    </div>
  );
}
