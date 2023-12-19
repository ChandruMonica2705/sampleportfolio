import React from 'react'
import Card from './Components/Card'

function App() {
  let data=[{
    title:"Project One",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismododio, gravida pellentesque urna varius vitae."},
    {
      title:"Project Two",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismododio, gravida pellentesque urna varius vitae."},
      {
        title:"Project Three",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismododio, gravida pellentesque urna varius vitae."},
        {
          title:"Project Four",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismododio, gravida pellentesque urna varius vitae."},
          {
            title:"Project Five",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismododio, gravida pellentesque urna varius vitae."},
            {
              title:"Project Six",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismododio, gravida pellentesque urna varius vitae."},
  ]
  return <>
  <h1>Welcome to React day2</h1> 
    {/* <!-- Page Content --> */}
    <div className="container">
    {/* <!-- Page Heading --> */}
      <h1 className="my-4">Page Heading
        <small>Secondary Text</small>
      </h1>
    
      <div className="row">
        {
          data.map((e,i)=>{
            return <Card cardData={e} key={i}/>
          })
        }
        
      </div>
      </div>
  </>
}

export default App
