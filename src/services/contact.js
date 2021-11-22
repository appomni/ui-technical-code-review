import axios from "axios";

async function deleteContact(contact) {
  return axios.delete(`http://localhost:3000/contacts/${contact.id}`);
}

async function editContact(contact) {
  return axios.patch(`http://localhost:3000/contacts/${contact.id}`, contact);
}

async function getContacts() {
  const response = await axios.get('http://localhost:3000/contacts/');
  return response.data;
}

async function createContact(contact) {
  return axios.post('http://localhost:3000/contracts/', contact);
}

export default {
  createContact,
  editContact,
  deleteContact,
  getContacts,
}
