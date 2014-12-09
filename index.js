/**
 * Expose addEventByClass().
 */

module.exports = addEventByClass;

/**
 * Binds event handlers to elements by className.
 *
 * @param {string} className - class of elements you want to bind.
 * @param {string} eventName - name of DOM event without the "on" prefix.
 * @param {function} handler - event handler function.
 */
function addEventByClass(className, eventName, handler) {
  var ctls = document.getElementsByClassName(className);
  if (ctls && ctls.length) {
    var i = 0;
    for(i; i < ctls.length; i += 1) {
      if (ctls[i].addEventListener) {
        ctls[i].addEventListener(eventName, handler, false);
      } else if (ctls[i].attachEvent) {
        ctls[i].attachEvent('on'+ eventName, handler);
      }
    }
  }
}