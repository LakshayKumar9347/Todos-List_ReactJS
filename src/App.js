import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { TodoItem } from './MyComponents/TodoItem';

function App() {
  let myvariable = "Hello Boss, At Your Service";
  console.log(myvariable);
  // Creating a object name todos
  let todoList = [
    {
      sno: 1,
      title: "Go To market",
      desc: "You need to go to the market to get this job done "
    },
    {
      sno: 2,
      title: "Go To Mall",
      desc: "You need to go to the Mall to get this job done "
    },
    {
      sno: 3,
      title: "Go To Disco",
      desc: "You need to go to the Disco to get this job done "
    },
  ]
  return (
    <>
      <Header title="TodosList" searchBar={false} />
      <Todos todos={todoList} />
      <Footer />
    </>
  );
}
export default App;
