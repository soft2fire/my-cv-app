import { useState } from "react";
import TextSection from './TextSection'
const GeneralSection = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [editMode, setEditMode] = useState(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        setEditMode((prevMode) => !prevMode)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPersonalInfo((prevInfo) => {
            return { ...prevInfo, [name]: value }
        });
    }

    const { firstName, lastName, email, phone } = personalInfo;
    if (!editMode) {
        return (
            <TextSection
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                handleEdit={handleSubmit}
                className="p-0 m-0"
            />
        );
    } else {
        return (
            <div className='p-0 m-0'>
                <section>
                    <form className='section' action='' onSubmit={handleSubmit}>
                        <label className="bg-gray-600 rounded-xl pl-2 text-center">
                            <p className="text-white font-bold pt-2 float-left">First Name:</p>
                            <input
                                className="p-2 rounded"
                                type='text'
                                placeholder='First Name'
                                name='firstName'
                                value={firstName}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="bg-gray-600 rounded-xl pl-2 text-center">
                            <p className="text-white font-bold pt-2 float-left">Last Name:</p>
                            <input
                                className="p-2 rounded"
                                type='text'
                                placeholder='Last Name'
                                name='lastName'
                                value={lastName}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="bg-gray-600 rounded-xl pl-2 text-center">
                            <p className="text-white font-bold pt-2 float-left">Email:</p>
                            <input
                                className="p-2 rounded"
                                type='email'
                                placeholder='example@gmail.com'
                                name='email'
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="bg-gray-600 rounded-xl pl-2 text-center">
                            <p className="text-white font-bold pt-2 float-left">Phone Number:</p>
                            <input
                                className="p-2 rounded"
                                type='tel'
                                name='phone'
                                placeholder='123-456-7890'
                                value={phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button className='hover:bg-green-700 text-white bg-green-500 py-1 px-8 rounded text-right' type='submit'>
                            Save
                        </button>
                    </form>
                </section>
            </div>
        )
    }
}
export default GeneralSection;