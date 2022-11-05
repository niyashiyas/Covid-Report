function updateMap(){
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {

        rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

            cases = element.infected;
            if (cases>300){
                color = "rgb(255, 0, 0)";
                // innerHeight = 100px;
            }else{
                color = `rgb(${cases}, 0, 0)`;
            }

        //To Mark on the map
        const marker =  new mapboxgl.Marker(
        //     {
        //     draggable: false,
        //     color: color
        // }
        ).setLngLat([longitude, latitude])
        .addTo(map); 
    });
})
}

updateMap();
