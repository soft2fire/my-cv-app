import React, { useState } from "react";
import uniqid from "uniqid";
import GeneralSection from './Components/GeneralSection';
import ExperienceSection from './Components/ExperienceSection';
import EducationSection from './Components/EducationSection';
import './styles/App.css';
import './styles/forms.css';

function App() {
  const [educationId, setEducationId] = useState([]);
  const [experienceId, setExperienceId] = useState([]);

  const handleClick = (type) => {
    if (type === 'educationId') {
      setEducationId((prevEduIds) => [...prevEduIds, uniqid()]);
    } else if (type === 'experienceId') {
      setExperienceId((prevExpId) => [...prevExpId, uniqid()]);
    } else {
      return null;
    }
  }

  const handleDelete = (type, id) => {

    if (type === 'educationId') {
      setEducationId((prevExpId) => {
        let newList = prevExpId.filter((key) => key !== id);
        return newList
      });

    } else if (type === 'experienceId') {
      setExperienceId((prevExpId) => {
        let newList = prevExpId.filter((key) => key !== id);
        return newList;
      });
    } else {
      return null;
    }
  }

  const eduComponents = educationId.map((id) => (
    <EducationSection key={id} id={id} handleDelete={handleDelete} />
  ));

  const expComponents = experienceId.map((id) => (
    <ExperienceSection key={id} id={id} handleDelete={handleDelete} />
  ));

  return (
    <div className="bg-gray-700 p-10 h-100 font-sans">

      <main className="bg-gray-700 rounded-xl shadow-2xl border-4 border-gray-600 border-opacity-25 pb-12">
        <h1 className='text-center text-blue-400 font-bold pt-2'>My CV-App with React</h1>
        <h2 className='text-center categoryText p-2 m-2 mb-0 rounded-t-lg bg-gray-800'>General Information</h2>
        <div className="float-center pb-4">
          <GeneralSection />
        </div>
        <div className="">
          <h2 className='text-center categoryText p-2 m-2 mb-0 rounded-t-lg bg-gray-800'>Educational Experience</h2>
          {eduComponents}
          <button
            className='float-right hover:bg-blue-700 text-white bg-blue-500 py-1 px-2 rounded mr-4 mt-2'
            onClick={() => handleClick('educationId')}
          >
            Add +
          </button>
        </div>
        <div className="pt-10">
          <h2 className='text-center categoryText p-2 m-2 mb-0 rounded-t-lg bg-gray-800'>Experience Section</h2>
          {expComponents}
          <button
            className='float-right hover:bg-blue-700 text-white bg-blue-500 py-1 px-2 rounded mr-4 mt-2'
            onClick={() => handleClick('experienceId')}
          >
            Add +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              window.print();
            }}
            className='float-right hover:bg-blue-700 text-white bg-yellow-700 py-1 px-2 rounded mr-4 mt-2'>
            Print
          </button>
        </div>
      </main>

    </div>
  );
}
export default App;