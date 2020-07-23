import { useState } from 'react';

const useForm = (initalState = {}) => {
	const [ data, setData ] = useState(initalState);

	const handleChange = ({ target }) => {
		setData({
            ...data,
            [target.name]:target.value,
            error:false
        })
    }
    
    return{
        data, handleChange,setData
    }
};

export default useForm;
