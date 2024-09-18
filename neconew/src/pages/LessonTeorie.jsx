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

  function write(){
    const entries = Object.entries(data.obsah.Teorie)
    for (let [key, value] of entries){
      if (key == "popis"){
        return <h2>{value}</h2>
      }
    }
  }

  return (
    <div className='p-12'>
      <h1 className='text-2xl mb-3'>{data["téma"]}</h1>
      
      {write()}
    </div>
  );
}