import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import classes from "./Header.module.scss";

import { useScroll } from '../../utilities/useScroll';

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    })

    const { y, x, scrollDirection } = useScroll();

    const styles = {
        active: {
            visibility: "visible",
            transition: "all 0.4s",

        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.6s",
            transform: "translateY(-100%)"
        }
    }


    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }

    }, [size.width, menuOpen])



    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    }

    const resumeClickHandler = () => {
        menuToggleHandler();
        navigate('/Resume');
    };
    return (
        <header className={classes.header} style={scrollDirection !== "up" ? styles.active : styles.hidden}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    Zummar
                </Link>
                <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""}`}>
                    <ul>
                        <li>
                            <Link to="/About" onClick={menuToggleHandler}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/Skills" onClick={menuToggleHandler}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/Projects" onClick={menuToggleHandler}>
                                Projects
                            </Link>
                        </li>
                        <button onClick={resumeClickHandler}>Resume</button>
                    </ul>

                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
                </div>
            </div>
        </header>
    )
}

export default Header