import { useMemo } from 'react'
import '../NightSky/NightSky.css'

const NightSky = () => {
    const stars = useMemo(() => Array.from({ length: 60 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 3}s`,
    })), [])

    return (
        <div className="night-sky">
            {stars.map(star => (
                <span
                    key={star.id}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.delay,
                        animationDuration: star.duration,
                    }}
                />
            ))}
        </div>
    )
}

export default NightSky
