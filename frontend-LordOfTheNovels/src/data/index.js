import img from "../assets/profile-123456.png"

const fetchUser = () => {
  const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
  return userInfo;
}


const categories = [
  "Ação",
  "Aventura",
  "Mistério",
  "Romance",
  "Cultivo",
  "Reicarnação",
  "Sistema",
  "Adulto",
  "Magia",
  "Slice of Life",
  "VRMMO",
  "Escolar",
  "Seinen",
  "Comédia",
  "Esportes",
  "Drama",
  "Isekai",
  "Histórico",
  "Shounen",
  "Medieval",
  "Sobrenatural",
]


const FontSizes = [
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30"
];

export { FontSizes, categories, fetchUser, img }