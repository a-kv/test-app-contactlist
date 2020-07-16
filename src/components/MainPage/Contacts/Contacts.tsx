import React, {useEffect, useState} from 'react';
import {ContactType} from '../ContactList/ContactList';
import Contact from "./Contact/Contact";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import SearchIcon from '@material-ui/icons/Search';

type PropsType = {
    contactList: Array<ContactType>
    removeContact: (contactId: string) => void
    changeTitle: (contactId: string, title: string) => void
    changeTel: (contactId: string, tel: string) => void
}


function Contacts(props: PropsType) {
    const [search, setSearch] = useState("");
    const contactList = useSelector<AppRootStateType, Array<ContactType>>(state => state.contactList)
    const [filtered, setFiltered] = useState(contactList);
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = () => {
        setIsHidden(!isHidden);
    }
    useEffect(() => {
        setFiltered(contactList.filter(c =>
            c.title.toLowerCase().includes(search.toLowerCase())
        ))
    }, [search, contactList]);

    return <div>
        {!isHidden
            ? <input
                onDoubleClick={handleClick}
                type="text"
                placeholder="Search contact..."
                onChange={e => setSearch(e.target.value)}
            />
            : <SearchIcon onClick={handleClick}/>}

        {filtered.map(c => {
            const onRemoveHandler = () => {
                props.removeContact(c.id)
            }
            const onChangeTitle = (title: string) => {
                props.changeTitle(c.id, title)
            }
            const onChangeTel = (tel: string) => {
                props.changeTel(c.id, tel)
            }
            return <>
                <Contact key={c.id} onRemoveHandler={onRemoveHandler} onChangeTitle={onChangeTitle}
                         onChangeTel={onChangeTel}
                         contact={c}/>
            </>
        })
        }
    </div>
}

export default Contacts;

