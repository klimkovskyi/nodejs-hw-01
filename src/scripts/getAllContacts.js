import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (error) {
    console.error('Can not read add contacts', error);
  }
};

console.log(await getAllContacts());
