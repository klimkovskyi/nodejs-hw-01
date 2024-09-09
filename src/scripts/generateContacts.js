import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const allContact = await readContacts();
    const existingContacts = Array.isArray(allContact) ? allContact : [];

    const newContacts = [];

    for (let i = 0; i < number; i++) {
      const contact = await createFakeContact();
      newContacts.push(contact);
    }
    await writeContacts([...existingContacts, ...newContacts]);
  } catch (error) {
    console.error('Error when trying to generate contacts:', error);
  }
};

generateContacts(5);
