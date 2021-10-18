import {useState} from 'react'
import BlogList from './BlogList';

const Home = () => {
    // let name='MLSC';
    // const clickButton = () =>{
    //     name='MLSC DB';
    //     console.log(name);
    // }
    // const [name,setName]=useState('MLSC');  //this useState is a hook
    // const [place,setPlace]=useState('Patiala');
    // const clickButton = () =>{
    //     setName('MLSC DB');
    //     setPlace('Derabassi');
    // }
    const [blogs,setBlogs]=useState([
        {title:"react",body:"this",author:"mario",id:1},
        {title:"java",body:"means",author:"luigi",id:2},
        {title:"script",body:"nothing",author:"mario",id:3}
    ]);

    const handleDelete = (id) =>{
        const newBlogs=blogs.filter((blog)=>blog.id !== id)
        setBlogs(newBlogs);
    }

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title="Mario's blogs!" handleDelete={handleDelete}/>
        </div>
    );
}
 //props is used for transferring data from parent component to child component
 //we can obtain the data transferred to a child with 'props' on the child which has all the data attached
export default Home;