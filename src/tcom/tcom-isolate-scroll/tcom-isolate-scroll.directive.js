/**
 * Attribute directive to prevent body scrolling when wheel scrolling within
 * the directive's element.
 * @author Todd Miller <todd.miller@tricomb2b.com>
 * @version 0.0.1
 */

(function () {
  'use strict';

  angular
    .module('tcomIsolateScrollDirective', [])
    .directive('tcomIsolateScroll', tcomIsolateScroll);

  /**
   * Directive definition
   */
  function tcomIsolateScroll () {
    return {
      restrict: 'A',
      link: link
    };
  }

  /**
   * Link function
   */
  function link (scope, element, attrs) {
    var $el       = element[0],
        speed     = 30,
        direction = attrs.tcomIsolateScroll;

    element.on('wheel', catchScroll);

    /**
     * Catch the wheel event and prevent the default behavior,
     * and implement a custom scroll based on the given direction
     */
    function catchScroll ($event) {
      $event.stopPropagation();
      $event.preventDefault();

      console.log($event);

      switch (direction) {
        case 'x':
          scrollX($event.deltaY);
          break;
        case 'y':
          scrollY($event.deltaY);
          break;
        default:
          scrollX($event.deltaY);
          scrollY($event.deltaY);
          break;
      }

      return false;
    }

    /**
     * Perform a scroll on the x-axis
     */
    function scrollX (delta) {
      if (delta > 0)
        $el.scrollLeft += speed;
      else
        $el.scrollLeft -= speed;
    }

    /**
     * Perform a scroll on the y-axis
     */
    function scrollY (delta) {
      if (delta > 0)
        $el.scrollTop += speed;
      else
        $el.scrollTop -= speed;
    }
  }
})();
