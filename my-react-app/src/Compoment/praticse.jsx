//creat a compoment 
//and creat varible for recevation in one veriable 
import {useState}from'react'

// now create function in react 
 function Praticse(){
    const[Info,setInfo]= useState({
       name:'',
       message:'',
       numberPeople:'',
       Date:'',
       phoneNumber:''

    })

       // handle imput from user 
      const handleChange = (e) => {
           setInfo({
            ...Info,
            [e.target.name]: e.target.value
           });
      }



    return(

        <div className='min-h-screen bg-gray-100 items-center justify-content text-center'>
        
        
        
        </div>
    )



 }
export default Praticse