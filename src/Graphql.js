import React from "react";
// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useQuery } from "react-query";
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
 
export default function Graphql(){
//   const GET_USERS = gql`
//   query {
//      hello
//      currentDate
//      queryUsers{
//         firstname,lastname,email
//      }
//   }
// `;
const std=gql`
 mutation createStudent($name:String!, $mobile: String!){
          createStudent(name:$name, mobile: $mobile)
          
        }
          `;
const [createStudent,{ loading,error, data }] = useMutation(std);
// const [getDate,{ called,loading, data }] = useLazyQuery(GET_USERS);
// const { loading, error,data } = useMutation(GET_USERS,{
//   variables:{name:'surithika',email:'sur@gmail.com'}
// });
// console.log(data);
   const handle=()=>{
    createStudent({variables:{name:'surithika',mobile:"19823912398"}})
    // console.log(data.createStudent)
   }

    return(
        <>
         
         {/* <h1 id="text">{data && data.hello}</h1>
         <h1 id="text">{data && data.currentDate}</h1> */}
         <button onClick={handle}>create Student</button>
         {/* {
          data && data.queryUsers.map((obj)=>{
            return(
              <div>
                <h1>{obj.firstname}</h1>
                <h2>{obj.lastname}</h2>
                <h3>{obj.email}</h3><br></br>
              </div>
            )
          })
         } */}
         {/* {
          data && data.createStudent? <h1>Success</h1>: <h1>Failed</h1>
         } */}
         
        </>
    )
}