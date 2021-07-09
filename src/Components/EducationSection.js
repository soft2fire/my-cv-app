import { useState } from "react";
import TextSection from './TextSection'


const EducationSection = (props) => {
    const [educationInfo, setEducationInfo] = useState({
        schoolName: '',
        study: '',
        from: '',
        to: '',
    });
    const [editMode, setEditMode] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        setEditMode((prevMode) => !prevMode);
        console.log(event)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setEducationInfo((prevInfo) => {
            return { ...prevInfo, [name]: value }
        });
    }

    const { schoolName, study, from, to } = educationInfo;
    const { id, handleDelete } = props;
    if (!editMode) {
        return (
            <TextSection
                schoolName={schoolName}
                study={study}
                from={from}
                to={to}
                handleEdit={handleSubmit}
            />
        );
    } else {
        return (
            <section>
                <form className='section mb-4' action='' onSubmit={handleSubmit} >
                    <label htmlFor='schoolName' className="bg-gray-600 rounded-xl pl-2">
                        <p className="text-white font-bold pt-2 pl-2">School Name:</p>
                        <input
                            type='text'
                            placeholder='School Name'
                            name='schoolName'
                            id='schoolName'
                            value={schoolName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="bg-gray-600 rounded-xl pl-2 text-center">
                            <p className="text-white font-bold pt-2 float-left">Title of Study:</p>
                        <input
                            type='text'
                            placeholder='Title of study'
                            name='study'
                            value={study}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="bg-gray-600 rounded-xl pl-2 text-center">
                            <p className="text-white font-bold pt-2 float-left">From:</p>
                        <input
                            type='date'
                            name='from'
                            placeholder='From'
                            value={from}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="bg-gray-600 rounded-xl pl-2 text-center">
                            <p className="text-white font-bold pt-2 ml-2 float-left">To:</p>
                        <input
                            type='date'
                            name='to'
                            placeholder='To'
                            value={to}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button className="float-right hover:bg-green-700 text-white bg-green-500 py-1 px-2 rounded mt-1">Save</button>
                    <button
                        className='float-right hover:bg-red-700 text-white bg-red-500 py-1 px-2 rounded m-1'
                        type='button'
                        onClick={()=>handleDelete('educationId',id)}
                    >
                        Delete
                    </button>
                </form>
            </section>
        );
    }
}
export default EducationSection;