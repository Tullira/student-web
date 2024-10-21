'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts';
import { DrawerDemo } from 'components/molecules/customDrawer';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from 'components/ui/card';
import { ChartConfig, ChartContainer } from 'components/ui/chart';
import { GraphInputType } from './type';

export const description = 'A radial chart with text';

const chartConfig = {
  faults: {
    label: 'Faltas'
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))'
  },
  chrome: {
    label: 'Chrome',
    color: 'red'
  }
} satisfies ChartConfig;

export function CustomPieGraph({
  subject,
  faults,
  maxFaults,
  fill
}: GraphInputType) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{subject}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[220px]"
        >
          <RadialBarChart
            data={[{ subject, faults, maxFaults }]}
            startAngle={0}
            endAngle={(faults / maxFaults) * 360}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="faults" fill={fill} cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {faults.toLocaleString()}/{maxFaults.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Faltas
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className=" flex justify-center">
        {/* <Button variant="ghost">Adicionar Falta</Button> */}
        <DrawerDemo
          onSubmit={() => console.log('oiii')}
          maxFaults={maxFaults}
          faults={faults}
        />
      </CardFooter>
    </Card>
  );
}
