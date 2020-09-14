import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled, { createGlobalStyle } from "styled-components";

const MainMenuWraper = styled.div `
  display: flex;
  background-color: rgb(3, 27, 77);
  color: white;
`

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
`

const MainMenu = () => (
  <StaticQuery query={graphql `
      {
        allWordpressWpApiMenusMenusItems (filter:{
          name:{ 
            eq: "Main menu"
          }
        }){
          edges{ 
            node{ 
              name
              items{ 
                title
                object_slug
              }
            }
          }
        }
      }
  
  `} render={props => (

    <MainMenuWraper>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <MenuItem to={`/gatsby/${item.object_slug}`} key={item.title}>
              {item.title}
            </MenuItem>          
        ))}
    </MainMenuWraper>
      
  )}/>
);

export default MainMenu;