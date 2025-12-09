"use client";

import Cards from "@/components/Cards";
import ApprovalChart from "@/components/Charts/ApprovalChart";
import MunicipalityChart from "@/components/Charts/MunicipalityChart";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="py-46 flex-1">
        <div className="w-full max-w-7xl mx-auto px-2">
          <div className="flex flex-col gap-2">
          <h1 className="heading text-6xl font-bold text-blue-600 text-center md:text-center">
            Análise de Dados COVID-19 Brasil
          </h1>

          <div className="mb-8">
            <p className="text-lg text-gray-700 text-center md:text-center px-4">
              Esta é uma análise abrangente dos dados relacionados à pandemia de COVID-19 no Brasil.
            </p>
          </div>
          <Cards />
          <section id="pesquisa" className="py-18">
            <div className="max-w-7xl w-full pl-3">
              <h2 className="heading text-4xl md:text-5xl font-bold text-blue-600 mb-8">
                O Contexto:<br />
                Educação Durante a Pandemia
              </h2>
              <p className="text-2xl text-gray-900 mb-6">
                A pandemia da COVID-19 causou uma grande disrupção no sistema educacional, com o fechamento das escolas e a transição para o ensino remoto, revelando lacunas estruturais e pedagógicas que afetaram milhões de estudantes. A crise ampliou desigualdades, especialmente no ensino público de regiões vulneráveis, resultando em perdas significativas na aprendizagem.
              </p>
              <p className="text-2xl text-gray-900">
                Esses efeitos refletiram nos indicadores de qualidade, como o IDEB, criado em 2007 pelo Inep para medir o aprendizado e definir metas de melhoria. Este estudo analisa o impacto na Baixada Santista com base em dados oficiais do INEP, buscando identificar padrões e diferenças entre os municípios da região.
              </p>
            </div>

            <div className="mt-20 max-w-7xl w-full px-3">
              <ApprovalChart />
            </div>

            <div className="max-w-7xl mt-20 w-full pl-3">
              <h2 className="heading text-4xl md:text-5xl font-bold text-blue-600 mb-8">
                Por que as Taxas de Aprovação Aumentaram?
              </h2>
              <p className="text-2xl text-gray-900 mb-6">
                O aumento nas taxas de aprovação em 2021, um dado à primeira vista contraintuitivo, deve ser analisado com cautela. Este resultado não reflete, necessariamente, uma melhora real no processo de aprendizagem, mas sim um reflexo das políticas públicas e estratégias adotadas durante um momento de caos e incertezas.
              </p>
            </div>

            <div className="max-w-7xl w-full px-2 mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
                <InfoCard
                  title="Flexibilização de Critérios:"
                  text="Muitas redes de ensino flexibilizaram os critérios de avaliação e adotaram a aprovação automática para evitar a evasão escolar"
                  color="#16A34A"
                />
                <InfoCard
                  title="Ensino Remoto:"
                  text="O modelo remoto pode ter facilitado comportamentos fraudulentos, comprometendo a autenticidade das avaliações"
                  color="#2563EB"
                />
                <InfoCard
                  title="Conclusão Cautelosa:"
                  text="O aumento nas taxas de aprovação pode mascarar defasagens significativas na aprendizagem real dos alunos"
                  color="#DC2626"
                />
              </div>
            </div>

            <div className="mt-20 max-w-7xl w-full px-3">
              <MunicipalityChart />
            </div>
              
          </section>

          <section id="metodologia" className="max-w-7xl w-full mx-auto px-2 py-8 pb-20 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center gap-8 w-full">
              <div className="flex-1 ">
                <h2 className="heading text-4xl md:text-5xl font-bold text-blue-600 mb-8">Metodologia e Ferramentas</h2>
                <p className="text-2xl text-gray-900 mb-6">
                  A pesquisa adota uma abordagem quantitativa, utilizando um dataset oficial do INEP. A análise, limpeza e visualização dos dados foram feitas em Python, com as bibliotecas Pandas e Plotly, na plataforma Google Colab. A abordagem respeitou os princípios da LGPD, utilizando apenas dados públicos e não identificáveis.
                </p>
              </div>
              <div className=" flex justify-end ">
                <img src="/tech.svg" alt="Ferramentas utilizadas" className="w-[625px] h-[384px] object-contain mr-[-80px]" />
              </div>
            </div>
          </section>

          <section id="sobre" className="max-w-7xl w-full mx-auto px-2 py-16">
            <h2 className="heading text-4xl md:text-5xl font-bold text-center mb-12">Membros do Grupo</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col items-center bg-gray-100 rounded-3xl p-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img src="/ali.jpg" alt="Ali" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ali</h3>
              </div>

              <div className="flex flex-col items-center bg-gray-100 rounded-3xl p-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img src="/gui.jpg" alt="Guilherme" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Guilherme</h3>
              </div>

              <div className="flex flex-col items-center bg-gray-100 rounded-3xl p-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img src="/jamily.jpeg" alt="Jamilly" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Jamilly</h3>
              </div>

              <div className="flex flex-col items-center bg-gray-100 rounded-3xl p-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img src="/rafael.jpeg" alt="Rafael" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Rafael</h3>
              </div>

              <div className="flex flex-col items-center bg-gray-100 rounded-3xl p-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img src="/rayda.jpeg" alt="Rayda" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Rayda</h3>
              </div>

              <div className="flex flex-col items-center bg-gray-100 rounded-3xl p-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img src="/rolt.jpeg" alt="Vinicius" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vinicius</h3>
              </div>
            </div>
          </section>

        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}