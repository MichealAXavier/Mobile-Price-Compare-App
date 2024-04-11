<template>
  <div class="container">
    <div class="left-div">
      <label>Select the Mobiles</label>
      <div class="dropdown">
        <input type="text" class="dropbtn" @click="toggleDropdown" :value="selectedMobileNames" readonly placeholder="Select">
        <div class="dropdown-content" :class="{ show: isDropdownOpen }">
          <div class="checkbox-container">
            <div v-for="mobile in mobiles" :key="mobile.id">
              <label>
                <input type="checkbox" v-model="selectedMobile" :value="mobile.id">
                {{ mobile.name }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-div">
      <div class="card-deck">
        <!-- Display the card components for selected mobiles -->
        <div v-for="mobileId in selectedMobile" :key="mobileId" class="card">
          <MobileCard :mobile="getMobileDetails(mobileId)" />
          <button @click="deleteMobile(mobileId)" class="delete-btn">x</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, watch } from 'vue';
import { useMobileStore } from './Store.vue';
import MobileCard from './MobileCard.vue';

const mobileStore = useMobileStore();
const selectedMobile = ref([]);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const getMobileDetails = (mobileId) => {
  return mobileStore.getMobileDetails(mobileId);
};

const mobiles = computed(() => mobileStore.mobiles);
const selectedMobileNames = computed(() => {
  return selectedMobile.value.map((id) => {
    const mobile = mobileStore.getMobileDetails(id);
    return mobile ? mobile.name : '';
  }).join(', ');
});

// Watch for changes in selectedMobile and save to localStorage
watch(selectedMobile, (newValue) => {
  localStorage.setItem('selectedMobile', JSON.stringify(newValue));
});

// Retrieve selectedMobile from localStorage when component is mounted
const storedSelectedMobile = JSON.parse(localStorage.getItem('selectedMobile'));
if (storedSelectedMobile) {
  selectedMobile.value = storedSelectedMobile;
}

const deleteMobile = (mobileId) => {
  const index = selectedMobile.value.indexOf(mobileId);
  if (index !== -1) {
    selectedMobile.value.splice(index, 1);
  }
};
</script>

<style scoped>
/* Add custom styling */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Styling for the button */
.dropbtn {
  background-color: #ffffff;
  color: black;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 150px;
  transition: opacity 0.3s ease; /* Smooth transition for opacity */
}

/* Styling for the dropdown content */
.dropdown-content {
  display: none; /* Initially hide the dropdown content */
  position: absolute;
  background-color: #fff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid #ccc;
}

/* Show the dropdown content when the "show" class is added */
.dropdown-content.show {
  display: block;
}

/* Styling for the checkbox container inside the dropdown */
.checkbox-container {
  max-height: 150px; /* Adjust as needed */
  overflow-y: auto; /* Enable vertical scrolling if needed */
}

/* Styling for the labels of checkboxes */
.checkbox-container label {
  display: block;
  padding: 10px;
  cursor: pointer;
}

</style>
