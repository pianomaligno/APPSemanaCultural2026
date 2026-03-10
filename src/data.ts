export type Level = 'EEM' | 'EPM' | 'Ambas' | string;

export interface Session {
  sessionName: string;
  date: string;
  startTime: string;
  endTime: string;
  level: string;
  room: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD format for easy sorting/filtering
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  room: string;
  teacherName: string;
  teacherEmail: string;
  level: Level;
  category: string;
  sessions: Session[];
  hasTickets?: boolean;
  hasCost?: boolean;
}

export const mockActivities: Activity[] = [
  {
    "id": "252",
    "title": "Taller de luthería para instrumentos de viento madera",
    "description": "Taller de mantenimiento y conservación de los instrumentos de viento madera con el ponente Israel Blanes Esteve.",
    "date": "2026-03-20",
    "startTime": "13:15:00",
    "endTime": "19:30:00",
    "room": "AUD",
    "teacherName": "PEDRO JOSE MACIA CAMPILLO",
    "teacherEmail": "pedrojose.macia@murciaeduca.es",
    "level": "Ambas",
    "category": "Viento Madera",
    "hasCost": true,
    "sessions": [
      {
        "sessionName": "Bachiller y 4º ESO",
        "date": "2026-03-20",
        "startTime": "13:15:00",
        "endTime": "14:15:00",
        "level": "EPM",
        "room": "AUD"
      },
      {
        "sessionName": "1º, 2º y 3º ESO",
        "date": "2026-03-20",
        "startTime": "14:15:00",
        "endTime": "15:15:00",
        "level": "EPM",
        "room": "AUD"
      },
      {
        "sessionName": "Clarinete, oboe y fagot EPM",
        "date": "2026-03-20",
        "startTime": "16:30:00",
        "endTime": "17:30:00",
        "level": "EPM",
        "room": "AUD"
      },
      {
        "sessionName": "Saxofón y flauta EPM",
        "date": "2026-03-20",
        "startTime": "17:30:00",
        "endTime": "18:30:00",
        "level": "EPM",
        "room": "AUD"
      },
      {
        "sessionName": "Enseñanzas Elementales",
        "date": "2026-03-20",
        "startTime": "18:30:00",
        "endTime": "19:30:00",
        "level": "EEM",
        "room": "AUD"
      }
    ]
  },
  {
    "id": "279",
    "title": "III Exposición Regional de Luthería de Guitarra",
    "description": "Exposición de guitarras clásicas y flamencas con la participación de guitarreros de la Región. Se ofrecerán ponencias sobre construcción y mantenimiento. Abierta a todo el público, con posibilidad de probar los instrumentos.",
    "date": "2026-03-20",
    "startTime": "13:15:00",
    "endTime": "20:15:00",
    "room": "B.5",
    "teacherName": "ASCENSION ALFONSO ARENAS",
    "teacherEmail": "ascension.alfonso@murciaeduca.es",
    "level": "Ambas",
    "category": "Cuerda Pulsada",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-20",
        "startTime": "13:15:00",
        "endTime": "20:15:00",
        "level": "Ambas",
        "room": "B.5"
      }
    ]
  },
  {
    "id": "250",
    "title": "Batalla de ritmos",
    "description": "Ejercicio de polirritmia con vasos de plástico por grupos. Se reproducirá una canción y los participantes marcarán el pulso utilizando los vasos.",
    "date": "2026-03-20",
    "startTime": "16:15:00",
    "endTime": "18:15:00",
    "room": "B.4",
    "teacherName": "Raúl Hurtado Hurtado",
    "teacherEmail": "raul.hurtado@murciaeduca.es",
    "level": "EPM",
    "category": "Todas las especialidades",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-20",
        "startTime": "16:15:00",
        "endTime": "18:15:00",
        "level": "EPM",
        "room": "B.4"
      }
    ]
  },
  {
    "id": "243",
    "title": "Conjuntos de fagots",
    "description": "Ensayos y concierto con diferentes agrupaciones de fagot para el alumnado de Enseñanzas Profesionales.",
    "date": "2026-03-20",
    "startTime": "17:15:00",
    "endTime": "19:15:00",
    "room": "AIN4",
    "teacherName": "JAIME SANCHEZ LAFFAGE",
    "teacherEmail": "jaime.sanchez@murciaeduca.es",
    "level": "EPM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "1ª Sesión",
        "date": "2026-03-20",
        "startTime": "17:15:00",
        "endTime": "19:15:00",
        "level": "EPM",
        "room": "AIN4"
      },
      {
        "sessionName": "2ª Sesión / Final",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "20:15:00",
        "level": "EPM",
        "room": "AIN4"
      }
    ]
  },
  {
    "id": "207",
    "title": "Taller de Música Antigua",
    "description": "Taller sobre Cantigas y otras músicas antiguas a cargo de María Ángeles Zapata Castillo, profesora de Musicología del Conservatorio Superior de Música de Murcia.",
    "date": "2026-03-20",
    "startTime": "18:15:00",
    "endTime": "20:15:00",
    "room": "B.3",
    "teacherName": "JUAN PEDRO SAURA GARCIA",
    "teacherEmail": "juanpedro.saura@murciaeduca.es",
    "level": "EPM",
    "category": "Todas las especialidades",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-20",
        "startTime": "18:15:00",
        "endTime": "20:15:00",
        "level": "EPM",
        "room": "B.3"
      }
    ]
  },
  {
    "id": "236",
    "title": "Curso de Boomwhackers",
    "description": "Creación de patrones rítmicos y melódicos utilizando boomwhackers, campanas de mesa y percusión corporal para preparar una pieza en conjunto.",
    "date": "2026-03-20",
    "startTime": "18:15:00",
    "endTime": "20:15:00",
    "room": "B.6",
    "teacherName": "VÍCTOR RUIZ MOLINA",
    "teacherEmail": "victor.ruiz@murciaeduca.es",
    "level": "EEM",
    "category": "Percusión",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-20",
        "startTime": "18:15:00",
        "endTime": "20:15:00",
        "level": "EEM",
        "room": "B.6"
      }
    ]
  },
  {
    "id": "244",
    "title": "Taller de manufactura de cañas para oboe",
    "description": "Elaboración de cañas para oboe en grupos de alumnos según su nivel.",
    "date": "2026-03-23",
    "startTime": "16:15:00",
    "endTime": "20:15:00",
    "room": "B.1",
    "teacherName": "PEDRO JOSE MACIA CAMPILLO",
    "teacherEmail": "pedrojose.macia@murciaeduca.es",
    "level": "EPM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Lunes",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "20:15:00",
        "level": "EPM",
        "room": "B.1"
      },
      {
        "sessionName": "Martes",
        "date": "2026-03-24",
        "startTime": "13:15:00",
        "endTime": "15:15:00",
        "level": "EPM",
        "room": "B.1"
      }
    ]
  },
  {
    "id": "156",
    "title": "José María Valverde: el viaje de un violinista artesano",
    "description": "Conferencia didáctica sobre la vida de J. M. Valverde, violinista de la Orquesta Nacional de España y constructor autodidacta de violines y violas.",
    "date": "2026-03-23",
    "startTime": "16:15:00",
    "endTime": "17:15:00",
    "room": "AUD",
    "teacherName": "NOELIA FERRANDO ARBONA",
    "teacherEmail": "noelia.ferrando@murciaeduca.es",
    "level": "EPM",
    "category": "Todas las especialidades",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "EPM",
        "room": "AUD"
      }
    ]
  },
  {
    "id": "235",
    "title": "Simulacro de pruebas de acceso de Percusión",
    "description": "Simulacro con el mismo formato que las pruebas de acceso a Enseñanzas Profesionales. Los estudiantes interpretarán 3 obras en instrumentos diferentes.",
    "date": "2026-03-23",
    "startTime": "16:15:00",
    "endTime": "18:15:00",
    "room": "B.6",
    "teacherName": "Alberto Rodríguez Pérez",
    "teacherEmail": "alberto.rodriguez8@murciaeduca.es",
    "level": "EEM",
    "category": "Percusión",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "18:15:00",
        "level": "EEM",
        "room": "B.6"
      }
    ]
  },
  {
    "id": "249",
    "title": "Mantenimiento y limpieza del violín",
    "description": "Taller práctico sobre la limpieza y el mantenimiento adecuado del instrumento y el arco.",
    "date": "2026-03-23",
    "startTime": "18:15:00",
    "endTime": "19:15:00",
    "room": "B.4",
    "teacherName": "FRANCISCO JESUS GUILLAMON SAORIN",
    "teacherEmail": "franciscojesu.guillamon@murciaeduca.es",
    "level": "Ambas",
    "category": "Cuerda Sinfónica",
    "sessions": [
      {
        "sessionName": "1ª Sesión",
        "date": "2026-03-23",
        "startTime": "18:15:00",
        "endTime": "19:15:00",
        "level": "Ambas",
        "room": "B.4"
      },
      {
        "sessionName": "2ª Sesión / Final",
        "date": "2026-03-24",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "Ambas",
        "room": "B.4"
      }
    ]
  },
  {
    "id": "260",
    "title": "Curso de saxofón",
    "description": "Masterclass de saxofón impartida por especialistas invitados.",
    "date": "2026-03-23",
    "startTime": "16:15:00",
    "endTime": "21:15:00",
    "room": "1.01",
    "teacherName": "Juan Carlos Collado Castillo",
    "teacherEmail": "juancarlos.collado2@murciaeduca.es",
    "level": "Ambas",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "1ª Sesión",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "21:15:00",
        "level": "Ambas",
        "room": "1.01"
      },
      {
        "sessionName": "2ª Sesión / Final",
        "date": "2026-03-24",
        "startTime": "16:15:00",
        "endTime": "21:15:00",
        "level": "Ambas",
        "room": "1.01"
      }
    ]
  },
  {
    "id": "264",
    "title": "Ensemble de Metales",
    "description": "Audición y concierto a cargo del alumnado de las especialidades instrumentales de viento metal del conservatorio.",
    "date": "2026-03-23",
    "startTime": "16:15:00",
    "endTime": "20:15:00",
    "room": "CLF2",
    "teacherName": "MIGUEL ANGEL RODRIGUEZ HIDALGO",
    "teacherEmail": "miguelangel.rodriguez6@murciaeduca.es",
    "level": "EEM",
    "category": "Viento Metal y Canto",
    "sessions": [
      {
        "sessionName": "1ª Sesión",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "20:15:00",
        "level": "EEM",
        "room": "CLF2"
      },
      {
        "sessionName": "2ª Sesión / Final",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "20:15:00",
        "level": "EEM",
        "room": "CLF2"
      }
    ]
  },
  {
    "id": "268",
    "title": "Ensemble de clarinetes de nivel profesional",
    "description": "Ensayos para el montaje de un repertorio que será interpretado en un concierto al final de la actividad.",
    "date": "2026-03-23",
    "startTime": "16:15:00",
    "endTime": "19:15:00",
    "room": "AIN5",
    "teacherName": "Jennifer García Soto",
    "teacherEmail": "jennifer.garcia@murciaeduca.es",
    "level": "EPM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "19:15:00",
        "level": "EPM",
        "room": "AIN5"
      }
    ]
  },
  {
    "id": "268-EEM",
    "title": "Ensemble de clarinetes de nivel Elemental",
    "description": "Ensayos para el montaje de un repertorio que será interpretado en un concierto al final de la actividad.",
    "date": "2026-03-23",
    "startTime": "17:15:00",
    "endTime": "19:15:00",
    "room": "AIN2",
    "teacherName": "Ezequiel de Pablos Riquelme",
    "teacherEmail": "ezequiel.pablos@murciaeduca.es",
    "level": "EEM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "17:15:00",
        "endTime": "19:15:00",
        "level": "EEM",
        "room": "AIN2"
      }
    ]
  },
  {
    "id": "238",
    "title": "Simulacro pruebas de acceso a EE.PP - Lenguaje Musical",
    "description": "Prueba de ritmo y entonación a primera vista para preparar al alumnado de 3º y 4º de EEM de cara a las pruebas de acceso a Enseñanzas Profesionales.",
    "date": "2026-03-23",
    "startTime": "16:15:00",
    "endTime": "17:15:00",
    "room": "AFR1",
    "teacherName": "SAMUEL BRAZALEZ ALCALA",
    "teacherEmail": "samuel.brazalez@murciaeduca.es",
    "level": "EEM",
    "category": "Todas las especialidades",
    "sessions": [
      {
        "sessionName": "1ª Sesión",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "EEM",
        "room": "AFR1"
      },
      {
        "sessionName": "2ª Sesión",
        "date": "2026-03-23",
        "startTime": "17:15:00",
        "endTime": "18:15:00",
        "level": "EEM",
        "room": "AFR1"
      },
      {
        "sessionName": "3ª Sesión",
        "date": "2026-03-23",
        "startTime": "18:15:00",
        "endTime": "19:15:00",
        "level": "EEM",
        "room": "AFR1"
      },
      {
        "sessionName": "4ª Sesión",
        "date": "2026-03-23",
        "startTime": "19:15:00",
        "endTime": "20:15:00",
        "level": "EEM",
        "room": "AFR1"
      },
      {
        "sessionName": "5ª Sesión",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "EEM",
        "room": "AFR1"
      },
      {
        "sessionName": "6ª Sesión",
        "date": "2026-03-26",
        "startTime": "17:15:00",
        "endTime": "18:15:00",
        "level": "EEM",
        "room": "AFR1"
      }
    ]
  },
  {
    "id": "284",
    "title": "Simulacro prueba de acceso Violonchelo",
    "description": "Preparación para los alumnos de 4º EEM de Violonchelo para la prueba de acceso a Enseñanzas Profesionales.",
    "date": "2026-03-23",
    "startTime": "16:15:00",
    "endTime": "18:15:00",
    "room": "AMU1",
    "teacherName": "ELENA MARIA GARCIA SANCHEZ",
    "teacherEmail": "elenamaria.garcia@murciaeduca.es",
    "level": "EEM",
    "category": "Cuerda Sinfónica",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "16:15:00",
        "endTime": "18:15:00",
        "level": "EEM",
        "room": "AMU1"
      }
    ]
  },
  {
    "id": "245",
    "title": "Simulacros de pruebas de acceso a 1er curso EPM. Viento Madera",
    "description": "Simulacro de prueba de acceso con la interpretación de las obras preparadas para el acceso a 1er curso de EPM.",
    "date": "2026-03-23",
    "startTime": "17:15:00",
    "endTime": "20:15:00",
    "room": "B.2",
    "teacherName": "Elena Sánchez-Carrasco Cobos",
    "teacherEmail": "elena.sanchez-carrasco@murciaeduca.es",
    "level": "EEM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "17:15:00",
        "endTime": "20:15:00",
        "level": "EEM",
        "room": "B.2"
      }
    ]
  },
  {
    "id": "261",
    "title": "Gincana saxofonística EEM",
    "description": "Pruebas lúdicas y musicales relacionadas con el saxofón en formato Gincana.",
    "date": "2026-03-23",
    "startTime": "18:15:00",
    "endTime": "20:15:00",
    "room": "PLAST",
    "teacherName": "Juan Carlos Collado Castillo",
    "teacherEmail": "juancarlos.collado2@murciaeduca.es",
    "level": "EEM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "18:15:00",
        "endTime": "20:15:00",
        "level": "EEM",
        "room": "PLAST"
      }
    ]
  },
  {
    "id": "275",
    "title": "Jam session jazz",
    "description": "Interpretación de estándares de Jazz para alumnos y profesores.",
    "date": "2026-03-23",
    "startTime": "18:15:00",
    "endTime": "20:15:00",
    "room": "B.5",
    "teacherName": "MIGUEL ANGEL MARIN DIAZ",
    "teacherEmail": "miguelangel.marin2@murciaeduca.es",
    "level": "Ambas",
    "category": "Todas las especialidades",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "18:15:00",
        "endTime": "20:15:00",
        "level": "Ambas",
        "room": "B.5"
      }
    ]
  },
  {
    "id": "283",
    "title": "Videoconferencia con la contrabajista María del Carmen Torrano",
    "description": "Encuentro virtual para conocer su experiencia profesional y el funcionamiento de una orquesta internacional.",
    "date": "2026-03-23",
    "startTime": "18:15:00",
    "endTime": "19:15:00",
    "room": "1.05",
    "teacherName": "FERNANDO HERNANDEZ NAVALON",
    "teacherEmail": "fernando.hernandez2@murciaeduca.es",
    "level": "Ambas",
    "category": "Cuerda Sinfónica",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "18:15:00",
        "endTime": "19:15:00",
        "level": "Ambas",
        "room": "1.05"
      }
    ]
  },
  {
    "id": "290",
    "title": "Simulacro pruebas de acceso a Violín",
    "description": "Prueba similar a la de acceso a modo de ensayo y puesta a punto para la prueba real de junio.",
    "date": "2026-03-23",
    "startTime": "18:15:00",
    "endTime": "20:15:00",
    "room": "AMU1",
    "teacherName": "NOELIA FERRANDO ARBONA",
    "teacherEmail": "noelia.ferrando@murciaeduca.es",
    "level": "EEM",
    "category": "Cuerda Sinfónica",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-23",
        "startTime": "18:15:00",
        "endTime": "20:15:00",
        "level": "EEM",
        "room": "AMU1"
      }
    ]
  },
  {
    "id": "209",
    "title": "Todo el cuerpo suena",
    "description": "Actividad para explorar las posibilidades sonoras del cuerpo y la voz mediante juegos musicales y percusión corporal.",
    "date": "2026-03-24",
    "startTime": "16:15:00",
    "endTime": "19:15:00",
    "room": "Porche entre pabellones",
    "teacherName": "SAMUEL BRAZALEZ ALCALA",
    "teacherEmail": "samuel.brazalez@murciaeduca.es",
    "level": "Ambas",
    "category": "Todas las especialidades",
    "hasCost": true,
    "sessions": [
      {
        "sessionName": "1º y 2º EEM",
        "date": "2026-03-24",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "EEM",
        "room": "Porche entre pabellones"
      },
      {
        "sessionName": "3º y 4º EEM",
        "date": "2026-03-24",
        "startTime": "17:15:00",
        "endTime": "18:15:00",
        "level": "EEM",
        "room": "Porche entre pabellones"
      },
      {
        "sessionName": "1º y 2º EPM",
        "date": "2026-03-24",
        "startTime": "18:15:00",
        "endTime": "19:15:00",
        "level": "EPM",
        "room": "Porche entre pabellones"
      }
    ]
  },
  {
    "id": "246",
    "title": "Taller de afinación instrumentos de viento madera",
    "description": "Ejercicios de afinación con piano y otros instrumentos para desarrollar la escucha activa.",
    "date": "2026-03-24",
    "startTime": "16:15:00",
    "endTime": "19:15:00",
    "room": "B.1",
    "teacherName": "PABLO CASTAÑO MURCIA",
    "teacherEmail": "pablo.castano@murciaeduca.es",
    "level": "Ambas",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "1º y 2º EPM",
        "date": "2026-03-24",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "EPM",
        "room": "B.1"
      },
      {
        "sessionName": "3º y 4º EPM",
        "date": "2026-03-24",
        "startTime": "17:15:00",
        "endTime": "18:15:00",
        "level": "EPM",
        "room": "B.1"
      },
      {
        "sessionName": "5º y 6º EPM",
        "date": "2026-03-24",
        "startTime": "18:15:00",
        "endTime": "19:15:00",
        "level": "EPM",
        "room": "B.1"
      }
    ]
  },
  {
    "id": "265",
    "title": "Musik Balance",
    "description": "Charla formativa sobre anatomía básica del músico, educación postural, respiración, relajación y hábitos saludables.",
    "date": "2026-03-24",
    "startTime": "16:15:00",
    "endTime": "18:15:00",
    "room": "AUD",
    "teacherName": "MIGUEL ANGEL RODRIGUEZ HIDALGO",
    "teacherEmail": "miguelangel.rodriguez6@murciaeduca.es",
    "level": "EPM",
    "category": "Todas las especialidades",
    "hasCost": true,
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-24",
        "startTime": "16:15:00",
        "endTime": "18:15:00",
        "level": "EPM",
        "room": "AUD"
      }
    ]
  },
  {
    "id": "266",
    "title": "Calentamiento para instrumentos de viento y canto",
    "description": "Calentamiento dirigido a instrumentos de viento de todas las especialidades. Se realizará un trabajo previo de cara a preparase física y mentalmente antes de salir al escenario.",
    "date": "2026-03-24",
    "startTime": "18:15:00",
    "endTime": "19:00:00",
    "room": "AUD",
    "teacherName": "MIGUEL ANGEL RODRIGUEZ HIDALGO",
    "teacherEmail": "miguelangel.rodriguez6@murciaeduca.es",
    "level": "Ambas",
    "category": "Viento y Canto",
    "hasCost": true,
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-24",
        "startTime": "18:15:00",
        "endTime": "19:00:00",
        "level": "Ambas",
        "room": "AUD"
      }
    ]
  },
  {
    "id": "134",
    "title": "Taller de Análisis Musical",
    "description": "Orientación para las pruebas de acceso a las enseñanzas superiores de música, analizando partituras de exámenes anteriores.",
    "date": "2026-03-24",
    "startTime": "17:15:00",
    "endTime": "20:15:00",
    "room": "B.5",
    "teacherName": "JUAN PEDRO SAURA GARCIA",
    "teacherEmail": "juanpedro.saura@murciaeduca.es",
    "level": "EPM",
    "category": "Todas las especialidades",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-24",
        "startTime": "17:15:00",
        "endTime": "20:15:00",
        "level": "EPM",
        "room": "B.5"
      }
    ]
  },
  {
    "id": "278",
    "title": "Concentración Orquesta de Guitarras",
    "description": "Trabajo conjunto de alumnos de Música de cámara y Conjunto para preparar un repertorio común.",
    "date": "2026-03-24",
    "startTime": "18:15:00",
    "endTime": "20:15:00",
    "room": "BIBL",
    "teacherName": "M. PIEDAD MARTINEZ COLLADO",
    "teacherEmail": "mpiedad.martinez@murciaeduca.es",
    "level": "EPM",
    "category": "Cuerda Pulsada",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-24",
        "startTime": "18:15:00",
        "endTime": "20:15:00",
        "level": "EPM",
        "room": "BIBL"
      }
    ]
  },
  {
    "id": "178",
    "title": "Descubriendo la viola da gamba",
    "description": "Concierto didáctico presentando la viola da gamba y explicación sobre los requisitos para la prueba de acceso a Enseñanzas Profesionales.",
    "date": "2026-03-24",
    "startTime": "19:15:00",
    "endTime": "20:15:00",
    "room": "AUD",
    "teacherName": "MIGUEL ANGEL ROS SOTO",
    "teacherEmail": "miguelangel.ros3@murciaeduca.es",
    "level": "Ambas",
    "category": "Cuerda Sinfónica",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-24",
        "startTime": "19:15:00",
        "endTime": "20:15:00",
        "level": "Ambas",
        "room": "AUD"
      }
    ]
  },
  {
    "id": "289",
    "title": "Gala Anual del Conservatorio de Música de Cartagena",
    "description": "Tendrán lugar distintas actuaciones: la banda, la orquesta, flamenco, eléctricos, big band.",
    "date": "2026-03-25",
    "startTime": "19:00:00",
    "endTime": "21:00:00",
    "room": "Auditorio El Batel",
    "teacherName": "GINES MARTINEZ VERA",
    "teacherEmail": "gines.martinez4@murciaeduca.es",
    "level": "Ambas",
    "category": "Todas las especialidades",
    "hasTickets": true,
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-25",
        "startTime": "19:00:00",
        "endTime": "21:00:00",
        "level": "Ambas",
        "room": "Auditorio El Batel"
      }
    ]
  },
  {
    "id": "262",
    "title": "Taller baile flamenco iniciación",
    "description": "Taller de iniciación al compás flamenco y movimientos básicos a cargo del profesor Marcos Morales Raya.",
    "date": "2026-03-24",
    "startTime": "16:15:00",
    "endTime": "17:15:00",
    "room": "B.5",
    "teacherName": "JOSE ANTONIO CHACON TOLEDO",
    "teacherEmail": "joseantonio.chacon@murciaeduca.es",
    "level": "Ambas",
    "category": "Todas las especialidades",
    "sessions": [
      {
        "sessionName": "1ª Sesión",
        "date": "2026-03-24",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "Ambas",
        "room": "B.5"
      }
    ]
  },
  {
    "id": "110",
    "title": "Gincana Contrabajista",
    "description": "Actividades lúdicas y musicales para el alumnado de contrabajo.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "19:15:00",
    "room": "AMU1",
    "teacherName": "HUGO VALERO MUÑOZ",
    "teacherEmail": "hugo.valero@murciaeduca.es",
    "level": "Ambas",
    "category": "Cuerda Sinfónica",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "19:15:00",
        "level": "Ambas",
        "room": "AMU1"
      }
    ]
  },
  {
    "id": "121",
    "title": "Piano Latin",
    "description": "Taller de ritmos latinos aplicados al piano, separado por niveles.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "17:15:00",
    "room": "1.01",
    "teacherName": "MIGUEL ANGEL MARIN DIAZ",
    "teacherEmail": "miguelangel.marin2@murciaeduca.es",
    "level": "Ambas",
    "category": "Instrumentos de Tecla",
    "sessions": [
      {
        "sessionName": "1ª Sesión",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "EPM",
        "room": "1.01"
      },
      {
        "sessionName": "2ª Sesión",
        "date": "2026-03-26",
        "startTime": "17:15:00",
        "endTime": "18:15:00",
        "level": "EEM",
        "room": "1.01"
      },
      {
        "sessionName": "3ª Sesión",
        "date": "2026-03-26",
        "startTime": "18:15:00",
        "endTime": "19:15:00",
        "level": "EPM",
        "room": "1.01"
      }
    ]
  },
  {
    "id": "157",
    "title": "Viola Time",
    "description": "Ensayo abierto con público del ensemble de violas de los alumnos de Elemental y Profesional para preparar el concierto Viola Time que se realizará en el tercer trimestre",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "17:15:00",
    "room": "B.3",
    "teacherName": "Raúl Hurtado Hurtado",
    "teacherEmail": "raul.hurtado@murciaeduca.es",
    "level": "Ambas",
    "category": "Cuerda Sinfónica",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "Ambas",
        "room": "B.3"
      }
    ]
  },
  {
    "id": "241",
    "title": "Olimpiadas flautísticas",
    "description": "Competición lúdica para fomentar la práctica instrumental, coordinación motriz, lectura a primera vista y respiración.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "19:15:00",
    "room": "B.1",
    "teacherName": "MARIA JOSE CASTAÑO MURCIA",
    "teacherEmail": "mariajose.castano2@murciaeduca.es",
    "level": "EEM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "19:15:00",
        "level": "EEM",
        "room": "B.1"
      }
    ]
  },
  {
    "id": "247",
    "title": "Taller de cañas de fagot",
    "description": "Práctica de manufactura y retoque de cañas de fagot.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "18:15:00",
    "room": "1.05",
    "teacherName": "PABLO CASTAÑO MURCIA",
    "teacherEmail": "pablo.castano@murciaeduca.es",
    "level": "EPM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "18:15:00",
        "level": "EPM",
        "room": "1.05"
      }
    ]
  },
  {
    "id": "253",
    "title": "Concurso de clarinete para Enseñanzas Elementales",
    "description": "Concurso para fomentar la interpretación en público y potenciar el estudio de las obras.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "18:15:00",
    "room": "B.7",
    "teacherName": "JENNIFER GARCIA SOTO",
    "teacherEmail": "jennifer.garcia@murciaeduca.es",
    "level": "EEM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "18:15:00",
        "level": "EEM",
        "room": "B.7"
      }
    ]
  },
  {
    "id": "255",
    "title": "Ensemble Oboes y Fagotes",
    "description": "Ensayo general y concierto del ensamble formado por el alumnado de Enseñanzas Elementales.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "18:15:00",
    "room": "B.4",
    "teacherName": "Marta Perales Mora",
    "teacherEmail": "marta.perales@murciaeduca.es",
    "level": "EEM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "18:15:00",
        "level": "EEM",
        "room": "B.4"
      }
    ]
  },
  {
    "id": "258",
    "title": "Taller de improvisación a cargo de Raúl Pérez Fernández",
    "description": "Taller de improvisación musical dividido en dos turnos según el curso.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "17:45:00",
    "room": "AUD",
    "teacherName": "VICTOR RODRIGUEZ GARCIA",
    "teacherEmail": "victor.rodriguez@murciaeduca.es",
    "level": "EPM",
    "category": "Instrumentos de Tecla",
    "hasCost": true,
    "sessions": [
      {
        "sessionName": "1ª sesión",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "17:45:00",
        "level": "EPM",
        "room": "AUD"
      },
      {
        "sessionName": "2ª sesión",
        "date": "2026-03-26",
        "startTime": "17:15:00",
        "endTime": "18:45:00",
        "level": "EPM",
        "room": "AUD"
      }
    ]
  },
  {
    "id": "259",
    "title": "Conjunto de saxofones",
    "description": "Ensayos y concierto del conjunto de saxofones.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "19:15:00",
    "room": "CLF1",
    "teacherName": "Juan Carlos Collado Castillo",
    "teacherEmail": "juancarlos.collado2@murciaeduca.es",
    "level": "Ambas",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "19:15:00",
        "level": "Ambas",
        "room": "CLF1"
      }
    ]
  },
  {
    "id": "277",
    "title": "Clase de Qi Gong",
    "description": "Movimientos y ejercicios para ayudar en la práctica instrumental y el bienestar corporal.",
    "date": "2026-03-26",
    "startTime": "16:15:00",
    "endTime": "17:15:00",
    "room": "B.5",
    "teacherName": "MARIA GLORIA BRANDO MARTINEZ",
    "teacherEmail": "mariagloria.brando@murciaeduca.es",
    "level": "Ambas",
    "category": "Instrumentos de Tecla",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "16:15:00",
        "endTime": "17:15:00",
        "level": "Ambas",
        "room": "B.5"
      }
    ]
  },
  {
    "id": "256",
    "title": "Visita a Tablao Flamenco El Mentidero",
    "description": "Excursión a Alicante que incluye curso de palmas flamencas, cena degustación y espectáculo flamenco en vivo.",
    "date": "2026-03-26",
    "startTime": "17:00:00",
    "endTime": "22:00:00",
    "room": "Alicante",
    "teacherName": "JOSE ANTONIO CHACON TOLEDO",
    "teacherEmail": "joseantonio.chacon@murciaeduca.es",
    "level": "Ambas",
    "category": "Flamenco",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "17:00:00",
        "endTime": "22:00:00",
        "level": "Ambas",
        "room": "Alicante"
      }
    ]
  },
  {
    "id": "119",
    "title": "Concurso de piano 'Entre teclas y pedales'",
    "description": "Concurso donde se interpretarán obras de las pruebas de acceso a enseñanzas elementales.",
    "date": "2026-03-26",
    "startTime": "17:15:00",
    "endTime": "19:15:00",
    "room": "B.5",
    "teacherName": "FRANCISCO JAVIER MARTINEZ ORELLANA",
    "teacherEmail": "franciscojavi.martinez11@murciaeduca.es",
    "level": "EEM",
    "category": "Instrumentos de Tecla",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "17:15:00",
        "endTime": "19:15:00",
        "level": "EEM",
        "room": "B.5"
      }
    ]
  },
  {
    "id": "197",
    "title": "Kahoot de Historia y Análisis Musical",
    "description": "Juego interactivo sobre cuestiones de historia de la música y análisis musical.",
    "date": "2026-03-26",
    "startTime": "17:15:00",
    "endTime": "19:15:00",
    "room": "BIBL",
    "teacherName": "JUAN PEDRO SAURA GARCIA",
    "teacherEmail": "juanpedro.saura@murciaeduca.es",
    "level": "EPM",
    "category": "Composición",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "17:15:00",
        "endTime": "19:15:00",
        "level": "EPM",
        "room": "BIBL"
      }
    ]
  },
  {
    "id": "251",
    "title": "Karaoke Musical",
    "description": "Los alumnos tocarán con su instrumento acompañando pistas musicales al estilo karaoke.",
    "date": "2026-03-26",
    "startTime": "17:15:00",
    "endTime": "19:15:00",
    "room": "B.3",
    "teacherName": "LAURA RODRIGUEZ MORENO",
    "teacherEmail": "laura.rodriguez3@murciaeduca.es",
    "level": "EEM",
    "category": "Cuerda Sinfónica",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "17:15:00",
        "endTime": "19:15:00",
        "level": "EEM",
        "room": "B.3"
      }
    ]
  },
  {
    "id": "257",
    "title": "Concurso musical fagot EEM",
    "description": "Concurso lúdico para repasar aspectos musicales y temas relacionados con el fagot.",
    "date": "2026-03-26",
    "startTime": "18:15:00",
    "endTime": "20:15:00",
    "room": "B.4",
    "teacherName": "JAIME SANCHEZ LAFFAGE",
    "teacherEmail": "jaime.sanchez@murciaeduca.es",
    "level": "EEM",
    "category": "Viento Madera",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "18:15:00",
        "endTime": "20:15:00",
        "level": "EEM",
        "room": "B.4"
      }
    ]
  },
  {
    "id": "288",
    "title": "Concierto Semana Cultural",
    "description": "Concierto final con la intervención de distintas formaciones grupales y profesorado.",
    "date": "2026-03-26",
    "startTime": "19:15:00",
    "endTime": "21:15:00",
    "room": "AUD",
    "teacherName": "JUAN MANUEL SÁNCHEZ BAEZA",
    "teacherEmail": "juanmanuel.sanchez2@murciaeduca.es",
    "level": "Ambas",
    "category": "Formaciones Grupales y Percusión",
    "sessions": [
      {
        "sessionName": "Única",
        "date": "2026-03-26",
        "startTime": "19:15:00",
        "endTime": "21:15:00",
        "level": "Ambas",
        "room": "AUD"
      }
    ]
  }
];
