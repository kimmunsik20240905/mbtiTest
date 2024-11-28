import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { updateProfile } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  
  const [nickname, setNickname] = useState(user?.nickname || "");
  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const accessToken = localStorage.getItem('accessToken'); 
      const data = await updateProfile({nickname}, accessToken);
      if (data.success) {
        alert("프로필이 업데이트 되었습니다.")
        setUser({...user, nickname})
        navigate("/")
      } else {
        alert("프로필 업데이트에 실패했습니다. 이프엘스");
      }
    } catch (error) {
      console.error("프로필 업데이트 오류:", error);
      alert("프로필 업데이트에 실패했습니다.");
    }
  };
  return (
    <div>
        <div className='flex justify-center pt-8'> 
        <div className="text-center p-4 w-[400px] bg-white rounded-lg shadow-lg shadow-black-500/50">
          <div className="  text-left">
            <h2 className="font-medium text-xl p-2">프로필 수정</h2>
            <div className="p-4 bg-slate-200 rounded-lg ">
              <input className='w-[100%] p-3 mb-4 rounded-lg border border-gray-300' 
                  placeholder='닉네임' 
                  type='text' 
                  value={nickname}
                  onChange={handleNicknameChange}
                  />
              <button to="" className="rounded-lg bg-red-600 text-white p-3 inline-block w-[100%] text-center"
                  onClick={handleSubmit}
              >
                프로필 업데이트
              </button>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Profile