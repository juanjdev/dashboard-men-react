import { fetchData } from '../fetchData'
import { Card, Title, Text, Grid, Col, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react'
import { BarChartComponent } from '../components/BarChartComponent';


const fifthQuestionData = fetchData('fifth_question/')

const FifthQuestion = () => {
    const data = fifthQuestionData.read()
    const top10 = data.slice(0, 10)
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
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z" clipRule="evenodd" />
                </svg>

                Top 10 de los departamentos con más estudiantes graduados en el periodo 2016-2019
            </h2>

            <Grid numColsLg={6} className='gap-6 mt-6 mb-6'>
                <Col numColSpanLg={2}>
                    <div className='flex flex-col h-full space-y-6'>
                        <Card className='flex-1'>
                            <div className='flex flex-col items-left justify-center h-full'>
                                <Title>Sueldo medio anual</Title>

                                <Table className="mt-1">
                                    <TableHead>
                                        <TableRow>
                                            <TableHeaderCell>Departamento</TableHeaderCell>
                                            <TableHeaderCell>Graduados</TableHeaderCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {top10.map((item) => (
                                            <TableRow key={item.departamento_domicilio_ies}>
                                                <TableCell>{item.departamento_domicilio_ies}</TableCell>
                                                <TableCell>
                                                    <Text>{item.graduados}</Text>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </Card>

                    </div>
                </Col>
                <Col numColSpanLg={4}>
                    <BarChartComponent
                        data={top10}
                        title='Número de graduados por departamento'
                        index='departamento_domicilio_ies'
                        categories={["graduados"]}
                        colors={["lime"]}
                        subtitle=''
                        width={100}
                    />
                </Col>
            </Grid>

        </>
    )
}

export default FifthQuestion