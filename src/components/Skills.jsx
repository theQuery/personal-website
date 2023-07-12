import '../styles/Skills.css';
import { ReactComponent as JavaScriptIcon } from '../assets/languages/javascript.svg';
import { ReactComponent as HTMLIcon } from '../assets/languages/html.svg';
import { ReactComponent as CSSIcon } from '../assets/languages/css.svg';
import { ReactComponent as SQLIcon } from '../assets/languages/sql.svg';
import { ReactComponent as LuaIcon } from '../assets/languages/lua.svg';
import { ReactComponent as AutoHotKeyIcon } from '../assets/languages/autohotkey.svg';
import { ReactComponent as ReactIcon } from '../assets/frameworks/react.svg';
import { ReactComponent as NodeJSIcon } from '../assets/frameworks/nodejs.svg';
import { ReactComponent as ExpressIcon } from '../assets/frameworks/express.svg';
import { ReactComponent as CFIcon } from '../assets/aws/cf.svg';
import { ReactComponent as CMIcon } from '../assets/aws/cm.svg';
import { ReactComponent as EC2Icon } from '../assets/aws/ec2.svg';
import { ReactComponent as RDSIcon } from '../assets/aws/rds.svg';
import { ReactComponent as S3Icon } from '../assets/aws/s3.svg';
import Section from './Section';

function IconList({ label, icons }) {
    return <div className='skills__list'>
        <h3 className='skills__label'>
            {label}
        </h3>
        <div className='skills__icons'>
            {icons}
        </div>
    </div>
}

function Skills() {
    return <Section
        label='Skills'
        id='skills'
    >
        <div className='skills'>
            <p className='skills__paragraph'>
                I've worked with quite a few languages, frameworks, and
                services in my 5 years of programming. Some of them
                are listed here.
                <br /><br />
                But... why only some?
                <br /><br />
                Even though you've programmed in a language before,
                it doesn't mean you actually know it all that well. For
                that very reason, only the languages and frameworks that
                I feel confident in have been added to the list.
                <br /><br />
                Speaking of languages one might not know very well,
                I'm currently learning Python in order to delve into
                the exciting world of AI, machine learning, and automation.
                Taming the snake is going really well so far and I'm hoping
                it will be the next cool thing I'll add to the list!
                <br /><br />
                Fun fact: NodeJS isn't actually a framework...
            </p>
            <IconList
                label='Languages'
                icons={<>
                    <JavaScriptIcon />
                    <HTMLIcon />
                    <CSSIcon />
                    <SQLIcon />
                    <LuaIcon />
                    <AutoHotKeyIcon />
                </>}
            />
            <IconList
                label='Frameworks'
                icons={<>
                    <ReactIcon />
                    <NodeJSIcon />
                    <ExpressIcon />
                </>}
            />
            <IconList
                label='Services'
                icons={<>
                    <CFIcon />
                    <CMIcon />
                    <EC2Icon />
                    <RDSIcon />
                    <S3Icon />
                </>}
            />
        </div>
    </Section>
}

export default Skills;