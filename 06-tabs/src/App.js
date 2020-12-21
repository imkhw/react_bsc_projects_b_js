import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const url = 'https://course-api.com/react-tabs-project'
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const { company, dates, duties, title } = jobs[value]
  return (
    <div className="App">
      Experience
      <hr />
      {
        jobs.map((job, index) => {
          return (
            <button 
              key={index} 
              className={index === value && 'active-btn'} 
              onClick={() => {
              setValue(index)
            }}>{job.company}</button>
          )
        })
      }
      <div>{title}</div>
      <div>{company}</div>
      <div>{dates}</div>
      <div>
        {
          duties.map((duty, index) => {
            return (
              <div key={index}>{duty}</div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
