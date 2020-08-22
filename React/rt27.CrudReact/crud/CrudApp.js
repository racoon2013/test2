import React from 'react'

import CrudInput from './CrudInput.js';
import CrudList from './CrudList.js';

class CrudApp extends React.Component {
    state ={
        user:{
            id:0,
            name:'',
            power:0,
        },
        list:[
            {id: 1, name:"슈퍼맨", power: 100 },
            {id: 2, name:"아쿠아맨", power: 300 },
            {id: 3, name:"스파이더맨", power: 500 },
            {id: 4, name:"배트맨", power: 30 },
        ]
    }
    constructor(props){
        super(props)

        // this bind
        this.insert = this.insert.bind(this);
        this.doUp = this.doUp.bind(this);
        this.doDown = this.doDown.bind(this);
        this.doDel = this.doDel.bind(this);
        this.doEdit = this.doEdit.bind(this);
    }
    insert(man){
        // man를 this.state.list 에 추가하기
        /* 
        max(id)를 찾는 방법 
        1. reduce() 메서드 사용.
            var maxObj = array.reduce( function(prev, next){
                return prev.id > next.id ? prev:  next ; // 최대값 id가 있는 객체 
                return prev.id < next.id ? prev:  next ; // 최소값 id가 있는 객체 
            });
            var newId  = maxObj.id + 1;
        2. map()과 Math.max()를 사용하는 방법
            var arrIds = array.map( function(el){
                return el.id;
            });
            var newId  = Math.max(...arrIds) + 1;                
        */

        var maxObj = this.state.list.reduce( function(prev, next){
            return prev.id > next.id ? prev:  next ;
        });
        //console.log( maxObj);

        if( maxObj )  {
            // man 객체 id 프러퍼티와 값 추가
            // man = {name:?, power: ? }
            man.id = maxObj.id + 1; // {id:?, name:?, power: ? }
        }
        else {
            man.id = 1;
        }  
        //console.log( man ); // man = {id:man.id, name:man.name, power:man.power}
        
        // 신규 리스트 생성 :  push() 나 스프레드 연산자 활용해서
        const listCopy = [ ...this.state.list, man];
        this.setState({
            list: listCopy,
            user: { id:0, name:'', power:0 }
        })
    }
    doUp(id){            
        //console.log( id);
        
        //100씩 증가  
        var mans = this.state.list.map((man,index)=>{
            if( man.id === id ) {
                man.power = Number(man.power) + 100;
            }
            return  man;
        })
        //console.log( mans ) // mans === 배열, man=== 객체 

        this.setState({
            list: mans
        })
    }
    doDown(id){     
        //console.log( id)

        //50씩 감소           
        var mans = this.state.list.map( (man,index)=>{
            if( man.id === id ) {
                man.power = Number(man.power) - 50;
            }
            return  man;
        })
        //console.log( mans ) // mans === 배열, man=== 객체 

        this.setState({
            list: mans
        })

    }
    doDel(id){
        //배열에서 삭제
        let r = window.confirm("정말로 삭제 하시겠습니까?");
        if( r ) {
            let listCopy = this.state.list.filter( (man,index)=>{
                return man.id !== id ;
            })

            this.setState({
                list: listCopy
            })
        }
    }   
    doEdit(paramMan){
        //선택한 사람 정보를 input에 보여주기
        let listCopy = this.state.list.map( (man,index)=>{
            if(man.id === paramMan.id ){
                return paramMan;
            }
            else {
                return man
            }
        })

        this.setState({
            list: listCopy
        })
    }     
    render() {
        return (
        <div>
            <CrudInput 
                {...this.state} 
                insert={this.insert}
            >
            </CrudInput>
            <hr/>
            <CrudList 
                {...this.state} 
                doUp={this.doUp} 
                doDown={this.doDown} 
                doEdit={this.doEdit} 
                doDel={this.doDel}
            >
            </CrudList>
        </div>
        )
    }
}  

export default CrudApp;