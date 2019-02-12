import React from 'react';
var students = [
    {name:"Adeyinka", age: 23, hobby: "coding"},
    {name:"Olaoluwa", age: 20, hobby: "Playing games"},
    {name:"Tobiloba", age: 27, hobby: "dancing"},
    {name:"Mayowa", age: 26, hobby: "Reading"},
    {name:"Sandra", age: 30, hobby: "Cooking"}
];
class Solution extends React.Component{
    render(){
      return <div>
          {
              students.map(function(person){
              return <h1>Name: {person.name}. Age: {person.age}. Hobby:{person.hobby}</h1>
          })
          }
      </div>
        }
    }
    export default Solution;