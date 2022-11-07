import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  const [list,setList]=useState<number[]>(initialArray)
  
  const appendStart=(e:number)=>{
   setList((prev)=>[e,...prev])
  }

  const appendEnd=(e:number)=>{
    setList((prev)=>[...prev,e])
   }

  const popStart=()=>{
    let newList=[...list]
    newList.shift()
    setList(newList)
  }

  const popEnd=()=>{
    let newList=[...list]
    newList.pop()
    setList(newList)
  }

  const clear=()=>{
    setList([])
  }

  const reset=()=>{
    setList(initialArray)
  }
  
  return {list,appendStart,appendEnd,popStart,popEnd,clear,reset}
};

export default useNumberList;
