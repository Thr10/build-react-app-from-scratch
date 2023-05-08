import http from './http';

type RegisterReq = {
    username: string;
    password: string;
}

const register = (data: RegisterReq) => {
  return http.post<any, RegisterReq>('/register', { ...data });
};

const getUserId = () => {

};

export {
  register,
  getUserId,
};
