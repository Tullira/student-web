'use client';

import { useState } from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card';
import { ScrollArea } from 'components/ui/scroll-area';

interface Subject {
  id: number;
  name: string;
  completed: boolean;
}

export default function SubjectList() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: 'Matemática', completed: false },
    { id: 2, name: 'Português', completed: false },
    { id: 3, name: 'História', completed: false },
    { id: 4, name: 'Geografia', completed: false },
    { id: 5, name: 'Ciências', completed: false }
  ]);

  const toggleCompleted = (id: number) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id
          ? { ...subject, completed: !subject.completed }
          : subject
      )
    );
  };

  const removeSubject = (id: number) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto mt-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            Cadeiras Cadastradas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="max-h-[500px] pr-4">
            <ul className="space-y-4">
              {subjects.map((subject) => (
                <li
                  key={subject.id}
                  className="flex items-center justify-between p-4 bg-black-100 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <label
                      htmlFor={`subject-${subject.id}`}
                      className={`text-lg ${subject.completed ? 'line-through text-gray-500' : ''}`}
                    >
                      {subject.name}
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => toggleCompleted(subject.id)}
                      aria-label={
                        subject.completed
                          ? 'Marcar como não concluída'
                          : 'Marcar como concluída'
                      }
                    >
                      <Check
                        className={`h-4 w-4 ${subject.completed ? 'text-green-500' : 'text-gray-400'}`}
                      />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeSubject(subject.id)}
                      aria-label="Remover matéria"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
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
