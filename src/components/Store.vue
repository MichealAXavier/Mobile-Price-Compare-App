<script>
import { defineStore } from 'pinia';

export const useMobileStore = defineStore('mobile', () => {
  const mobiles = [
    
  
  {
    "id": "iphone11",
    "image": "1.jpg",
    "name": "iPhone 11",
    "price": "₹52,210",
    "specifications": "6.1-inch Liquid Retina HD display, A13 Bionic chip, Dual-camera system, Face ID"
  },
  {
    "id": "iphone11pro",
    "image": "2.jpg",
    "name": "iPhone 11 Pro",
    "price": "₹74,900",
    "specifications": "5.8-inch Super Retina XDR display, A13 Bionic chip, Triple-camera system, Face ID"
  },
  {
    "id": "iphone11promax",
    "image": "3.jpg",
    "name": "iPhone 11 Pro Max",
    "price": "₹81,900",
    "specifications": "6.5-inch Super Retina XDR display, A13 Bionic chip, Triple-camera system, Face ID"
  },
  {
    "id": "iphone12",
    "image": "4.jpg",
    "name": "iPhone 12",
    "price": "₹59,900",
    "specifications": "6.1-inch Super Retina XDR display, A14 Bionic chip, Dual-camera system, Face ID"
  },
  {
    "id": "iphone12mini",
    "image": "5.jpg",
    "name": "iPhone 12 Mini",
    "price": "₹52,900",
    "specifications": "5.4-inch Super Retina XDR display, A14 Bionic chip, Dual-camera system, Face ID"
  },
  {
    "id": "iphone12pro",
    "image": "6.jpg",
    "name": "iPhone 12 Pro",
    "price": "₹74,900",
    "specifications": "6.1-inch Super Retina XDR display, A14 Bionic chip, Triple-camera system with LiDAR Scanner, Face ID"
  }


  ];

  const selectedMobiles = [];

  function setSelectedMobiles(mobileIds) {
    selectedMobiles.value = mobileIds;
  }

  function getMobileDetails(mobileId) {
    return mobiles.find(mobile => mobile.id === mobileId);
  }

  return {
    mobiles,
    selectedMobiles,
    setSelectedMobiles,
    getMobileDetails
  };
});
</script>
