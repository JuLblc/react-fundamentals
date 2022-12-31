// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // Solution
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   onSubmitUsername(event.target.elements.usernameInput.value)
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="usernameInput">Username:</label>
  //       <input id="usernameInput" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // Extra credit 1
  // const inputRef = React.useRef()

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   onSubmitUsername(inputRef.current.value)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div >
  //       <label>Username:</label>
  //       <input ref={inputRef} type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // Extra credit 2
//   const [inputContent, setInputContent] = React.useState("")
//   const [error, setError] = React.useState()

//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(inputContent)
//   }
  
//   function handleChange(event) {
//     const {value} = event.target
//     const isLowerCase = value === value.toLowerCase()
//     setError(isLowerCase ? null : 'Username must be lower case')
//     setInputContent(value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div >
//         <label>Username:</label>
//         <input type="text" onChange={handleChange} value={inputContent} />
//       </div>
//       <div>
//         {error}
//       </div>
//       <button disabled={Boolean(error)} type="submit">Submit</button>
//     </form>
//   )
// }

  // Extra credit 3
  const [inputContent, setInputContent] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputContent)
  }
  
  function handleChange(event) {
    const {value} = event.target
    setInputContent(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <label>Username:</label>
        <input type="text" onChange={handleChange} value={inputContent} />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
