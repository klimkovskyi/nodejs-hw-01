import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contact = await readContacts();
    return contact.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
