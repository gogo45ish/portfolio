import React from 'react'
import classes from './Home.module.scss'
import background from "./../../img/background3.jpg";

import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className={classes.home} style={{ backgroundImage: `url(${background})`, width: `100%`, height: `auto`, backgroundRepeat: `no-repeat` }}>
            <div className={classes.home__message}>

                <div className={classes.home__message__text}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('<span">Hello World!</span>')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(600)
                                .deleteAll()
                                .typeString('<span >I am George Zummar</span>')
                                .pauseFor(1500)
                                .deleteChars(13)
                                .typeString('<span >Devello</span>')
                                .deleteChars(2)
                                .typeString('<span >oper. </span>')
                                .pauseFor(1500)
                                .typeString('<span ><br/>Welcome to my website!</span>')
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home