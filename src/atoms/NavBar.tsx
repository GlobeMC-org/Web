import React from "react";

const HomeUrl = () => (window.location.href = "/");
const MapUrl = () => window.open("http://135.181.126.186:25657/", "_blank");
const InfoUrl = () => (window.location.href = "/info");
const StoreUrl = () => (window.location.href = "/store");
const DiscordUrl = () =>
  window.open("https://discord.gg/8nyZJEpBrE/", "_blank");

export const NavBar = () => {
  return (
    <nav>
      <li>
        <ul onClick={HomeUrl}>Home</ul>
        <ul onClick={MapUrl}>Map</ul>
        <ul onClick={InfoUrl}>Info</ul>
        <ul onClick={StoreUrl}>Store</ul>
        <ul onClick={DiscordUrl}>Discord</ul>
      </li>
    </nav>
  );
};
