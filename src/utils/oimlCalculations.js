/**
 * OIML R-76-1:2006 Standard Mathematical & Metrological Calculation Engine
 * Compliant with Legal Metrology Act 2009 & Legal Metrology (General) Rules 2011 (India)
 */

export const ACCURACY_CLASSES = {
  CLASS_I: {
    id: 'CLASS_I',
    name: 'Class I (Special)',
    symbol: 'I',
    roman: 'I',
    minIntervals: 50000,
    maxIntervals: Infinity,
    minCapacityMultiplier: 100, // Min = 100e
    color: 'emerald',
    badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    description: 'Precision analytical and micro-balances used in high-precision research and gold testing',
    mpeTiers: [
      { maxRangeInE: 50000, mpeFactor: 0.5 },
      { maxRangeInE: 200000, mpeFactor: 1.0 },
      { maxRangeInE: Infinity, mpeFactor: 1.5 }
    ]
  },
  CLASS_II: {
    id: 'CLASS_II',
    name: 'Class II (High)',
    symbol: 'II',
    roman: 'II',
    minIntervals: 100,
    maxIntervals: 100000,
    minCapacityMultiplier: 20, // Min = 20e (or 50e depending on e/d)
    color: 'cyan',
    badgeClass: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
    description: 'Laboratory balances, pharmaceutical, and precious metal scales',
    mpeTiers: [
      { maxRangeInE: 5000, mpeFactor: 0.5 },
      { maxRangeInE: 20000, mpeFactor: 1.0 },
      { maxRangeInE: 100000, mpeFactor: 1.5 }
    ]
  },
  CLASS_III: {
    id: 'CLASS_III',
    name: 'Class III (Medium)',
    symbol: 'III',
    roman: 'III',
    minIntervals: 100,
    maxIntervals: 10000,
    minCapacityMultiplier: 20, // Min = 20e
    color: 'blue',
    badgeClass: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    description: 'Commercial retail scales, industrial platform scales, weighbridges, and supermarket checkouts',
    mpeTiers: [
      { maxRangeInE: 500, mpeFactor: 0.5 },
      { maxRangeInE: 2000, mpeFactor: 1.0 },
      { maxRangeInE: 10000, mpeFactor: 1.5 }
    ]
  },
  CLASS_IIII: {
    id: 'CLASS_IIII',
    name: 'Class IV (Ordinary)',
    symbol: 'IIII',
    roman: 'IIII',
    minIntervals: 100,
    maxIntervals: 1000,
    minCapacityMultiplier: 10, // Min = 10e
    color: 'amber',
    badgeClass: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    description: 'Crane scales, scrap metal scales, agricultural bulk weighers',
    mpeTiers: [
      { maxRangeInE: 50, mpeFactor: 0.5 },
      { maxRangeInE: 200, mpeFactor: 1.0 },
      { maxRangeInE: 1000, mpeFactor: 1.5 }
    ]
  }
};

/**
 * Calculates number of verification scale intervals (n = Max / e)
 */
export function calculateIntervals(maxCapacity, eValue) {
  if (!maxCapacity || !eValue || eValue <= 0) return 0;
  return Math.round((Number(maxCapacity) / Number(eValue)) * 1000) / 1000;
}

/**
 * Validates whether the scale parameters conform to OIML R-76 class constraints
 */
export function validateClassParameters(accuracyClassId, maxCapacity, eValue, minCapacity) {
  const cls = ACCURACY_CLASSES[accuracyClassId] || ACCURACY_CLASSES.CLASS_III;
  const n = calculateIntervals(maxCapacity, eValue);
  const minRequired = (cls.minCapacityMultiplier * Number(eValue));

  const errors = [];
  const warnings = [];

  if (n < cls.minIntervals) {
    errors.push(`Number of verification scale intervals (n = ${n}) is below the minimum required for ${cls.name} (${cls.minIntervals}).`);
  }
  if (cls.maxIntervals !== Infinity && n > cls.maxIntervals) {
    errors.push(`Number of verification scale intervals (n = ${n}) exceeds the maximum allowed for ${cls.name} (${cls.maxIntervals}).`);
  }
  if (minCapacity !== undefined && Number(minCapacity) < minRequired) {
    warnings.push(`Specified Min (${minCapacity}) is below standard minimum recommended (${minRequired} = ${cls.minCapacityMultiplier}e).`);
  }

  return {
    isValid: errors.length === 0,
    n,
    errors,
    warnings,
    minRequired
  };
}

/**
 * Calculates Maximum Permissible Error (MPE) for a given load 'm'
 * @param {number} loadInE - Load expressed in units of 'e' (m / e)
 * @param {string} accuracyClassId - Accuracy class key
 * @param {boolean} isInService - If true, MPE is doubled (OIML R-76 Clause 3.5.2)
 * @returns {number} Permissible error in units of 'e'
 */
export function getMPEInE(loadInE, accuracyClassId = 'CLASS_III', isInService = false) {
  const cls = ACCURACY_CLASSES[accuracyClassId] || ACCURACY_CLASSES.CLASS_III;
  const absLoad = Math.abs(Number(loadInE));

  let mpeFactor = 1.5;
  for (const tier of cls.mpeTiers) {
    if (absLoad <= tier.maxRangeInE) {
      mpeFactor = tier.mpeFactor;
      break;
    }
  }

  if (isInService) {
    mpeFactor *= 2;
  }

  return mpeFactor;
}

/**
 * Calculates MPE in engineering units (kg, g, etc.)
 */
