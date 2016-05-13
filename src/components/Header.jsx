import React, {Component} from 'react';


export default class Header extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            menu: ['Inicio', 'Dashboard', 'Users'],
            user : {}

        }
    }

    componentDidMount(){
     this.setState({
            user: this.props.user,
            pagina: this.props.pagina
        })
    }
    
    componentWillUnmount(){
    }

    render() {        
        const {user, pagina}= this.state ;        

        return (
            <header>
                <h1>  {pagina} - Taller Talentec</h1>

                <div> Hola {user.name} {user.rlast_name}</div>

                <ul>

                    {this.state.menu.map((item, i) => {
                        return (<li key={i}>{item}</li>);
                    }) }
                </ul>

            </header>
        )
    }
}