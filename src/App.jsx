import './App.css';
import { FollowCard } from './FollowCard';

export const App = () => {
  const formatUserName = (userName) => `@${userName}`;

  const users = [
    {
      name: 'Miguel Ángel Durán',
      userName: 'midudev',
      isFollowing: true,
      format: formatUserName,
    },
    {
      name: 'Jacobo Garcés',
      userName: 'jacoboduro11',
      isFollowing: true,
      format: formatUserName,
    },
    {
      name: 'Elon Musk',
      userName: 'elonmusk',
      isFollowing: true,
      format: formatUserName,
    },
    {
      name: 'Mariana Usuga',
      userName: 'bymarium',
      isFollowing: false,
      format: formatUserName,
    }
  ];

  return (
    <section className='container'>
      <div className="content">
        {users.map(
            (user) => 
            <FollowCard
              key={user.userName}
              userName={user.userName}
              initialIsFollowing={user.isFollowing}
              format={user.format}
            ><strong>{user.name}</strong></FollowCard>
          )}
      </div>
    </section>
  );
}
