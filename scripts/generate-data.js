import fs from 'fs';
import Papa from 'papaparse';

const csvContent = fs.readFileSync('./src/data.csv', 'utf-8');

const parsed = Papa.parse(csvContent, {
  header: true,
  skipEmptyLines: true,
  delimiter: ';',
});

const activities = parsed.data.map((row, index) => {
  const teacherName = row.profesor_nombre 
    ? `${row.profesor_nombre} ${row.profesor_apellidos || ''}`.trim() 
    : 'Profesor sin especificar';

  let level = row.Nivel_Educativo_Normalizado || 'Ambas';
  if (level.includes('Ambos') || level.includes('Todos')) level = 'Ambas';
  
  let description = row.Descripcion_Para_Familias || '';
  description = description.replace(/<[^>]*>?/gm, '');

  return {
    id: row.id || String(index + 1),
    title: row.titulo || 'Sin título',
    description: description,
    date: row.Fecha_Normalizada || '',
    startTime: row.hora_inicio || '',
    endTime: row.hora_fin || '',
    room: row.lugar || 'Aula sin especificar',
    teacherName: teacherName,
    teacherEmail: row.profesor_email || '',
    level: level,
    category: row.especialidad_nombre || row.departamento_nombre || 'Actividad',
    session: row.Sesion || row.Sesión || 'Única',
  };
});

// Group activities by ID
const groupedActivities = {};
activities.forEach((activity) => {
  if (!groupedActivities[activity.id]) {
    groupedActivities[activity.id] = {
      ...activity,
      sessions: []
    };
  }
  groupedActivities[activity.id].sessions.push({
    sessionName: activity.session,
    date: activity.date,
    startTime: activity.startTime,
    endTime: activity.endTime,
    level: activity.level,
    room: activity.room
  });
});

const finalActivities = Object.values(groupedActivities).map((a) => {
  // If all sessions have the same date, level, room, we can just keep them at the top level
  // But we'll keep the sessions array for the UI to render
  return a;
});

const tsContent = `export type Level = 'EEM' | 'EPM' | 'Ambas' | string;

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
}

export const mockActivities: Activity[] = ${JSON.stringify(finalActivities, null, 2)};
`;

fs.writeFileSync('./src/data.ts', tsContent);
console.log('Generated data.ts');
