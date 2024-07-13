import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  font-family: "Lato", sans-serif;


}
body{ 
  background-color: #FAFBFF;
  
 
  font-family: "Poppins", sans-serif;

  min-height: 100vh;
  line-height: 1.4;


li{ 
  padding: 6px;
}
ul{
    list-style-type: none;
    padding: 0;
}
td{
  font-size: 18px;

  color:#374151 ;
}
a{ 
  text-decoration: none;
  color: #00AC4F;
}


table {
  border-collapse: collapse;
}


}
`

export default GlobalStyles