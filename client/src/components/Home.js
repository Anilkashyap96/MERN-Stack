import React from 'react'

class Home extends React.Component{
    state={
        text: '',
        mywishes: [{_id:1, wish: 'loading...'}]
    }
    componentDidMount(){
        fetch('/data').then(res => res.json())
        .then(res2 => {
            console.log(res2)
            this.setState({
                mywishes: res2
            })
        })
    }
    handleSubmit(e){
        e.preventDefault();
        var data = new URLSearchParams();
        for(let pair of new FormData(e.target)){
            data.append(pair[0], pair[1]);
        }
        fetch('/sent', {
            method: 'POST',
            body: data
        }).then(res => res.json())
        .then(res2 => {
            console.log(res2)
            this.setState({
                mywishes:[...this.state.mywishes, res2]
            })
        })
    }
    handleDelete(id){
        console.log(id)
        fetch('/remove/'+id,{method: "delete"})
        .then(res =>res.json())
        .then(res2 => {
            console.log(res2);
            const newWishes = this.state.mywishes.filter(item=>{
                return item._id !== res2._id
            })
            this.setState({
                mywishes: newWishes
            })
        })
    }
    render(){
        const list = this.state.mywishes.map(item=>{
            return <li className="list-group-item" 
                        key={item._id} 
                        onClick={(e)=>this.handleDelete(item._id)}>
                        {item.wish}
                    </li>
        })
        return(
            <div className="App">
                <p>I am in home page</p>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type="text" 
                        name="item" 
                        value={this.state.text}
                        onChange={(e)=>this.setState({text: e.target.value})}    
                    />
                    <button type="submit">Submit</button>
                </form>
                <ul className="list-group">
                 {list}
                </ul>
            </div>
        )
    }
}

export default Home