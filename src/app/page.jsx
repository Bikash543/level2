'use client'
import { useState } from "react";


export default  function Home() {

  const [name,setName] = useState('bikash')

  

  return (
    <>
    Hello {name}
    </>
  );
}
