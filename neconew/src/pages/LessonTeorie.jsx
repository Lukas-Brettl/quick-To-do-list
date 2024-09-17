import { useEffect, useState } from 'react';


//všechno to vyřeší systém

export default function Teorie({ jsonFileName }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    import(`../math_e/${jsonFileName}.json`)
      .then((module) => {
        setData(module.default); 
      })
      .catch((err) => {
        console.error("Error loading JSON file:", err);
      });
  }, [jsonFileName]); 

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Lesson Data</h1>
      <pre>{data.obsah.teorie.popis}</pre>
    </div>
  );
}