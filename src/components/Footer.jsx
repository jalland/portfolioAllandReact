
import React from 'react';
import { AiFillGithub,AiFillLinkedin,AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-white">
      <div className="container text-center">
        <a className="Logos" style={{ fontSize: "3rem", color:"black"}} href="https://www.github.com/jalland" target="_blank"><AiFillGithub /></a>
        <a className="Logos" style={{ fontSize: "3rem", color:"black"}} href="https://www.linkedin.com/in/joshua-alland-88093352/" target="_blank"><AiFillLinkedin /></a>
        <a className="Logos" style={{ fontSize: "3rem", color:"black"}} href="https://twitter.com/JoshuaAlland" target="_blank"><AiFillTwitterCircle /></a>
      </div>
    </footer>
  );
}