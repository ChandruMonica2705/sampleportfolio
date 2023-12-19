import React from 'react'

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
            return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{e.title}</a>
              </h4>
              <p className="card-text">{e.description}</p>
            </div>
          </div>
        </div>
          })
        }
        
      </div>
      </div>
  </>
}

export default App
