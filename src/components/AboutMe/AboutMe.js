import React from 'react';
import Tilt from 'react-tilt';

const AboutMe = () => {
    return (
        <div className="animate3 center">
            <article className="mw5 center bg-white br3 pa1 pa2-ns mv3">
                <div className="tc">
                    <Tilt className="Tilt" options={{ max: 50 }} >
                        <div className="Tilt-inner"><img src="https://media.licdn.com/dms/image/C4D03AQHt3xYP_uo3tw/profile-displayphoto-shrink_200_200/0?e=1530309600&v=beta&t=PwVGmdI38HqstLJxdhlXoc7tYXw5356cvhstfZdfxzs" className="br-100 h4 w4 dib ba b--black-05 pa2" alt="" title="me" /></div>
                    </Tilt>
                </div>
            </article>
            <article className="pa1 pa5-ns">
                <h1 className="f3 f1-m f-headline-l">a little about me</h1>
                <p className="measure lh-copy">
                    I am a creative, quick-learning go-getter who excels working with a team but also does just fine working alone. I love front-end development because it gives me a space to create for myself <br /> (and potentially someone else). I graduated from Covalence in Birmingham, AL in November 2017 to become a certified junior full stack developer.
                </p>
                <p className="measure lh-copy">
                    If I'm not too invested in my work to look up from my computer screen, you might find me invested in the TV screen watching a show or playing a video game. If that's not where I am, then I'd like to think that I am with a friend, recording music in his studio.
                </p>
            </article>
            <hr />
            <article className="pa3 pa5-ns" data-name="slab-stat">
                <h1>What I Can Do</h1>
                <dl className="dib mr5">
                    <dd className="f6 f2-ns b ml0">Web Applications</dd>
                    <div className="pa4 tc">
                        <img
                            src="https://png.icons8.com/dotty/100/000000/web.png"
                            className="h6 w6 dib" alt="avatar" />
                    </div>
                </dl>
                <dl className="dib mr5">
                    <dd className="f6 f2-ns b ml0">Mobile Apps</dd>
                    <div className="pa4 tc">
                        <img
                            src="https://png.icons8.com/android/100/000000/two-smartphones.png"
                            className="h6 w6 dib" alt="avatar" />
                    </div>
                </dl>
                <dl className="dib mr5">
                    <dd className="f6 f2-ns b ml0">Databases</dd>
                    <div className="pa4 tc">
                        <img
                            src="https://png.icons8.com/ios/100/000000/database.png"
                            className="h6 w6 dib" alt="avatar" />
                    </div>
                </dl>
                <dl className="dib mr5">
                    <dd className="f6 f2-ns b ml0">Backend APIS</dd>
                    <div className="pa4 tc">
                        <img
                            src="https://png.icons8.com/dotty/100/000000/api-settings.png"
                            className="h6 w6 dib" alt="avatar" />
                    </div>
                </dl>

            </article>
            <article class="pa3 pa5-ns" data-name="slab-stat-small">
                <h3 class="f6 ttu tracked">Technical Skills</h3>
                <div class="cf">
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0"><img
                            src="https://png.icons8.com/color/100/000000/html-5.png"
                            class="h3 w3 dib" alt="avatar" /></dd>
                        <dd class="f6 fw4 ml0 pl3">HTML</dd>
                    </dl>
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0"><img
                            src="https://png.icons8.com/color/100/000000/css3.png"
                            class="h3 w3 dib" alt="avatar" /></dd>
                        <dd class="f6 fw4 ml0 pl3">CSS</dd>
                    </dl>
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0">
                            <img
                            src="https://png.icons8.com/ios/100/000000/javascript.png"
                            class="h3 w3 dib" alt="avatar" />
                            </dd>
                        <dd class="f6 fw4 ml0 pl1">Javascript</dd>
                    </dl>
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0"><img
                            src="https://png.icons8.com/color/100/000000/nodejs.png"
                            class="h3 w3 dib" alt="avatar" /></dd>
                        <dd class="f6 fw4 ml0 pl2">Nodejs</dd>
                    </dl>
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0"><img
                            src="https://png.icons8.com/color/100/000000/angularjs.png"
                            class="h3 w3 dib" alt="avatar" /></dd>
                        <dd class="f6 fw4 ml0 pl1">AngularJS</dd>
                    </dl>
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0"><img
                            src="https://png.icons8.com/ios/100/000000/react-native-filled.png"
                            class="h3 w3 dib" alt="avatar" /></dd>
                        <dd class="f6 fw4 ml0 pl2">ReactJS</dd>
                    </dl>
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0"><img
                            src="https://png.icons8.com/ios/100/000000/mysql-logo-filled.png"
                            class="h3 w3 dib" alt="avatar" /></dd>
                        <dd class="f6 fw4 ml0 pl3">MySQL</dd>
                    </dl>
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0"><img
                            src="https://i2.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb.png?fit=413%2C484&ssl=1"
                            class="h3 w3 dib" alt="avatar" /></dd>
                        <dd class="f6 fw4 ml0 pl2">Mongodb</dd>
                    </dl>
                    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">

                        <dd class="f3 fw6 ml0"><img
                            src="https://png.icons8.com/ios-glyphs/100/000000/github.png"
                            class="h3 w3 dib" alt="avatar" /></dd>
                        <dd class="f6 fw4 ml0 pl3">GitHub</dd>
                    </dl>
                </div>
            </article>
            <hr/>
        </div>
    )
}

export default AboutMe