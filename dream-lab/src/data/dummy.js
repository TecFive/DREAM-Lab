import React from 'react';
import { AiOutlineCalendar, AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { FiPieChart, FiBarChart, FiCreditCard } from 'react-icons/fi';
import { BsKanban, BsBoxSeam, BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.jpg';
import avatar4 from './avatar4.jpg';
import avatar5 from './avatar5.jpg';
import avatar6 from './avatar6.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 25,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },
};

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};

export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

const areaChartData = [
  [
    { x: new Date(2014, 0, 1), y: 20.2 },
    { x: new Date(2015, 0, 1), y: 23.4 },
    { x: new Date(2016, 0, 1), y: 22.8 },
    { x: new Date(2017, 0, 1), y: 11.6 },
    { x: new Date(2018, 0, 1), y: 22.3 },
    { x: new Date(2019, 0, 1), y: 19.5 },
    { x: new Date(2020, 0, 1), y: 20.9 },
    { x: new Date(2021, 0, 1), y: 23.8 },
    { x: new Date(2022, 0, 1), y: 11.4 },
    { x: new Date(2023, 0, 1), y: 23.1 },
  ],
  [
    { x: new Date(2014, 0, 1), y: 12 },
    { x: new Date(2015, 0, 1), y: 9.7 },
    { x: new Date(2016, 0, 1), y: 18.8 },
    { x: new Date(2017, 0, 1), y: 10.1 },
    { x: new Date(2018, 0, 1), y: 19.3 },
    { x: new Date(2019, 0, 1), y: 18.7 },
    { x: new Date(2020, 0, 1), y: 13.5 },
    { x: new Date(2021, 0, 1), y: 17.8 },
    { x: new Date(2022, 0, 1), y: 11.5 },
    { x: new Date(2023, 0, 1), y: 16.3 },
  ],
  [
    { x: new Date(2014, 0, 1), y: 20.8 },
    { x: new Date(2015, 0, 1), y: 19.3 },
    { x: new Date(2016, 0, 1), y: 15.1 },
    { x: new Date(2017, 0, 1), y: 21.6 },
    { x: new Date(2018, 0, 1), y: 20 },
    { x: new Date(2019, 0, 1), y: 15.7 },
    { x: new Date(2020, 0, 1), y: 22.3 },
    { x: new Date(2021, 0, 1), y: 12.7 },
    { x: new Date(2022, 0, 1), y: 21.1 },
    { x: new Date(2023, 0, 1), y: 22.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Mujeres',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Otros',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Hombres',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'MEXICO', y: 27 },
    { x: 'CANADA', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'MEXICO', y: 23 },
    { x: 'CANADA', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'MEXICO', y: 17 },
    { x: 'CANADA', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Mujeres',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Otros',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Hombres',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center',
  },
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus,
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center',
  },
  {
    field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center',
  },
  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },
];

export const employeesGrid = [
  {
    headerText: 'Empleado',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center',
  },
  {
    field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Puesto',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Ubicacion',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry,
  },
  {
    field: 'HireDate',
    headerText: 'Contratacion',
    width: '135',
    format: 'yMd',
    textAlign: 'Center',
  },
  {
    field: 'ReportsTo',
    headerText: 'Encargado',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'EmployeeID',
    headerText: 'ID',
    width: '125',
    textAlign: 'Center',
  },
];

