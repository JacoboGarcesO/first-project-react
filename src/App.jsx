import './App.css';
import { FollowCard } from './FollowCard';

export const App = () => {
  return (
    <section className='container'>
      <div className="content">
        <FollowCard userName='midudev' name='Miguel Ángel Durán'></FollowCard>
        <FollowCard userName='jacoboduro11' name='Jacobo Garcés'></FollowCard>
        <FollowCard userName='elonmusk' name='Elon Musk'></FollowCard>
        <FollowCard userName='Nahulemes' name='Nahuel Lemes'></FollowCard>
        <FollowCard userName='bymarium' name='Mariana Usuga'></FollowCard>
      </div>
    </section>
  );
}
