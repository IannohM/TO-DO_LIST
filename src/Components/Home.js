import FetchData from "./FetchData";

const Home = () => {
    const {Lists:blogs} = FetchData('http:localhost:4000/blogs')
    return (
        <div>
            <p className="hello-text me-4 mt-3 text-end text-primary">Hello Ian👋, Welcome😊</p>
        </div>
    );
}

export default Home;