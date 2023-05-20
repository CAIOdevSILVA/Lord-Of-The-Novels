import React from "react";

import { Card } from "../index";
import * as Styles from "./style";

const Cards = ({ title, novels, horizontal }) => {


  return (
    <Styles.Container horizontal={horizontal}>
      <Styles.Title>{title}</Styles.Title>
      <div className="CardsContainer">
        {novels.map((novel) => (
          <Card key={novel.title} novel={novel} horizontal={horizontal} />
        ))}
      </div>
    </Styles.Container>
  );
};

export default Cards;
