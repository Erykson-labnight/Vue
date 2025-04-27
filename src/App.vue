<template>
  <div id="app">
    <h1>Welcome to the Superhero App</h1>

    <div>
      <label for="table-select">Select a table:</label>
      <select v-model="selectedTable" @change="fetchRecords">
        <option value="" disabled>Select a table</option>
        <option value="superheroes">Superheroes</option>
        <option value="genders">Genders</option>
        <option value="universes">Universes</option>
        <option value="powers">Powers</option> 
        <option value="teams">Teams</option>  
        <option value="enemies">Enemies</option> 
      </select>
    </div>

    <div v-if="selectedTable">
      <h2>Records from {{ selectedTable }}:</h2>
      <ul>
        <li v-for="record in records" :key="record.id">
          {{ record.name || record.hero_name || record.gender_name }}
        </li>
      </ul>
    </div>

    <div>
      <label for="id-search">Search record by ID:</label>
      <input type="number" v-model="searchId" placeholder="Enter ID">
      <button @click="fetchRecordById">Search</button>
    </div>

    <div v-if="searchedRecord">
      <h3>Record Details:</h3>
      <pre>{{ searchedRecord }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedTable: '',
      records: [],
      searchId: '',
      searchedRecord: null,
    };
  },
  methods: {
    // Fetch all records from the selected table
    async fetchRecords() {
      if (this.selectedTable) {
        try {
          const response = await axios.get(`http://localhost:8000/api/${this.selectedTable}`);
          console.log(response.data);
          this.records = response.data;
        } catch (error) {
          console.error('Error fetching records:', error);
        }
      }
    },
    // Fetch a single record by ID
    async fetchRecordById() {
      if (this.searchId) {
        try {
          const response = await axios.get(`http://localhost:8000/api/${this.selectedTable}/${this.searchId}`);
          this.searchedRecord = response.data;
        } catch (error) {
          console.error('Error fetching record by ID:', error);
          this.searchedRecord = null;
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
