import {useState, useEffect} from "react"
import Logo from "../../assets/logo.jpg"
import './styles.css';
import {Link,useNavigate} from 'react-router-dom'
import {Image,Container ,Grid,GridItem,FormControl,FormLabel,Select } from '@chakra-ui/react'
import api from "../../services/api"

function Header() {
  const [categories, setCategories] = useState([])

  const navigate =useNavigate()

  useEffect(() => {
    api.get("/categories")
    .then(response=>{
      setCategories(response.data)
    }).catch(err=>{
      console.log(err)
    })
  }, [])

  const handleCategory=(e)=>{
    navigate(`/categories/${e.target.value}`)
  }

  return (
  <nav >
    <Container maxW="container-xl">
      <Grid  templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colStart="1"colEnd="3">
          <Link to="/">
            <Image className="logo" src={Logo} alt="logo"/>
          </Link>
        </GridItem>
        <GridItem colStart="4">
          <FormControl>
            <FormLabel>Selecione uma categoria</FormLabel>
            <Select onChange={handleCategory}>
              {  categories.map(category=>
                      <option value={category} key={category}>
                        {category}
                      </option>
                )} 
            </Select>
          </FormControl>
        </GridItem>
      </Grid>
    </Container>
  </nav>);
}

export default Header;