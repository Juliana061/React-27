import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
interface TeamData {
  team: {
    name: string;
    info: {
      city: string;
      founded: string;
      stadium: string;
      president: string;
      last_title: string;
    };
    ranking: {
      position: string;
      competition: string;
    };
    social: {
      facebook: string;
      instagram: string;
      x: string;
    };
    links: {
      store: string;
      tickets: string;
    };
  };
}
interface Ranking {
  rank: number
  contestantName: string
  points: number
  matchesPlayed: number
}

function Equipo() {
  const { equipo } = useParams<{ equipo: string }>()
  const [Data, setData] = useState<Data[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/sdtibata/dataliga/main/${equipo}.json`)
        const data = await res.json()

        setData(data.standings[0].Data)
      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }

    fetchData()
  }, [equipo])

  return (
    <>
      <p>{equipo}</p>
    </>
  )
}

export default Equipo