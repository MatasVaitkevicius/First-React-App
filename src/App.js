import React, { Component } from 'react';
import logo from './logo.svg';
import HomeComponent from './components/HomeComponent'
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isTrue: true,
      people: [],
      person: '',

    };

    this.onChangeTrue = this.onChangeTrue.bind(this)
    this.addPeople = this.addPeople.bind(this)

  }

  addPeople(){
    const people = [...this.state.people]

    if (this.state.person) {
      people.push(this.state.person)
      this.setState({people, person: ""})
    }
  }

  onChangeInput(event){

    this.setState({person: event.target.value});
  }


  onChangeTrue(){
    this.setState({isTrue: !this.state.isTrue});
    console.log("Labas");
    console.log(this.state);
  }


  render() {
    const {people, person, isTrue} = this.state;

    return (
      <div className="App">

        <Input onChange={(event) => this.onChangeInput(event)} value={person}/>
        <Button variant="contained" color="secondary"
                onClick={() => this.addPeople()}
        >
          Add People
        </Button>
        <HomeComponent
          data="Nezinau duomenys"
          isTrue={this.state.isTrue}
          onChangeTrue={this.onChangeTrue}
        />
        {people.length !== 0 ? (
           <Table>
           <TableHead>
             <TableRow>
               <TableCell>Name</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
               {people.map((p, i) => (
                 <TableRow key={i}>
                   <TableCell component="th" scope="row">{p}</TableCell>
                 </TableRow>
               ))}
           </TableBody>
         </Table>      
        ) : (
          <h2>Empty</h2>
        )        
        }
        
      </div>
    );
  }
}

export default App;
