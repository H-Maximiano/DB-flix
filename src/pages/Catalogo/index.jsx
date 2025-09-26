import { Conteiner, Div, Conteudo, Texto } from './styles.js';
import { listaDeEps } from './lista';
import { useState } from 'react';

function CatalogoDBKai() {
  const [assistindo, setAssistindo] = useState(null);

  return (
    <Conteiner>
      {listaDeEps.map((ep, index) => (
        <Div key={index}>
          {assistindo === index && ep.episodios ? (
            <video src={ep.episodios} controls autoPlay width="400"onPlay={(e) => e.target.requestFullscreen()} ></video>
          ) : (
            <Conteudo
              src={ep.conteudo}
              onClick={() => ep.episodios && setAssistindo(index)}
            />
          )}
          <Texto>{ep.name}</Texto>
        </Div>
      ))}
    </Conteiner>
  );
}

export default CatalogoDBKai;
