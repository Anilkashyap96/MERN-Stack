import React from 'react'
class About extends React.Component
{
    routeHome(props){
        props.history.push('/')
    }
    render(){
        return(
            <div>
                    <p>I am in about page</p>
                    <button onClick={()=>this.routeHome(this.props)}>Route to Home</button>
            </div>
        )
    }
}

export default About