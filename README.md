# withlength

It returns a string of specified from an array.


### Installation

<pre><code>
npm install withlength
</code></pre>

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
                mins:['Hi']
            }   
```