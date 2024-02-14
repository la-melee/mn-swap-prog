import { initClient, ClientProvider } from "@swapcard/react-sdk/lib/client";
import { ApplicationProvider } from "@swapcard/react-sdk/lib/application";
import { EventProvider } from "@swapcard/react-sdk/lib/event";

function App() {
  const client = initClient();
  
  return (
    <ClientProvider client={client}>
    <ApplicationProvider>
      <EventProvider eventId="RXZlbnRfMTIxNzkxMg==">
        <h1>ok</h1>
      </EventProvider>
    </ApplicationProvider>
  </ClientProvider>
  );
}

export default App;
