import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const login = () => {
  return (
    <Container>
      <Title
        animate={{ opacity: 1, y: "0" }}
        initial={{ opacity: 0, y: "100px" }}
      >
        CheatChat{" "}
        <motion.i
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className="far fa-comment-alt"
        ></motion.i>
      </Title>

      <Contents>
        <GoogleBtn
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src="/images/googleIcon.png" alt="" />
          &nbsp; Login with Google
        </GoogleBtn>
        <FacebookBtn
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <i className="fab fa-facebook"></i>
          &nbsp; Login with Facebook
        </FacebookBtn>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffff00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff8000'/%3E%3Cstop offset='1' stop-color='%23ff8000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300ff19'/%3E%3Cstop offset='1' stop-color='%2300ff19' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239900ff'/%3E%3Cstop offset='1' stop-color='%239900ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffff00'/%3E%3Cstop offset='1' stop-color='%23ffff00' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF0000'/%3E%3Cstop offset='1' stop-color='%23FF0000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230CF'/%3E%3Cstop offset='1' stop-color='%230CF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Contents = styled.div`
  background-color: #efefef;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 175px;
  border-bottom-left-radius: 12px;
  width: 350px;

  @media (max-width: 425px) {
    width: 80%;
    margin: 0 auto;
  }
`;
const GoogleBtn = styled.button`
  padding: 8px;
  font-size: 1.2rem;
  text-align: justify;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  border: none;
  border: 3px solid rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  color: teal;

  img {
    width: 16px;
    object-fit: contain;
  }
  i {
    color: #4267b2;
  }
  &:hover {
    border: 3px solid #1b1b1b;
  }
  @media (max-width: 425px) {
    font-size: 0.8rem;
    text-align: center;
    img {
      width: 12px;
    }
  }
`;
const FacebookBtn = styled(GoogleBtn)``;

const Title = styled(motion.div)`
  font-size: 2.5rem;
  letter-spacing: 1.5px;
  color: white;
  border: 4px solid white;
  padding: 5px;
  width: 350px;
  text-align: center;
  border-top-right-radius: 12px;
  i {
    color: #1b1b1b;
  }
  @media (max-width: 425px) {
    width: 80%;
    margin: 0 auto;
    font-size: 2rem;
  }
`;
export default login;
