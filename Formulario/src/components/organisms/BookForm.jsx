import React, { useState } from 'react';
import Field from '../molecules/Field';
import Button from '../atoms/Button';
import LibraryDisplay from '../molecules/LibraryDisplay'; // Asegúrate de ajustar la ruta
import { library } from '../../data/Library';

function BookForm() {
    const [nombre, setNombre] = useState('');
    const [autor, setAutor] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [editorial, setEditorial] = useState('');
    const [showBox, setShowBox] = useState(false);
    const verticalMenuItems = ['Agregar', 'Editar', 'Borrar'];

    const libro = {
        nombre,
        autor,
        cantidad,
        editorial
    };

    const handleButtonClick = () => {
        library.data.push(libro);
        console.log(library.data);
        alert('Operación Exitósa');
    };

    const handleShowBoxClick = () => {
        setShowBox(!showBox);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-amber-800">
        <div id="book_form" className="p-8 bg-amber-200 rounded shadow-md w-96">
            <Field
                type="text"
                placeholder="Ej. El Hobbit"
                text="Nombre del Libro"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
            />
            <Field
                type="text"
                placeholder="Ej. J.R.R. Tolkien"
                text="Autor"
                value={autor}
                onChange={(event) => setAutor(event.target.value)}
            />
            <Field
                type="text"
                placeholder="Ej. 10"
                text="Cantidad"
                value={cantidad}
                onChange={(event) => setCantidad(event.target.value)}
            />
            <Field
                type="text"
                placeholder="Ej. HarperCollins"
                text="Editorial"
                value={editorial}
                onChange={(event) => setEditorial(event.target.value)}
            />
            <div className="flex justify-between mt-4">
                <Button onClick={handleButtonClick} text="Guardar" className="mr-2" />
                <Button onClick={handleShowBoxClick} text={showBox ? "Ocultar" : "Mostrar"} className="ml-2" />
            </div>
            {showBox && <LibraryDisplay data={library.data} />}
        </div>
    </div>
    );
}

export default BookForm;
