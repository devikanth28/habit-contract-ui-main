const Loader = ({ loader }) => {

    return (loader &&
        <div className="m-5 text-center">
            <div className="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>)

}

export default Loader;