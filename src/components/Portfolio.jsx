import '../styles/Portfolio.css';
import Section from './Section';

function Portfolio() {
    return <Section
        label='Portfolio'
        id='portfolio'
        isRightSide={true}
    >
        <div className='portfolio'>
            <p className='portfolio__paragraph'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam enim itaque ex eos architecto, sed hic iusto recusandae
                officiis voluptatibus illum ad obcaecati in beatae sequi quia ullam est unde!
            </p>
        </div>
    </Section>
}

export default Portfolio;