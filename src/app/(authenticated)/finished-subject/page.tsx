'use client';

import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card';
import { ScrollArea } from 'components/ui/scroll-area';
import { CheckCircle2 } from 'lucide-react';

// interface CompletedCourse {
//   id: number;
//   name: string;
//   absences: number;
// }

export default function CompletedCourses() {
  const completedCourses = [
    { id: 1, name: 'Cálculo I', absences: 2, absencesTotal: 10 },
    {
      id: 2,
      name: 'Programação Orientada a Objetos',
      absences: 0,
      absencesTotal: 10
    },
    { id: 3, name: 'Estruturas de Dados', absences: 4, absencesTotal: 10 },
    { id: 4, name: 'Banco de Dados', absences: 1, absencesTotal: 10 },
    { id: 5, name: 'Redes de Computadores', absences: 3, absencesTotal: 10 },
    { id: 6, name: 'Inteligência Artificial', absences: 0, absencesTotal: 10 }
  ];

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto mt-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <CheckCircle2 className="mr-2 h-6 w-6 text-green-500" />
            Cadeiras Concluídas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="max-h-[500px] mt-2 pr-4">
            <ul className="space-y-7">
              {completedCourses.map((course) => (
                <li
                  key={course.id}
                  className="flex items-center justify-between p-4 bg-black-100 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor={`subject-${course.id}`}
                      className={`text-lg`}
                    >
                      {course.name}
                    </label>
                  </div>
                  <div className="flex text-lg space-x-2">
                    <h3>
                      {course.absences}/{course.absencesTotal} faltas
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
