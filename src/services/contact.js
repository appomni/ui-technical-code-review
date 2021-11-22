import axios from "axios";

async function deleteContact(contact) {
  return axios.delete(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
}

async function editContact(contact) {
  return axios.patch(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
}

async function getContacts() {
  const response = await axios.get('http://localhost:3000/contacts');
  return response.data;
}

async function createContact(contact) {
  return axios.post('https://jsonplaceholder.typicode.com/users', contact);
}

export default {
  createContact,
  editContact,
  deleteContact,
  getContacts,
}