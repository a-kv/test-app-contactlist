import React, {useEffect} from 'react';
import {Grid, List} from "@material-ui/core";
import {
    addNewContact,
    deleteContact,
    setContactList,
    updateContactTel,
    updateContactTitle,
} from "../../../state/reducer";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../../state/store";
import AddItemForm from "../../common/AddItemForm";
import Contacts from '../Contacts/Contacts';


export type ContactType = {
    id: string
    title: string
    tel: string
}
export type ContactListType = Array<ContactType>


function ContactList() {
    const contactList = useSelector<AppRootStateType, Array<ContactType>>(state => state.contactList)
    const dispatch = useDispatch();

    useEffect(() => {
        if (contactList) {
            dispatch(setContactList())
        }
    }, [])

    function removeContact(contactId: string) {
        dispatch(deleteContact(contactId));
    }

    function addContact(title: string) {
        dispatch(addNewContact(title));
    }

    function changeTitle(id: string, title: string) {
        dispatch(updateContactTitle(id, title));
    }

    function changeTel(id: string, tel: string) {
        dispatch(updateContactTel(id, tel))
    }


    return (
        <div className={'contactList'}>
            <Grid item>
                <List style={{padding: '10px'}}>
                    <AddItemForm addItem={addContact}/>
                    <Contacts contactList={contactList}
                              removeContact={removeContact}
                              changeTitle={changeTitle}
                              changeTel={changeTel}
                    />
                </List>
            </Grid>

        </div>
    );
}

export default ContactList;