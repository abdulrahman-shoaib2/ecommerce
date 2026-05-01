import React from 'react'

type LayoutType = {children:React.ReactNode}

export default function ChangePasswordlayout({children}:LayoutType) {
  return (
    <div>
      <p>in the layout</p>
      {children}
    </div>
  )
}
