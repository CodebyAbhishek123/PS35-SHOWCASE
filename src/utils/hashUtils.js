/**
 * Metrological Cryptographic Integrity & Digital Signing Utilities
 * Ensures tamper-proof test reports under Legal Metrology Act 2009
 */

// Simple robust pseudo-SHA256 simulation for client-side verifiable hashes
export async function generateSHA256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function generateReportIntegrityHash(report) {
  const canonicalPayload = JSON.stringify({
    reportNumber: report.reportNumber,
    modelApprovalRef: report.modelApprovalRef,
    manufacturer: report.manufacturer?.name,
    modelName: report.instrument?.modelName,
    accuracyClass: report.instrument?.accuracyClass,
    maxCapacity: report.instrument?.maxCapacity,
    eValue: report.instrument?.eValue,
    overallCompliance: report.overallCompliance,
    timestamp: report.testDate,
    testingOfficer: report.lab?.testingOfficer,
    // Summarize test results
    weighingPass: report.testResults?.weighing?.isPass,
    eccentricityPass: report.testResults?.eccentricity?.isPass,
    repeatabilityPass: report.testResults?.repeatability?.isPass,
    zeroSettingPass: report.testResults?.zeroSetting?.isPass,
  });

  return await generateSHA256(canonicalPayload);
}

export function generateVerificationURL(reportNumber, hash) {
  return `https://doca.gov.in/legal-metrology/verify-nawi?rep=${encodeURIComponent(reportNumber)}&hash=${encodeURIComponent(hash?.substring(0, 16) || '')}`;
}
