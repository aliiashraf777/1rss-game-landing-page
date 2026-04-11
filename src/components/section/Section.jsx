import './Section.scss';

const Section = (props) => {
    return (
        <div>
            <div className={`section ${props.className}`}>
                {props.children}
            </div>
        </div>
    )
}

export const SectionContent = (props) => {

    const bgImage = props.bgImage ? {
        backgroundImage: `url(${props.bgImage})`
    } : {}

    return (
        <div
            className={`section__content ${props.className}`}
            style={bgImage}
        >
            {props.children}
        </div>
    )
}

export default Section
