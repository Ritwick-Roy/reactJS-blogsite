const Home = () => {
    const buttonClick = (e) =>{
        console.log("Clicked!",e);
    };
    const buttonClickAgain =(name,e)=>{
        console.log('Clicked again! '+name,e.target);
    };
    return (
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={buttonClick}>CLICK ME!</button>
            <button onClick={(e)=>buttonClickAgain('mario',e)}>CLICK ME!</button> 
        </div>
    );
    //we called an anonymous function above because it would have called the function if we used parentheses s
}
 
export default Home;