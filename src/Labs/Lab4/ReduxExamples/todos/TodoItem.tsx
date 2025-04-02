
// import { Button, ListGroup, } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { deleteTodo, setTodo } from "./todosReducer";
// export default function TodoItem({ todo }: {
//     todo: {id: string; title: string };

//  }) {
//   const dispatch = useDispatch();
//   return (
//     <ListGroup.Item key={todo.id}>
//       <Button onClick={() => dispatch(deleteTodo(todo.id))}
//               id="wd-delete-todo-click"> Delete </Button>
//       <Button onClick={() => dispatch(setTodo(todo))}
//               id="wd-set-todo-click"> Edit </Button>
//       {todo.title}
//     </ListGroup.Item>
// );}





import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
        todo: { id: string; title: string };
      }) {
    const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <div>
        <Button
          variant="primary"
          className="me-2 md-2 fw-bold"
          onClick={() => dispatch(setTodo(todo))}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          className="fw-bold"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
}
