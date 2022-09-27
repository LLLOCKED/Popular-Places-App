import Link from "next/link";
import styles from "./navbar.module.scss";
import { AiFillHome } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/" >
            <a>
              <AiFillHome /> {router.pathname == "/" ? "Home" : ""}
            </a>
          </Link>
        </li>
        <li className={router.pathname == "/about" ? styles.active : ""}>
          <Link href="/about">
            <a><BiHelpCircle /> {router.pathname == "/about" ? "About" : ""}</a>
          </Link>
        </li>
        <li className={router.pathname == "/profile" ? styles.active : ""}>
          <Link href="/profile">
            <a><BsFillPersonFill /> {router.pathname == "/profile" ? "Profile" : ""}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
