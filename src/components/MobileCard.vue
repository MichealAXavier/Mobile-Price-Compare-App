<template>
  <div class="card">
    <div class="deck">
      <h5 class="card-title">{{ mobile.name }}</h5>
      <p class="card-text">Price: {{ mobile.price }}</p>
      <p class="card-text">Specifications: {{ mobile.specifications }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mobile: Object,
  },
};
</script>

<style scoped>
/* Add custom styling for the card */
.card {
  width: 18rem;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px #0000001a;
  background-color: rgb(250, 250, 250);
  display: flex;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  color: #333;
  white-space: pre-line; 
}
</style>
