import { Routes,Route, Link, useNavigate } from "react-router-dom";
import About  from "./About";
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Missing from './Missing'
import Nav from "./Nav"
import NewPost from './NewPost'
import PostPage from './PostPage'
import { DataProvider } from "./context/DataContext";
import EditPost from "./EditPost";
// import DataContext from "./context/DataContext";

function App() {

    
    return (
      <div className="App">
        <DataProvider>
        <Header title="Metti Paya" />
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
{/*  post starts*/} 
            <Route path="post">
            
            <Route index element = {<NewPost/>}/>
            
            <Route path=":id" element={<PostPage/>}/>
            </Route>
{/*  post ends*/}
            
            <Route path="/edit/:id" element = {<EditPost/>}/>
            
            <Route path="/about" element = {<About/>} />
            <Route path="*" element = {<Missing/>}/>
        </Routes> 
        <Footer/> 
        </DataProvider>
    </div>
  );
}

export default App;