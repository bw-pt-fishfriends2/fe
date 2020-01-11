import React, { useState } from 'react'

const AddUserForm = props => {

    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
      
        setUser({ ...user, [name]: value })
    }

    return (
        <form
        onSubmit={event => {
            event.preventDefault()
            if (!user.name || !user.username) return

            props.addUser(user)
            setUser(initialFormState)
        }}
        >
            <label>Fish Species:</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Bait Used:</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Add Catch!</button>
        </form>
    )
}

export default AddUserForm