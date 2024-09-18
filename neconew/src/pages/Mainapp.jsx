import "../pagesCss/Mainapp.css";
import functionImg from "../images/function.png";
import goniometrieImg from "../images/goniometrie.png";
import planimetrieImg from "../images/planimetrie.png";
import mathThinking from "../images/math_thinking.png";
import List from "../components/list.jsx";

import { useState, useMemo } from "react";

const funkce ={
  tema: "Funkce",
  temata:[
    "Kartézský systém souřadnic",
    "Vlastnosti funkcí",
    "Lineární funkce",
    "Kvadratické funkce",
    "Lineární lomené funkce",
    "Funkce s absolutní hodnotou",
    "Exponenciální funkce",
    "Exponenciální rovnice",
    "Logaritmické funkce",
    "Logaritmické rovnice",
    "Exponenciální rovnice řešené logaritmicky"
  ],


  conditions: {
    "Kartézský systém souřadnic": [],
    "Vlastnosti funkcí": [],
    "Lineární funkce": [],
    "Kvadratické funkce": [],
    "Lineární lomené funkce": [],
    "Funkce s absolutní hodnotou": [],
    "Exponenciální funkce": [],
    "Exponenciální rovnice": [],
    "Logaritmické funkce": [],
    "Logaritmické rovnice": [],
    "Exponenciální rovnice řešené logaritmicky": []
  }
}

const goniometrie = {
  tema: "Goniometrie",
  temata:[
    "Úhel",
    "Hodnoty goniometrických funkcích",
    "Grafy goniometrických funkcí",
    "Vztahy mezi goniometrickými funkcemi",
    "Goniometrické rovnice",
  ],
  conditions: {
    "Úhel": ["uhel"],
    "Hodnoty goniometrických funkcích": ["Hodnoty goniometrickych funkcich"],
    "Grafy goniometrických funkcí": ["Grafy goniometrickych funkci"],
    "Vztahy mezi goniometrickými funkcemi": ["Vztahy mezi goniometrickymi funkcemi"],
    "Goniometrické rovnice": ["Goniometricke rovnice"]
  },
}

const planimetrie = {
  tema: "Planimetrie",
  temata:[
    "Základní pojmy",
    "Osová souměrnost",
    "Středová souměrnost",
    "Posunutí (translace)",
    "Otočení (rotace)",
    "Podobnost",
    "Pravoúhlý trojúhelník",
    "Obecný trojúhelník",
    "Ostatní rovinné útvary"
  ],
  conditions: {
    "Základní pojmy": [],
    "Osová souměrnost": [],
    "Středová souměrnost": [],
    "Posunutí (translace)": [],
    "Otočení (rotace)": [],
    "Podobnost": [],
    "Pravoúhlý trojúhelník": [],
    "Obecný trojúhelník": [],
    "Ostatní rovinné útvary": []
  },
}

export default function Mainapp({start}) {
  const [tema, setTema] = useState(funkce);

  const [selectedItem, setSelectedItem] = useState(undefined); // Přidání stavu pro selected_item
  const [isList, setIsList] = useState(true);

  const select = (item) => {
    setSelectedItem(item); // Nastaví selected_item
  };

  const selected = (array, selected_item) => {
    console.log(selected_item);
    if (selected_item !== undefined) {
      return selected_item;
    } else {
      return array[0];
    }
  };

  // Použití useMemo pro zamezení opakovanému volání selected
  const selectedDisplay = useMemo(
    () => selected(tema.temata, selectedItem),
    [tema.temata, selectedItem] // Přidání obou závislostí
  );

  return (
    <div>
      <header className="flex justify-between m-4">
        <div className="flex items-center">
          <div
            className="flex flex-col items-center rounded-lg w-12 h-12 ml-8 mr-5 cursor-pointer"
            id="profile-img"
          >
            <span className="bg-white mt-1 rounded-full w-5 h-5"></span>
            <span
              className="bg-white w-7 h-3 absolute mt-7"
              id="profile-img-body"
            ></span>
          </div>
          <h2 className="text-2xl">{localStorage.getItem("jmeno")}</h2>
        </div>
      </header>
      <section className="w-full flex justify-center">
        <main className="w-1/2">
          <div className="flex justify-center items-center">
            <div
              onClick={() =>
                setTema(funkce)
              }
              id="first-progress"
              className="rounded-full w-20 h-20 flex justify-center items-center cursor-pointer"
            >
              <img
                className="absolute select-none"
                src={functionImg}
                width={40}
                height={40}
                alt="Funkce nenačtený obrázek :("
              />
              <svg
                width={100}
                height={100}
                viewBox="0 0 250 250"
                className="circular-progress"
                style={{ "--progress": "10" }}
              >
                <circle className="bg"></circle>
                <circle id="first-progress-circle" className="fg"></circle>
              </svg>
              <h3 className="none invisible">Funkce</h3>
            </div>
            <span className="div-progress"></span>
            <div
              onClick={() =>
                setTema(goniometrie)
              }
              id="second-progress"
              className="rounded-full w-20 h-20 flex justify-center items-center cursor-pointer"
            >
              <img
                className="absolute select-none"
                src={goniometrieImg}
                width={40}
                height={40}
                alt="Goniometrie nenačtený obrázek :("
              />
              <svg
                width={100}
                height={100}
                viewBox="0 0 250 250"
                className="circular-progress"
                style={{ "--progress": "60" }}
              >
                <circle className="bg"></circle>
                <circle id="second-progress-circle" className="fg"></circle>
              </svg>
              <h3 className="none invisible">Goniometrie</h3>
            </div>
            <span className="div-progress"></span>
            <div
              onClick={() =>
                setTema(planimetrie)
              }
              id="third-progress"
              className="rounded-full w-20 h-20 flex justify-center items-center cursor-pointer"
            >
              <img
                className="absolute select-none"
                src={planimetrieImg}
                width={40}
                height={40}
                alt="Planimetrie nenačtený obrázek :("
              />
              <svg
                width={100}
                height={100}
                viewBox="0 0 250 250"
                className="circular-progress"
                style={{ "--progress": "60" }}
              >
                <circle className="bg"></circle>
                <circle id="third-progress-circle" className="fg"></circle>
              </svg>
              <h3 className="none invisible">Planimetrie</h3>
            </div>
          </div>
          <div className="flex border">
            <div>
              <img width={300} height={300} src={mathThinking} alt="obrazek" />
            </div>
            <div className="border w-72">
              {isList ? (
                <div className="p-3">
                  <h3 className="text-2xl">{tema.tema}</h3>
                  <h4 className="ml-3 mt-3 text-xl" onClick={() => setIsList(false)}>{selectedDisplay}</h4>
                  <button className="w-60 h-10 text-center rounded-md font-semibold text-white flex justify-center items-center mt-24 m-auto" onClick={() => start(JSON.stringify(selectedDisplay), JSON.stringify(tema))} id="start-button">Start</button>
                </div>
              ) : (
                <List setIsList={setIsList} select={select} tema={tema} />
              )}
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