export function getMPEInUnits(load, eValue, accuracyClassId = 'CLASS_III', isInService = false) {
  if (!eValue || eValue <= 0) return 0;
  const loadInE = Number(load) / Number(eValue);
  const mpeInE = getMPEInE(loadInE, accuracyClassId, isInService);
  return Number((mpeInE * Number(eValue)).toFixed(6));
}

/**
 * Calculates Turning-Point Corrected Indication P (OIML R-76 Clause A.4.4.3)
 * P = I + 0.5d - deltaL  (or P = I + 0.5e - deltaL)
 */
export function calculateCorrectedIndication(indicatedI, deltaL, dValue) {
  const I = Number(indicatedI) || 0;
  const dL = Number(deltaL) || 0;
  const d = Number(dValue) || 1;
  return Number((I + (0.5 * d) - dL).toFixed(6));
}

/**
 * Computes Error E and Corrected Error Ec = E - E0
 */
export function calculateError(correctedIndicationP, appliedLoadL, zeroErrorE0 = 0) {
  const P = Number(correctedIndicationP) || 0;
  const L = Number(appliedLoadL) || 0;
  const E0 = Number(zeroErrorE0) || 0;

  const E = Number((P - L).toFixed(6));
  const Ec = Number((E - E0).toFixed(6));

  return { E, Ec };
}

/**
 * Evaluates a complete Weighing Performance Test record
 */
export function evaluateWeighingPoint(row, eValue, dValue, accuracyClassId, zeroErrorE0 = 0) {
  const load = Number(row.load) || 0;
  const indicated = Number(row.indication) || 0;
  const deltaL = Number(row.deltaL) || 0;
  const d = Number(dValue) || Number(eValue) || 1;

  const P = calculateCorrectedIndication(indicated, deltaL, d);
  const { E, Ec } = calculateError(P, load, zeroErrorE0);
  const mpeLimit = getMPEInUnits(load, eValue, accuracyClassId, false);
  const isPass = Math.abs(Ec) <= (mpeLimit + 1e-9);

  return {
    ...row,
    correctedIndicationP: P,
    errorE: E,
    correctedErrorEc: Ec,
    mpeLimit,
    isPass
  };
}

/**
 * Evaluates Eccentricity (Corner Load) Test
 */
export function evaluateEccentricityTest(points, eValue, accuracyClassId) {
  if (!points || points.length === 0) return { isOverallPass: true, evaluatedPoints: [] };
  
  const testLoad = Number(points[0]?.load) || 0;
  const mpeLimit = getMPEInUnits(testLoad, eValue, accuracyClassId, false);

  let isOverallPass = true;
  const evaluatedPoints = points.map(pt => {
    const P = calculateCorrectedIndication(pt.indication, pt.deltaL, pt.d || eValue);
    const { E, Ec } = calculateError(P, pt.load, 0);
    const pass = Math.abs(Ec) <= (mpeLimit + 1e-9);
    if (!pass) isOverallPass = false;
    return {
      ...pt,
      correctedIndicationP: P,
      errorE: E,
      correctedErrorEc: Ec,
      mpeLimit,
      isPass: pass
    };
  });

  return {
    isOverallPass,
    testLoad,
    mpeLimit,
    evaluatedPoints
  };
}

/**
 * Evaluates Repeatability Test
 * Difference between maximum and minimum recorded corrected errors in a series
 * must not exceed |MPE| for that test load. (Clause A.4.10)
 */
export function evaluateRepeatabilitySeries(seriesRuns, testLoad, eValue, accuracyClassId) {
  if (!seriesRuns || seriesRuns.length === 0) {
    return { isPass: true, maxError: 0, minError: 0, range: 0, mpeLimit: 0, evaluatedRuns: [] };
  }

  const mpeLimit = getMPEInUnits(testLoad, eValue, accuracyClassId, false);
  const evaluatedRuns = seriesRuns.map(run => {
    const P = calculateCorrectedIndication(run.indication, run.deltaL, run.d || eValue);
    const { E, Ec } = calculateError(P, testLoad, 0);
    return {
      ...run,
      correctedIndicationP: P,
      errorE: E,
      correctedErrorEc: Ec
    };
  });

  const errorValues = evaluatedRuns.map(r => r.correctedErrorEc);
  const maxError = Math.max(...errorValues);
  const minError = Math.min(...errorValues);
  const range = Number((maxError - minError).toFixed(6));
  const isPass = range <= (mpeLimit + 1e-9);

  return {
    isPass,
    maxError,
    minError,
    range,
    mpeLimit,
    evaluatedRuns
  };
}

/**
 * Evaluates Zero-Setting Test (Clause A.4.2)
 * Max permissible zero error: |E0| <= 0.25e
 */
export function evaluateZeroSetting(indication, deltaL, eValue) {
  const d = eValue;
  const P0 = calculateCorrectedIndication(indication, deltaL, d);
  const E0 = P0 - 0;
  const zeroTolerance = Number((0.25 * Number(eValue)).toFixed(6));
  const isPass = Math.abs(E0) <= (zeroTolerance + 1e-9);

  return {
    P0,
    E0: Number(E0.toFixed(6)),
    zeroTolerance,
    isPass
  };
}

/**
 * Evaluates Discrimination Test (Clause A.4.8)
 * An additional load equal to 1.4d placed gently must cause the indication to increase by at least 1d.
 */
export function evaluateDiscrimination(initialIndication, additionalLoad, newIndication, dValue) {
  const d = Number(dValue) || 1;
  const requiredLoad = Number((1.4 * d).toFixed(4));
  const diff = Number(newIndication) - Number(initialIndication);
  const isPass = diff >= d;

  return {
    requiredLoad,
    actualDiff: diff,
    isPass
  };
}
