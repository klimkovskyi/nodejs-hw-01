import { writeContacts } from '../utils/writeContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await getAllContacts();
    if (allContacts.length) {
      allContacts.pop();
      await writeContacts(allContacts);
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
