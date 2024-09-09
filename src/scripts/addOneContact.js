import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const allContacts = await readContacts();
    const newContact = await createFakeContact();
    allContacts.push(newContact);
    await writeContacts(allContacts);
  } catch (error) {
    console.error('Fail to add one contact', error);
  }
};

addOneContact();
