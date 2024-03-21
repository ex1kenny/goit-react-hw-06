import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(items) {
        return {
          payload: {
            ...items,
            id: Date.now(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((items) => items.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
