    import React, { useState, useEffect } from "react";
    import axios from "axios";
    import { Table, Button } from "react-bootstrap";
    import Swal from "sweetalert2";

    const Main = () => {
    const [equipos, setEquipos] = useState([]);
    const URL = "https://back-proyecto-torneo-production.up.railway.app/";

    const getEquipos = async () => {
        try {
        const { data } = await axios.get(URL);
        setEquipos(data.equipo);
        console.log(data.equipo);
        } catch (error) {
        console.error(error);
        }
    };

    useEffect(() => {
        getEquipos();
    }, []);

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
        title: "Está seguro de ELIMINAR?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `No Eliminar`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            axios.delete(`${URL}${id}`);
            Swal.fire("Eliminado", "", "success");
            getEquipos();
        } else if (result.isDenied) {
            Swal.fire("Sus datos no se eliminaron");
        }
        });
    };
 
    return (
        <div className="container text-center m-5">
        <h2 className="m-4">Equipos inscriptos</h2>
        <Table className="table m-4">
            <thead className="m-4">
            <th>Nombre</th>
            <th>Equipos</th>
            <th>DNI</th>
            </thead>
            <tbody className="m-4">
            {equipos.map((equipo=> 
                <tr>
                <td>{equipo.nombre}</td>
                <td>{equipo.equipos}</td>
                <td>{equipo.dni}</td>
                <td>
                    <Button variant="danger" onClick={() => handleDelete(equipo._id)} className="mt-3">Borrar </Button>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
    };

    export default Main;
