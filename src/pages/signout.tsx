import { useAuth } from "components/AuthProvider"
import { PageLinks } from "components/PageLinks"
import { UserStatus } from "components/UserStatus"
import { useRouter } from "next/router";
import { useEffect } from "react"

export default function SignOut() {
  const { auth } = useAuth();
  let router = useRouter();

  useEffect(() => {
    auth.signOut();
    console.log(router.asPath);
    if(router.asPath === '/signout') {
      router.push('/');
    }
  }, [auth])

  return (
    <div>
      <h1>Sign Out</h1>
      <p>You have been signed out:</p>
      <UserStatus />
      <PageLinks />
    </div>
  )
}
