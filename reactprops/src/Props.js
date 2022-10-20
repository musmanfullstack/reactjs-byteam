import React from "react";

function Index(props){
    return(
      <div>
          <h1>Welcome,{props.name}{props.age}</h1>
      </div>
    );
}
export default Index;