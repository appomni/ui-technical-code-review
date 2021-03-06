import axios from "axios";

async function getContacts() {
  const response = await axios.get('http://localhost:3000/contacts');
  return response.data;
}

export default {
  getContacts,
}