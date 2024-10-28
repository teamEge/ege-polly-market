import styled from "styled-components";

export const StyledCard = styled.div`
  .card {
    display: flex;
    justify-content: space-between;
    padding: 32px 40px 22px;
    height: 220px;
    border-radius: 20px;
    background-color: grey;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Optional: adds a subtle shadow */
    color: white; /* Optional: sets text color */

    &-left {
      display: flex;
      align-items: center;
      column-gap: 20px;
      &-logo {
        display: flex;
        flex-direction: column;
        &-name {
          font-size: 34px;
          font-weight: 700;
          display: flex;
          justify-content: center;
        }
        img {
          border-radius: 50%;
        }
      }
      &-rate {
        font-size: 34px;
        font-weight: 700;
        display: flex;
        justify-content: center;
      }
    }

    &-right {
      display: flex;
      align-items: center;
      column-gap: 20px;
      &-logo {
        display: flex;
        flex-direction: column;
        &-name {
          font-size: 34px;
          font-weight: 700;
          display: flex;
          justify-content: center;
        }
        img {
          border-radius: 50%;
        }
      }
      &-rate {
        font-size: 34px;
        font-weight: 700;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
