<template>
  <form action="" @submit.prevent="submit">
    <div class="field">
      <label>Name:</label>
      <input v-model="internalContact.name" type="text" />
    </div>
    <div class="field">
      <label>Email:</label>
      <input v-model="internalContact.email" type="text" />
    </div>
    <div class="field">
      <label>Notes</label>
      <textarea v-model="internalContact.notes"> </textarea>
    </div>
    <button :disabled="!submittable" type="submit">
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
      default: undefined,
    },
  },
  data() {
    return {
      internalContact: {} as any,
    };
  },
  computed: {
    submittable(): boolean {
      return this.internalContact.name && (this.internalContact.email && this.internalContact.email.includes('@'));
    },
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
