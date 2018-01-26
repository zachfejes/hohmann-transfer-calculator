import PropTypes from "prop-types";
import { G } from "./constants";

/**
 * @description Calculates the orbital speed of an object (trivial mass) at pariapsis, orbiting a significantly larger object.
 * @param {number} m Mass of non-trivial object [in kg].
 * @param {number} rp Pariapsis (nearest point) of orbit [in m].
 * @param {number} ra Apoapsis (furthest point) of orbit [in m].
 * @returns {number} Returns the orbital speed at pariapsis [in m/s].
 */
function speedAtPariapsis(m, rp, ra) {
  if (m === undefined) {
    throw new Error("Was expecting numeric value for m, but got undefined");
  }

  if (rp === undefined) {
    throw new Error("Was expecting numeric value for rp, but got undefined");
  }

  if (ra === undefined) {
    throw new Error("Was expecting numeric value for ra, but got undefined");
  }

  if (isNaN(m)) {
    throw new Error("m parameter must be a number, but value passed is NaN.");
  }

  if (isNaN(rp)) {
    throw new Error("rp parameter must be a number, but value passed is NaN.");
  }

  if (isNaN(ra)) {
    throw new Error("ra parameter must be a number, but value passed is NaN.");
  }

  if (m < 0) {
    throw new Error(
      "m parameter must be a positive number, but value passed is < 0."
    );
  }

  if (rp < 0) {
    throw new Error(
      "rp parameter must be a positive number, but value passed is < 0."
    );
  }

  if (ra < 0) {
    throw new Error(
      "rp parameter must be a positive number, but value passed is < 0."
    );
  }

  var v;

  v = Math.sqrt(2 * G * m * ra / (rp * (rp + ra)));

  return v;
}

export default speedAtPariapsis;
