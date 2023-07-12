window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "",
    dom_id: '#swagger-ui',
    deepLinking: false,
    docExpansion: "none",
    validatorUrl: null,
    requestInterceptor: (req) => {
      oauthToken = document.getElementsByClassName("download-url-input-oauth")[0].value.trim()
      if(oauthToken.length > 0) {
        req.headers['Authorization'] = "Bearer " + oauthToken
      }
      return req
    },
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
