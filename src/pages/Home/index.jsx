import { Main, Perfil, Img, Name,Div } from "./styles";
import { useNavigate } from "react-router-dom";
import { perfis } from "./perfis";

function Home() {
  const navigate = useNavigate();

  return (
    <Main>
      <Perfil>
        {perfis.map((perfil, index) => (
          <Div key={index}>
            <Img 
              src={perfil.fotoDePerfil} 
              onClick={() => navigate('/catalogo')} 
            />
            <Name>{perfil.nameUsuario}</Name>
          </Div>
        ))}
      </Perfil>
    </Main>
  );
}

export default Home;
