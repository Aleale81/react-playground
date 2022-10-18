import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import logoImage from './images/logo.png'
import User from './components/User';
import Movie from './components/Movie';


function App() {
  const theId = "main-container"
  const title = "Hello"
  const user = {
    userName: "Gabriel",
    age: 18
  }
  const capitalizeFirstLetter = (str) => { //gabriel
    return str[0].toUpperCase() + str.slice(1); //Gabriel
  }
  const renderSubtitle = () => {
    return (<><h2>This is a subtitle</h2></>) 
  }
  const moviesArray = [
    {
      title: 'the godfather',
      rating: 9,
    },
    {
      title: 'Pulp Fiction',
      rating: 8,
    },
    {
      title: 'Coco',
      rating: 9,
    },
  ];

  return (
    <div  id={theId} className="App">
    <Header/> 
       <img src={logoImage} alt="logo" />
       <h1>{title}</h1>
       {renderSubtitle()}
       <p>react playground</p>
       <p>Name: {capitalizeFirstLetter(user.userName)}</p>
       <p>Age: {user.age} </p>
       <hr/>
       <Movie details= {moviesArray[0]}/>
       <Movie details= {moviesArray[1]}/>
       <Movie details= {moviesArray[2]}/>
       <hr/>
       <User name='Martin' age={28} occupation='student'/>
       <User name='Luis' age={38} occupation='teacher'/>
       <User name='Alessandra' age={41} occupation='CEO'/>
       <Footer>
        <p>lorem ipsum one</p>
        <p>lorem ipsum two</p>
       </Footer>
    </div>
  );
}

export default App;
