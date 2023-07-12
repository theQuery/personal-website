import '../styles/Home.css';
import { useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Section from './Section';

function Home({ contentRef }) {
    const [toms, setToms] = useLocalStorage('toms', 0);
    const pops = useRef([]);

    function handleTomClick(event) {
        const offset = 110;
        const scrollTop = contentRef.current.scrollTop;

        const newPop = {
            x: event.clientX,
            y: event.clientY - offset + scrollTop,
            timestamp: Date.now()
        };

        pops.current.push(newPop);
        setToms(oldToms => oldToms + 1);
    }

    pops.current = pops.current.filter(pop => {
        const maxAge = 3000;
        const timeOfDeath = pop.timestamp + maxAge;
        const isStillAlive = timeOfDeath > Date.now();
        return isStillAlive;
    });

    return <Section>
        <div className='home__pops'>
            {pops.current.map(pop => {
                return <div
                    key={pop.timestamp}
                    className='home__pop'
                    style={{ left: pop.x, top: pop.y }}
                >
                    +1
                </div>
            })}
        </div>
        <div className='home' id='top'>
            <div className='home__intro'>
                <p className='home__bio'>
                    I'm <span className='home__name'>Tom M.K.</span><br />
                    A <span className='home__bold'>full-stack web developer</span>
                </p>
                <h1
                    className='home__count'
                    style={{ opacity: toms ? 1 : 0 }}
                >
                    {toms.toLocaleString()} toms
                </h1>
            </div>
            <div
                className='home__tom'
                onClick={handleTomClick}
            >
            </div>
        </div>
    </Section>
}

export default Home;
