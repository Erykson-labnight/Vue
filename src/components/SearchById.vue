<template>
  <div>
    <h2>Search record by ID</h2>
    <input v-model="recordId" placeholder="Enter ID" />
    <button @click="fetchRecord">Search</button>

    <div v-if="record">
      <h3>Record Details:</h3>
      <p>Name: {{ record.name }}</p>
      <p>Description: {{ record.description }}</p>
      <!-- Agrega más campos según la estructura de tus registros -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recordId: '',
      record: null
    };
  },
  methods: {
    async fetchRecord() {
      try {
        const response = await axios.get(`http://localhost:8000/api/${this.$route.params.table}/${this.recordId}`);
        this.record = response.data;
      } catch (error) {
        console.error('Error fetching record:', error);
      }
    }
  }
};
</script>
