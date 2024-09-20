import { Card } from '../../../features/auth/components/card';

export default function LoginPage() {
  return (
    <>
      <Card title={'Login'} description={'Please enter your credentials'}>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </Card>
    </>
  );
}
