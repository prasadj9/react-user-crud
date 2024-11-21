import  { useState } from 'react'
import axiosClient from '../apiClient';

const useUserData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getAllUsers = async () => {
        try {
          setLoading(true);
          const response = await axiosClient.get("/users");
          setUsers(response.data);
        } catch (error) {
          console.log(error);
          setError("Error while getting users data");
        } finally {
          setLoading(false);
        }
      };

      const deleteUserById = async(id) => {
        try {
            setLoading(true);
            await axiosClient.delete("/users/" + id);      
        } catch (error) {
            console.log(error);
          setError("Error while deleting user data");
        }
        finally{
            setLoading(false)
        }
      }

      const addUserData = async(newUser) => {
        try {
            setLoading(true);
            await axiosClient.post("/users/", newUser);
            
        } catch (error) {
            console.log(error);
          setError("Error while deleting user data");
        }
        finally{
            setLoading(false)
        }
      }

      const updateUserById = async(updatedUser) => {
        try {
            setLoading(true);
            await axiosClient.put(`/users/${updatedUser.id}`, updatedUser);
            
        } catch (error) {
            console.log(error);
          setError("Error while updating user data");
        }
        finally{
            setLoading(false)
        }
      }

  return {
    users, getAllUsers, loading, error, setUsers, deleteUserById, addUserData, updateUserById
  }
}

export default useUserData