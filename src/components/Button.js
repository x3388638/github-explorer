import React, { useEffect } from 'react'

const Btn = () => {
  useEffect(() => {
    console.log('did mount')
  }, [])

  return (
    <div>
      123
      <button
        onClick={() => {
          console.log(1)
        }}
      >
        456
      </button>
    </div>
  )
}

export default Btn
