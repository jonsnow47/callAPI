// main file 

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = ()=>{
  const [num, setNum]= useState();
  const [name, setName]= useState();
  const [move, setMove]= useState();
  const [move1, setMove1]= useState();
  const [move2, setMove2]= useState();
  const [move3, setMove3]= useState();
  const [exp, setExp]= useState();
  const [weight, setWeight]= useState();
  const [ability, setAbility]= useState();
  const [ability1, setAbility1]= useState();

  useEffect(()=> {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setName(res.data.name);
      setMove(res.data.moves.length);
      setMove1(res.data.moves[0].move.name);
      setMove2(res.data.moves[1].move.name);
      setMove3(res.data.moves[2].move.name);
      setAbility(res.data.abilities[0].ability.name);
      setAbility1(res.data.abilities[1].ability.name);
      setWeight(res.data.weight);
      setExp(res.data.base_experience);
    }
    getData();
  });
  
  return (
   
    <>
      <h1> Pokemon Go</h1>

      <div className='input'> Select a number from 1 to 25 : 
       <select value={event} onChange={(event)=> {
      setNum(event.target.value);
      }}>
        <option value="0"></option>
        <option value="1">1</option>
        <option value="2">2</option>            
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
      </select>
      </div>
      <div className='container'>
       <h3> You chose : <span >{num} </span></h3>
       <h3> My name is : <span>{name} </span> </h3>
       <h3> And I weigh : <span>{weight} kilograms</span> </h3>
       <h3> My base experience is : <span>{exp} </span> </h3>
       <h3> My abilities are : <span>{ability} , {ability1} </span> </h3>
       <h3> I have total moves numbering : <span>{move} </span> </h3> <h3> and some of them are : <span>{move1}, {move2}, {move3}</span> </h3>
        </div>
       <br></br>  <br></br>
      Thanks for Using Poke fan :)
     
    </>
  );
};

export default App;
