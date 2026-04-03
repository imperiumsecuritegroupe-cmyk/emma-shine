'use client'

const cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Cannes', 'Monaco', 'Nice', 'Londres', 'Milan', 'Madrid', 'Genève', 'Bruxelles', 'Amsterdam', 'Francfort', 'Barcelone']

export default function Ribbon() {
  const doubled = [...cities, ...cities]
  return (
    <div className="ribbon">
      <div className="ribbon-track">
        {doubled.map((city, i) => (
          <span key={i}>
            {city}
            {i < doubled.length - 1 && <span className="rdot" style={{ margin: '0 14px' }}>✦</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
