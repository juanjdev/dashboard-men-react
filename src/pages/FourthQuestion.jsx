import { Suspense } from 'react';
import { fetchData } from '../fetchData'
import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

const fourthQuestionData = fetchData('fourth_question/')

const calculatePercentage = (valor, total) => {
    return (valor / total) * 100
}

const FourthQuestion = () => {
    const data = fourthQuestionData.read()
    const top10 = data.slice(0, 10)
    let total = data.reduce(function (acc, obj) {
        return acc + obj.graduados;
    }, 0);   

    let id = 1;
    for (let i = 0; i < top10.length; i++) {
        top10[i].id = i + 1;
    }

    const valueFormatter = (number) =>
        `${Intl.NumberFormat("us").format(number).toString()} (${(calculatePercentage(number, total)).toFixed(2)}%)`;

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
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                </svg>
                Programa académico con más cantidad de graduados en el periodo 2016-2019
            </h2>
            <Suspense fallback={<div>Loading...</div>}>

                <Card>
                    <Table className="mt-6">
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Programa académico</TableHeaderCell>
                                <TableHeaderCell className="text-right">Graduados</TableHeaderCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {top10
                                .map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.programa_academico}</TableCell>
                                        <TableCell className="text-right">{valueFormatter(item.graduados)}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Card>
            </Suspense>
        </>
    )
}

export default FourthQuestion