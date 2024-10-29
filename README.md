# 12 Private Folders    

* A private folder indicate that it is a private implementation detail and should not be considered by the routing system.   
* The folder and all its subfolders are excluded from routing.   

* Prefix the folder name with an undersore.   

1. inside the app folder create a new folder call "_lib". In this folder you can have utility functions such as format-date.ts

2. inside the "_lib" folder create file named "page.tsx".  
>src/app/_lib/page.tsx   
```ts 
import React from 'react';

const PrivateRoute () => {
    return <h1>You cannot view this in the browser</h1>
}
```

3. then go to above "PrivateRoute" ulr which is localhost:3000/_lib and show it not loading.  
 
### Private Folders contd.    

 1. For seperating UI logic from routing logic.   
 2. For consistently organizing internal files across a project.   
 3. For sorting and grouping files in code editors.  
 2. For avoiding potential naming conflicts with future Next.js file conventions.   

 note:  
 If you want to include an undersore in URL segments, you can prefix the folder name with "%5F" which is the URL-encoded from an underscore.   

 

