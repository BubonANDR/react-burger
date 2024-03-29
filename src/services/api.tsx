
import  {getCookie, getResponse, setCookie}  from "./utils";
export const API_URL = "https://norma.nomoreparties.space/api";
export const wsUrl=`wss://norma.nomoreparties.space/orders`

export const forgotPasswordRequest = async (mail:string) => {
  return await fetch(`${API_URL}/password-reset`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: mail,
    }),
  }).then(getResponse)
};

export const resetPasswordRequest = async (password:string, token:string) => {
  return await fetch(`${API_URL}/password-reset/reset`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  
    body: JSON.stringify({
      password: `${password}`,
      token:`${token}`,
    }),
  }).then(getResponse)
};

export const registrationRequest = (username:string, email:string, password:string) => {
  return fetch(`${API_URL}/auth/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",

    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
      name: `${username}`,
    }),
  }).then(getResponse)
};
export const makeOrderRequest = (ingridlist:string[]) => {
 
  return fetch(`${API_URL}/orders`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token") as string,
     
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ ingredients: ingridlist }),
  }).then(getResponse);
};

export const loginRequest = (email:string, password:string) => {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",

    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  }).then(getResponse)
};

export const getUserRequest = () => {
  const token =getCookie("token") as string;
  return fetch(`${API_URL}/auth/user`, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    
  })
  .then(getResponse).then((res) =>res)
  };
   
  export const saveChangesUserRequest = (username:string,email:string,password:string) => {
    const token =getCookie("token") as string;
    return fetch(`${API_URL}/auth/user`, {
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        name: `${username}`,
      }),
    })
    .then(getResponse).then((res) =>res)
    };


export const refreshToken = () => {
  return fetch(`${API_URL}/auth/token`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      token: window.localStorage.getItem("refreshtoken"),
    }),
  })
  .then(getResponse)
    .then((res) => {
      setCookie("token", res.accessToken); 
      window.localStorage.setItem("refreshtoken", res.refreshToken);
    })
};

export const logOut = () => {
  return fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      token: window.localStorage.getItem("refreshtoken"),
    }),
  }).then(getResponse).then(()=> {window.localStorage.setItem("refreshtoken", "");
    setCookie("token", "");}
  )
};
