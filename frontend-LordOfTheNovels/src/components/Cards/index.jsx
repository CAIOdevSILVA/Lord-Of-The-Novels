import React from "react";

import { Card } from "../index";
import * as Styles from "./style";

const Cards = ({ title, novels, vertical }) => {


  return (
    <Styles.Container vertical={vertical}>
      <Styles.Title>{title}</Styles.Title>
      <div className="CardsContainer">
        {novels.map((novel) => (
          <Card key={novel.title} novel={novel} vertical={vertical} />
        ))}
      </div>
    </Styles.Container>
  );
};

export default Cards;
