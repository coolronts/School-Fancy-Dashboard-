import React from 'react'

export const PrimaryCard =({children})=> {
  return (
    <div className="bg-purple-50 py-3 px-6 w-1/3 rounded-xl shadow-xl">
      {children}
    </div>
  )
}