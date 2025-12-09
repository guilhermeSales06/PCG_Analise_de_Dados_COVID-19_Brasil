import Image from 'next/image';

export default function Cards() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-[#2B4A8C] rounded-3xl p-9 text-white h-[243px] flex flex-col justify-center">
            <div className="flex items-baseline gap-0.5">
              <h2 className="heading text-8xl font-bold">56</h2>
              <span className="text-3xl font-medium">milhões</span>
            </div>
            <p className="mt-1 text-xl leading-tight">
              de alunos afetados, com aulas remotas ou paralisadas.
            </p>
          </div>

          <div className="bg-[#6B7280] rounded-3xl p-9 text-white h-[243px] flex flex-col justify-center">
            <div className="flex items-baseline gap-0.5">
              <h2 className="heading text-8xl font-bold">9</h2>
              <span className="text-3xl font-medium">Municípios</span>
            </div>
            <p className="mt-1 text-xl leading-tight">
              da baixada santista como foco geográfico
            </p>
          </div>
        </div>

        <div className="bg-[#2563EB] rounded-3xl relative h-[300px] md:h-[500px] overflow-visible flex items-center justify-center">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] h-[105%]">
            <Image 
              src="/covid-worker-.png" 
              alt="Profissional da saúde com equipamento de proteção"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
            <div
            className="block md:hidden relative w-[80%] h-[80%] animate-[spin_60s_linear_infinite]"
            style={{ willChange: 'transform' }}
            >
            <Image 
              src="/coronavirus.png" 
              alt="Coronavírus"
              fill
              className="object-contain object-center"
              priority
            />
            </div>
        </div>

        <div className="bg-[#1F2937] rounded-3xl p-8 text-white flex flex-col justify-center items-center h-[520px] md:h-[500px]">
          <p className="text-sm font-medium mb-10">Período Analisado:</p>
          <div className="space-y-10 text-center">
            <h3 className="heading text-7xl font-bold">2017</h3>
            <h3 className="heading text-7xl font-bold">2019</h3>
            <h3 className="heading text-7xl font-bold">2021</h3>
          </div>
        </div>
      </div>
    </div>
  );
}