# withlength

It returns a string of specified from an array.


### Installation

<pre><code>
npm install withlength
</code></pre>

### Usage

<pre><code>
import withLength from 'withLength'
withLength(['Hello','Hai'],5) 
//Output
            {
                maxlength:5,
                minlength:3,
                string:['Hello']
            }
</code></pre>

### Examples

<pre><code>
withLength(['Hello','Hai']) //with out length argument
            {
                maxlength:5,
                minlength:3,
                maxs:['Hello'],
                mins:['Hi']
            }   
</code></pre>