import { Link } from "react-router-dom"

import { Switcher } from "../../index"

import * as Styles from "./style"

const user = {
  name: "Caio",
  email: "caiossantosp5560@gmail.com",
  image: img,
  active: false,
};


const SideBar = () => {

  return (
    <Styles.Container>
      <Styles.UserMenu>
        {user.active ? (
          <></>
        ) : (
          <ul>
            <li><Link>Login</Link></li>
            <li><Link>Sign Up</Link></li>
            <li>
              <span>Mode:</span> <Switcher />
            </li>
          </ul>
        )}
      </Styles.UserMenu>
    </Styles.Container>
  )
}

export default SideBar