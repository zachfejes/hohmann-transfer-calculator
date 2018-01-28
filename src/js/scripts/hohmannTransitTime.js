import { G } from './constants';

/**
 * @description Calculates the TOF across the transfer ellipse from the initial to the final orbit.
 * @param {number} r_i Radius of the initial circular orbit, and pariapsis of the transfer ellipse [m].
 * @param {number} r_f Radius of the goal circular orbit, and apoapsis of the transfer ellipse [m].
 * @param {number} M Mass of the non-trivial body at the foci of the transfer ellipse [kg].
 * @returns {number} Returns the TOF across the transfer ellipse from the initial to final orbit [s].
 */
function hohmannTransitTime(r_i, r_f, M) {
    if (r_i === undefined) {
      throw new Error(
        "r_i parameter must be defined, but value passed is undefined."
      );
    }
    if (r_f === undefined) {
      throw new Error(
        "r_f parameter must be defined, but value passed is undefined."
      );
    }
    if (M === undefined) {
      throw new Error(
        "M parameter must be defined, but value passed is undefined."
      );
    }
  
    if (isNaN(r_i)) {
      throw new Error("r_i parameter must be a number, but value passed is NaN.");
    }
    if (isNaN(r_f)) {
      throw new Error("r_f parameter must be a number, but value passed is NaN.");
    }
    if (isNaN(M)) {
      throw new Error("M parameter must be a number, but value passed is NaN.");
    }

    if (r_i <= 0) {
      throw new Error("r_i parameter must be a non-zero positive number.");
    }
    if (r_f <= 0) {
      throw new Error("r_f parameter must be a non-zero positive number.");
    }
    if (M <= 0) {
      throw new Error("M parameter must be a non-zero positive number.");
    }
    
    var transitTime;
  
    transitTime = Math.PI*Math.sqrt(Math.pow((r_i + r_f),3)/(8*G*M));
  
    return transitTime;
  }
  
  export default hohmannTransitTime;
  