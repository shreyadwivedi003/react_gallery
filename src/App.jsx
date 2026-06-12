import { useState } from 'react'
import useFetch from './useFetch';
import './App.css'

function App() {
  const [index,setIndex]=useState(1);
  const {userData,loading,error}=useFetch(`https://picsum.photos/v2/list?page=${index}&limit=50`);

  let printUserData=null
  if(loading){
    printUserData=(<h3 className='text-gray-400 text-lg absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1'>Loading...</h3>)
  }
  else if(userData.length){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url} target='blank'>
          <div className='h-40 w-44 bg-white rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt=''></img>
          </div>
        </a>
      </div>
    })
  }
  else if(error){
    printUserData=(<h3 className='text-red-500 text-lg absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1'>Error occured!!<br>{error}</br></h3>)
  }
  return(
    <div className='bg-black text-white overflow-auto h-screen p-4'>
      <h1 className='text-center font-bold border-b-2 border-pink-500'>Photos</h1>
      <div className='flex flex-wrap justify-center gap-4 p-2'>{printUserData}</div>
      <div className='flex justify-center items-center gap-4 p-4'>
        <button style={{opacity: index==1 ? 0.5:1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }} className='bg-pink-500 cursor-pointer text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
          setIndex(index+1)
        }} className='bg-pink-500 cursor-pointer text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
      </div>
  )
}

export default App
