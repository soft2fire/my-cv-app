import { useState } from "react";
import TextSection from './TextSection'

const ExperienceSection = (props) => {

    const [experienceInfo, setExperienceIndo] = useState({
        companyName: '',
        position: '',
        from: '',
        to: '',
        tasks: ''
    });

    const [editMode, setEditMode] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        setEditMode((prevMode) => !prevMode);

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setExperienceIndo((prevInfo) => {
            return { ...prevInfo, [name]: value }
        });
    }

    const { companyName, position, from, to, tasks } = experienceInfo;
    const { handleDelete, id } = props;
    if (!editMode) {
        return (
            <TextSection
                companyName={companyName}
                position={position}
                from={from}
                to={to}
                tasks={tasks}
                handleEdit={handleSubmit}
            />
        )
    } else {
        return (
            <section>
                <form action='' className='section xpSection' onSubmit={handleSubmit} >
                <label className="bg-gray-600 rounded-xl pl-2">
                            <p className="text-white font-bold pt-2 pl-2">Company Name:</p>
                        <input
                            type='text'
                            placeholder='Company Name'
                            name='companyName'
                            value={companyName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className="bg-gray-600 rounded-xl pl-2">
                            <p className="text-white font-bold pt-2 pl-2">Position Title:</p>
                        <input
                            type='text'
                            placeholder='Position Title'
                            name='position'
                            value={position}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className="bg-gray-600 rounded-xl pl-2">
                            <p className="text-white font-bold pt-2 pl-2">From:</p>
                        <input
                            type='date'
                            name='from'
                            placeholder='From'
                            value={from}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className="bg-gray-600 rounded-xl pl-2">
                            <p className="text-white font-bold pt-2 pl-2">To:</p>
                        <input
                            type='date'
                            name='to'
                            placeholder='To'
                            value={to}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <textarea
                        name='tasks'
                        className='bg-gray-600 rounded-xl pl-2 mt-1'
                        placeholder='Main Tasks'
                        value={tasks}
                        onChange={handleChange}
                        required
                    />
                    <button className='float-right hover:bg-green-700 text-white bg-green-500 py-1 px-2 rounded mt-2'>Save</button>
                    <button
                        className='float-right hover:bg-red-700 text-white bg-red-500 py-1 px-2 rounded mt-2'
                        type='button'
                        onClick={()=>handleDelete('experienceId',id)}
                    >
                        Delete
                    </button>
                </form>
            </section>
        )
    }
}
export default ExperienceSection;