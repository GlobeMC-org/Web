import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <li>
        <ul
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <p>Home</p>
        </ul>
        <ul
          onClick={() => {
            window.open("http://135.181.126.186:25657/", "_blank");
          }}
        >
          <p>Map</p>
        </ul>
        <ul
          onClick={() => {
            window.location.href = "/info";
          }}
        >
          <p>Info</p>
        </ul>
        <ul
          onClick={() => {
            window.location.href = "/store";
          }}
        >
          <p>Store</p>
        </ul>
        <ul
          onClick={() => {
            window.location.href = "/coords";
          }}
        >
          <p>Coords</p>
        </ul>
        <ul
          onClick={() => {
            window.open("https://discord.gg/8nyZJEpBrE/", "_blank");
          }}
        >
          <p>Discord</p>
        </ul>
      </li>
    </nav>
  );
};
