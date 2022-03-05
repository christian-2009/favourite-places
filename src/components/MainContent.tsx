import NewEntry from "./NewEntry";
import NameEntry from "./FooterWebsiteNames";

function MainContent(): JSX.Element {
  return (
    <>
      <main>
        <NewEntry
          title={"The serenity of Regent's Park"}
          image={"/images/timur-valiev-WkyfavX8uc8-unsplash.jpg"}
          alternate={"image of primrose hill"}
          location={"Primrose Hill, London"}
          map={
            "https://www.google.com/maps?q=primrose+hill&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjH7M-Fr6r2AhUUi1wKHa4mDIoQ_AUoAnoECAIQBA"
          }
          description={
            "I love the view of London that you get at Primrose Hill. It brings back many memories"
          }
        />

        <NewEntry
          title={"The beauty of Greece"}
          image={"/images/constantinos-kollias-yqBvJJ8jGBQ-unsplash.jpg"}
          alternate={"image of the acropolis in Athens"}
          location={"Athens, Greece"}
          map={
            "https://www.google.com/maps?q=athens+greece&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjo1oeosKr2AhVUolwKHQhUBcsQ_AUoAXoECAIQAw"
          }
          description={
            "The history and also the beauty of this city will never fail to amaze me"
          }
        />

        <NewEntry
          title={"Memories in Budapest"}
          image={"/images/keszthelyi-timi-ezUDjYy17EA-unsplash.jpg"}
          alternate={"image of the Budapest"}
          location={"Budapest, Hungary"}
          map={
            "https://www.google.com/maps?q=budapest&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiMp--X3Kz2AhVxQkEAHSl8Bq0Q_AUoAnoECAIQBA"
          }
          description={
            "Created many amazing memories in Budapest and enjoyed one too many thermal baths"
          }
        />

        <NewEntry
          title={"No place like home"}
          image={"/images/secret-travel-guide-O_7emptPfWM-unsplash.jpg"}
          alternate={"image of the Cyprus"}
          location={"Larnaca, Cyprus"}
          map={
            "https://www.google.com/maps?q=cyprus&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiko-Lh3az2AhUHYcAKHY0mAUoQ_AUoAXoECAIQAw"
          }
          description={
            "Miss my family here and can't wait to go back to visit them"
          }
        />
      </main>

      <footer>
        <NameEntry
          name1={"Zahra's"}
          name2={"Laura's"}
          name3={"Nobeen's"}
          name4={"Owen's"}
        />
      </footer>
    </>
  );
}

export default MainContent;
