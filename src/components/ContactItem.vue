<template>
  <div class="contact">
    <div class="contact__name">
      {{ contact.name }}
    </div>
    <div class="contact__email">
      <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
    </div>
    <div class="contact__notes">
      {{ contact.notes }}
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "ContactItem",
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
});
</script>
<style scoped>
.contact__name {
  font-weight: bold;
}
.contact__email {
  font-style: italic;
}
</style>