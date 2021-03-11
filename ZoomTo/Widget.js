define(['dojo/_base/declare', 'jimu/BaseWidget', 'esri/geometry/Point'],
function(declare, BaseWidget, Point) {
  return declare([BaseWidget], {
    baseClass: 'zoom-to',
    hacerZoom: function() {
      var lat = this.latitud.value;
      console.log('lat', lat);
      var lon = this.longitud.value;
      var level = this.zoom.value;

      var punto = new Point(lon, lat);
      this.map.centerAndZoom(punto, level);
    }
  });

});
