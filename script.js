window.addEventListener("load", () => {

    const scene = document.querySelector("a-scene");
    const camera = document.querySelector("[gps-new-camera]");

    let objectAdded = false;

    camera.addEventListener(
        "gps-camera-update-position",
        (event) => {

            if (objectAdded) {
                return;
            }

            const latitude =
                event.detail.position.latitude;

            const longitude =
                event.detail.position.longitude;

            console.log("Mi posición:");
            console.log("Latitud:", latitude);
            console.log("Longitud:", longitude);

            // Distancia del objeto respecto al usuario
            const distance = 5;

            // Aproximación:
            // 1 grado de latitud ≈ 111320 metros
            const latitudeOffset =
                distance / 111320;

            const objectLatitude =
                latitude + latitudeOffset;

            const objectLongitude =
                longitude;

            console.log("Objeto:");
            console.log(
                "Latitud:",
                objectLatitude
            );

            console.log(
                "Longitud:",
                objectLongitude
            );

            const object =
                document.createElement("a-entity");

            object.setAttribute(
                "gltf-model",
                "#san-martin"
            );

            object.setAttribute(
                "gps-new-entity-place",
                `latitude: ${objectLatitude};
                 longitude: ${objectLongitude};`
            );

            object.setAttribute(
                "scale",
                "1 1 1"
            );

            scene.appendChild(object);

            objectAdded = true;

            console.log(
                "Objeto AR agregado correctamente"
            );
        }
    );
});