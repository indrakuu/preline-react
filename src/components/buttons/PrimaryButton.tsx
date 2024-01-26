const PrimaryButton = ({ onClick, children, as: Component = 'button', className, ...rest } : any) => {
    return (
        <Component onClick={onClick} className={`${className} py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none`}
        {...rest}>
            {children}
        </Component>
    );
};

export default PrimaryButton;