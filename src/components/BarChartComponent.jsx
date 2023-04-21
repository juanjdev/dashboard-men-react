import { Card, BarChart, Title, Text } from '@tremor/react'

export function BarChartComponent({ data, title, colors, subtitle, categories, index, width, formatter }) {
    return (
        <Card>
            <Title className='text-right'>{title}</Title>
            <Text>{subtitle}</Text>
            <BarChart
                className='mt-4 h-80'
                data={data}
                index={index}
                categories={categories}
                colors={colors}
                layout='vertical'
                yAxisWidth={width}
                valueFormatter={formatter}
            />
        </Card>
    )
}