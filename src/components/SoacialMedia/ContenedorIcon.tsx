import Link from 'next/link'

const ContenedorIcon = ({children,href}:{children:React.ReactNode,href:string}) => {
  return (
    <Link href={href} className="flex items-center p-4 other-gradient rounded max-w-16 shadow-md shadow-white/10 hover:-translate-y-1 transition-transform duration-300">
      {children}
    </Link>
  )
}

export default ContenedorIcon
