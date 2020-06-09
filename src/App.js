import React from 'react'
import { useHistory, Link } from 'react-router-dom'

const App = () => {
  let h = useHistory()
  const handleClick = () => {
    h.push('/12388')
  }
  return (
    <div>
      lalalal<Link to="/123">123</Link>
      <Link to="/456">456</Link>
      <div onClick={handleClick}>123</div>
    </div>
  )
}

export default App
