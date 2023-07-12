import '../styles/Section.css';

function Section({ children, label, id, isRightSide }) {
    let classNames = 'section ';
    classNames += isRightSide ? 'section__right ' : '';

    return <section className={classNames}>
        <div
            className='section__content'
            id={id}
        >
            {label && <h2 className='section__label'>
                {label}
            </h2>}
            <div className='section__children'>
                {children}
            </div>
        </div>
    </section>
}

export default Section;