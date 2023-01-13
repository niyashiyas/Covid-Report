function updateMap() {
  console.log("Updating map with realtime data");
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      // console.log(rsp.data)
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if (cases > 255) {
          color = "rgb(255, 0, 0)";
        }

        //To Mark on the map
        const marker = new mapboxgl.Marker()
          //     {
          //     draggable: false,
          //     color: color
          // }
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

updateMap();
