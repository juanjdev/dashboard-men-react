import { fetchData } from '../fetchData'
import { Suspense } from 'react'
import { Card, Title, DonutChart, Legend } from "@tremor/react";

const secondQuestionData = fetchData('second_question/')

const calculatePercentage = (valor, total) => {
    return (valor / total) * 100
}

const SecondQuestion = () => {
    const data = secondQuestionData.read()
    let total = data.reduce(function (acc, obj) {
        return acc + obj.graduados;
    }, 0);


    const valueFormatter = (number) =>
        `${Intl.NumberFormat("us").format(number).toString()}(${(calculatePercentage(number, total)).toFixed(1)}%)`;

    return (
        <>
            <div
                className='-z-10 absolute inset-0 max-w-lg m-auto h-[27rem] sm:h-64 sm:max-w-7xl' style={{
                    background: 'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
                    filter: 'blur(118px)'
                }}
            />
            <h2 className='flex items-center pt-10 pb-4 text-2xl font-semibold opacity-60 gap-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>


                ¿Cuántas IES oficiales y cuántas privadas reportan estudiantes graduados para el año 2019?
            </h2>
            <div className='w-full'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Card className="max-w-lg">
                        <Title className='text-center'>
                            Por sector de la IES
                        </Title>
                        <DonutChart
                            className="mt-6"
                            data={data}
                            category="graduados"
                            index="sector_ies"
                            valueFormatter={valueFormatter}
                            variant="pie"
                            colors={["lime", "grey"]}
                        />
                        <Legend
                            className='justify-center mt-3 text-center'
                            categories={['Oficial', 'Privada']}
                            colors={['lime', 'grey']}
                        />
                    </Card>
                </Suspense>
            </div>
        </>
    )

}



export default SecondQuestion