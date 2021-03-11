define(['dojo/_base/declare', 'jimu/BaseWidget', 'esri/symbols/SimpleMarkerSymbol', "esri/symbols/SimpleLineSymbol", 'dojo/_base/lang', 'dojo/dom', 'esri/graphic', 'esri/Color'],
function(declare, BaseWidget, SimpleMarkerSymbol, SimpleLineSymbol, lang, dom, Graphic, Color) {
  return declare([BaseWidget], {
    baseClass: 'add-graphic',
    postCreate: function() {
      this.symbol = new SimpleMarkerSymbol();
      var marker = this.symbol;
      var line = new SimpleLineSymbol();
      line.setColor(new Color([133, 133, 133, 1]));
      marker.setOutline(line);
      marker.setColor(new Color([0, 77, 168, 0.25]));
    },
    // playground: https://developers.arcgis.com/javascript/latest/sample-code/playground/live/
    onOpen: function() {
      this.map.graphics.show();
      /*
        El trabajo con eventos en cualquier aplicación de JavaScript (sea GIS o no) puede ser
        complejo. Normalmente, utilizamos la palabra “this”, seguida de la propiedad o el método
        que queremos utilizar. Sin embargo, al trabajar con eventos esto no es posible, ya que el
        propio evento cambia lo que en JavaScript se llama contexto. Este cambio de contexto
        provoca que no podamos utilizar “this” normalmente.
        Para solventar este problema podemos utilizar la función “lang.hitch()”, que nos ayuda a que
        podamos seguir utilizando “this”, aunque haya este cambio de contexto:
      */
      this.map.on('click', lang.hitch(this, function(evt) {
        if(dom.byId('activado').checked) {
          this.map.graphics.clear();

          var point = evt.mapPoint;

          var graphic = new Graphic(point, this.symbol);

          this.map.graphics.add(graphic)
        };
      }));
    },

    onClose: function() {
      this.map.graphics.hide();
    }
  });

});
