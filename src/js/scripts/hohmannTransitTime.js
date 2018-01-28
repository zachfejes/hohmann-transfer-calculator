import { G } from './constants';

/**
 * @description Calculates the orbital speed of an object (trivial mass), orbiting a significantly larger object.
 * @param {number} r_i Radius of the initial circular orbit, and pariapsis of the transfer ellipse.
 * @param {number} r_f Radius of the goal circular orbit, and apoapsis of the transfer ellipse.
 * @param {number} M Mass of the non-trivial body at the foci of the transfer ellipse.
 * @returns {number} Returns the TOF across the transfer ellipse from the initial to final orbit.
 */
function hohmannTransitTime(r_i, r_f, M) {
    if (v === undefined) {
      throw new Error(
        "v parameter must be defined, but value passed is undefined."
      );
    }
    if (e === undefined) {
      throw new Error(
        "e parameter must be defined, but value passed is undefined."
      );
    }
  
    if (isNaN(v)) {
      throw new Error("v parameter must be a number, but value passed is NaN.");
    }
  
    if (isNaN(e)) {
      throw new Error("e parameter must be a number, but value passed is NaN.");
    }
    
    var fpa;
  
    fpa = Math.atan2(e*Math.sin(v),(1 + e*Math.cos(v)));
  
    return fpa;
  }
  
  export default flightPathAngle;
  