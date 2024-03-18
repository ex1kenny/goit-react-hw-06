import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    value: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.value.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            ...value,
            id: Date.now(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter((value) => value.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.value;
export const { addContact, deleteContact } = contactsSlice.actions;
