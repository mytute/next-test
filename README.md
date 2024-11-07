# 47 Server-side Rendering   

### Recollectiong Drawbacks of CSR   

Reliance on JavaScript for rendering content on the client side can significantly hurt SEO, as search engines might struggle to index the content properly.  

The user experience can suffer from slow load times, as the browser has to download. parse and execute JavaScript before the user sees any meaningful content on the page.  

### Server-side Solution.   

when request comes in instead of sending a nearly empty HTML file depends on client side JavaScript to construc the page the server takes charge of rendering the full HTML. This fully formed HTML document is then send directly to the browser since HTML is generated on the server the browser is able to quickly pass and display it improving the initial page load time.  

This significantly improves SEO because search engines can easily index the server-rendered content.   
Users can immediately see the page HTML content, insted of a blank screen or laoding spinner.   

 SSR approach to immediately improving the visibility of content has it own complexity. Particulary when it comes to the pages interactivity.  

 interactivity of the page is on hold until the JavaScript bundle comprising react itself along with your application specific code have been completely downloaded and executed by the browser. This important phase known as "hydration" where static HTML page initially served by the server is brought to live.  

### hydration   
During hydration, React takes control in the browser, reconstruction the component tree in memory based on the static HTML that was served.  

It carefully plans the placement of the interactive elemennts within this tree. Then, React proceeds to bind the necessary JavaScript logic to these elements.  

This involves initializing the application state, attaching event handlers for actions such as clicks and mouseovers, and setting up any other dynamic functionalities required for a fully interactivity user experience.   

### Server-side Solution (to category)  
1. Static Soite Generation (SSG)  
2. Server Side Rendering (SSR)  

SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change often, like blog posts.  

SSR, on the other hand, renders pages on-demand in response to user requests. It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user.  

Server-Side Rendering (SSR) was a significant improvement over Client-Side Rendering (CSR), providing faster initial page loads and better SEO.  

### Drawbacks of SSR   
1. You have to fetch everything before you can show anything  

Components canot start rendering and then pause or "wait" while data is still begin loaded.  
If a component needs to fetch data from a database or another source(like an API), this fetching must be completed before the server can begin rendering the page.  
This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client.  

2. You have to load everything before you can hydrate anything   

For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated comoponent tree.  
This means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them.  

3. You have to hydrate everything before you can interact with anything.  

React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree.  
As a consequence, all components must be hydrated before you can interact with any of them.  


Let's see the solutions for above Drawbacks in next tute.  
