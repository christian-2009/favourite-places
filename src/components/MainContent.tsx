import NewEntry from "./NewEntry";

function MainContent(): JSX.Element {
  return (
    <main>
      <NewEntry
        title={"The beauty of Regent's Park"}
        location={"Primrose Hill, London"}
        map={
          "https://www.google.com/maps?q=primrose+hill&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjH7M-Fr6r2AhUUi1wKHa4mDIoQ_AUoAnoECAIQBA"
        }
        description={
          "I love the view of London that you get at Primrose Hill. It brings back many memories."
        }
      />

      <NewEntry
        title={"The serenity of Greece"}
        location={"Athens, Greece"}
        map={
          "https://www.google.com/maps?q=athens+greece&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjo1oeosKr2AhVUolwKHQhUBcsQ_AUoAXoECAIQAw"
        }
        description={
          "The history and also the beauty of this city will never fail to amaze me."
        }
      />
    </main>
  );
}

export default MainContent;
