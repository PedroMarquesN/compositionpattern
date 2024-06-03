import React, { useState } from "react";
import Button from "./components/Button/Button";
import Notification from "./components/notifications/Notification";
import NewNotification from "./components/NewNotification/NewNotification";

// URL de um ícone pequeno de exemplo
const imageSrc = "https://img.icons8.com/ios-filled/50/000000/react-native.png";

function App() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div>
    <NewNotification />
    
    <div>
      
      <Button onClick={() => setShowNotification(true)}>
        <Button.Text>Mostrar notificação</Button.Text>
        <Button.Image src={imageSrc} alt="Imagem" />
      </Button>
      {showNotification && (
        <Notification>
          <Notification.Icon src={imageSrc} alt="Imagem" />
          <Notification.Text>
            Notificação com imagem, texto e tooltip
          </Notification.Text>
          <Notification.Tooltip>Tooltip da notificação</Notification.Tooltip>
          <Notification.Close onClick={() => setShowNotification(false)} />
        </Notification>
      )}
    </div>
    </div>
  );
}

export default App;
