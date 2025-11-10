geotab.addin.tripExporter = function (api, state) {
    return {
        initialize: function (api, state, callback) {
            callback();
        },

        focus: function (api, state) {
            const button = document.getElementById("addinButton_tripExporter");
            if (!button) return;

            button.onclick = async function () {
                try {
                    // Obtenemos los viajes seleccionados
                    const trips = state?.data || [];
                    if (!trips.length) {
                        alert("No hay viajes seleccionados.");
                        return;
                    }

                    // Para este ejemplo tomamos solo el primero
                    const trip = trips[0];
                    const start = new Date(trip.start).toLocaleString();
                    const end = new Date(trip.stop).toLocaleString();

                    // Texto a guardar
                    const content = `Inicio del viaje: ${start}\nFin del viaje: ${end}`;

                    // Crear blob y forzar descarga
                    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "trip_info.txt";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                } catch (err) {
                    console.error(err);
                    alert("Error al obtener el viaje seleccionado.");
                }
            };
        },

        blur: function () {}
    };
};
