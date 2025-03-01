import './App.css';
import Card from './components/Card';

function App() {
  const users = [
    {
      username: 'Delba',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    },
    {
      username: 'Bd Jhala',
      description: "I'm a software developer with over 2 years of experience",
    },
  ];
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-lg p-4 mb-4">Tailwind css</h1>
      <div>
        {users.map((user, index) => (
          <Card key={index} username={user.username} description={user.description} />
        ))}
      </div>
    </>
  );
}

export default App;
