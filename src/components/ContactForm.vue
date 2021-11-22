<template>
  <form action="" @submit.prevent="submit">
    <div class="field">
      <label>Name:</label>
      <input v-model="internalContact.name" type="text" />
    </div>
    <div class="field">
      <label>Email:</label>
      <input v-model="internalContact.email" type="email" />
    </div>
    <div class="field">
      <label>phone</label>
      <input v-model="internalContact.phone" type="phone" />
    </div>
    <button type="submit">
      {{ internalContact.id ? "Update" : "Create" }}
    </button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "ContactForm",
  props: {
    contact: {
      type: Object,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      internalContact: {} as any,
    };
  },
  watch: {
    contact: {
      handler() {
        this.internalContact = { ...this.contact };
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    submit() {
      if (this.internalContact.id) {
        this.$emit("update", this.internalContact);
      } else {
        this.$emit("addContact", this.internalContact);
      }
    },
  },
});
</script>
<style scoped>
</style>