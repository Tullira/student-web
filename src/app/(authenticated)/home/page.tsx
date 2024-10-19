// components/Dashboard.tsx

import { CustomPieGraph } from 'components/templates/customPieGraph';
const chartData1 = [
  {
    subject: 'Cálculo 3',
    faults: 3,
    maxFaults: 15,
    fill: 'var(--color-chrome)'
  }
];
const chartData2 = [
  {
    subject: 'Métodos Numéricos',
    faults: 7,
    maxFaults: 15,
    fill: '#F5F5F5'
  }
];
const chartData3 = [
  {
    subject: 'GDI',
    faults: 23,
    maxFaults: 25,
    fill: '#6800E4'
  }
];
const chartData4 = [
  {
    subject: 'Física Experimental',
    faults: 2,
    maxFaults: 4,
    fill: '#51E678'
  }
];
export const description =
  'Um dashboard de pedidos com navegação lateral. A barra lateral possui navegação por ícones. A área de conteúdo tem breadcrumb e busca no cabeçalho. A área principal exibe uma lista de pedidos recentes com filtro e botão de exportação, além de uma visualização detalhada de um único pedido com informações diversas.';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex flex-col sm:gap-4 sm:py-4">
        {/* Main Area */}
        <main className="grid flex-1 gap-4 p-4 sm:px-6 md:gap-8">
          {/* Graphs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(400px,_1fr))] gap-4">
            <CustomPieGraph chartData={chartData1} />
            <CustomPieGraph chartData={chartData2} />
            <CustomPieGraph chartData={chartData3} />
            <CustomPieGraph chartData={chartData4} />
          </div>
        </main>
      </div>
    </div>
  );
}
