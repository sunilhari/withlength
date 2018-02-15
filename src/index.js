const withLength = (source, len = 0) => {
    if (!(source instanceof Array))
        return null;
    let ofLengthSource = {},
        ofLength = Number(len),
        maxlength = 0,
        minlength = Number.MAX_VALUE,
        defaultPayload = {}
    for (let i = 0; i < source.length; i++) {
        let str = source[i].toString(),
            strLen = str.length;
        ofLengthSource[strLen] = ofLengthSource[strLen] || [];
        ofLengthSource[strLen].push(str);
        maxlength = strLen > maxlength ? strLen : maxlength;
        minlength = strLen < minlength ? strLen : minlength;
    }
    if (ofLength != ofLength || ofLength == 0) {
        return {
            maxs:ofLengthSource[maxlength],
            mins:ofLengthSource[minlength],
            maxlength,
            minlength
        }
    }
    else { 
        return {
            maxlength,
            minlength,
            string:ofLengthSource[ofLength] || null
        }
    }

}

export { withLength };