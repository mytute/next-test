#  21 Navigating Programmatically   

Here we are looking how to navigate to the route by calling function and with out user clicking "Link" element.  

1. create "order-product" folder inside it create "page.tsx" file.   
>src/app/order-product/page.tsx    
```tsx 
"use client"; // to use react hook 
import { useRouter } from "next/navigation"; // navigate by calling function   

const OrderProduct = () => {

  const router = useRouter();

  const handleClick = () =>{
    console.log("place your order.")
    router.push("/"); // navigate to the definded path   
    //router.replace();
    //router.forward(); // same as browser forword button
    //router.back(); // same as browser back button
  }

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  )

}

export default OrderProduct;
```

 
