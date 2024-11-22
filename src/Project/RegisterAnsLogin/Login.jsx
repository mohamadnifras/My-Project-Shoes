import React, { useContext } from 'react'
import { passContext } from './RegisterContext'
import { useNavigate, Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';




const initialValues = {
    email:'',
    password:''
}
function Login() {
    const {loginResgister} = useContext(passContext);
    const navigate = useNavigate()


    const handleSubmit = async (values) =>{
        try{
            const {email, password}=values
            const adminEmail = "adminnifras@gmail.com";
            const adminPassword = "77770000";
            
            //admin
            if (email === adminEmail && password === adminPassword) {
              
              localStorage.setItem("id", "ni7");
              localStorage.setItem("name", "Admin Nifras");
              localStorage.setItem("email", adminEmail);
              localStorage.setItem("password",  adminPassword );
              localStorage.setItem("role",  "admin" );
              navigate("/admin");
              return;
            } 
            
            const data = await loginResgister(email, password);
//user
            if(!data){
              alert("Please Registration first.")
            }else if(data.status){
              data.status = true;  
              const username = data.firstname;
              const id = data.id;
              localStorage.setItem('id', id);
              localStorage.setItem("name", username);
              localStorage.setItem('email', email);
              navigate('/');
            }else{
              alert("Your account is blocked.");
            }
        }catch(errors){
         console.error(errors);
            
        }
    }
  return (
    <div  className="flex justify-center items-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: 'url("https://i.pinimg.com/originals/e6/16/50/e61650efc5d6acff4c558aab0830d07a.jpg")' }}>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Login</h2>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
         
        >
        {()=>(
          <Form>
          <div className="mb-4">
            <label className="block text-white mb-1">Email</label>
            <Field type='email' name='email' className="w-full p-3 border border-gray-300 rounded-md bg-white" ></Field>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Password</label>
            <Field type='password' name='password' className="w-full p-3 border border-gray-300 rounded-md bg-white" ></Field>
          </div>
          <button type='submit' className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300" >Login</button>
          <p  className="text-white text-center mt-4">
            Dont't have an account? <Link to='/register'  className="text-blue-400 underline">Register</Link>
          </p>
        </Form>
        )}
        </Formik>
      </div>
    </div>
  )
}

export default Login