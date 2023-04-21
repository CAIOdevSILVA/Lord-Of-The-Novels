import { Link } from  "react-router-dom"

import { categories } from "../../data"

import * as Styles from "./style"

const Categories = () => {
  return (
    <Styles.Container>
      <Styles.Title>Categorias</Styles.Title>
      <div className="categories">
        {categories.map((category) => (
          <Link key={category} className="link" to={`/browse/${category}`}>
            {category}
          </Link>
        ))}
      </div>
    </Styles.Container>
  )
}

export default Categories