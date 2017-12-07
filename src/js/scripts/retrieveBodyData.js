// import PropTypes from 'prop-types';

function retrieveBodyData (body, start, end, wrt, callback) {
    if(!body) {
        var err = new Error("Error in retrieveBodyData: The 'body' parameter is required to perform this call.");

        if(callback) {
            callback(err, null);
        }

        throw(err);
    }

    if(start && end && start - end > 0) {
        var err = new Error("Error in retrieveBodyData: The 'end' parameter must be after the 'start' parameter.");

        if(callback) {
            callback(err, null);
        }

        throw(err);
    }

    var data = (Math.floor(Math.random()*1000).toString() + " " + body);

    if(callback) {
        callback(null, data);
    }

    return(0);
}

// retrieveBodyData.propTypes = {
//     body: PropTypes.string.isRequired,
//     start: PropTypes.Date.isRequired,
//     end: PropTypes.Date.isRequired,
//     wrt: PropTypes.string.isRequired,
//     callback: PropTypes.func
// }

// retrieveBodyData.defaultProps = {
//     wrt: "sun",
//     start: new Date(),
//     end: new Date()
// }

export default retrieveBodyData;