export const links = [
  {
    title: 'planeacion',
    links: [
      {
        name: 'calendario',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
    ],
  },
  {
    title: 'graficas',
    links: [
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },
      {
        name: 'barras',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pastel',
        icon: <FiPieChart />,
      },
      {
        name: 'apilada',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Primer dia de Andrea!',
    desc: 'Bienvenida',
    time: '11:05 AM',
  },
  {
    image:
      avatar3,
    message: 'Junta asiganda',
    desc: 'Zoom con Diego a las 2pm',
    time: '11:39 AM',
  },
  {
    image:
      avatar4,
    message: 'Nueva actualizacion',
    desc: 'Checa las graficas',
    time: '9:09 AM',
  },
  {
    image:
      avatar6,
    message: 'Nuevo mensaje',
    desc: 'Pongase a chambear jefe',
    time: '7:42 AM',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '80,000',
    percentage: '+16%',
    title: 'Usuarios',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '2,564',
    percentage: '+23%',
    title: 'ChatBot',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '42,126',
    percentage: '+18%',
    title: 'Reservaciones',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '456',
    percentage: '-12%',
    title: 'Help',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const themeColors = [
  {
    name: 'azul',
    color: '#1A97F5',
  },
  {
    name: 'verde',
    color: '#03C9D7',
  },
  {
    name: 'morado',
    color: '#7352FF',
  },
  {
    name: 'rosa mexicano',
    color: '#FF5C8E',
  },
  {
    name: 'azul oscuro',
    color: '#1E4DB7',
  },
  {
    name: 'naranja',
    color: '#FB9678',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My nomina',
    desc: 'Proximos pagos',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'Datos personales',
    desc: 'Puesto, telefono, etc.',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'Credenciales de acceso',
    desc: 'Correo y contraseñas',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Andrea San Martin',
    CustomerEmail: 'a00833676@tec.mx',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Eugenio Garza',
    Title: 'CEO',
    HireDate: '19/11/2023',
    Country: 'Cielo',
    ReportsTo: 'N/A',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Diego Gutierrez',
    Title: 'Swift Developer',
    HireDate: '20/11/2023',
    Country: 'Mexico',
    ReportsTo: 'Eugenio',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Jose Oliva',
    Title: 'React Developer',
    HireDate: '20/11/2023',
    Country: 'Mexico',
    ReportsTo: 'Eugenio',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Andrea San Martin',
    Title: 'Android Developer',
    HireDate: '20/11/2023',
    Country: 'Mexico',
    ReportsTo: 'Eugenio',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Scarlet Soto',
    Title: 'Cybersecurity',
    HireDate: '20/11/2023',
    Country: 'Mexico',
    ReportsTo: 'Eugenio',
    EmployeeImage:
      avatar6,
  },
  {
    EmployeeID: 6,
    Name: 'Roberto Garcia',
    Title: 'Backend Developer',
    HireDate: '20/11/2023',
    Country: 'Mexico',
    ReportsTo: 'Eugenio',
    EmployeeImage:
      avatar5,
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Expo-Ingenierias',
    Location: 'Centro de Congresos - ITESM',
    StartTime: '2023-11-23T21:10:00.000Z',
    EndTime: '2023-11-23T23:59:59.000Z',
    CategoryColor: '#1aaa55',
  },
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 7 },
  { x: 6, yval: 6 },
  { x: 7, yval: 4 },
  { x: 8, yval: 3 },
  { x: 9, yval: 2 },
  { x: 10, yval: 3 },
  { x: 11, yval: 4 },
  { x: 12, yval: 5 },
];

export const pieChartData = [
  { x: 'ChatBot', y: 18, text: '18%' },
  { x: 'Help', y: 8, text: '8%' },
  { x: 'Reservaciones', y: 15, text: '15%' },
  { x: 'Navegacion', y: 11, text: '11%' },
  { x: 'Recordatorios', y: 18, text: '18%' },
  { x: 'Perfil', y: 14, text: '14%' },
  { x: 'Errores', y: 16, text: '16%' },
];

export const ecomPieChartData = [
  { x: 'Noviembre', y: 18, text: '35%' },
  { x: 'Octubre', y: 18, text: '15%' },
  { x: 'Septiembre', y: 18, text: '25%' },
  { x: 'Agosto', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Mayo', y: 111.1 },
    { x: 'Junio', y: 127.3 },
    { x: 'Julio', y: 143.4 },
    { x: 'Agosto', y: 159.9 },
    { x: 'Sptiembre', y: 159.9 },
    { x: 'Octubre', y: 159.9 },
    { x: 'Noviembre', y: 159.9 },
  ],
  [
    { x: 'Mayo', y: 111.1 },
    { x: 'Junio', y: 127.3 },
    { x: 'Julio', y: 143.4 },
    { x: 'Agosto', y: 159.9 },
    { x: 'Sptiembre', y: 159.9 },
    { x: 'Octubre', y: 159.9 },
    { x: 'Noviembre', y: 159.9 },
  ],
];

export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Docentes',
    type: 'StackingColumn',
    background: 'blue',
  },
  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Alumnos',
    type: 'StackingColumn',
    background: 'red',
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 400,
  interval: 50,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const kanbanGrid = [
  {
    headerText: 'Por Hacer',
    keyField: 'Por Hacer',
    allowToggle: true,
  },

  {
    headerText: 'En Progreso',
    keyField: 'En Progreso',
    allowToggle: true,
  },

  {
    headerText: 'Revisando',
    keyField: 'Revisando',
    allowToggle: true,
  },

  {
    headerText: 'Terminado',
    keyField: 'Terminado',
    allowToggle: true,
  },
];

export const kanbanData = [
  {
    Id: 'Tarea 1',
    Title: 'Task - 29001',
    Status: 'Por Hacer',
    Summary: 'Presentar en Expo-ingenierias',
  },
  {
    Id: 'Tarea 2',
    Title: 'Task - 29002',
    Status: 'En Progreso',
    Summary: 'Terminar de conectar las plataformas',
  },
  {
    Id: 'Tarea 3',
    Title: 'Task - 29030',
    Status: 'Revisando',
    Summary: 'Arreglar bugs',
  },
  {
    Id: 'Tarea 4',
    Title: 'Task - 29010',
    Status: 'Terminado',
    Summary: 'Presentar a WizeLine y Apple',
  },
];
