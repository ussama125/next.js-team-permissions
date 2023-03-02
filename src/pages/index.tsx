import { useAuth } from "components/AuthProvider"
import { NavBar } from "components/NavBar"
import { PageLinks } from "components/PageLinks"
import { UserStatus } from "components/UserStatus"

export default function Home() {
  const { user } = useAuth()

  return (
    <div>
      <NavBar></NavBar>
      <div className="d-flex">
        <div className="col-3">
          {user && <PageLinks />}
        </div>
        <div className="col-9">
          {user && <h1>Home</h1>}
          {!user && <h1>Please Sign In</h1>}
        </div>
      </div>
    </div>
  )
}
