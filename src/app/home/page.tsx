// components/Dashboard.tsx

import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2
} from 'lucide-react';
import Link from 'next/link';

import { CustomPieGraph } from 'components/customPieGraph';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from 'components/ui/tooltip';
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
];const chartData3 = [
  {
    subject: 'GDI',
    faults: 23,
    maxFaults: 25,
    fill: '#6800E4'
  }
];const chartData4 = [
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
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 py-5">
            {/* Logo */}
            <Link
              href="#"
              className="group flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              <Package2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="sr-only">Acme Inc</span>
            </Link>

            {/* Navigation Icons */}
            {[
              { href: '#', icon: Home, label: 'Dashboard' },
              { href: '#', icon: ShoppingCart, label: 'Pedidos', active: true },
              { href: '#', icon: Package, label: 'Produtos' },
              { href: '#', icon: Users2, label: 'Clientes' },
              { href: '#', icon: LineChart, label: 'Análises' }
            ].map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                      item.active
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            ))}
          </nav>

          {/* Settings Icon */}
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Configurações</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          {/* Main Area */}
          <main className="grid flex-1 gap-4 p-4 sm:px-6 md:gap-8">
            {/* Graphs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(400px,_1fr))] gap-4">
              <CustomPieGraph chartData={chartData1}/>
              <CustomPieGraph chartData={chartData2}/>
              <CustomPieGraph chartData={chartData3}/>
              <CustomPieGraph chartData={chartData4}/>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
