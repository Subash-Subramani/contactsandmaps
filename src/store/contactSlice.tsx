// src/store/contactSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Define the structure for a contact
type CreateContact = {
    firstname: string;
    lastname: string;
    isactive: boolean;
};
// Define the initial state structure
type ContactState = {
    contacts: CreateContact[];
};

const initialState: ContactState = {
    contacts: [],
};
// Create a slice for contact management
const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<CreateContact>) => {
            state.contacts.push(action.payload);
        },
        updateContact: (state, action: PayloadAction<{ index: number, contact: CreateContact }>) => {
            const { index, contact } = action.payload;
            state.contacts[index] = contact;
        },
        deleteContact: (state, action: PayloadAction<number>) => {
            state.contacts.splice(action.payload, 1);
        },
        setContacts: (state, action: PayloadAction<CreateContact[]>) => {
            state.contacts = action.payload;
        },
    },
});

// Export actions and reducer
export const { addContact, updateContact, deleteContact, setContacts } = contactSlice.actions;
export default contactSlice.reducer;
