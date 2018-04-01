# FOCUS
Prepare to accept data here

* document.activeElement : Get current focuses element 
* Document.hasFocus() :  Returns a Boolean value indicating whether the document or any element inside the document has focus. This method can be used to determine whether the active element in a document has focus

## Elements that accept focus
* button
* input
* select
* a

## Activate focus
* Click
* Tab
* autofocus
* input.focus()

## Tab index
* li tabindex="1" : Any element supports focusing if it has tabindex : also enables styling element with :focus
* elem.tabIndex allows html elements to be focused.
* tabindex="0" : 	In tab order relative to element's position in document.
* tabindex="-1" : Tab should ignore this element

## Events
* onfocus and onblur events do not bubble up
* onfocus and onblur propagate down on the capturing phase
* works: form.addEventListener("focus", () => form.classList.add('focused'), true);
* does not work: <form onfocus="this.className='focused'">
* input.onblur = function(){ do things }
* input.onfocus = function(){ do things }
* focusin: bubbles : form.addEventListener("focusin", () => form.classList.add('focused'));
* focusout: bubbles : form.addEventListener("focusout", () => form.classList.remove('focused'));

# BLUR
The data has been entered
## Activate blur
* Click away
* Tab
* Alert moves focus to itself: When alert dismissed focus returns to previous element
* Remove element from DOM causes focus loss