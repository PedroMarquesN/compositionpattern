import React, { useState } from "react";
import Button from "./components/Button/Button";
import Notification from "./components/notifications/Notification";

import { Check, Rocket, X } from "lucide-react";
import { NewNotification } from "./components/NewNotification";

// URL de um ícone pequeno de exemplo
const imageSrc = "https://img.icons8.com/ios-filled/50/000000/react-native.png";

function App() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="h-screen bg-gray-800">

      <div className="flex flex-col items-center justify-center space-y-1">

      <div className="rounded w-1/2 text-xl bg-zinc-400 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-600 dark:text-zinc-400">
        Recentes
      </div>
        <NewNotification.Root>
          <NewNotification.Icon icon={Rocket}/>
          <NewNotification.Content text="Você recebeu um convite para fazer parte da ACTION !" />
          <NewNotification.Actions>
            <NewNotification.Action icon={X} />
          </NewNotification.Actions>
        </NewNotification.Root>

        <NewNotification.Root >
          <NewNotification.Icon icon={Rocket}/>
          <NewNotification.Content text="Você recebeu um convite para fazer parte da ACTION !" />
          <NewNotification.Actions>
            <NewNotification.Action icon={Check} className="bg-emerald-500 dark:bg-emerald-500" />
          </NewNotification.Actions>
        </NewNotification.Root>

        <NewNotification.Root >
          <NewNotification.Icon icon={Rocket}/>
          <NewNotification.Content text="Você recebeu um convite para fazer parte da ACTION !" />
          <NewNotification.Actions>
            <NewNotification.Action icon={X} />
            <NewNotification.Action icon={Check} className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500" />
          </NewNotification.Actions>
        </NewNotification.Root>

        <NewNotification.Root>
          <NewNotification.Icon icon={Rocket}/>
          <NewNotification.Content text="Action está com Promoção"/>
        </NewNotification.Root>
      </div>

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
  );
}

export default App;
