import React, { useState } from 'react'
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
    Color: theme === "light" ? "#222222" : "#ffffff",
    handleColor: theme === "light" ? "#3e1e68" : "#8c52ff"
  }
  
  return (
    <Styles.Container onClick={() => {dispatch(setTheme())}}>
      <Switch
        onChange={()=>{}}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={25}
        handleDiameter={30}
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