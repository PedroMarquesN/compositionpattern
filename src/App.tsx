import React from 'react';
import Button from './components/Button/Button';
import Notification from './components/notifications/Notification';


// URL de um ícone pequeno de exemplo
const imageSrc = 'https://img.icons8.com/ios-filled/50/000000/react-native.png';

const App: React.FC = () => {


  return (
    <div>


        <Notification>
            <Notification.Icon src={imageSrc} alt="Imagem" />
            <Notification.Text>Notificação com imagem</Notification.Text>
            <Notification.Tooltip>Notificação com imagem</Notification.Tooltip>
            <Button>Botão</Button>
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
