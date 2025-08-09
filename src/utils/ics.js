export function buildIcsUrl({title='Wedding',description='',location='',startISO,endISO}){
  const fmt = (iso)=>new Date(iso).toISOString().replace(/[-:]/g,'').split('.')[0]+'Z'
  const esc=(s)=>String(s).replace(/\n/g,'\\n').replace(/,|;|\r/g,' ')
  const lines=[
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//invite//vue//KR','CALSCALE:GREGORIAN','METHOD:PUBLISH',
    'BEGIN:VEVENT',`DTSTART:${fmt(startISO)}`, endISO?`DTEND:${fmt(endISO)}`:'',
    `SUMMARY:${esc(title)}`,`DESCRIPTION:${esc(description)}`,`LOCATION:${esc(location)}`,
    'END:VEVENT','END:VCALENDAR'
  ].filter(Boolean)
  const blob=new Blob([lines.join('\r\n')],{type:'text/calendar'})
  return URL.createObjectURL(blob)
}