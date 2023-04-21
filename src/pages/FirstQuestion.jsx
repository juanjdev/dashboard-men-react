import { fetchData } from '../fetchData'
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
} from "@tremor/react";

const firstQuestionData = fetchData('first_question/')

const FirstQuestion = () => {
    const data = firstQuestionData.read()
    const top5 = data.sort((a, b) => b - a).slice(0, 5)


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
                    <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                </svg>

                Top 5 IES con mayor número de graduados
            </h2>
            <Card>
                <Table className="mt-1">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Institución Educación Superior (IES)</TableHeaderCell>
                            <TableHeaderCell>Graduados</TableHeaderCell>
                            <TableHeaderCell>Matriculados</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {top5.map((item) => (
                            <TableRow key={item.ies}>
                                <TableCell>{item.ies}</TableCell>
                                <TableCell>
                                    <Text>{item.graduados}</Text>
                                </TableCell>
                                <TableCell>
                                    <Text>{item.matriculados}</Text>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </>
    )

}

export default FirstQuestion