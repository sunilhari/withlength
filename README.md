# withlength

[![Build Status](https://travis-ci.org/sunilhari/withlength.svg?branch=master)](https://travis-ci.org/sunilhari/withlength)

It returns a string of specified length  from a given  array.


### Installation

```sh
npm install withlength
```

### Usage

```sh
import withLength from 'withLength'
withLength(['Hello','Hai'],5) 
//Output
            {
                maxlength:5,
                minlength:3,
                string:['Hello']
            }
```

### Examples

```sh
withLength(['Hello','Hai']) //with out length argument
            {
                maxlength:5,
                minlength:3,
                maxs:['Hello'],
                mins:['Hai']
            }   
```