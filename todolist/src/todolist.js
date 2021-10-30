
import React from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';

const todos=["gotogym","do laundry","food shopping","do homework"];

const ToDo = props=> 
<li>{props.todo}</li>
const ToDoList = () => 
<ul>
{
    todos.map(todo => (
       <ToDo todo={todo} key={todo}/>
    ))
}
</ul>

export default ToDoList;
