import './App.css';
import {useState} from "react";

// ULOHY CO TREBA UROBIT
// 1. pridat state projects do komponentu Projects
// 2. doplnit props do komponentu formularu a do komponentu listu
// 3. sfunkcnit formular
// 4. odoslat data z formularu do statu projects
// 5. zobraziť projekty v komponente List

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: 'Ukol',
      detail: 'Popis',
      person: 'Meno osoby',
      done: false,
      deadline: new Date(),
    },
  ]);

  function pridatProject(novyProjekt) {
    setProjects((stareProjekty) => {
      return [...stareProjekty, novyProjekt];
    });
  }

  function zmazatProject(index) {
    setProjects((stareProjekty) => {
      return stareProjekty.filter((_, i) => i !== index);
    });
  }

  function toggleProject(index) {
    setProjects((stareProjekty) => {
      return stareProjekty.map((projekt, i) => {
        if (i === index) {
          return { ...projekt, done: !projekt.done };
        }
        return projekt;
      });
    });
  }

  return (
    <div>
      <Form onAddProject={pridatProject} />

      <List data={projects} onToggle={toggleProject} />
    </div>
  );
}


function List({ data, onToggle }) {
  return (
    <div>
      {data.map((item, index) => (
        // KOMPONENT PRE JEDNU ULOHU
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.detail}</p>
          <p>{item.person}</p>
          <p onClick={() => onToggle(index)}>{item.done ? 'Hotovo' : 'Nedokončeno'}</p>
          <p>{item.deadline.toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  )
}

function Form({ onAddProject }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // DOPLNIT STATE PRE DALSIE INPUTY

    function potvrditFormular(event) {
      event.preventDefault();
      onAddProject({
        title: name,
        detail: description,
        person: 'Meno osoby', // hodnota z inputu pre osobu
        done: false, // nechame ako false vzdy na zaciatku
        deadline: new Date(), // hodnota z date inputu
      })
    }

    return (
      <form onSubmit={potvrditFormular}>
        {/*NAZOV*/}
        <input value={name} onChange={e => setName(e.target.value)}  />
        {/* POPIS */}
        <input value={description} onChange={e => setDescription(e.target.value)} />

        {/* TLAČIDLO */}
        <button type="submit">Pridať</button>
      </form>
    )
}

export default Projects;