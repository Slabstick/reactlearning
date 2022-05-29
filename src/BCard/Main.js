import React from "react";


export default class Main extends React.Component {
    render() {
        return (
            <div>
                <header className="bc-header">
                    <h1 className="bc-name">Slab Stick</h1>
                    <h2 className="bc-role">Future Fullstack Developer</h2>
                    <a href="https://slabstick.github.io/reactlearning/" className="bc-link">slabstick.github.io/reactlearning/</a>
                    <div className="bc-buttons">
                        <a href="mailto:slabsticktwitch@gmail.com">
                            <button className="bc-mail" >Mail</button>
                        </a>
                        <a href="https://twitter.com/slabsticker">
                            <button className="bc-twitter" >Twitter</button>
                        </a>
                    </div>
                </header>
                <main className="bc-main">
                    <div className="bc-about">
                        <h3>About</h3>
                        <p>I am a future full stack developer currently learning react. Soon I'll be having a nice job at a local development business where I will learn how to code on a professional level. Right now though I am still self taught.</p>
                    </div>
                    <div className="bc-interests">
                        <h3>Interests</h3>
                        <p>I love making music with my guitar, playing video games and watching football. I also enjoy learning to code while listening to jazzhop and videogame soundtracks.</p>
                    </div>
                </main>
            </div>
        )
    }
}