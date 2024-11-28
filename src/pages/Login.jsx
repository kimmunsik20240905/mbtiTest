import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import AuthForm from '../components/AuthForm';
import { login } from '../api/auth';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handlelogin = async(formdata) => {
    try{
        const {id, password} = formdata;
        const data = await login({id, password})
        if(data.success){
          alert("로그인 성공하였습니다.");
          setUser(data)
          navigate("/")
        }
    }catch(error){
        alert("회원가입에 실패했습니다.")
    }
}
  return (
      <div className='flex justify-center pt-8'> 
        <div className="text-center p-4 w-[400px] bg-white rounded-lg shadow-lg shadow-black-500/50">
          <div className="  text-left">
            <h2 className="font-medium text-xl p-2">로그인</h2>
            <div className="p-4 bg-slate-200 rounded-lg ">
              <AuthForm mode="login" onSubmit={handlelogin}/>
            </div>
            <p className='p-2'>
              계정이 없으신가요? 
              <Link to="/signup" className="text-red-600 pl-2  ">
                 회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Login