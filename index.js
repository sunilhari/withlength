"use strict";

var withLength = function withLength(source) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (!(source instanceof Array)) return null;
    var ofLengthSource = {},
        ofLength = Number(len),
        maxlength = 0,
        minlength = Number.MAX_VALUE;
    for (var i = 0; i < source.length; i++) {
        var str = source[i].toString(),
            strLen = str.length;
        ofLengthSource[strLen] = ofLengthSource[strLen] || [];
        ofLengthSource[strLen].push(str);
        maxlength = strLen > maxlength ? strLen : maxlength;
        minlength = strLen < minlength ? strLen : minlength;
    }
    if (ofLength != ofLength || ofLength == 0) {
        return {
            maxs: ofLengthSource[maxlength],
            mins: ofLengthSource[minlength],
            maxlength: maxlength,
            minlength: minlength
        };
    } else {
        return {
            maxlength: maxlength,
            minlength: minlength,
            string: ofLengthSource[ofLength] || null
        };
    }
};

module.exports = withLength;
