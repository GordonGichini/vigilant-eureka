import React from 'react'

 const Button = ({ href, icon: Icon, children }) => {
  return (
    <a
      href={href}
      className="button flex items-center gap-2 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:scale-110 hover:animate-none transition-all duration-300 animate-danceUpSideways"
      target="_blank"
      rel="noopener noreferrer"
    >
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </a>
  )
}

export default Button;
