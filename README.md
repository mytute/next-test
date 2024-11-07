# 46 Client-side Rendering  

As you know remenver React being the go-to library for creating Single Page Applications (SPAs)  

When creating typical single page application when a client makes a request, server sends a single HTML page to the browser. This HTML page often contains just a simple div tag and a reference to a Javascript file.   
```html
<div id="root"></div>
<script type="text/javascript" src="/static/js/bundle.js"></script>
```
"bundle.js" file contains everything your application needs to run including the react library itself and your application code. This "bundle.js" file will downloaded after html file downloaded. Downloaded javascript code the generates the HTML on your compupter and inserts it into the DOM under the "root" element and you see the user interface in the browser. To prove this you can see downloaded html file(not component generated) in the browser.   

This method of rendering, where the component code is transformed into a user interface directly within the browser(the client), is known as client-side rendering(CSR).  

CSR quickly became the standard for SPAs, with widespread adoption.  

It wasn't long before developers began noticing some inherent drawbacks to this approach.  

### Drawbacks of CSR  
*SEO  
Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index.  

*Performance  
Having the browser(the client) handle all the works, such as fetching data, computing the UI, and making the HTML interactive, can slow things down. Users might see a blank screen or a loading spinner while the page loads.  

Each new feature added to the application increases the size of the JavaScript bundle, prolonging the wait time for users to see the UI.   

