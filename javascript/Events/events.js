// ADD EVENT LISTENER ie9+
element.addEventListener(<event-name>, <callback>, <use-capture>);

// REMOVE EVENT LISTENER ie9+
// You must have a reference to the callback function that was originally bound.
// Simply calling element.removeEventListener('click'); will not work.
// For this reason it's wise to not use anonymous functions for your callbacks
element.removeEventListener(<event-name>, <callback>, <use-capture>);




// LIST OF BROWSER EVENTS
/*

click
mousedown
touchstart
transitionEnd

*/