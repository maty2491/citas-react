import Paciente from "./Paciente"

const ListadoPaciente = ({ pacientes , setPaciente, eliminarPaciente }) => {

    
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ?

        <>
          <h2 className="font-black text-3xl text-center mb-10">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (

            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          )
          )}
        </> :
        <>
          <h2 className="font-black text-3xl text-center mb-10">
            No hay pacientes
          </h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">para verlos aquí</span>
          </p>
        </>
      }
    </div>
  );
};

export default ListadoPaciente;
