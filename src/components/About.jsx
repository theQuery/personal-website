import '../styles/About.css';
import Section from './Section';
import tomSide from '../assets/tom/tom-side.jpg'
import tomBehind from '../assets/tom/tom-behind.jpg'

function About() {
    return <Section
        label='About'
        id='about'
        isRightSide={true}
    >
        <div className='about'>
            <img
                className='about__image'
                src={tomSide}
                alt='Tom smiling with his hands on his head.'
            />
            <p className='about__paragraph'>
                This is me, Tom Morgenshtern Kristoffersen, but you may also
                know me as the only full-stack web developer you'll ever need.
                How did I get here, you ask? Well, I'll tell you.
                <br /><br />
                It all started in the middle of Tel Aviv, Israel. A fat little
                baby with the manliest quadruple chin was born, all beautiful
                and healthy as can be. Then, at 3 months old that fat little
                baby spread its wings and flew to Norway with its parents,
                where it was nurtured and grown into
                a<s>n extraordinarily successful</s> 22 year old young man.
                <br /><br />
                That man is me. A lot of important things happened between the
                time I was a fetus and its bright future of today, though.
                Beginning with the days of being a fetus, and skipping to 17
                years later, I finally started to properly invest my time into
                programming. I began with using AHK to write the most beautiful
                little code snippets. They would automate specific tasks for me
                with either a simple tap of a button or a proud click on a GUI.

                {/* Every day I would get on my computer, use AHK and JavaScript
                to orchestrate the most creative and harmonious code snippets
                known to man, and I loved every single moment of it. */}
            </p>
            <p className='about__paragraph'>
                After the tremendous amount of power such
                insignificant little code gave me, I couldn't help but crave
                even more. That's when I began learning JavaScript, and
                not just to learn it, but to develop an astoundingly momentous bot.
                This bot ended up supporting over 100 commands and events,
                being loved by countless users, and eventually forced me to
                launch my company, TMK Media, due to all the money being made.
                <br /><br />
                If you want to follow me, this is what I look like from behind:
            </p>
            {/* around with AHK scripts and JavaScript code, just to see what
             I could accomplish. I absolutely loved it. */}

            {/* what happened to all the details? Did nothing else happen?
            It did, and I'm getting to that. */}

            {/* If you'd like to hear more, you should hire me already!
            In any case, that's the long story in short. */}
            <img
                className='about__image'
                src={tomBehind}
                alt='Tom smiling with his hands on his head, from behind.'
            />
        </div>
    </Section>
}

export default About;