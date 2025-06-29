type ButtonProps = {
  buttonType?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export default function Button({buttonType, children}: ButtonProps) {
    
  return (
    <button className={`h-[45px] bg-[#473a2b] w-full text-white rounded-[5px] hover:bg-[#322618] ${buttonType === 'secondary' ? 'opacity-[85%]' : ''}`} >
        {children}
    </button>
  )
}
