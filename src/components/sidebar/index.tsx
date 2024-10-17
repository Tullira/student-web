'use client';
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

import { Tooltip, TooltipContent, TooltipTrigger } from 'components/ui/tooltip';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();
  return (
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
          { href: '/home', icon: Home, label: 'Dashboard' },
          { href: '/add-subject', icon: ShoppingCart, label: 'Pedidos' },
          { href: '#', icon: Package, label: 'Produtos' },
          { href: '#', icon: Users2, label: 'Clientes' },
          { href: '#', icon: LineChart, label: 'Análises' }
        ].map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                  pathname === item.href
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
              href="/settings"
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                pathname === '/settings'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Configurações</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Configurações</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
