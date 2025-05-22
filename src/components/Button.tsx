
export default function Button({buttonType, children}) {
    
  return (
    <button className={`h-[45px] bg-[#473a2b] w-full text-white rounded-[5px] hover:bg-[#322618] ${buttonType === 'secondary' ? 'opacity-[85%]' : ''}`} >
        {children}
    </button>
  )
}
