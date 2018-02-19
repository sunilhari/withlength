# withlength

It returns a string of specified length  from a given  array.


### Installation

```
npm install withlength
```

### Usage

```
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

```
withLength(['Hello','Hai']) //with out length argument
            {
                maxlength:5,
                minlength:3,
                maxs:['Hello'],
                mins:['Hai']
            }   
```