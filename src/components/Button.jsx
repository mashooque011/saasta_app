import React from 'react'

const Button = ({title,defColor, actColor,bgColor,borderColor}) => {
  return (
    <>
      <button className="buton" style={{color : defColor , backgroundColor: bgColor , borderColor : borderColor , }}>
        {title}
      </button>
    </>
  )
}

export default Button
