import React from 'react'
import classes from './Projects.module.scss'
import icon1 from './../../img/person.svg';
import icon2 from './../../img/amazon.svg';
import icon3 from './../../img/controller.svg';


const Projects = () => {
    return (
        <div className={classes.container}>
            <div className={classes.card__container}>
                <div className={classes.card}>
                    <div className={classes.card__content}>
                        <img className={classes.card__icon} src={icon1} alt="icon1" />
                        <h3 className={classes.card__header}>Portfolio</h3>
                        <p className={classes.card__info}>You can check out the code of <br /> this portfolio here</p>
                        <button className={classes.card__button}>Github link</button>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.card__content}>
                        <img className={classes.card__icon} src={icon2} alt="icon2" />
                        <h3 className={classes.card__header}>Amazon Sentiment</h3>
                        <p className={classes.card__info}>Sentiment Analysis System <br /> for Reviews Analysis</p>
                        <button className={classes.card__button}>Github link</button>
                    </div>
                </div> <div className={classes.card}>
                    <div className={classes.card__content}>
                        <img className={classes.card__icon} src={icon3} alt="icon3" />
                        <h3 className={classes.card__header}>Esports Website</h3>
                        <p className={classes.card__info}>A website for an imaginary<br /> team</p>
                        <button className={classes.card__button}>Github link</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects