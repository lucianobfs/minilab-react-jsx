const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
  ];


function ToDoList() {
    return (
        <ul className="list-group">
            {tasks.map((item) => {
                return (
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}


export default ToDoList