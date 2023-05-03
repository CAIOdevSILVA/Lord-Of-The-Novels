import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setTheme } from '../../redux/theme/slice';

import * as Styles from "./style"
import Switch from "react-switch";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";


const Switcher = () => {
  const  { theme }  = useSelector((rootReducer) => rootReducer.theme)
  const dispatch = useDispatch()

  const colors = {
    Color: theme === "light" ? "#f1f5f4" : "#f1f5f4",
    handleColor: theme === "light" ? "#8c52ff" : "#8c52ff"
  }
  
  return (
    <Styles.Container onClick={() => {
        dispatch(setTheme())
      }}>
      <Switch
        onChange={()=>{}}
        checked={theme === "light" ? false : true}
        checkedIcon={false}
        uncheckedIcon={false}
        width={73}
        height={40}
        handleDiameter={35}
        offColor={colors.Color}
        onColor={colors.Color}
        onHandleColor={colors.handleColor}
        offHandleColor={colors.handleColor}
        checkedHandleIcon={
          <BsFillMoonFill
            style={{
              color: "#fff",
              position: "absolute",
              top: "6px",
              left: "8px",
              width: "20px",
              height: "20px"
            }}
          />
        }
        uncheckedHandleIcon={
          <FaSun
            style={{
              color: "#fff",
              position: "absolute",
              top: "7px",
              left: "7px",
              width: "20px",
              height: "20px"
            }}
          />
        }
        boxShadow={" 7px 5px 15px -1px rgba(0,0,0,0.5)"}
        className="switch"
      />
    </Styles.Container>
  )
}

export default Switcher