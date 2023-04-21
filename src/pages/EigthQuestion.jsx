import { useState, Suspense } from 'react';
import { fetchData } from '../fetchData'
import {
    Card,
    MultiSelectBox,
    MultiSelectBoxItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

const eightQuestionData = fetchData('eight_question/')

const EightQuestion = () => {

    const data = eightQuestionData.read()

    let id = 1;
    for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
    }

    let filtersArray = data.filter(
        (obj, index, self) =>
            index ===
            self.findIndex((t) => t.programa_academico === obj.programa_academico)
    );

    const [selectedPrograms, setSelectedPrograms] = useState([]);

    const isAcademicProgramSelected = (academicProgram) => (selectedPrograms.includes(academicProgram.programa_academico) || selectedPrograms.length === 0);


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
                    <path fillRule="evenodd" d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                Ana - Quiere estudiar Ingenieria Ambiental. 3 universidades con más graduados en IA
            </h2>

            <Suspense fallback={<div>Loading...</div>}>

                <Card>
                    <div className="sm:mt-6 hidden sm:flex sm:start sm:space-x-2">
                        <MultiSelectBox
                            onValueChange={(value) => setSelectedPrograms(value)}
                            placeholder="Seleccione programa"
                            className="max-w-xs"
                        >
                            {filtersArray.map((item) => (
                                <MultiSelectBoxItem
                                    key={item.id}
                                    value={item.programa_academico}
                                    text={item.programa_academico}
                                />
                            ))}
                        </MultiSelectBox>
                    </div>
                    <div className="max-h-96 overscroll-none mt-6">
                        <Table className="max-h-96 overscroll-none mt-6">
                            <TableHead>
                                <TableRow >
                                    <TableHeaderCell className="bg-white">IES</TableHeaderCell>
                                    <TableHeaderCell className="bg-white">Departamento</TableHeaderCell>
                                    <TableHeaderCell className="bg-white">Metodologia</TableHeaderCell>
                                    <TableHeaderCell className="bg-white text-right">Graduados</TableHeaderCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data
                                    .filter((item) => isAcademicProgramSelected(item))
                                    .map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.ies}</TableCell>
                                            <TableCell>{item.departamento_domicilio_ies}</TableCell>
                                            <TableCell>{item.metodologia}</TableCell>
                                            <TableCell className="text-right">{item.graduados}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </div>
                </Card>

            </Suspense>
        </>
    )
}

export default EightQuestion