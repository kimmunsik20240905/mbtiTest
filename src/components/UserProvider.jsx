import { getUserProfile } from "../api/auth";
import { UserContext } from "../contexts/UserContext";
import { useEffect, useState } from "react";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    useEffect(() => {
      const accesstoken = localStorage.getItem('accessToken');
      if (accesstoken) {
        getUserProfile()
          .then((userData) => {
            const updatedUserData = {
              ...userData,
              userId: userData.id,  
            };
            delete updatedUserData.id;  
            setUser(updatedUserData);
          })
      }
    }, []);
    console.log(user);
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };

  export default UserProvider;