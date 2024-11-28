import React, { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  
  const [formData, setFormData] = useState({
		id:"",
    password:"",
    nickname:"",
  });

  const handleChange =(e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
        className="w-[100%] p-3 mb-4 rounded-lg border border-gray-300"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
        className="w-[100%] p-3 mb-4 rounded-lg border border-gray-300"
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-[100%] p-3 mb-4 rounded-lg border border-gray-300"
        />
      )}
      <button type="" className="rounded-lg bg-red-600 text-white p-3 inline-block w-[100%] text-center">
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;