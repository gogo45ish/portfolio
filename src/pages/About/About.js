import React from 'react';
import classes from './About.module.scss'
import picture from './../../img/george1.jpg';

const About = () => {
    return (
        <div>
            <h2 className={classes.title}>About me</h2>
            <div className={classes.box}>
                <div className={classes.box__content}>
                    <p>
                        My name is George. Passionate beginner Software Engineer and Web developer. Started making simple websites
                        back in my University days.
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className={classes.box__imgBx}>
                    <img className={classes.box__imgBx__img} src={picture} />
                </div>
            </div>
        </div>
    )
}

export default About