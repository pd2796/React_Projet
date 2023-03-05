

import './App.css';
import Header from './component/Header';
import Movie from './component/Movie';
import Movies from './movie.json';

 
function App() {
  let login = true;
 
 return (
  
    <div className="App">
      {
    login == false ? <Header></Header> : <div>mat dekh na</div>
  }
     <Header>  </Header>
     <div className='main'>
      {
      Movies.map((element,index)=>{
        return(
         <Movie 
         key={index}
         title={element.Title} 
         year={element.Year}
         img={element.Poster}
         ></Movie>)
      })}
     
      
     </div>
    </div>
  );
}

export default App;
