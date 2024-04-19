
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 52.58333000, lng:  -0.25000000 },
      zoom: 15,
    });
  
    const marker = new google.maps.Marker({
      position: { lat: 52.58333000, lng:  -0.25000000 },
      map: map,
      title: "Marker Title",
    });
  }
  