import react from "react";
// import Header from "./Header";
// import Footer from "./footer";
// import rectDom from "rect-dom";
import Card from "./card";
import contacts from "./contact";
// import Note from "./Note";
import Avatar from "./avatar";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="src/IMG_20220114_180312_622.jpg" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
