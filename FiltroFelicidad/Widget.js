define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  return declare([BaseWidget], {
    baseClass: 'filtro-felicidad',
    postCreate: function() {
      this.inherited(arguments);
    },

    startup: function() {
      this.inherited(arguments);

      layer = this.map.getLayer("Felicidad_2016_1798");
      console.log(layer);

    },

    filtrar() {
      texto = this.inputFiltrar.value;
      layer.setDefinitionExpression("Country = '" + texto + "'")
    },

    restore() {
      layer.setDefinitionExpression(layer.defaultDefinitionExpression)
    }

  });

});
