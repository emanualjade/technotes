if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {
 
(function (view) {
 
"use strict";
 
if (!('HTMLElement' in view) && !('Element' in view)) return;
 
var
      classListProp = "classList"
    , protoProp = "prototype"
    , elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
    , objCtr = Object
    , strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
    }
    , arrIndexOf = Array[protoProp].indexOf || function (item) {
        var
              i = 0
            , len = this.length
        ;
        for (; i < len; i++) {
            if (i in this && this[i] === item) {
                return i;
            }
        }
        return -1;
    }
    // Vendors: please allow content code to instantiate DOMExceptions
    , DOMEx = function (type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
    }
    , checkTokenAndGetIndex = function (classList, token) {
        if (token === "") {
            throw new DOMEx(
                  "SYNTAX_ERR"
                , "An invalid or illegal string was specified"
            );
        }
        if (/\s/.test(token)) {
            throw new DOMEx(
                  "INVALID_CHARACTER_ERR"
                , "String contains an invalid character"
            );
        }
        return arrIndexOf.call(classList, token);
    }
    , ClassList = function (elem) {
        var
              trimmedClasses = strTrim.call(elem.className)
            , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
            , i = 0
            , len = classes.length
        ;
        for (; i < len; i++) {
            this.push(classes[i]);
        }
        this._updateClassName = function () {
            elem.className = this.toString();
        };
    }
    , classListProto = ClassList[protoProp] = []
    , classListGetter = function () {
        return new ClassList(this);
    }
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
    return this[i] || null;
};
classListProto.contains = function (token) {
    token += "";
    return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
    var
          tokens = arguments
        , i = 0
        , l = tokens.length
        , token
        , updated = false
    ;
    do {
        token = tokens[i] + "";
        if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
        }
    }
    while (++i < l);
 
    if (updated) {
        this._updateClassName();
    }
};
classListProto.remove = function () {
    var
          tokens = arguments
        , i = 0
        , l = tokens.length
        , token
        , updated = false
    ;
    do {
        token = tokens[i] + "";
        var index = checkTokenAndGetIndex(this, token);
        if (index !== -1) {
            this.splice(index, 1);
            updated = true;
        }
    }
    while (++i < l);
 
    if (updated) {
        this._updateClassName();
    }
};
classListProto.toggle = function (token, forse) {
    token += "";
 
    var
          result = this.contains(token)
        , method = result ?
            forse !== true && "remove"
        :
            forse !== false && "add"
    ;
 
    if (method) {
        this[method](token);
    }
 
    return result;
};
classListProto.toString = function () {
    return this.join(" ");
};
 
if (objCtr.defineProperty) {
    var classListPropDesc = {
          get: classListGetter
        , enumerable: true
        , configurable: true
    };
    try {
        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    } catch (ex) { // IE 8 doesn't support enumerable:true
        if (ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        }
    }
} else if (objCtr[protoProp].__defineGetter__) {
    elemCtrProto.__defineGetter__(classListProp, classListGetter);
}
 
}(self));
 
}

var oojs = (function(oojs){
    
    var createToolbarItems = function(itemElements){
        var items = [];
        [].forEach.call(itemElements, function(el, index, array){
            
            var item = {
                toggleActiveState: function(){
                    this.activated = !this.activated;
                }
            };
            
            Object.defineProperties(item, {
                el: {
                    value: el
                },
                enabled: {
                    get: function(){
                        return !this.el.classList.contains("disabled");
                    },
                    set: function(value){
                        if(value){
                            this.el.classList.remove("disabled");
                        }else{
                            this.el.classList.add("disabled");
                        }
                    }
                },
                activated: {
                    get: function(){
                        return this.el.classList.contains("active");
                    },
                    set: function(value){
                        if(value){
                            this.el.classList.add("active");
                        }else{
                            this.el.classList.remove("active");
                        }
                    }
                },
                
            });
            
            items.push(item)
            
        });
        
        return items;
    };
    
    oojs.createToolbar = function(elementId){
        var element = document.getElementById(elementId);
        var items = element.querySelectorAll(".toolbar-item");
        
        return {
            items : createToolbarItems(items)
        };
    };
    
    return oojs;
    
})(oojs || {})

var toolbar = oojs.createToolbar("myToolbar");
console.log(toolbar.items[0]);
toolbar.items[0].toggleActiveState();
toolbar.items[1].enabled = false;
toolbar.items[2].activated = true;

var toolbarTwo = oojs.createToolbar("mySecondToolbar");
toolbarTwo.items[0].enabled = false;