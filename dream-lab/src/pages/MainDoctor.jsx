import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoDiamond } from 'react-icons/go';
import { IoMaleFemale, IoMedkit, IoWater, IoWarning, IoScale } from 'react-icons/io5';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const MainDoctor = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const [summary, setSummary] = useState({
    firmadopor: 'N/A',
    fecha: 'N/A',
    genero: 'N/A',
    paciente: 'N/A',
    edad: 'N/A',
    sangre: 'N/A',
    altura: 'N/A',
    peso: 'N/A',
    alergias: ['N/A'],
    enfermedades: ['N/A'],
    sessionText: '',
    medicamentosrecetados: ['N/A'],
  });
  const [editableText, setEditableText] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    const formData = new URLSearchParams();
    formData.append('accessId', token);

    fetch('https://kofy-back.onrender.com/dashboard/getSummary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line
        console.log('Datos recibidos de la API:', data);
        const sessionText = data.resultado.join('\n');
        setSummary({ ...summary, sessionText });
        setEditableText(sessionText);
      })
      // eslint-disable-next-line
      .catch((error) => console.log(error));
  }, []);

  const handleEditSession = () => {
    const token = localStorage.getItem('userToken');
    // eslint-disable-next-line
    console.log('handleEditSession iniciada');
    const resultado = editableText.split('\n');
    const session = { resultado };
    const formData = new URLSearchParams();
    formData.append('accessId', token);
    formData.append('session', JSON.stringify(session));

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    // eslint-disable-next-line
    console.log('Enviando datos modificados:', object);

    fetch('https://kofy-back.onrender.com/dashboard/verifySummary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // eslint-disable-next-line
        console.log('Respuesta de la API:', data);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error('Error al enviar datos:', error);
      });
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <div className="mt-24">
      <h1 className="flex justify-center"> Hola! 👋 {summary.firmadopor} </h1>
      <h1 className="flex justify-center"> Aqui esta la información de la sesion con fecha de {summary.fecha} </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-50 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400"> Paciente ({summary.genero}) </p>
              <p className="text-2xl"> {summary.paciente} </p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <IoMaleFemale />
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-60 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400"> Edad </p>
              <p className="text-2xl"> {summary.edad} </p>
              <p className="font-bold text-gray-400"> Sangre </p>
              <p className="text-2xl"> {summary.sangre} </p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
            >
              <IoWater />
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-60 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400"> Altura </p>
              <p className="text-2xl"> {summary.altura} cm </p>
              <p className="font-bold text-gray-400"> Peso </p>
              <p className="text-2xl"> {summary.peso} kg </p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <IoScale />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Alergias</p>
              <p className="text-2xl">
                {summary.alergias.map((alergia, index) => (
                  <div key={index}> {alergia} </div>
                ))}
              </p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <IoWarning />
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center border border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Enfermedades</p>
              <p className="text-2xl">
                {summary.enfermedades.map((enfermedad, index) => (
                  <div key={index}> {enfermedad} </div>
                ))}
              </p>
            </div>
            <div
              type="icon"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
            >
              <IoMedkit />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-760 border border-gray-300">
          <div className="flex justify-between">
            <p className="font-semibold">Sesion de Escucha</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDiamond />
                </span>
                <span>Original</span>
              </p>
              <p className="flex items-center gap-2 text-red-400 hover:drop-shadow-xl">
                <span>
                  <GoDiamond />
                </span>
                <span>Modificado</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="w-full">
              <textarea
                value={editableText}
                onChange={(e) => setEditableText(e.target.value)}
                className="w-full h-40 p-2 border-2 border-gray-300 rounded-md"
                style={{ resize: 'none' }}
              />
              <div className="flex justify-center mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="EDITAR"
                  borderRadius="10px"
                  onClick={handleEditSession}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" rounded-2xl md:w-400 p-4 m-3 border border-gray-300" style={{ backgroundColor: currentColor }}>
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white">Recordatorios</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">
                {summary.medicamentosrecetados.map((medicamento, index) => (
                  <div key={index}> {medicamento} </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDoctor;
