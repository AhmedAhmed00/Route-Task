import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{ 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


:root{
  font-family: "Lato", sans-serif;
  --color-blue : #707FDD;
  --color-green : #00AC4F;


}
body{

  background-color: #FAFBFF;


  font-family: "Poppins", sans-serif;

  min-height: 100vh;
  line-height: 1.4;

  h1{ 
    font-size: 40px;
    text-align: center;
    color: var(--color-blue);
  }


li{
  padding: 6px;
}
ul{
    list-style-type: none;
    padding: 0;
}

th ,td{
padding: 20px;
text-align: center;

  ${'' /* text-align: center; */}
}






}
`

export default GlobalStyles