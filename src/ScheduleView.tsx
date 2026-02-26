import React, { useMemo, useState } from 'react';
import { Activity } from './data';
import { Clock, MapPin } from 'lucide-react';

interface ScheduleViewProps {
  activities: Activity[];
}

const levelColors: Record<string, string> = {
  EEM: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  EPM: 'bg-blue-100 text-blue-800 border-blue-200',
  Ambas: 'bg-purple-100 text-purple-800 border-purple-200',
};

const fallbackColor = 'bg-slate-100 text-slate-800 border-slate-200';

export const ScheduleView: React.FC<ScheduleViewProps> = ({ activities }) => {
  // Extract all unique dates
  const uniqueDates = useMemo(() => {
    const dates = new Set<string>();
    activities.forEach(a => {
      dates.add(a.date);
      if (a.sessions) {
        a.sessions.forEach(s => dates.add(s.date));
      }
    });
    return Array.from(dates).sort();
  }, [activities]);

  const [selectedDate, setSelectedDate] = useState<string>(uniqueDates[0] || '');

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    }).format(date);
  };

  // Format time to remove seconds
  const formatTime = (timeString: string) => {
    if (!timeString) return '--:--';
    const parts = timeString.split(':');
    if (parts.length >= 2) {
      return `${parts[0]}:${parts[1]}`;
    }
    return timeString;
  };

  // Get all sessions/activities for the selected date
  const dayItems = useMemo(() => {
    const items: any[] = [];
    
    activities.forEach(activity => {
      if (activity.sessions && activity.sessions.length > 1) {
        activity.sessions.forEach(session => {
          if (session.date === selectedDate) {
            items.push({
              ...session,
              activityId: activity.id,
              title: activity.title,
              category: activity.category,
              teacherName: activity.teacherName,
              hasCost: activity.hasCost,
              hasTickets: activity.hasTickets
            });
          }
        });
      } else if (activity.date === selectedDate) {
        items.push({
          ...activity,
          activityId: activity.id,
          sessionName: 'Única'
        });
      }
    });

    // Sort by start time
    return items.sort((a, b) => a.startTime.localeCompare(b.startTime));
  }, [activities, selectedDate]);

  if (!selectedDate) {
    return <div className="text-center py-12 text-slate-500">No hay datos disponibles</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Date Tabs */}
      <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50 scrollbar-hide">
        {uniqueDates.map(date => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`whitespace-nowrap px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              selectedDate === date
                ? 'border-indigo-600 text-indigo-600 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span className="capitalize">{formatDate(date)}</span>
          </button>
        ))}
      </div>

      {/* Timeline/Grid */}
      <div className="p-0 sm:p-6">
        <div className="min-w-full divide-y divide-slate-200">
          {dayItems.length > 0 ? (
            dayItems.map((item, idx) => {
              const colors = levelColors[item.level] || fallbackColor;
              
              return (
                <div key={`${item.activityId}-${idx}`} className="flex flex-col sm:flex-row py-4 px-4 sm:px-0 hover:bg-slate-50 transition-colors group">
                  {/* Time Column */}
                  <div className="sm:w-48 shrink-0 mb-2 sm:mb-0 sm:pr-6 flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-start">
                    <div className="text-lg font-bold text-slate-900">
                      {formatTime(item.startTime)}
                    </div>
                    <div className="text-sm text-slate-500 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTime(item.endTime)}
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${colors}`}>
                        {item.level}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                      {item.hasCost && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
                          Coste: 2€
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">
                      {item.title}
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600 mt-2">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1.5 text-slate-400" />
                        <span className="font-medium">{item.room || 'Aula sin especificar'}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-slate-400 mr-1.5">•</span>
                        <span>{item.teacherName}</span>
                      </div>
                      {item.sessionName !== 'Única' && (
                        <div className="flex items-center">
                          <span className="text-slate-400 mr-1.5">•</span>
                          <span className="text-indigo-600 font-medium">{item.sessionName}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-slate-500">
              No hay actividades programadas para este día.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
