import React from 'react'

const timeStamp = () => {
  return (
    <div className="h-full flex">
        <div className="">
            <input type="number" name="days"></input>
            <input type="number" name="hours"></input>
            <input type="number" name="min"></input>
            <input type="number" name="second"></input>
        </div>
    </div>
  )
}

export default timeStamp