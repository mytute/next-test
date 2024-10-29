# 11 File Colocation.    

As we know nextjs uses a file system based router eacch folder represents a route segment mapped to a corresponding segment in the URL path. However it's important to note that a route isn't publicky accessible until a page.tsx file is added to the respective route segment. 

1. With in the app folder create a new folder named "dashboard".   
2. Inside the "dashboard" folder add new file nemaed "line-chart.tsx".   

>src/app/dashboard/line-chart.tsx   
```ts 
import React from "react";

const LineChart:React.FC = () => {

  return (
    <h1>Line Chart page</h1>
  );

}

export default LineChart;
```

3. check the following url is working or not.   
```bash
localhost:3000/dashboard
```

dashboard.tsx file publicly not accessible until page.tsx file is define. Even when a route become publicaly accessible only the content return by page.tsx is sent to the client.   

#### page.tsx content returned must be default exported react component.   

4. create page.tsx inside dashboard folder but not default exporting the react component.    
>src/app/dashboard/page.tsx   
```tsx 
const Dashboard = () =>{
    <h1>Dashboard home page</h1>
}
```

5. show when we enter the "localhost:3000/dashboard" url route make error on borwser.   
6. now make above page.tsx folder in following way. And show only "Dashboard" is displaying.       
```tsx 
const BarChart = () =>{
    return <h1>Bar Chart</h1>
}

const Dashboard = () =>{
    return <h1>Dashboard</h1>
}
export default Dashboard;
```

