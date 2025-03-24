import React from 'react'

const Form = () => {

  const hello = () => {
    console.log("Show")
  }

  // function hello() {
  //   console.log("Button Clicked");
    
  // }

  const age = 19;
  return (
    <>
      <form action="#">
        {age>18 ? (
          <div>
          <input type="text" name="name" id="name" placeholder='Enter name' />
        <button onClick={hello}>Click Me</button>
          </div>
        ) : (<h1>Go home kiddo!</h1>)}
        
      </form>
    </>
  )
}

export default Form