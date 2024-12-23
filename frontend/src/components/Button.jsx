import React from 'react'

 const Button = ({ href, children }) => {
  return (
    <a
      href={href}
      className="inline-flex w-fit items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-kaushan rounded-md hover:bg-blue-700 hover:animate-none transition-all duration-300 animate-danceUpSideways"
      target="_blank"
      rel="noopener noreferrer"
    >
        {children}
      </a>
  )
}

export default Button;
