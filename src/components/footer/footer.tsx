import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E3A8A] text-white ">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center md:items-center gap-8">
          <div className="flex-shrink-0">
            <Image 
              src="/logo.svg" 
              alt="Universidade Católica de Santos" 
              width={200}
              height={120}
              className="object-contain"
            />
          </div>

          <div className="hidden md:block w-px bg-white/30 self-stretch mx-8"></div>

          <div className="flex-1">
            <h3 className="heading text-3xl font-bold mb-8 text-center md:text-left">Contatos</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="space-y-5">
                <div className="text-sm">
                  <span className="font-semibold">Email:</span> alikhatib@unisantos.br
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Email:</span> guilhermesales@unisantos.br
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Email:</span> jamillya@unisantos.br
                </div>
              </div>

              <div className="space-y-5 flex flex-col justify-center">
                <div className="text-sm">
                  <span className="font-semibold">Email:</span> raydaanka@unisantos.br
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Email:</span> rafaelgsilva@unisantos.br
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Email:</span> rolt@unisantos.br
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
