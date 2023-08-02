const Task = ({ data, handleEdit, handleDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div
        className={`task-title mr-2 ${data.completed ? "completed-task" : ""}`}
        title={[data.title, data.description].filter(Boolean).join(': ')}
      >
        {data.title}
      </div>
      <div className="task-buttons">
        <button
          className="btn btn-secondary mr-2"
          onClick={() => handleEdit(data)}
        >
          Edit
        </button>{' '}
        <button className="btn btn-danger" onClick={() => handleDelete(data)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
