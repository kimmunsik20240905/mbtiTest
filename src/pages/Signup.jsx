import { Link, useNavigate } from "react-router-dom";
import { register } from '../api/auth';
import AuthForm from '../components/AuthForm';

const Signup = () => {
  const navigate = useNavigate()
  const handleSignup = async(formdata) => {
      try{
          const data = await register(formdata)
          console.log(data)
          if(data.success){
            alert("회원가입 성공하였습니다.");
            navigate("/login")
          }
      }catch(error){
          alert("회원가입에 실패했습니다.", error)
      }
  }

  return (
    <div>
      <div className='flex justify-center pt-8'>
        <div className="text-center p-4 w-[400px] bg-white rounded-lg shadow-lg shadow-black-500/50">
          <div className="  text-left">
            <h2 className="font-medium text-xl p-2">회원가입</h2>
            <div className="p-4 bg-slate-200 rounded-lg ">
              <AuthForm mode="signup" onSubmit={handleSignup}/>
            </div>
            <p className='p-2'>
              이미 계정이 있으신가요?
              <Link to="/login" className="text-red-600 pl-2  ">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup