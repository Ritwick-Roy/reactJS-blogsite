import { useState } from "react"; 
import { useHistory } from "react-router-dom"; 

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true);
        const blog={ title, body, author};
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            setIsPending(false);
            console.log('blog added');
            // history.go(-1);       //go back by one page (like the arrows denote at the top)
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={ title }
                    onChange={ (e) => {setTitle(e.target.value)} }
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={ body }
                    onChange={ (e) => {setBody(e.target.value)} }
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={ author }
                    onChange={ (e) => {setAuthor(e.target.value)} }
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
            <p>Title: { title }</p>
            <p>Body: { body }</p>
            <p>Author: { author }</p>
        </div>
    );
}
 
export default Create;