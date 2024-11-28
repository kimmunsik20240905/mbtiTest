import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const {user, setUser} = useContext(UserContext)
  
  const navigate = useNavigate();
  const logout = () => {
    alert("로그아웃되었습니다.");
    localStorage.removeItem('accessToken');
    setUser(null);
    navigate('/');
};

  return (
    <div className='fixed top-0 w-[100%] bg-gray-100 flex justify-between items-center gap-5 p-4 shadow-md'>
      <Link to="/" className='p-2 cursor-pointer'>홈</Link>
      <div className="flex gap-5 items-center">
          {user && (
              <>
                <Link to="/profile" className='p-2 cursor-pointer'>프로필</Link>
                <Link to="/test" className='p-2 cursor-pointer'>테스트</Link>
                <Link to="/result" className='p-2 cursor-pointer'>결과보기</Link>
              </>
          )}
          <button onClick={user ? logout : () => navigate("/login")} className='rounded-lg bg-red-600 text-white p-3'>
              {user ? "로그아웃" : "로그인"}      
          </button>
      </div>
    </div>
  )
}

export default Header