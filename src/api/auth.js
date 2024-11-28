import axios from "axios";
import axiosInstance from "./axiosInstance";

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

export const register = async (userData) => {
    try{
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    }catch(error){
        console.log('회원가입 오류 : ', error)
        throw new Error('회원가입에 실패했습니다.')
    }
};

export const login = async (userData) => {
    try{
        const response = await axiosInstance.post(`/login?expiresIn=10h`, userData);
        if (response.data.success) {
            localStorage.setItem('accessToken', response.data.accessToken);
            return response.data; 
        } 
    }catch(error){
        console.log('회원가입 오류 : ', error)
        throw new Error('회원가입에 실패했습니다.')
    }

};

export const getUserProfile = async () => {
    try {
        const response = await axiosInstance.get('/user');
        return response.data;
      } catch (error) {
        console.error('프로필조회 실패:', error);
        throw new Error('프로필을 불러오기에 실패했습니다.');   
      }
};

export const updateProfile = async (formData) => {
    try {
      const response = await axiosInstance.patch('/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      return response.data; 
    } catch (error) {
      console.error('프로필 업데이트 오류:', error);
      throw new Error('프로필 업데이트에 실패했습니다.');
    }
  };