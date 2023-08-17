
// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem('username');
  if (userStr)
  console.log('userstoreage',userStr);
   return JSON.parse(userStr);
  
}
 
// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}
 
// remove the token and user from the session storage
export const removeUserSession = () => {

  sessionStorage.removeItem('username');
}
 
// set the token and user from the session storage
export const setUserSession = (user) => {
  sessionStorage.setItem('username',JSON.stringify(user));
}