import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
      <p>{length===1?"A":
      length<1?"No":`${length} List of`} {length<=1?"Book":"Books"}</p>
      <small>
        Copyright &copy; from MaaH-Mood all right reserved
      </small>
    </footer>
  )
}

export default Footer
