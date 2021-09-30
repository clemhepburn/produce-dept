/* eslint-disable prefer-arrow-callback */
export const checkScrollSpeed = (function(settings) {
  settings = settings || {};

  let lastPos, newPos, timer, delta;
  const delay = settings.delay || 50;

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function() {
    newPos = window.scrollY;
    if (lastPos != null) { 
      delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };

})();



