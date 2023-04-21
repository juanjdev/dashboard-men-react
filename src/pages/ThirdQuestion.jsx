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
    Title,
    AreaChart
} from '@tremor/react';

const thirdQuestionData = fetchData('third_question/')

const ThirdQuestion = () => {

    const data = thirdQuestionData.read()
    let categories = ["UNIVERSITARIA", "TECNOLOGICA", "ESPECIALIZACION UNIVERSITARIA", "MAESTRIA", "FORMACION TECNICA PROFESIONAL", "ESPECIALIZACION TECNOLOGICA", "ESPECIALIZACION MEDICO QUIRURGICA", "DOCTORADO"]
    let id = 1;
    for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
    }

    let filtersArray = data.filter(
        (obj, index, self) =>
            index ===
            self.findIndex((t) => t.nivel_formacion === obj.nivel_formacion)
    );

    console.log(filtersArray)

    const fixedData = data.reduce((acc, cur) => {
        const { anio, nivel_formacion, graduados } = cur;
        if (!acc[anio]) acc[anio] = {};
        if (!acc[anio][nivel_formacion]) acc[anio][nivel_formacion] = 0;
        acc[anio][nivel_formacion] += graduados;
        return acc;
    }, {});

    const finalData = Object.entries(fixedData).map(([year, education]) => {
        return { year, ...education };
    });
    const [selectedLevels, setSelectedLevels] = useState([]);

    const isEducationLevelSelected = (educationLevel) => (selectedLevels.includes(educationLevel.nivel_formacion) || selectedLevels.length === 0);

    const categoriesToShow = selectedLevels.length === 0 ? categories : selectedLevels

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
                    <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clipRule="evenodd" />
                </svg>


                Graduados por año para tres niveles de formación
            </h2>
            <Suspense fallback={<div>Loading...</div>}>

                <Card>
                    <div className="sm:mt-6 hidden sm:flex sm:start sm:space-x-2">
                        <MultiSelectBox
                            onValueChange={(value) => setSelectedLevels(value)}
                            placeholder="Seleccione nivel de formacion"
                            className="max-w-xs"
                        >
                            {filtersArray.map((item) => (
                                <MultiSelectBoxItem
                                    key={item.id}
                                    value={item.nivel_formacion}
                                    text={item.nivel_formacion}
                                />
                            ))}
                        </MultiSelectBox>
                    </div>
                    <Table className="max-h-96 overscroll-none mt-6">
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell className='bg-white'>Año</TableHeaderCell>
                                <TableHeaderCell className='bg-white'>Nivel de formacion</TableHeaderCell>
                                <TableHeaderCell className="bg-white text-right">Graduados</TableHeaderCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data
                                .filter((item) => isEducationLevelSelected(item))
                                .map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.anio}</TableCell>
                                        <TableCell>{item.nivel_formacion}</TableCell>
                                        <TableCell className="text-right">{item.graduados}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Card>
                <div className='w-full'>
                    <Card className="my-6 w-full">
                        <Title></Title>
                        <AreaChart
                            className="mt-6"
                            data={finalData}
                            index="year"
                            categories={categoriesToShow}
                            colors={["blue", "cyan", "fuchsia", "orange", "yellow", "green", "purple", "sky"]}
                        />
                    </Card>
                </div>
            </Suspense>
        </>
    )
}

export default ThirdQuestion