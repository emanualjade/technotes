
http://qt-project.org/wiki/API-Design-Principles

treeItem.setState(true, false);
- setState is a generic word that could mean anything. Use something more specific
- do not use boolean values for params



  1. Static polymorphism: To ensure consistency
    1. use similar names for all form field values, x.value, y.value…not y.caption
    2. use a.minValue, a.maxValue, a.value for both sliders and progress bars. Consistency. instead of i.range and i.progress
    3. objects should use consistent method names. square.translate() and circle.translate()…not circle.translateBy()
  2. Prevent Dangerous Convenience:
    1. bad - Such as boolean trap
    2. bad - Unnamed params that mean nothing to the reader
    3. good - Use a hash for self documenting code
    4. good - Use no params and set params with data-attributes on the html element
    5. Avoid double negatives…
      1. bad: x.disabled = false
      2. good x.enabled = true
      3. bad: y.setHidden = false
      4. good: y.setVisible = true
      5. bad: z.caseInsensitive = false
      6. good: z.caseSensitive = true
    6. Nonverbal Actions
      1. bad: status.message(“Ready”)
      2. good: status.showMessage(“Ready”)
      3. bad: page.forward()
      4. good: page.goForward()
    7. Avoid conversational style
      1. bad: calendar.yearFrom, calendar.yearTo
      2. good: calendar.minYear, calendar.maxYear
      3. bad: this.callMe = “Adam”
      4. good: this.name = “Adam”
    8. Explicit Immutability
      1. p.translate(), p.translated()
      2. p.translate(), p.translate!()
  3. Avoid unreadable code: due to confusing semantics
