import { G } from './constants';
import PropTypes from 'prop-types';

/**
 * @description Calculates the orbital speed of an object (trivial mass), orbiting a significantly larger object.
 * @param {number} r Distance between two objects at time of interest [in m].
 * @param {number} m Mass of non-trivial object [in kg].
 * @param {number} a Semi-major axis of the orbit [in m].
 * @returns {number} Returns the orbital speed [in m/s].
 */
function orbitalSpeed(r, m, a) {
    if(r === undefined) {
        throw(new Error("r parameter must be defined, but value passed is undefined."));
    }

    if(m === undefined) {
        throw(new Error("m parameter must be defined, but value passed is undefined."));
    }

    if(isNaN(r)) {
        throw(new Error("r parameter must be a number, but value passed is NaN."));
    }

    if(isNaN(m)) {
        throw(new Error("m parameter must be a number, but value passed is NaN."));
    }

    if(a !== undefined && isNaN(a)) {
        throw(new Error("a parameter must be a number, but value passed is NaN."));
    }

    if(r < 0) {
        throw(new Error("r parameter must be a positive number, but value passed is < 0."));
    }

    if(m < 0) {
        throw(new Error("m parameter must be a positive number, but value passed is < 0."));
    }

    if(a !== undefined && a === 0) {
        throw(new Error("a parameter must be a non-zero number, but value passed is 0."));
    }

    var v;

    if(a > 0) {
        //Elliptical orbit
        v = Math.sqrt(G*m*((2/r) - (1/a)));
    }
    else if (a === Infinity) {
        //Parabolic orbit
        v = Math.sqrt(2*G*m/r);
    }
    else if (a < 0) {
        //Hyperbolic orbit
        v = Math.sqrt(G*m*((2/r) - (1/a)));
    }
    else {
        //Circular Orbit
        v = Math.sqrt(G*m/r);
    }

    return(v);
}

export default orbitalSpeed;