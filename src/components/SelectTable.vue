<template>
  <div>
    <h2>Select a table</h2>
    <select v-model="selectedTable" @change="fetchRecords">
      <option value="superheroes">Superheroes</option>
      <option value="enemies">Enemies</option>
      <option value="powers">Powers</option>
    </select>

    <div v-if="records.length > 0">
      <h3>Records from {{ selectedTable }}:</h3>
      <ul>
        <li v-for="record in records" :key="record.id">{{ record.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedTable: 'superheroes',
      records: []
    };
  },
  methods: {
    async fetchRecords() {
      try {
        const response = await axios.get(`http://localhost:8000/api/${this.selectedTable}`);
        this.records = response.data;
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    }
  }
};
</script>
