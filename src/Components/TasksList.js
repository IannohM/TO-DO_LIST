import { Link } from "react-router-dom/cjs/react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Tasks = ({ tasks }) => {
    const [done, setDone] = useState("Incomplete")
    const markAsDone = () => {
        setDone("Completed")
    }

    return (
        <div className="tasks-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-container card mb-3">
                    <div className="task-actions">
                        <Link to={`/ViewTask/${task.id}`} className="view-task-link">
                            <div className="task-content card-body">
                                <h4 className="card-title">Date: {task.date}</h4>
                                <h5 className="card-subtitle mb-2 text-muted">Time: {task.time}</h5>
                                <p className="card-text">Task: {task.task}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="d-flex p-3">
                        <Link to={`/ViewTask/${task.id}`} className="edit-btn">Edit</Link>
                        <Button onClick={markAsDone} variant="success" className="mark-btn">Mark as Done &#10004;</Button>
                    </div>
                    <div className="task-status p-2">
                        Status: <span className={done === "Completed" ? "text-success" : "text-danger"}>{done}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tasks;