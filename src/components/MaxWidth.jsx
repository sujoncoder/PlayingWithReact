import PropTypes from "prop-types"

const MaxWidth = ({ children, className }) => {
    return (
        <section className="flex justify-center items-center">
            <div className={`border rounded shadow p-5 ${className} bg-white`}>
                {children}
            </div>
        </section >
    )
}

MaxWidth.propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
};

export default MaxWidth