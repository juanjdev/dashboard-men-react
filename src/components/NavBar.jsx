import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/first-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 1</Link>
                            <Link to="/second-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 2</Link>
                            <Link to="/third-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 3</Link>
                            <Link to="/fourth-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 4</Link>
                            <Link to="/fifth-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 5</Link>
                            <Link to="/sixth-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 6</Link>
                            <Link to="/seventh-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 7</Link>
                            <Link to="/eight-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 8</Link>
                            <Link to="/ninth-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 9</Link>
                            <Link to="/tenth-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 10</Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )


}

export default NavBar