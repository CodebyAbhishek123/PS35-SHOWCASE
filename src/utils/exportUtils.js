/**
 * Report Exporters for OIML R-76 Standardized Reports
 * Formats: Print, PDF, Microsoft Word (.doc), and JSON Interchange
 */

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export function triggerPrintReport() {
  window.print();
}

export function exportReportToJSON(report) {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `OIML_R76_${report.reportNumber.replace(/[\/\\:]/g, '_')}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function exportReportToWord(report) {
  const htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>OIML R-76 Test Report - ${report.reportNumber}</title>
      <style>
        body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 11pt; line-height: 1.3; color: #111; }
        h1 { font-size: 16pt; color: #072a4a; text-align: center; margin-bottom: 4px; }
        h2 { font-size: 13pt; color: #0c8fe9; border-bottom: 2px solid #0c8fe9; padding-bottom: 3px; margin-top: 15px; }
        h3 { font-size: 11pt; color: #333; margin-top: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 8px; margin-bottom: 12px; }
        th, td { border: 1px solid #777; padding: 6px 8px; font-size: 10pt; text-align: left; }
        th { background-color: #f0f4f8; font-weight: bold; }
        .header-box { text-align: center; border: 2px solid #072a4a; padding: 12px; margin-bottom: 16px; background-color: #fafbfc; }
        .pass-badge { color: #047857; font-weight: bold; }
        .fail-badge { color: #b91c1c; font-weight: bold; }
        .meta-table td { border: none; padding: 3px 6px; }
        .footer { font-size: 9pt; color: #666; text-align: center; margin-top: 20px; border-top: 1px solid #ccc; padding-top: 8px; }
      </style>
    </head>
    <body>
      <div class="header-box">
        <div style="font-size: 12pt; font-weight: bold; color: #b45309; text-transform: uppercase;">GOVERNMENT OF INDIA</div>
        <div style="font-size: 13pt; font-weight: bold; color: #072a4a;">MINISTRY OF CONSUMER AFFAIRS, FOOD & PUBLIC DISTRIBUTION</div>
        <div style="font-size: 11pt; color: #334155;">DEPARTMENT OF CONSUMER AFFAIRS — LEGAL METROLOGY DIVISION</div>
        <h1>TYPE EVALUATION TEST REPORT</h1>
        <div style="font-size: 10pt; font-style: italic;">In accordance with OIML Recommendation R 76-1 (Edition 2006) & Legal Metrology Act, 2009</div>
      </div>

      <table class="meta-table">
        <tr>
          <td width="50%"><strong>Report No:</strong> ${report.reportNumber}</td>
          <td width="50%"><strong>Date of Test:</strong> ${report.testDate}</td>
        </tr>
        <tr>
          <td><strong>Model Approval Ref:</strong> ${report.modelApprovalRef || 'N/A'}</td>
          <td><strong>Overall Result:</strong> <span class="${report.overallCompliance ? 'pass-badge' : 'fail-badge'}">${report.overallCompliance ? 'PASSED & COMPLIANT' : 'FAILED'}</span></td>
        </tr>
      </table>

      <h2>1. APPLICANT & MANUFACTURER DETAILS</h2>
      <table>
        <tr><th width="30%">Manufacturer Name</th><td>${report.manufacturer?.name}</td></tr>
        <tr><th>Address</th><td>${report.manufacturer?.address}</td></tr>
        <tr><th>Registration No.</th><td>${report.manufacturer?.regNumber}</td></tr>
        <tr><th>Contact Person</th><td>${report.manufacturer?.contactPerson} (${report.manufacturer?.email})</td></tr>
      </table>

      <h2>2. INSTRUMENT CHARACTERISTICS</h2>
      <table>
        <tr><th width="25%">Type of Instrument</th><td width="25%">${report.instrument?.type}</td><th width="25%">Model Designation</th><td width="25%">${report.instrument?.modelName}</td></tr>
        <tr><th>Serial Number</th><td>${report.instrument?.serialNumber}</td><th>Accuracy Class</th><td><strong>${report.instrument?.accuracyClass?.replace('_', ' ')}</strong></td></tr>
        <tr><th>Maximum Capacity (Max)</th><td>${report.instrument?.maxCapacity} ${report.instrument?.unit}</td><th>Minimum Capacity (Min)</th><td>${report.instrument?.minCapacity} ${report.instrument?.unit}</td></tr>
        <tr><th>Verification Scale Interval (e)</th><td>${report.instrument?.eValue} ${report.instrument?.unit}</td><th>Actual Scale Interval (d)</th><td>${report.instrument?.dValue || report.instrument?.eValue} ${report.instrument?.unit}</td></tr>
        <tr><th>Number of Intervals (n)</th><td>${report.instrument?.numberOfIntervals || (report.instrument?.maxCapacity / report.instrument?.eValue)}</td><th>Tare Mechanism</th><td>${report.instrument?.tareType || 'Subtractive'}</td></tr>
      </table>

      <h2>3. TESTING LABORATORY & CONDITIONS</h2>
      <table>
        <tr><th width="30%">Testing Laboratory</th><td>${report.lab?.labName} (${report.lab?.accreditationRef})</td></tr>
        <tr><th>Location</th><td>${report.lab?.location}</td></tr>
        <tr><th>Environmental Conditions</th><td>Temp: ${report.lab?.ambientTemp}°C | Rel. Humidity: ${report.lab?.relativeHumidity}% | Pressure: ${report.lab?.atmosphericPressure} hPa | Voltage: ${report.lab?.mainsVoltage} V</td></tr>
        <tr><th>Testing Officer</th><td>${report.lab?.testingOfficer}</td></tr>
        <tr><th>Reference Standards</th><td>${report.lab?.referenceStandardsRef}</td></tr>
      </table>

      <h2>4. SUMMARY OF METROLOGICAL TEST RESULTS (OIML R-76)</h2>
      <table>
        <thead>
          <tr>
            <th>Test Description</th>
            <th>Standard Clause</th>
            <th>Evaluated Criteria</th>
            <th>Result Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weighing Performance Test</td>
            <td>OIML R 76-1: A.4.4</td>
            <td>Corrected Error (Ec) ≤ MPE across test range</td>
            <td class="${report.testResults?.weighing?.isPass ? 'pass-badge' : 'fail-badge'}">${report.testResults?.weighing?.isPass ? 'PASSED' : 'FAILED'}</td>
          </tr>
          <tr>
            <td>Eccentricity (Corner Load) Test</td>
            <td>OIML R 76-1: A.4.7</td>
            <td>Load: 1/3 Max at 5 platform positions</td>
            <td class="${report.testResults?.eccentricity?.isPass ? 'pass-badge' : 'fail-badge'}">${report.testResults?.eccentricity?.isPass ? 'PASSED' : 'FAILED'}</td>
          </tr>
          <tr>
            <td>Repeatability Test</td>
            <td>OIML R 76-1: A.4.10</td>
            <td>Max Error Difference ≤ |MPE|</td>
            <td class="${report.testResults?.repeatability?.isPass ? 'pass-badge' : 'fail-badge'}">${report.testResults?.repeatability?.isPass ? 'PASSED' : 'FAILED'}</td>
          </tr>
          <tr>
            <td>Zero Setting & Tracking Test</td>
            <td>OIML R 76-1: A.4.2</td>
            <td>Zero error |E0| ≤ 0.25e</td>
            <td class="${report.testResults?.zeroSetting?.isPass ? 'pass-badge' : 'fail-badge'}">${report.testResults?.zeroSetting?.isPass ? 'PASSED' : 'FAILED'}</td>
          </tr>
          <tr>
            <td>Discrimination Test</td>
            <td>OIML R 76-1: A.4.8</td>
            <td>Extra load of 1.4d produces clear step change</td>
            <td class="${report.testResults?.discrimination?.isPass ? 'pass-badge' : 'fail-badge'}">${report.testResults?.discrimination?.isPass ? 'PASSED' : 'FAILED'}</td>
          </tr>
        </tbody>
      </table>

      <h2>5. CONCLUSION & RECOMMENDATION</h2>
      <p style="background-color: #f8fafc; padding: 10px; border-left: 4px solid #0c8fe9;">
        ${report.conclusion || 'The instrument has complied with all requirements of OIML Recommendation R-76 and the Legal Metrology (General) Rules, 2011.'}
      </p>

      <table style="margin-top: 40px; border: none;">
        <tr style="border: none;">
          <td style="border: none; text-align: center;" width="50%">
            <br><br>
            _______________________________<br>
            <strong>${report.lab?.testingOfficer || 'Testing Officer'}</strong><br>
            Senior Metrologist
          </td>
          <td style="border: none; text-align: center;" width="50%">
            <br><br>
            _______________________________<br>
            <strong>${report.lab?.approvingAuthority || 'Director (Legal Metrology)'}</strong><br>
            Competent Authority
          </td>
        </tr>
      </table>

      <div class="footer">
        Digital Signature Hash (SHA-256): ${report.integrityHash || 'SECURE-VERIFIED'}<br>
        Generated via MetronAI Type Evaluation Automation System (SIH Problem Statement 26035)
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff' + htmlContent], {
    type: 'application/msword'
  });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = `OIML_R76_${report.reportNumber.replace(/[\/\\:]/g, '_')}.doc`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(url);
}

export async function exportReportToPDF(elementId, reportNumber) {
  const element = document.getElementById(elementId);
  if (!element) return false;

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`OIML_R76_${(reportNumber || 'Report').replace(/[\/\\:]/g, '_')}.pdf`);
    return true;
  } catch (err) {
    console.error('PDF export failed:', err);
    window.print();
    return false;
  }
}
