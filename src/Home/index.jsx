import { Main,Perfil,Img,Name } from "./styles";
import  perfil  from '../assets/perfil1.jpg'

function Home() {
 

  return (
   
      <Main>
        <Perfil>
          <Img src={perfil}/>
          <Name>Hudson</Name>
        </Perfil>
      </Main>
   
  )
}

export default Home
