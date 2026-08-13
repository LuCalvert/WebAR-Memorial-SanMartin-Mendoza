window.onload = () => {

    let objectAdded = false;

    const camera = document.querySelector("[gps-new-camera]");
    const scene = document.querySelector("a-scene");

    camera.addEventListener("gps-camera-update-position", (event) => {

        if (objectAdded) {
            return;
        }

        const latitude = event.detail.position.latitude;
        const longitude = event.detail.position.longitude;

        console.log("Mi posición:");
        console.log("Latitud:", latitude);
        console.log("Longitud:", longitude);

        /*
         * Colocamos el objeto aproximadamente
         * 5 metros al norte de nuestra posición.
         *
         * 1 grado de latitud ≈ 111.320 metros
         */
        const offsetMeters = 5;

        const latitudeOffset = offsetMeters / 111320;

        const objectLatitude = latitude + latitudeOffset;
        const objectLongitude = longitude;

        console.log("Posición del objeto:");
        console.log("Latitud:", objectLatitude);
        console.log("Longitud:", objectLongitude);

        const entity = document.createElement("a-entity");

        entity.setAttribute(
            "gltf-model",
            "#animated-asset"
        );

        entity.setAttribute(
            "gps-new-entity-place",
            {
                latitude: objectLatitude,
                longitude: objectLongitude
            }
        );

        entity.setAttribute(
            "scale",
            "2 2 2"
        );

        scene.appendChild(entity);

        objectAdded = true;
    });
};