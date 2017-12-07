import PropTypes from 'prop-types';

/**
 * @description Calculates the kineticEnergy of an object travelling at a given speed.
 * @param {number} v Velocity in m/s. 
 * @returns {number} Returns the kinetic energy of the object in J.
 */
function kineticEnergy(v) {
    if(v === undefined) {
        throw(new Error("kineticEnergy expects a numeric parameter v, but instead it was passed undefined."));
    }

    if(isNaN(v)) {
        throw(new Error("kineticEnergy expects a numeric parameter v, but the provided v is NaN."));
    }

    return(
        0.5*Math.pow(v,2)
    );
}

export default kineticEnergy;