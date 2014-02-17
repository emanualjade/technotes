raw() # output a string one time only without escaping
html_safe # calling html_safe on a string will make rails always consider it html_safe
html_safe? # test whether or not a string has been marked html_safe

html_escape() # Escapes all the html tags in a string
strip_links(html) # Removes html links from text
strip_tags(html) # Removes all html tags from text
sanitize(html, options) # Removes HTML and Javascript, watching for all tricks
                        # Options: :tags, :attributes (as arrays) to whitelist