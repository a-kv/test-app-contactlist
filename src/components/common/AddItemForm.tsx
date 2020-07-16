import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type PropsType = {
    addItem: (title: string, tel: string) => void
}

function AddItemForm(props: PropsType) {
    let [newItemTitle, setNewItemTitle] = useState('')
    let [newItemTel, setNewItemTel] = useState('')
    let [error, setError] = useState<null | string>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        {
            setNewItemTitle(e.currentTarget.value)
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.ctrlKey && e.charCode === 13) {
            props.addItem(newItemTitle, newItemTel);
            setNewItemTitle('')
        }
    }

    const addItem = () => {
        if (newItemTitle.trim() !== '') {
            props.addItem(newItemTitle, newItemTel);
            setNewItemTitle('')
        } else {
            setError('Title is required')
        }
    }

    return (
        <div className="addItemForm">
            <TextField variant='outlined'
                       value={newItemTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       error={!!error}
                       label={'Add new contact'}
            />
            <IconButton color={"primary"} onClick={addItem}><AddBox/></IconButton>
        </div>
    );

}

export default AddItemForm;