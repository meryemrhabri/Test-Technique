import React, { Component } from 'react';
import myData from './file.json';
import {Button ,ControlLabel,Grid,Col,Row,FormControl,Glyphicon} from 'react-bootstrap';

/*import writeFileP from 'write-file-p';*/
class List extends Component {
    
    constructor() {
      super();
      /*lier des boutons avec leur fonction*/
      this.setEditState = this.setEditState.bind(this);
      this.setAddState = this.setAddState.bind(this);
      this.setDeleteState = this.setDeleteState.bind(this);
      this.setAddStateValue=this.setAddStateValue.bind(this)
      this.state = { data:myData,key:'',values:''}
   }
   /*Ajouter une nouvelle clé */
    setAddState(e) {
    let myArray = this.state.data;
    myArray[this.state.key]=this.state.values;
    this.setState({data: myArray})
   } 
   /*Supprimer une clé */
   setDeleteState(e) {

    var clé=e.currentTarget.className;
    clé=clé.split(" ");
    var cléprimaire=clé[0]/* récuperer la clé de l'element a supprimer*/

    let myArray=this.state.data;
    delete myArray[cléprimaire]
    this.setState({data: myArray})
    /* actuliser DOM à nouveau*/
    this.forceUpdate();
   }
   /* Modifier les valeurs de json*/
   setEditState(e)
   {
    var clé=e.currentTarget.className;
    clé=clé.split(" ");
    var cléprimaire=clé[0] /* récuperer la clé de l'element a modifier*/
    let myArray =this.state.data;
    myArray[cléprimaire]=e.target.value;
    console.log(myArray)
    this.setState({data: myArray})
   }
   /*Récupérer la clé et la valeur de l'element a ajouter*/
   setAddStateValue(e)
   {
      this.setState({key:"Key"+e.target.value,values: e.target.value})
   }

   render() 
{
   var cells = [];

    for (var j=0;j<Object.keys(this.state.data).length ;j++) {
      cells.push(
         <tr>
            <td>
              <ControlLabel bsSize="small">{Object.keys(this.state.data)[j]} </ControlLabel>
            </td>
            <td>
               <FormControl type="text" className={Object.keys(this.state.data)[j]} value={this.state.data[Object.keys(this.state.data)[j]]} onChange={this.setEditState}/> 
            </td>

            <td>
               <Button className= {Object.keys(this.state.data)[j]+" Button"} bsStyle="danger" onClick={this.setDeleteState}>Supprimer <Glyphicon glyph="glyphicon glyphicon-remove" /></Button>

            </td>

         </tr>);
    }
   
      return (
            <Grid>
               <hr/>
               <Row className="show-grid">
                  <Col xs={4} md={4}>
                      <ControlLabel>La liste des clés</ControlLabel>
                  </Col>

                  <Col xs={4} md={8}>
                     <table>
                        <tbody>
                           {cells}
                        </tbody>
                     </table>
                  </Col>
                  <Col xs={4} md={4}>

                  </Col>
               </Row>

               <hr/>
               <Row>
                  <Col xs={4} md={4}>
                       <ControlLabel>Ajouter une clé Json </ControlLabel>
                  </Col>

                  <Col xs={4} md={4}>
                      <FormControl type="text" className= "value" onKeyUp={this.setAddStateValue}/>
                  </Col>

                  <Col xs={4} md={4}>
                      <Button bsStyle="success" onClick={this.setAddState}>Ajouter la nouvelle clé</Button>
                  </Col>

               </Row>
            </Grid>
      );
   }
}

export default List;