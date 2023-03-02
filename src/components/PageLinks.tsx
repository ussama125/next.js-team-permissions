import Link from "next/link"
import { useRouter } from "next/router"

const links = [
  { text: "Home", route: "/" },
  { text: "project 1", route: "/project/1" },
  { text: "project 2", route: "/project/2" },
  { text: "project 3", route: "/project/3" },
  { text: "project 4", route: "/project/4" },
  { text: "project 5", route: "/project/5" },
]

export function PageLinks() {
  const router = useRouter()

  return (
    <div>
      <ul>
        {links.map((link) =>
          <li key={link.route}>
            <Link href={link.route}>{link.text}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
