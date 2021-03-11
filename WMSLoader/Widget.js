define(['dojo/_base/declare', 'jimu/BaseWidget', 'esri/layers/WMSLayer', 'esri/layers/WMSLayerInfo', 'esri/geometry/Extent'],
function(declare, BaseWidget, WMSLayer, WMSLayerInfo, Extent) {
  return declare([BaseWidget], {

    baseClass: 'w-m-s-loader',
    // "nombre_capa": "2",
    // "titulo_capa": "Cities"
    addWms: function() {
      var layerInfo = new WMSLayerInfo({
        name: this.config.nombre_capa,
        title: this.config.titulo_capa
      });
      var resourceInfo = {
        extent: new Extent(-126.40869140625, 31.025390625, -109.66552734375, 41.5283203125, {
          wkid: 4326
        }),
        layerInfos: [layerInfo]
      };

      var wmsLayer = new WMSLayer (this.wmsTextBox.value, {
        resourceInfo: resourceInfo,
        visibleLayers: [this.config.nombre_capa]
      });
      this.map.addLayer(wmsLayer);
    }
  });

});
