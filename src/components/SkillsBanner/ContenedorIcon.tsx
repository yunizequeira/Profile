
const ContenedorIcon = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex items-center p-4 other-gradient rounded w-16 h-16 shadow-md shadow-white/10 hover:-translate-y-1 transition-transform duration-300 ">
      {children}
    </div>
  )
}

export default ContenedorIcon
