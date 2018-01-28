/**
 * @description Calculates the orbital speed of an object (trivial mass), orbiting a significantly larger object.
 * @param {number} v True anomaly at relevant position in orbit [radians].
 * @param {number} e Eccentricity of orbit [unitless].
 * @returns {number} Returns the flight path angle [in radians].
 */
function flightPathAngle(v, e) {
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
