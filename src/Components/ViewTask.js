import { useParams } from "react-router-dom/cjs/react-router-dom";
import FetchData from "./FetchData";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useEffect } from "react";

const ViewTasks = () => {
    const { id } = useParams();
    const { data: tasks } = FetchData("http://localhost:4000/tasks/" + id);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:4000/tasks/" + id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const handleDelete = (e) => {
        e.preventDefault();

        axios.delete("http://localhost:4000/tasks/" + id)
            .then((response) => {
                alert(`Task deleted successfully`);
                history.push("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            {tasks && (
                <Card className="task-box">
                    <h2 className="date">Date: {tasks.date}</h2>
                    <h2 className="task-time">Time: {tasks.time}</h2>
                    <h3 className="task-body">Task: {tasks.task}</h3>

                    <div className="d-flex">
                        <Button onClick={handleDelete} variant="danger" className="d-block w-75">Delete</Button>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default ViewTasks;