import axios from "axios";

async function getContacts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
}

export default {
  getContacts,
}