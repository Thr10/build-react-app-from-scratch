import http from './http';

type RegisterReq = {
    username: string;
    password: string;
}

type ErrorNumber = 0 | 1;

type ResData<T> = {
    data: T,
    errno: ErrorNumber
}

type RegisterResData = {
    id: string;
    message: string;
}

const register = (data: RegisterReq) => {
  return http.post<ResData<RegisterResData>, RegisterReq>('/register', { ...data });
};

const getUserId = () => {

};

export {
  register,
  getUserId,
};
