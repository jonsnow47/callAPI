// main file 

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = ()=>{
  const [num, setNum]= useState();
  const [name, setName]= useState();
  const [move, setMove]= useState();

  useEffect(()=> {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }
    getData();
  });
  
  return (
   
    <>
       <h3> You chose this : <span style={{border:'solid 2px green'}}>{num} </span></h3>
       <h3> My name is : <span style={{border:'solid 2px blue'}}>{name} </span> </h3>
       <h3> I have total moves numbering : <span style={{border:'solid 2px orange'}}>{move} </span> </h3>
       
      <select value={event} onChange={(event)=> {
      setNum(event.target.value);
      }}>
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
    </>
  );
};

export default App;
