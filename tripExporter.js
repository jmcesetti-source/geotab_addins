geotab.addin.tripExporter = function (api, state) {
    return {
        initialize: function (api, state, callback) {
            callback();
        },
        focus: function (api, state) {
            const button = document.getElementById("addinButton_tripExporter");
            if (button) {
                button.onclick = function () {
                    // Abre una nueva pestaña
                    window.open("https://www.google.com", "_blank");
                };
            }
        },
        blur: function () {}
    };
};
