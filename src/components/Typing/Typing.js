import React from "react";

//importing typewriter-effect
import TypeWriterEffect from "react-typewriter-effect";
import "./Typing.css";

function Typing() {
  const myAppRef = document.querySelector(".scrollable-div");
  return (
    <div className="Typing">
      <TypeWriterEffect
        textStyle={{ fontFamily: "Red Hat Display" }}
        startDelay={100}
        multiTextLoop={true}
        cursorColor="black"
        multiText={["Hey , I am SAKIB AHMED SARON", "I'M FRONT-END DEVELOPER"]}
        multiTextDelay={1000}
        typeSpeed={100}
        scrollArea={myAppRef}
      />
    </div>
  );
}

export default Typing;
