define(['dojo/_base/declare', 'jimu/BaseWidget', 'dojo/_base/lang', 'dojo/dom'],
function(declare, BaseWidget, lang, dom) {
  return declare([BaseWidget], {

    baseClass: 'escala-numerica',
    postCreate: function() {
      this.map.on('zoom-end', lang.hitch(this, function(evt) {
        dom.byId('txtEscala').innerHTML = "Escala actual = 1:" + this.map.getScale();
      }));
    }
  });

});
