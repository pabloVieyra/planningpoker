import React, { useState } from 'react'

interface Props {
    onChangeUserName: (userName: string) => void;
}

const UserNameForm: React.FC<Props> = ({ onChangeUserName }) => {
    const [userName, setUserName] = useState('')

    const handleOnChange = (e) => {
        setUserName(e.target.value)
    }

    const handleClickAccept = () => {
        if (!userName) return
        onChangeUserName(userName)
    }

    return (
        <div>
            <input placeholder="Write your name here!" onChange={handleOnChange} />
            <button onClick={handleClickAccept}>Ok</button>
        </div>
    );
}

export default UserNameForm;
