dg.theme_entity_label = function(variables) {
  return '<h1 ' + dg.attributes(variables._attributes) + '>' + dg.t(variables._entity.label()) + '</h1>';
};
