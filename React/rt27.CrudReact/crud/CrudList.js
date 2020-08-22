import React from 'react'

import CrudListItem from './CrudListItem.js'

class CrudList extends React.Component {
    constructor(props){
        super(props)
    }
    // doDel(id){
    //     //this.props.doDel(id);
    // }
    // doUp(id){
    //     this.props.doUp(id);
    // }
    // doDown(id){
    //     //this.props.doDown(id);
    // }
    // doEdit(id){
    //     //this.props.doEdit(id);
    // }
    render() {
        const rows = this.props.list;
        
        /*  { items.map( function(value,key){ return ( <li key={key}> {value} </li> ) } ) }  */
        const trs = rows.map( (man,index)=>{
            /* man = {id: 1, name:"슈퍼맨", power: 100 }, */
            return ( 
                <CrudListItem  
                    key={man.id} 
                    man={man} 
                    {...this.props}
                >
                </CrudListItem>
            ) 
        });
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }
}

export default CrudList;