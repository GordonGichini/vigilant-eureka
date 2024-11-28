import React from 'react'

 const Button = ({ href, icon: Icon, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-900 text-white transition-colors duration-300 hover:animate-dance">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </a>
  )
}

export default Button;
