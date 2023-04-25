import { TailSpin } from "react-loader-spinner";

import * as Styles from "./style";

const Loader = ({ message }) => {
  return (
    <Styles.Container>
      <TailSpin height="80" width="80" color="#8c52ff" />
      <p className="message">{message}</p>
    </Styles.Container>
  );
};

export default Loader;
