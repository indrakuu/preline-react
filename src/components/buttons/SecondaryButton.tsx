const SecondaryButton = ({ onClick, children, as: Component = 'button', className, ...rest }) => {
    return (
        <Component onClick={onClick} className={`${className} py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none`} {...rest}>
            {children}
        </Component>
    );
};

export default SecondaryButton;