import React from 'react';
import Button from './components/Button/Button';

// URL de um ícone pequeno de exemplo
const imageSrc = 'https://img.icons8.com/ios-filled/50/000000/react-native.png';

const App: React.FC = () => {


  return (
    <div>
      <h1>Home Page</h1>
      
      <Button reverse onClick={() => alert('Botão com imagem clicado!')}>
        <Button.Image src={imageSrc} alt="Imagem" />
        <Button.Image src={imageSrc} alt="Imagem" />
        <Button.Image src={imageSrc} alt="Imagem" />
        <Button.Text>Botão com texto</Button.Text>
      </Button>

      <Button 
        fontFamily="Arial, sans-serif"
        onClick={() => alert('Botão com texto clicado!')}>
        <Button.Text>Botão com texto</Button.Text>
      </Button>

      <Button
        onClick={() => alert('Botão com imagem e texto clicado!')}>
        <Button.Text>Imagem e texto</Button.Text>
        <Button.Image src={imageSrc} alt="Imagem" />
      </Button>

      <Button reverse onClick={() => alert('Outro botão com texto clicado!')}>
        <Button.Text>Imagem e texto</Button.Text>
        <Button.Image src={imageSrc} alt="Imagem" />
      </Button>

      <Button
        reverse
        width="550px"
        height="100px"
        onClick={() => alert('Botão com width e height alterados clicado!')}
      >
        <Button.Image src={imageSrc} alt="Imagem" />
      </Button>
      
      <Button
        reverse
        width="200px"
        height="50px"
        onClick={() => alert('Botão com imagem clicado!')}
      >
        <Button.Image src={imageSrc} alt="Imagem" />
        <Button.Text>Texto</Button.Text>
      </Button>
      <Button onClick={() => alert('Botão com imagem, texto e tooltip clicado!')}>
        <Button.Image src={imageSrc} alt="Imagem" />
        <Button.Text>Imagem, texto e tooltip</Button.Text>
        <Button.Tooltip>Agora é isso</Button.Tooltip>
      </Button>


    </div>
  );
};

export default App;
