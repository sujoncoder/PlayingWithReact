import PropTypes from "prop-types"


const AppTitle = ({ children }) => {
    return (
        <div className="text-3xl font-bold text-pink-500 text-center font-mono underline decoration-wavy py-16">
            {children}
        </div>
    )
}

AppTitle.propTypes = {
    children: PropTypes.node
};

export default AppTitle