import { useEffect, useState } from "react";
import { searchUsers } from "./services/githubApi";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await searchUsers("octocat");
      setUsers(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
