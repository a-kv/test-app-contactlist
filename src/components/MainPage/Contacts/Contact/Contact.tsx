import React from 'react';
import {IconButton} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PhoneIcon from '@material-ui/icons/Phone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {ContactType} from '../../ContactList/ContactList';
import EditableSpan from "../../../common/EditableSpan";


type PropsType = {
    onRemoveHandler: () => void
    onChangeTitle: (title: string) => void
    onChangeTel: (tel: string) => void
    contact: ContactType
    key: string

}

function Contact(props: PropsType) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <ListItem key={props.contact.id}>
                <EditableSpan value={props.contact.title} onChange={props.onChangeTitle}/>
                {open ? <ExpandLess onClick={handleClick}/> : <ExpandMore onClick={handleClick}/>}
                <IconButton onClick={props.onRemoveHandler}><HighlightOffIcon color={"error"}/></IconButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItem>
                    <ListItemIcon>
                        <PhoneIcon/>
                    </ListItemIcon>
                    <EditableSpan value={props.contact.tel} onChange={props.onChangeTel}/>
                </ListItem>
            </Collapse>

        </div>
    )
}

export default Contact;
