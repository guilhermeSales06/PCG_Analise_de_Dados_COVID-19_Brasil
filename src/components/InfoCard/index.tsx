interface InfoCardProps {
  title: string;
  text: string;
  color: string;
}

export default function InfoCard({ title, text, color }: InfoCardProps) {
  return (
    <div className="relative pt-7">
      <div className="absolute top-[1rem] left-1/2 -translate-x-1/2 z-10">
        <span className="bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap">
          {title}
        </span>
      </div>
      
    <div 
      className="bg-[#E5E7EB] rounded-2xl min-h-[230px] flex items-center justify-center p-8"
      style={{ 
        borderBottom: `6px solid ${color}`,
        borderBottomLeftRadius: '0.4rem',
        borderBottomRightRadius: '0.4rem'
      }}
    >
      <p className="text-lg text-gray-900 text-center">
        {text}
      </p>
    </div>
    </div>
  );
}