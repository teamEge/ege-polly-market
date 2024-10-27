import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007bff;
    padding: 10px 20px;
    color: white;


    .logo {
    font-size: 24px;
    font-weight: bold;
    }

    .navbar {
        ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        }

        li{
        margin: 0 15px;
        }
        
        a{
         color: white;
         text-decoration: none;
         transition: color 0.3s;
        }
    }


`;