import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaSearch, } from "react-icons/fa";

export default function Navbar({ isScrolled }) {

  /* create useState hooks for search bar event */
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  /* creating array of link for nav list */
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/myList" },
  ];

  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>

        <div className="left flex a-center">

          {/* logo */}
          <div className="brand flex a-center j-center">
            <img src={logo} alt="Logo" className="netflix-logo"/>
          </div>

          {/* nav list */}
          <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="right flex a-center">
          
          {/* search bar */}
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          
          {/* profile icon */}
          <Link to="/profile">
                <img 
                    src='https://avatars.githubusercontent.com/u/110757279?s=400&u=81dc9146f7e613b0a6dee66d023a9aa9816af881&v=4' 
                    alt='avatar' 
                    className='nav-avatar'
                />
          </Link>
        </div>
      </nav>

      <div className="link-mobile-container">
        <ul className="links-mobile">
          {/* Why is a Map () important in JavaScript?
          Map is a collection of elements where each element is stored as a Key, value pair. 
          Map object can hold both objects and primitive values as either key or value. 
          When we iterate over the map object it returns the key, value pair in the same order as inserted. */}
          {links.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

/* Css for Header */
const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: fixed;
    top: 0;
    height: 5.5rem;
    width: 100%;
    justify-content: space-between;
    font-weight: 800;
    top: 0;
    z-index: 2;
    align-items: center;
    transition: all 1s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 0.1rem;
      justify-items: auto;
      button {
        background-color: transparent;
        margin-right: 10px;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          margin-right: 30px;
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
      .nav-avatar {
      cursor: pointer;
      width: 50px;
      margin-right: 15px;
      border-radius: 50%;
      border: 1px solid #f34242;
  }
    }
}
/* For Mobile Screen Size */
@media (max-width: 720px) {
  .links {
    display: none;
  }
}
@media (min-width: 720px) {
  .links-mobile {
    display: none;
  }
}
@media only screen and (min-width: 0px) and (max-width: 720px) {

  .links-mobile {
    position: sticky;
    z-index: 100;
    display: flex;
    margin-top: 70px;
    margin-bottom: 5px;
    font-weight: 800;
    width: 100%;
    justify-content: center;
    align-items: center;
    

    list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
  }
}
`;
