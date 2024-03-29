import axios from 'axios';
import { instance } from '@/libs/axios';
import { LOGIN_URL } from '@/constants/apiUrl';
import { LoginFormData } from '@/types/AuthType';

export default function fetchLogin() {
  const logIn = async (data: LoginFormData) => {
    const { email, password } = data;

    try {
      return await instance.post(LOGIN_URL, { email, password });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.message;
        return errorMessage;
      }
    }
  };

  return logIn;
}
