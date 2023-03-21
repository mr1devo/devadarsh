import React from 'react'

const Sample = () => {
    var pname=[1,2,3,4,5,6]
  return (
    <div>
     <ul>
        {pname.map((value,index)=>{
            return <li key={index}>{value}</li>
        })}
        </ul> 
    </div>
  )
}

export default Sample
