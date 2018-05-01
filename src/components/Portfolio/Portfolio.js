import React from 'react';

const Portfolio = () => {
    return (
        <div className="animate3">
            <header class="tc ph4">
                <h1 class="f3 f2-m f1-l fw2 black-90 mv3">A Few Projects</h1>
            </header>
            <section class="cf w-100 pa2-ns">
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img style={{ backgroundImage: "url('https://github.com/courtdp2/RoboFriends/raw/master/robofriends.png')" }}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="https://github.com/courtdp2/RoboFriends" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">RoboFriends</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">Application that lets you search through your robot friends. Fast and responsive, RoboFriends allows you search through 10 robots, updating live.</h3>
                    </a>
                </article>
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img style={{ backgroundImage: "url('https://github.com/courtdp2/rgb-guessinggame/raw/master/rgb-guessing-game.png')" }}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="https://github.com/courtdp2/rgb-guessinggame" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">RGB Color Guessing Game</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">Try to guess which colored square represents the RGB value</h3>
                    </a>
                </article>
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img style={{ backgroundImage: "url('https://github.com/courtdp2/fav-artists/raw/master/fav-artists.png')" }}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="https://github.com/courtdp2/fav-artists" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">My Favorite Artists</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">Just a few of my favorite artists</h3>
                    </a>
                </article>
                <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div class="aspect-ratio aspect-ratio--1x1">
                        <img style={{ backgroundImage: "url('https://restorationacademy.herokuapp.com/images/car1-resized.jpg')" }}
                            class="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="https://github.com/courtdp2/Restoration-Academy" class="ph2 ph0-ns pb3 link db">
                        <h3 class="f5 f4-ns mb0 black-90">Restoration Academy</h3>
                        <h3 class="f6 f5 fw4 mt2 black-60">Final Project at Covalence</h3>
                    </a>
                </article>
            </section>
        </div>
    )
}

export default Portfolio