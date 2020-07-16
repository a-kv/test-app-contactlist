import {ContactListType} from "../components/MainPage/ContactList/ContactList";
import {contactsReducer, removeContactAC, addContactAC, changeContactsTitleAC, changeContactsTelAC} from "./reducer";

let startState: ContactListType = [];
beforeEach(() => {
    startState = [
        {id: "1", title: "Marina", tel: "345678"},
        {id: "2", title: "Oleg", tel: "345678"},
    ]
})

test('correct contact should be removed', () => {
    const action = removeContactAC("2");
    const endState = contactsReducer(startState, action)
    expect(endState.length).toBe(1);
});

test('correct added contact', () => {
    const action = addContactAC( {id: "3", title: "Solo", tel: "4634646"} );
    const endState = contactsReducer(startState, action)
    expect(endState.length).toBe(3);
});
test('correct changed title contact', () => {
    const action = changeContactsTitleAC( "2", "Lolita");
    const endState = contactsReducer(startState, action)
    expect(endState.length).toBe(2);
    expect(endState[1].title).toBe("Lolita");
    expect(endState[1].tel).toBe("345678");
});
test('correct changed tel contact', () => {
    const action = changeContactsTelAC( "1", "11111");
    const endState = contactsReducer(startState, action)
    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe("Marina");
    expect(endState[0].tel).toBe("11111");
});