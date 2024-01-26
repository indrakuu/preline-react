const Card = ({children, className}) => {
    return (
        <div className={`${className} backdrop-filter shadow bg-opacity-50 bg-white border border-gray-200 rounded-xl`}>
            {children}
        </div>
    );
};

export default Card;