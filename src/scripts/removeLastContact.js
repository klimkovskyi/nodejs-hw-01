import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    if (allContacts.length) {
      allContacts.pop();
      await writeContacts(allContacts);
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
