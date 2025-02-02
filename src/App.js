import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Avatar from "./components/Avatar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/users.json");
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);

  return (
    <>
      {isLoading && <div className="loading">Data is loading.......</div>}
      {isError && <div className="loading">{isError}</div>}
      {users.map((user) => (
        <Avatar
          key={user.id}
          image={user.image}
          name={user.name}
          status={user.status}
        />
      ))}
    </>
  );
}

export default App;
