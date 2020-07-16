import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import {TextField} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

type PropsType = {
    value: string
    onChange: (newValue: string) => void
}

function EditableSpan(props: PropsType) {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [newTitle, setNewTitle] = useState<string>(props.value)

    const activeEditMode = () => {
        setEditMode(true);
        setNewTitle(props.value);
    }
    const deActiveEditMode = () => {
        setEditMode(false)
        props.onChange(newTitle)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.onChange(newTitle);
            deActiveEditMode();
        }
    }
    return (
        editMode
            ? <TextField variant='outlined'
                value={newTitle}
                autoFocus={true}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                onBlur={deActiveEditMode}
            />
            : <span>{props.value} <EditIcon onClick={activeEditMode} fontSize={"small"} color={"inherit"}/></span>
    )
}

export default EditableSpan;