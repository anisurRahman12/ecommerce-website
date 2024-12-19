

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto w-4/12">
            <p className="text-3xl uppercase p-4 border-0  border-y-4">{heading}</p>
            <p>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;