var Autocomplete = require('autocomplete');

var autoComplete = Autocomplete.connectAutocomplete();

autoComplete.initialize(function(onReady) {
  onReady([]);
});

exports.autoComplete = autoComplete;
