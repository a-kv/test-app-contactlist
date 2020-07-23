import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from './store';
import {api} from "../api/api";
import {ContactListType, ContactType} from "../components/MainPage/ContactList/ContactList";

export type RemoveContactsActionType = {
    type: 'REMOVE-CONTACT',
    id: string
}

export type AddContactsActionType = {
    type: 'ADD-CONTACT',
    newContact: ContactType

}
export type ChangeContactsTitleActionType = {
    type: 'CHANGE-CONTACT-TITLE',
    id: string
    title: string
}
export type ChangeContactsTelActionType = {
    type: 'CHANGE-CONTACT-TEL',
    id: string
    tel: string
}
export type SetContactsActionType = {
    type: 'SET-CONTACT-LIST',
    contactList: ContactListType
}


type ActionsType = RemoveContactsActionType | AddContactsActionType
    | ChangeContactsTitleActionType | SetContactsActionType | ChangeContactsTelActionType


const initialState: Array<ContactType> = []

export const contactsReducer = (state: Array<ContactType> = initialState, action: ActionsType): Array<ContactType> => {
    switch (action.type) {
        case 'REMOVE-CONTACT': {
            return state.filter(c => c.id != action.id)
        }
        case 'ADD-CONTACT': {
            return [...state, {
                id: action.newContact.id,
                title: action.newContact.title,
                tel: 'Entry number'
            }]
        }

        case 'CHANGE-CONTACT-TITLE': {
            const contactList = state.find(c => c.id === action.id);
            if (contactList) {
                contactList.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-CONTACT-TEL': {
            const contactList = state.find(c => c.id === action.id);
            if (contactList) {
                contactList.tel = action.tel;
            }
            return [...state]
        }
        case 'SET-CONTACT-LIST':
            const contactList = action.contactList.map(c => ({...c}))
            return [...contactList]
        default:
            return state;
    }
}
export const setContactAC = (contactList: ContactListType): SetContactsActionType => {
    return {type: 'SET-CONTACT-LIST', contactList}
}
export const removeContactAC = (id: string): RemoveContactsActionType => {
    return {type: 'REMOVE-CONTACT', id}
}
export const addContactAC = (newContact: ContactType): AddContactsActionType => {
    return {type: 'ADD-CONTACT', newContact}
}
export const changeContactsTitleAC = (id: string, title: string): ChangeContactsTitleActionType => {
    return {type: 'CHANGE-CONTACT-TITLE', id, title}
}
export const changeContactsTelAC = (id: string, tel: string): ChangeContactsTelActionType => {
    return {type: 'CHANGE-CONTACT-TEL', id, tel}
}

//Thunk
export type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>
export type ThunkDispatchType = ThunkDispatch<AppRootStateType, {}, ActionsType>

export const setContactList = (): ThunkType => (dispatch: ThunkDispatchType) => {
    api.getContactsList()
        .then(res => {
            dispatch(setContactAC(res))
        });
}

export const addNewContact = (title: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.createContact(title)
        .then(res => {
            let newContact = res;
            // @ts-ignore
            dispatch(addContactAC(newContact))
        });
}

export const deleteContact = (contactId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.deleteContact(contactId)
        .then(res => {
            dispatch(removeContactAC(contactId));
        });
}

export const updateContactTitle = (contactId: string, title: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.updateContactTitle(contactId, title)
        .then(res => {
            dispatch(changeContactsTitleAC(contactId, title));
        });
}
export const updateContactTel = (tel: string, contactId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.updateContactTel(tel, contactId)
        .then(res => {
            dispatch(changeContactsTelAC(tel, contactId));
        });
}



