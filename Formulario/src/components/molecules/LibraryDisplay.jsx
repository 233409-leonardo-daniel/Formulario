import React from 'react';

function LibraryDisplay({ data }) {
    return (
        <div className="p-4 bg-white rounded shadow-md w-full mt-4">
            {data.length > 0 ? (
                <ul>
                    {data.map((libro, index) => (
                        <li key={index} className="border-b border-gray-300 py-2">
                            <p><strong>Nombre:</strong> {libro.nombre}</p>
                            <p><strong>Autor:</strong> {libro.autor}</p>
                            <p><strong>Cantidad:</strong> {libro.cantidad}</p>
                            <p><strong>Editorial:</strong> {libro.editorial}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay libros en la biblioteca.</p>
            )}
        </div>
    );
}

export default LibraryDisplay;
