import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm ({createBox}) {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData, id:uuid()});
        setFormData(INITIAL_STATE)
    }

    return (
    <div>
        <form onSubmit= {handleSubmit}>
           <div>
            <label htmlFor="width">Width:</label>
            <input
            id= "width"
            name="width"
            type="text"
            value= {formData.width}
            onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor="height">Height:</label>
            <input
            id= "height"
            name="height"
            type="text"
            value= {formData.height}
            onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
            type="text"
            id= "backgroundColor"
            name="backgroundColor"
            value= {formData.backgroundColor}
            onChange={handleChange}
            />
            </div>
            
            <button id="newBoxButton">Add Box</button>

        </form>
    </div>
    )
}


export default NewBoxForm;