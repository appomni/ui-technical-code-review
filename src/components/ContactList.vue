<template>
  <div>
    <h1>AppOmni Contacts</h1>
    <ul class="contacts-list">
      <li
        class="contacts-list__item"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <contact-item :contact="contact" />
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import ContactItem from './ContactItem.vue';

import contactService from '../services/contact';

export default Vue.extend({
  name: 'ContactList',
  components: {
    ContactItem,
  },
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    async getContacts() {
      this.contacts = await contactService.getContacts();
    },
  },
  mounted() {
    this.getContacts();
  },
});
</script>

<style scoped>
.contacts-list {
  list-style: none;
  text-align: left;
  width: 600px;
}
.contacts-list__item {
  margin-bottom: 1em;
}
</style>