//Components
import { UserMenu, NavLinks, Search } from "../index"

import * as Styles from "./style"
import Logo from "../../assets/Logo-Dark__1.png"


const Navbar = () => {
  
  return (
    <Styles.Container>
      <div>
        <Styles.Logo>
          <img src={Logo} alt="Logo-Lord of the Novels" />
        </Styles.Logo>
        <NavLinks />
      </div>
     <div>
        <Search />
        <UserMenu />
     </div>
    </Styles.Container>
  );
};

export default Navbar;
