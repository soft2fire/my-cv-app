function TextSection(props) {
    if (props.firstName) {
        return (
            <div className='bg-gray-600 rounded-b-lg p-2 m-2 mt-0'>
                <button className='float-right bg-transparent border border-white-500 hover:bg-yellow-700 text-white px-1' onClick={props.handleEdit}>
                    Edit
                </button>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>First Name:</span>
                    <span className='text-gray-300'>{props.firstName}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>Last Name:</span>
                    <span className='text-gray-300'>{props.lastName}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>Email:</span>
                    <span className='text-gray-300'>{props.email}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>Phone:</span>
                    <span className='text-gray-300'>{props.phone}</span>
                </p>
            </div>
        );
    } else if (props.companyName) {
        return (
            <div className='bg-gray-600 rounded-b-lg p-2 m-2 mt-0'>
                <button className='float-right bg-transparent border border-white-500 hover:bg-yellow-700 text-white px-1' onClick={props.handleEdit}>
                    Edit
                </button>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>Company Names:</span>
                    <span className='text-gray-300'>{props.companyName}</span>                    
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>Position:</span>
                    <span className='text-gray-300'>{props.position}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>From:</span> 
                    <span className='text-gray-300'>{props.from}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>To:</span> 
                    <span className='text-gray-300'>{props.to}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>Main Task/s:</span> 
                    <span className='text-gray-300'>{props.tasks}</span>
                </p>
            </div>
        );
    } else {
        return (
            <div className='bg-gray-600 rounded-b-lg p-2 m-2 mt-0'>
                <button className='float-right bg-transparent border border-white-500 hover:bg-yellow-700 text-white px-1' onClick={props.handleEdit}>
                    Edit
                </button>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>School Name:</span> 
                    <span className='text-gray-300'>{props.schoolName}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>Study:</span> 
                    <span className='text-gray-300'>{props.study}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>From: </span>
                    <span className='text-gray-300'>{props.from}</span>
                </p>
                <p>
                    <span className='text-blue-400 font-bold mr-1'>To:</span> 
                    <span className='text-gray-300'>{props.to}</span>
                </p>
            </div>
        );
    }
}

export default TextSection;