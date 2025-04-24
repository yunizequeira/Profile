import Link from 'next/link'

const ContenedorIcon = ({children,href}:{children:React.ReactNode,href:string}) => {
  return (
    <Link href={href} className="flex items-center p-4 rounded max-w-16 another-gradient boxShadow hover:-translate-y-1 transition-transform duration-300" target='_blank'>
      {children}
    </Link>
  )
}

export default ContenedorIcon
