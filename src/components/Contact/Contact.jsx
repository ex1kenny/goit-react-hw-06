/* eslint-disable react/prop-types */

import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactSlice";

import { useDispatch } from "react-redux";

export default function Contact({ data: { name, number, id } }) {
  const dispath = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.list}>
        <span>
          <FaUser />
          <p className={css.item}>{name}</p>
        </span>
        <span>
          <BsFillTelephoneFill />
          <p className={css.item}>{number}</p>
        </span>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            dispath(deleteContact(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
