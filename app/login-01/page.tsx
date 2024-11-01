'use client';

import companyLogoWhite from '@/public/generic-company-logo-white.png';
import companyLogo from '@/public/generic-company-logo.png';
import backgroundImage from '@/public/pexels-nietjuh-1906440.jpg';
import LoginPage01 from './components/form';

export default function Login() {
  async function signIn() {
    alert('Sign in logic');
  }

  async function signInWithDiscord() {
    alert('Sign in with Google logic');
  }

  async function signInWithGitHub() {
    alert('Sign in with Google logic');
  }

  return (
    <LoginPage01
      customBtnColor="bg:background"
      customLabel="Sign In"
      customIcon=""
      formWidth={300}
      providers={['custom', 'discord', 'github']}
      handleLogin={[() => signIn(), () => signInWithDiscord(), () => signInWithGitHub()]}
      backgroundImage={backgroundImage}
      title={'Company name'}
      companyLogo={companyLogo}
      companyLogoAlternative={companyLogoWhite}
      companyLogoAlt="This is an alt"
    />
  );
}
