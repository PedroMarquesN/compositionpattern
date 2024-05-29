import React from 'react';
import Button from './components/Button/Button';
import Notification from "./components/Button/notifications/Notification";

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


        <Notification>
            <Notification.Icon src={imageSrc} alt="Imagem" />
            <Notification.Text>Notificação com imagem</Notification.Text>
            <Notification.Tooltip>Notificação com imagem</Notification.Tooltip>
            <Notification.Close onClick={() => alert('Notificação fechada!')} />
        </Notification>

        <Notification>
            <Notification.Text>Notificação apenas com texto</Notification.Text>
            <Notification.Close onClick={() => alert('Notificação fechada!')} />
        </Notification>

        <Notification>
            <Notification.Icon src={imageSrc} alt="Imagem" />
            <Notification.Text>Notificação com imagem e texto</Notification.Text>
            <Notification.Close onClick={() => alert('Notificação fechada!')} />
        </Notification>

        <Notification>
            <Notification.Icon src={imageSrc} alt="Imagem" />
            <Notification.Text>Notificação com imagem, texto e tooltip</Notification.Text>
            <Notification.Tooltip>Tooltip da notificação</Notification.Tooltip>
            <Notification.Close onClick={() => alert('Notificação fechada!')} />
        </Notification>


    </div>
  );
};

export default App;
