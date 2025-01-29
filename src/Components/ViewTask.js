import { useParams } from "react-router-dom/cjs/react-router-dom";
import FetchData from "./FetchData";

const ViewTasks = () => {
    const { id } = useParams()
    const { List: blogs } = FetchData('http://localhost:4000/blogs/' + id);
    return (
        <div>
            {blogs && (
                <article>
                    <h2>{blogs.date}</h2>
                    <p>{blogs.list}</p>
                </article>
            )}
        </div>
    );
}

export default ViewTasks;