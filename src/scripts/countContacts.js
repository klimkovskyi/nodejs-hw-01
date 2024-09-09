import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contact = await getAllContacts();
    return contact.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
