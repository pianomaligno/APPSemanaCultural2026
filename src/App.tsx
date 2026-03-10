import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Mail, User, ExternalLink, Filter, FileText, Info, Ticket, LayoutGrid, List } from 'lucide-react';
import { Activity, Level, mockActivities } from './data';
import { ScheduleView } from './ScheduleView';

// Color mapping for levels
const levelColors: Record<string, string> = {
  EEM: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  EPM: 'bg-blue-100 text-blue-800 border-blue-200',
  Ambas: 'bg-purple-100 text-purple-800 border-purple-200',
};

const levelBadges: Record<string, string> = {
  EEM: 'bg-emerald-500',
  EPM: 'bg-blue-500',
  Ambas: 'bg-purple-500',
};

// Fallback colors for unknown levels
const fallbackColor = 'bg-slate-100 text-slate-800 border-slate-200';
const fallbackBadge = 'bg-slate-500';

export default function App() {
  const [selectedDate, setSelectedDate] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'schedule'>('list');

  // Extract unique dates for the filter
  const uniqueDates = useMemo(() => {
    const dates = Array.from(new Set(mockActivities.map((a) => a.date))).filter(Boolean).sort();
    return dates;
  }, []);

  // Extract unique levels for the filter
  const uniqueLevels = useMemo(() => {
    const levels = Array.from(new Set(mockActivities.map((a) => a.level))).filter(Boolean).sort();
    return levels;
  }, []);

  // Format date for display (e.g., "Lunes 15 Abr")
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Fecha sin especificar';
    try {
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'short' };
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString('es-ES', options).replace(/^\w/, (c) => c.toUpperCase());
    } catch (e) {
      return dateString;
    }
  };

  // Format time to remove seconds if present (e.g., "13:15:00" -> "13:15")
  const formatTime = (timeString: string) => {
    if (!timeString) return '--:--';
    const parts = timeString.split(':');
    if (parts.length >= 2) {
      return `${parts[0]}:${parts[1]}`;
    }
    return timeString;
  };

  // Filter and sort activities
  const filteredActivities = useMemo(() => {
    return mockActivities
      .filter((activity) => {
        // Check if the main activity date matches OR if any session date matches
        const matchDate = selectedDate === 'all' || 
                          activity.date === selectedDate || 
                          (activity.sessions && activity.sessions.some(session => session.date === selectedDate));
                          
        const matchLevel = selectedLevel === 'all' || activity.level === selectedLevel || activity.level === 'Ambas';
        return matchDate && matchLevel;
      })
      .sort((a, b) => {
        // First sort by date
        if (a.date !== b.date) {
          return a.date.localeCompare(b.date);
        }
        // Then sort by start time
        return a.startTime.localeCompare(b.startTime);
      });
  }, [selectedDate, selectedLevel]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Semana Cultural
              </h1>
              <p className="text-slate-500 mt-1">
                Conservatorio de Música de Cartagena
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              {/* General Registration Button */}
              <a
                href="https://forms.gle/Kbh1gabQWxeFP1Zw8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors w-full sm:w-auto"
              >
                Inscripción
                <ExternalLink className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Filters and View Toggle */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center text-slate-500">
                <Filter className="h-5 w-5 mr-2" />
                <span className="font-medium">Filtros:</span>
              </div>
              
              <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                {/* Date Filter */}
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg bg-slate-100 border-transparent hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <option value="all">Todos los días</option>
                  {uniqueDates.map((date) => (
                    <option key={date} value={date}>
                      {formatDate(date)}
                    </option>
                  ))}
                </select>

                {/* Level Filter */}
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg bg-slate-100 border-transparent hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <option value="all">Todos los niveles</option>
                  <option value="EEM">Enseñanzas Elementales (EEM)</option>
                  <option value="EPM">Enseñanzas Profesionales (EPM)</option>
                  <option value="Ambas">Ambas (EEM y EPM)</option>
                  {uniqueLevels.filter(l => !['EEM', 'EPM', 'Ambas'].includes(l)).map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-lg self-start md:self-auto">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${viewMode === 'list' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <LayoutGrid className="h-4 w-4 mr-2" />
                Vista Lista
              </button>
              <button
                onClick={() => setViewMode('schedule')}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${viewMode === 'schedule' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <List className="h-4 w-4 mr-2" />
                Vista Cuadrante
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Información e Inscripciones */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <Info className="h-6 w-6 mr-2 text-indigo-600" />
            Información e Inscripciones
          </h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-700 font-bold text-lg text-center">
              IMPORTANTE: El plazo de inscripción acaba el día <span className="text-red-600">16/03/2026</span>
            </p>
          </div>

          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Obligatoriedad:</strong> Habrá obligación de asistir a al menos 2 actividades (sin contar la Gala del Batel). Se entregará un carnet a los alumnos que será sellado al asistir a cada actividad.
            </p>
            <p>
              <strong>Aportación:</strong> Algunas de las actividades (indicadas en su tarjeta) tendrán una aportación de 2 euros, ya que las plazas son limitadas y queremos garantizar el compromiso. <span className="text-indigo-700 font-semibold">El pago de las inscripciones que conllevan coste deberá efectuarse en Vicedirección.</span>
            </p>
            <p>
              <strong>Procedimiento:</strong> Todo se hace a través de un único formulario (el botón "Inscripción" de arriba). Se aconseja consultar a su tutor a la hora de decidir qué actividades elegir.
            </p>
            <p>
              <strong>Actividades con varias sesiones:</strong> Hay actividades que, siendo de varias sesiones, en el formulario tendrán una elección por sesión. Esto es porque hay varios pases de una misma actividad o de un nivel concreto. Otras, en cambio, no dejarán elegir, que será el caso de aquellas que sea una actividad que tenga lugar durante varios días.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-4">
              <h3 className="font-semibold text-slate-900 mb-2">Programa PHI</h3>
              <p className="text-sm mb-4">
                Los alumnos pertenecientes al programa PHI podrán salir (ya que todas las actividades tienen horario de tarde) previa solicitud y autorización por parte de sus padres a través del siguiente formulario. Los alumnos que no dispongan de autorización de este programa se quedarán en el centro bajo la supervisión de los profesores asignados para dicha función.
              </p>
              <a 
                href="https://forms.gle/g2fH82AGbe6aq7Rj7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors"
              >
                Formulario Autorización PHI
                <ExternalLink className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
            <span className="text-slate-600">EEM</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            <span className="text-slate-600">EPM</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
            <span className="text-slate-600">Ambas</span>
          </div>
        </div>

        {/* View Content */}
        {viewMode === 'schedule' ? (
          <ScheduleView activities={filteredActivities} />
        ) : (
          /* Activities Grid */
          filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity, idx) => {
              const colors = levelColors[activity.level] || fallbackColor;
              const badge = levelBadges[activity.level] || fallbackBadge;
              const borderColorClass = colors.split(' ').find(c => c.startsWith('border-')) || 'border-slate-200';
              
              return (
                <div
                  key={activity.id || idx}
                  className={`flex flex-col bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow ${borderColorClass}`}
                >
                  {/* Card Header with Color Bar */}
                  <div className={`h-2 w-full ${badge}`}></div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-wrap gap-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors}`}>
                          {activity.level || 'N/A'}
                        </span>
                        {activity.hasCost && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                            Coste: 2€
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md text-right ml-2">
                        {activity.category || 'Actividad'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                      {activity.title || 'Sin título'}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-6 line-clamp-4" title={activity.description}>
                      {activity.description || 'Sin descripción'}
                    </p>
                    
                    <div className="space-y-3 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {activity.sessions && activity.sessions.length > 1 ? (
                        <div className="space-y-3">
                          <div className="font-medium text-slate-900 border-b border-slate-200 pb-2 mb-2">
                            Sesiones ({activity.sessions.length})
                          </div>
                          {activity.sessions.map((session: any, sIdx: number) => (
                            <div key={sIdx} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                              <div className="font-medium text-indigo-700 mb-1">{session.sessionName}</div>
                              <div className="flex items-center text-xs mb-1">
                                <Calendar className="h-3 w-3 mr-2 text-slate-400 shrink-0" />
                                <span>{formatDate(session.date)}</span>
                              </div>
                              <div className="flex items-center text-xs mb-1">
                                <Clock className="h-3 w-3 mr-2 text-slate-400 shrink-0" />
                                <span>{formatTime(session.startTime)} - {formatTime(session.endTime)}</span>
                              </div>
                              <div className="flex items-center text-xs mb-1">
                                <MapPin className="h-3 w-3 mr-2 text-slate-400 shrink-0" />
                                <span>{session.room || 'Aula sin especificar'}</span>
                              </div>
                              {session.level && session.level !== activity.level && (
                                <div className="mt-2">
                                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${levelColors[session.level] || fallbackColor}`}>
                                    Dirigido a: {session.level}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-3 text-slate-400 shrink-0" />
                            <span className="font-medium">{formatDate(activity.date)}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-3 text-slate-400 shrink-0" />
                            <span>{formatTime(activity.startTime)} - {formatTime(activity.endTime)}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-3 text-slate-400 shrink-0" />
                            <span>{activity.room || 'Aula sin especificar'}</span>
                          </div>
                        </>
                      )}
                    </div>
                      
                    <div className="mt-auto pt-4">
                      <div className="flex items-center pt-2 mt-2 border-t border-slate-200">
                        <User className="h-4 w-4 mr-3 text-slate-400 shrink-0" />
                        <div className="flex flex-col">
                          <span className="font-medium">{activity.teacherName || 'Profesor sin especificar'}</span>
                          {activity.teacherEmail && (
                            <a 
                              href={`mailto:${activity.teacherEmail}`}
                              className="text-indigo-600 hover:text-indigo-800 flex items-center mt-0.5 group"
                            >
                              <Mail className="h-3 w-3 mr-1 opacity-70 group-hover:opacity-100" />
                              {activity.teacherEmail}
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {activity.hasTickets && (
                        <div className="pt-3 mt-3 border-t border-slate-200">
                          {activity.ticketLink ? (
                            <a 
                              href={activity.ticketLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                            >
                              <Ticket className="h-4 w-4 mr-2" />
                              Compra tu entrada
                            </a>
                          ) : (
                            <button disabled className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-400 cursor-not-allowed">
                              <Ticket className="h-4 w-4 mr-2" />
                              Compra tu entrada (Próximamente)
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
            <FileText className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-2 text-sm font-semibold text-slate-900">No hay actividades</h3>
            <p className="mt-1 text-sm text-slate-500">
              No se encontraron actividades.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedDate('all');
                  setSelectedLevel('all');
                }}
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
