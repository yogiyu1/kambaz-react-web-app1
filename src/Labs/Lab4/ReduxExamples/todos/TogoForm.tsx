// import { Button, ListGroup, FormControl} from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, updateTodo, setTodo } from "./todosReducer";
// export default function TodoForm(
//     ) {
//       const { todo } = useSelector((state: any) => state.todosReducer);
//       const dispatch = useDispatch();
//       return (
//         <ListGroup.Item>
//             <Button onClick={() => dispatch(addTodo(todo))}
//                   id="wd-add-todo-click"> Add </Button>
//             <Button
//                 variant="warning"
//                 className="fw-bold text-white me-2"
//                 onClick={() => dispatch(updateTodo(todo))}
//                     id="wd-update-todo-click"
//                 >
//                     Update
//             </Button>
//             <FormControl
//                 defaultValue={todo.title}
//                 onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
//         </ListGroup.Item>
//     );}
    

import { ListGroup, FormControl, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

 export default function TodoForm(){
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        placeholder="Enter a todo..."
        className="border rounded-start me-5"
      />
      <Button
        variant="warning"
        className="fw-bold text-white me-2"
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
      >
        Update
      </Button>
      <Button
        variant="success"
        className="fw-bold "
        onClick={() =>  dispatch(addTodo(todo))}
        id="wd-add-todo-click"
      >
        Add
      </Button>
    </ListGroup.Item>
  );
}
