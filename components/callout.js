import React from 'react'

// https://www.notion.so/Callout-blocks-5b2638247b54447eb2e21145f97194b0
const Callout = ({ children, background = 'bg-gray-300 dark:text-gray-800', emoji = '💡' }) => {
  return <div className={`${background} flex rounded-lg callout mt-6 py-2`}>
    <div className="pl-3 pr-2 py-2 select-none text-xl">{emoji}</div>
    <div className="pr-4 py-2 -mt-6 leading-6">{children}</div>
  </div>
}

export default Callout