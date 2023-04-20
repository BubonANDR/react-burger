
export const API_URL = "https://norma.nomoreparties.space/api";
import { getCookie, getResponse, setCookie } from "./utils";

export const forgotPasswordRequest = async (mail) => {
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

export const resetPasswordRequest = async (password, token) => {
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

export const registrationRequest = (username, email, password) => {
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
export const makeOrderRequest = (ingridlist) => {
  return fetch(`${API_URL}/orders`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ ingredients: ingridlist }),
  }).then(getResponse);
};

export const loginRequest = (email, password) => {
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
  return fetch(`${API_URL}/auth/user`, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    
  })
  .then(getResponse).then((res) =>res)
  };
   
  export const saveChangesUserRequest = (username,email,password) => {
    return fetch(`${API_URL}/auth/user`, {
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
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
  }).then(
    window.localStorage.setItem("refreshtoken", ""),
    setCookie("token", "")
  )
};
