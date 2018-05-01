import React from 'react';


const Home = () => {
    return (
        <div className='animate'>
            <header className="sans-serif">
                <div className="cover bg-left bg-center-l" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=863ffeea823f0ffb0885fe1a5e77e645&auto=format&fit=crop&w=1050&q=80')" }}>
                    <div className="bg-black-80 pb5 pb6-m pb7-l">
                        <nav className="db dt-l w-100 border-box pa3 ph5-l">
                            {/* <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                                <a className="link dim lightest-blue f6 f5-l dib mr3 mr4-l" href="/" title="Home">Home</a>
                                <a className="link dim lightest-blue f6 f5-l dib mr3 mr4-l" href="/about" title="About">About</a>
                                <a className="link dim lightest-blue f6 f5-l dib mr3 mr4-l" href="/projects" title="Projects">Projects</a>
                            </div> */}
                        </nav>
                        <div className="tc-l mt4 mt5-m mt6-l ph3 animate2">
                            <h1 className=" playball  f2 f1-l fw2 white-90 mb0 lh-title">I'm Courtney</h1>
                            <h2 className="fw1 f3 white-80 mt3 mb4">a junior full stack developer</h2>
                            <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="https://www.dropbox.com/s/zk8c5a7emyz6cix/CourtneyPerkinsResume.pdf?dl=0" download="cpresume.pdf">Download My Resume</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home