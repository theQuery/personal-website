import '../styles/Content.css';
import { useRef } from 'react';
import Home from './Home';
import Space from './Space';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';

function Content() {
    const contentRef = useRef();

    return <div
        className='content'
        ref={contentRef}
    >
        <Home contentRef={contentRef} />
        <Space />
        <Space />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
    </div>
}

export default Content;
