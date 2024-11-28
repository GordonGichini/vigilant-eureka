import React from 'react'

 const Button = ({ href, icon: Icon, children }) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-900 text-white px-8 py-2 rounded-md transition-colors w-40">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </a>
  )
}

export default Button;
