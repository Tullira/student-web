/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import * as React from 'react';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from 'components/ui/select';

export default function CadastroCadeira() {
  const [materia, setMateria] = React.useState('');
  const [faltas, setFaltas] = React.useState(0);
  const [cor, setCor] = React.useState('#ff0000');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ materia, faltas, cor });
    // Aqui você pode adicionar a lógica para salvar os dados
  };

  return (
    <div className="overflow-hidden">
      <div className="max-w-md mx-auto mt-24 p-6 rounded-lg shadow-md ">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Cadastrar Cadeira
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="materia">Matéria</Label>
            <Select value={materia} onValueChange={setMateria}>
              <SelectTrigger id="materia">
                <SelectValue placeholder="Selecione a matéria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matematica">Matemática</SelectItem>
                <SelectItem value="portugues">Português</SelectItem>
                <SelectItem value="historia">História</SelectItem>
                <SelectItem value="geografia">Geografia</SelectItem>
                <SelectItem value="ciencias">Ciências</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="faltas">Faltas obtidas</Label>
            <Input
              id="faltas"
              type="number"
              min={0}
              value={faltas}
              onChange={(e: any) => setFaltas(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cor">Cor da cadeira</Label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                id="cor"
                value={cor}
                onChange={(e) => setCor(e.target.value)}
                className="w-10 h-10 rounded-md cursor-pointer"
              />
              <div
                className="flex-1 h-10 rounded-md"
                style={{
                  background: `linear-gradient(to right, #ffffff, ${cor})`
                }}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
}
