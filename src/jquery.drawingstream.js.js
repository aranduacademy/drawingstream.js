/*
 * drawingstream.js
 * https://github.com/aranduacademy/drawingstream.js
 *
 * Copyright (c) 2016 Anderson Tavares
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.drawingstream_js = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.drawingstream_js = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.drawingstream_js.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.drawingstream_js.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].drawingstream_js = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
