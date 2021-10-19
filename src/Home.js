import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');

    return (
    <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} /> }
    </div>
    );
}

//props is used for transferring data from parent component to child component
//we can obtain the data transferred to a child with 'props' on the child which has all the data attached
export default Home;