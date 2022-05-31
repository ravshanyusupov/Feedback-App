import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data";
import FeedBackStats from "./components/FeedBackStats";
import Form from "./components/Form";
import {v4} from 'uuid'

function App() {
    const [feedback, setFeedback] = React.useState(FeedbackData)
    const [edit, setEdit] = useState({
        item: {},
        edit: false
    })
    const remove = (id) =>{
        if(window.confirm('Are you sure to delete the feedback')){
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    const addFeedback = (value) =>{
        value.id = v4()
        setFeedback([value, ...feedback])
     }
     const editItem = (item) => {
        setEdit({
            item,
            edit: true
        })
     }
     const updateFeedback = (id, update) => {
         setFeedback(
             feedback.map(item => item.id === id ? {...item, ...update} : item)
         )
         setEdit({
             edit: false
         })
     }
  return (
      <>
          <div className="App">
              <Header/>
              <Form addFeedback={addFeedback} edit={edit} update={updateFeedback}/>
              <FeedBackStats FeedbackData={feedback} />
              <FeedbackList FeedbackData={feedback} remove={remove} edit={editItem}/>
          </div>
          </>
  );
}

export default App;
