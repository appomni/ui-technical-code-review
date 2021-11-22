<template>
  <div>
    <h1>AppOmni Contacts</h1>
    <contact-form
      v-if="showForm"
      :contact="contactToEdit"
      @addContact="add"
      @update="editContact"
    />
    <ul class="contacts-list">
      <li
        class="contacts-list__item"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <contact-item :contact="contact" @delete="deleteContact"/>
        <button @click="setupEditForm(contact)">Edit</button>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import ContactItem from "./ContactItem.vue";
import ContactForm from "./ContactForm.vue";

import contactService from "../services/contact";

export default Vue.extend({
  name: "ContactList",
  components: {
    ContactItem,
    ContactForm,
  },
  data() {
    return {
      contacts: [] as any,
      contactToEdit: undefined,
      showForm: true,
    };
  },
  methods: {
    async add(contactToAdd: any) {
      await contactService.createContact(contactToAdd);
      this.getContacts();
      // this.contacts.push(contactToAdd);
    },
    async deleteContact(contact: any) {
      const indexToRemove = this.contacts.findIndex((c: any) => c.id === contact.id);
      if (indexToRemove > 0) {
        await contactService.deleteContact(contact);
        this.contacts.splice(indexToRemove, 1);
      }
    },
    async editContact(contactToEdit: any) {
      await contactService.editContact(contactToEdit);
      this.getContacts();
    },
    async getContacts() {
      this.contacts = await contactService.getContacts();
    },
    setupEditForm(contact: any) {
      this.showForm = true;
      this.contactToEdit = contact;
    }
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