import { Link } from "react-router-dom/cjs/react-router-dom";

const Tasks = ({ blogs }) => {
    return (
        <div className="Tasks">
            {blogs.map((lists) => (
                <div className="view-tasks" key={lists.id}>
                    {
                        <Link to={`ViewTask/${lists.id}`}>
                            <h2>{lists.date}</h2>
                            <p>{lists.list}</p>
                        </Link>
                    }
                </div>
            ))
            }
        </div>
    );
}

export default Tasks;