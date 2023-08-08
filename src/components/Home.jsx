import '../styles/Home.css';
import { useRef } from 'react';
import TomImage from '../assets/tom/tom.png';
import useLocalStorage from '../hooks/useLocalStorage';
import Section from './Section';

function Home({ contentRef }) {
    const [toms, setToms] = useLocalStorage('toms', 0);
    const pops = useRef([]);

    const popDatas = {
        0: { toms: 1, text: null, color: null, fontFamily: null },
        1: { toms: 3, text: null, color: 'red', fontFamily: null },
        2: { toms: 1, text: 'ouch', color: 'red', fontFamily: 'Eater, cursive' }
    };

    function handleTomClick(event) {
        addPop(event, 0);
    }

    function handleHeadClick(event) {
        event.stopPropagation();
        addPop(event, 1);
    }

    function addPop(event, type) {
        const offset = 110;
        const scrollTop = contentRef.current.scrollTop;

        const newPop = {
            x: event.clientX,
            y: event.clientY - offset + scrollTop,
            type: type,
            timestamp: Date.now()
        };

        const newToms = popDatas[type].toms;

        pops.current.push(newPop);
        setToms(oldToms => oldToms + newToms);
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
                const popData = popDatas[pop.type];
                let { toms, text, color, fontFamily } = popData;
                text ??= '+' + toms;

                return <div
                    key={pop.timestamp}
                    className='home__pop'
                    style={{ left: pop.x, top: pop.y, color, fontFamily }}
                >
                    {text}
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
                <img
                    className='home__image'
                    src={TomImage}
                    alt=''
                    useMap='#tom'
                    draggable={false}
                />
                <map
                    name='tom'
                    className='home__map'
                >
                    {/* Use this tool to create the area coords of the image map: https://summerstyle.github.io/summer/
                     Make sure the image you're using in the tool has the same width/height that is set in the CSS file.*/}
                    <area
                        shape="poly"
                        coords="196, 212, 184, 196, 182, 178, 176, 173, 171, 158, 174, 152, 172, 142, 179, 115, 202, 99, 232, 98, 245, 105, 256, 120, 260, 134, 257, 150, 250, 166, 248, 179, 244, 196, 237, 209, 227, 217, 217, 221, 204, 220"
                        alt=''
                        onClick={handleHeadClick}>
                    </area>
                </map>
            </div>
        </div>
    </Section>
}

export default Home;