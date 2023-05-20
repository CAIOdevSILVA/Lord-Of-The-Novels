import { Link, useParams } from  "react-router-dom"

import { categories } from "../../data"

import * as Styles from "./style"

const Categories = ({ size, columns }) => {
  const { category } = useParams()

  return (
    <Styles.Container size={size} columns={columns}>
      <Styles.Title>Categorias</Styles.Title>
      <div className="categories">
        {categories.map((categoryName) => (
          <Link key={categoryName} className={`link ${category === categoryName && 'active'}`} to={`/browse/${categoryName}`}>
            {categoryName}
          </Link>
        ))}
      </div>
    </Styles.Container>
  )
}

export default Categories