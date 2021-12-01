import {useState, useEffect} from "react"
import Logo from "../../assets/logo-invertida.png"
import './styles.css';
import {Link,useNavigate} from 'react-router-dom'
import {
  Image,
  FormControl,
  FormLabel,
  Select,
  Box,
  Stack,
  Flex,
  useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";

import api from "../../services/api"

function Header(props) {
  const [categories, setCategories] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => (isOpen ? onClose() : onOpen());

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
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="#ad0404"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
          <Link to="/">
            <Image className="logo" src={Logo} alt="logo"/>
          </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
         <FormControl>
            <FormLabel>Select a category</FormLabel>
            <Select onChange={handleCategory}>
                      <option value={"category"} disabled >
                        ramdom
                      </option>
              {  categories.map(category=>
                      <option value={category} key={category}>
                        {category}
                      </option>
                )} 
            </Select>
          </FormControl>
      </Box>
    </Flex>
  </nav>);
}

export default Header;