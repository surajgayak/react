import React from "react";
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: null,
            loading: true,
            // email: this.props.email
        }
        console.log("I am first Call")
    }

    componentDidMount = () => {
        // third call 
        console.log("I am third Call")
        // Initial Network call
        setTimeout(()=>{
            this.setState({
                name: "Sandesh Bhattarai",
                loading: false
            })
        }, 5000)
    }

    componentDidUpdate = () => {
        // this will always executes whenever the render calls from second time 
    }

    componentWillUnmount = () => {
        // I will always executes when the component unmounts 
    }

    // this.setState()
    render = () => {
        console.log("I am second Call")
        return (
            <>
                {
                    this.state.loading ? <p>Loading..</p> : <h1>{this.state.name}</h1>
                }
                <p>Hello world</p>

                <p>NameProps: {this.props.name}</p>
                <p>EmailProps: {this.props.email}</p>
            </>
        )
    }
}
// const App = () => {
//     return (
//         <div>
//             <h1>Hello world</h1>
//             <br/>
//             <p>Lorem Ipusum</p>
//         </div>
//     );
// }


export default App;