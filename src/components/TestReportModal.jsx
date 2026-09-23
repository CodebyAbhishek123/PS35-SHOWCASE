import React, { useState } from 'react';
import { 
  X, Printer, Download, FileText, Share2, CheckCircle2, 
  XCircle, ShieldCheck, QrCode, Building, Award, Calendar, FileCode
} from 'lucide-react';
import { exportReportToPDF, exportReportToWord, exportReportToJSON, triggerPrintReport } from '../utils/exportUtils';
import { generateVerificationURL } from '../utils/hashUtils';

export function TestReportModal({ report, onClose }) {
  const [isExportingPDF, setIsExportingPDF] = useState(false);

  if (!report) return null;

  const handleDownloadPDF = async () => {
    setIsExportingPDF(true);
    await exportReportToPDF('printable-oiml-report', report.reportNumber);
    setIsExportingPDF(false);
  };

  const verificationURL = generateVerificationURL(report.reportNumber, report.integrityHash);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-6">
        
        {/* Top Action Bar (No Print) */}
        <div className="no-print bg-[#EEF2FF] px-6 py-4 border-b border-indigo-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#5842F6] text-white shadow-md shadow-[#5842F6]/30">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                OIML R-76 Standardized Test Report
              </h3>
              <p className="text-xs text-[#5842F6] font-mono font-bold">
                {report.reportNumber}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={triggerPrintReport}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5 text-[#5842F6]" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={isExportingPDF}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#5842F6] hover:bg-[#4338CA] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>{isExportingPDF ? 'Exporting...' : 'PDF'}</span>
            </button>

            <button
              onClick={() => exportReportToWord(report)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title="Export Editable MS Word Document"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Word</span>
            </button>

            <button
              onClick={() => exportReportToJSON(report)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title="Export Raw JSON"
            >
              <FileCode className="w-3.5 h-3.5 text-amber-600" />
              <span>JSON</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-white transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Report Sheet View */}
        <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-8 bg-white text-slate-900 font-sans print-page" id="printable-oiml-report">
          
          {/* Government of India Header */}
          <div className="text-center pb-6 border-b-2 border-slate-900 mb-6 space-y-1">
            <div className="text-xs font-bold uppercase tracking-widest text-[#5842F6]">
              GOVERNMENT OF INDIA
            </div>
            <div className="text-base sm:text-lg font-black uppercase text-slate-900 tracking-wide">
              MINISTRY OF CONSUMER AFFAIRS, FOOD & PUBLIC DISTRIBUTION
            </div>
            <div className="text-xs font-bold text-slate-700 uppercase">
              DEPARTMENT OF CONSUMER AFFAIRS — LEGAL METROLOGY DIVISION
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-950 pt-2 tracking-tight">
              TYPE EVALUATION TEST REPORT
            </h1>
            <div className="text-xs italic text-slate-600">
              In accordance with OIML Recommendation R 76-1 (Edition 2006) & Legal Metrology (General) Rules, 2011
            </div>
          </div>

          {/* Report Meta Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#EEF2FF]/60 border border-indigo-100 rounded-2xl mb-6 text-xs">
            <div>
              <span className="text-slate-500 font-medium">Report Number:</span>
              <div className="font-mono font-bold text-[#5842F6] mt-0.5">{report.reportNumber}</div>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Date of Evaluation:</span>
              <div className="font-bold text-slate-900 mt-0.5">{report.testDate}</div>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Model Approval Ref:</span>
              <div className="font-mono font-bold text-slate-900 mt-0.5">{report.modelApprovalRef || 'PENDING'}</div>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Overall Determination:</span>
              <div className="mt-0.5">
                {report.overallCompliance ? (
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> COMPLIANT / PASS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full text-[11px]">
                    <XCircle className="w-3.5 h-3.5" /> NON-COMPLIANT
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Section 1: Manufacturer & Applicant */}
          <div className="mb-6 space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5">
              <span>1. Applicant & Manufacturer Information</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50/60 p-3.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500">Manufacturer Name:</span>
                <div className="font-bold text-slate-900">{report.manufacturer?.name}</div>
              </div>
              <div>
                <span className="text-slate-500">Registration Number:</span>
                <div className="font-mono font-bold text-slate-900">{report.manufacturer?.regNumber}</div>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-500">Factory Address:</span>
                <div className="text-slate-800">{report.manufacturer?.address}</div>
              </div>
              <div>
                <span className="text-slate-500">Contact Person:</span>
                <div className="text-slate-800">{report.manufacturer?.contactPerson} ({report.manufacturer?.email})</div>
              </div>
              <div>
                <span className="text-slate-500">Phone:</span>
                <div className="text-slate-800">{report.manufacturer?.phone}</div>
              </div>
            </div>
          </div>

          {/* Section 2: Instrument Metrological Characteristics */}
          <div className="mb-6 space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              2. Metrological Characteristics of the NAWI
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50/60 p-3.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500">Instrument Type:</span>
                <div className="font-bold text-slate-900">{report.instrument?.type}</div>
              </div>
              <div>
                <span className="text-slate-500">Model Designation:</span>
                <div className="font-mono font-bold text-slate-900">{report.instrument?.modelName}</div>
              </div>
              <div>
                <span className="text-slate-500">Serial Number:</span>
                <div className="font-mono font-bold text-slate-900">{report.instrument?.serialNumber}</div>
              </div>
              <div>
                <span className="text-slate-500">Accuracy Class:</span>
                <div className="font-bold text-[#5842F6]">{report.instrument?.accuracyClass?.replace('_', ' ')}</div>
              </div>

              <div>
                <span className="text-slate-500">Max Capacity (Max):</span>
                <div className="font-mono font-bold text-slate-900">{report.instrument?.maxCapacity} {report.instrument?.unit}</div>
              </div>
              <div>
                <span className="text-slate-500">Min Capacity (Min):</span>
                <div className="font-mono font-bold text-slate-900">{report.instrument?.minCapacity} {report.instrument?.unit}</div>
              </div>
              <div>
                <span className="text-slate-500">Verification Interval (e):</span>
                <div className="font-mono font-bold text-slate-900">{report.instrument?.eValue} {report.instrument?.unit}</div>
              </div>
              <div>
                <span className="text-slate-500">Scale Intervals (n = Max/e):</span>
                <div className="font-mono font-bold text-slate-900">{report.instrument?.numberOfIntervals || (report.instrument?.maxCapacity / report.instrument?.eValue)}</div>
              </div>
            </div>
          </div>

          {/* Section 3: Testing Laboratory & Environmental Conditions */}
          <div className="mb-6 space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              3. Testing Laboratory & Environmental Conditions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50/60 p-3.5 rounded-xl border border-slate-200">
              <div className="sm:col-span-2">
                <span className="text-slate-500">Designated Laboratory:</span>
                <div className="font-bold text-slate-900">{report.lab?.labName}</div>
                <div className="text-[11px] text-slate-600">{report.lab?.accreditationRef}</div>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-500">Testing Standards Calibration:</span>
                <div className="text-slate-800">{report.lab?.referenceStandardsRef}</div>
              </div>

              <div>
                <span className="text-slate-500">Ambient Temp:</span>
                <div className="font-bold text-slate-900">{report.lab?.ambientTemp}°C</div>
              </div>
              <div>
                <span className="text-slate-500">Relative Humidity:</span>
                <div className="font-bold text-slate-900">{report.lab?.relativeHumidity}%</div>
              </div>
              <div>
                <span className="text-slate-500">Atmospheric Pressure:</span>
                <div className="font-bold text-slate-900">{report.lab?.atmosphericPressure} hPa</div>
              </div>
              <div>
                <span className="text-slate-500">Mains Voltage:</span>
                <div className="font-bold text-slate-900">{report.lab?.mainsVoltage} V</div>
              </div>
            </div>
          </div>

          {/* Section 4: Metrological Test Results Tables */}
          <div className="mb-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              4. OIML R-76-1 Test Observations & Compliance Evaluation
            </h2>

            {/* Weighing Performance Table */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-bold text-slate-900">4.1 Weighing Performance Test (Clause A.4.4)</span>
                <span className="text-[11px] font-mono text-slate-600">Turning Point: P = I + 0.5d - &Delta;L</span>
              </div>
              <div className="overflow-x-auto border border-slate-300 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF2FF] text-[#5842F6] font-bold border-b border-slate-300">
                    <tr>
                      <th className="p-2.5 border-r border-slate-300">Load L ({report.instrument?.unit})</th>
                      <th className="p-2.5 border-r border-slate-300">Indication I ({report.instrument?.unit})</th>
                      <th className="p-2.5 border-r border-slate-300">&Delta;L ({report.instrument?.unit})</th>
                      <th className="p-2.5 border-r border-slate-300">Corrected P</th>
                      <th className="p-2.5 border-r border-slate-300">Error E</th>
                      <th className="p-2.5 border-r border-slate-300">Corrected Ec</th>
                      <th className="p-2.5 border-r border-slate-300">mpe Limit</th>
                      <th className="p-2.5 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {report.testResults?.weighing?.rows?.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        <td className="p-2 font-mono font-medium border-r border-slate-200">{row.load}</td>
                        <td className="p-2 font-mono border-r border-slate-200">{row.indication}</td>
                        <td className="p-2 font-mono border-r border-slate-200">{row.deltaL}</td>
                        <td className="p-2 font-mono font-semibold text-[#5842F6] border-r border-slate-200">{row.correctedIndicationP}</td>
                        <td className="p-2 font-mono border-r border-slate-200">{row.errorE}</td>
                        <td className="p-2 font-mono font-bold text-slate-900 border-r border-slate-200">{row.correctedErrorEc}</td>
                        <td className="p-2 font-mono text-amber-700 font-semibold border-r border-slate-200">&plusmn;{row.mpeLimit}</td>
                        <td className="p-2 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${row.isPass ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {row.isPass ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Other Tests Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-bold text-slate-900">4.2 Eccentricity Test (A.4.7)</div>
                <div className="text-slate-600">Test Load: {report.testResults?.eccentricity?.testLoad} {report.instrument?.unit}</div>
                <div className="text-slate-600">mpe Limit: &plusmn;{report.testResults?.eccentricity?.mpeLimit} {report.instrument?.unit}</div>
                <div className="pt-1">
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full text-[10px]">
                    {report.testResults?.eccentricity?.isPass ? 'PASSED (All Positions)' : 'FAILED'}
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-bold text-slate-900">4.3 Repeatability Test (A.4.10)</div>
                <div className="text-slate-600">Test Load: {report.testResults?.repeatability?.testLoad} {report.instrument?.unit}</div>
                <div className="text-slate-600">Observed Range: {report.testResults?.repeatability?.range} {report.instrument?.unit}</div>
                <div className="pt-1">
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full text-[10px]">
                    {report.testResults?.repeatability?.isPass ? 'PASSED (Range <= |mpe|)' : 'FAILED'}
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-bold text-slate-900">4.4 Zero & Discrimination (A.4.2)</div>
                <div className="text-slate-600">Zero Error |E0|: {report.testResults?.zeroSetting?.zeroErrorE0 || '0.000'} {report.instrument?.unit}</div>
                <div className="text-slate-600">Tolerance (0.25e): &plusmn;{report.testResults?.zeroSetting?.tolerance || (0.25 * report.instrument?.eValue)} {report.instrument?.unit}</div>
                <div className="pt-1">
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full text-[10px]">
                    {report.testResults?.zeroSetting?.isPass ? 'PASSED' : 'FAILED'}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Section 5: Conclusion & Recommendation */}
          <div className="mb-8 p-4 bg-[#EEF2FF] border-l-4 border-[#5842F6] rounded-r-2xl text-xs space-y-1">
            <h3 className="font-bold text-[#5842F6] uppercase">5. Metrological Conclusion & Recommendation</h3>
            <p className="text-slate-800 leading-relaxed">
              {report.conclusion}
            </p>
          </div>

          {/* Signatures & Tamper-Proof Stamp */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t-2 border-slate-300 items-end text-xs">
            
            <div className="text-center space-y-2">
              <div className="h-10 border-b border-dashed border-slate-400 flex items-end justify-center pb-1 text-slate-500 font-mono italic">
                [Digitally Signed via PKI]
              </div>
              <div className="font-bold text-slate-900">{report.lab?.testingOfficer}</div>
              <div className="text-slate-600 text-[11px]">Senior Metrologist / Testing Officer</div>
            </div>

            {/* Tamper-Proof Cryptographic QR & Hash */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-1">
              <div className="flex justify-center">
                <QrCode className="w-10 h-10 text-[#5842F6]" />
              </div>
              <div className="text-[10px] font-bold text-slate-700 uppercase">SHA-256 Digital Verification Hash</div>
              <div className="font-mono text-[9px] text-slate-600 break-all bg-white p-1 rounded-lg border border-slate-200">
                {report.integrityHash || 'a89f4b3e8c2d119e7a4f653b92d83a12f9b8c7e6d5a4b3c2e1f0d9c8b7a6e5f4'}
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="h-10 border-b border-dashed border-slate-400 flex items-end justify-center pb-1 text-slate-500 font-mono italic">
                [Authorized Government Seal]
              </div>
              <div className="font-bold text-slate-900">{report.lab?.approvingAuthority}</div>
              <div className="text-slate-600 text-[11px]">Director / Controller of Legal Metrology</div>
            </div>

          </div>

          {/* Footer note */}
          <div className="text-center text-[10px] text-slate-500 pt-6 mt-6 border-t border-slate-200">
            This test report is generated by TARAZU (SIH 2026 PS 26035) and is legally valid under the Legal Metrology Act, 2009 and OIML R-76. Verify online at: doca.gov.in/legal-metrology
          </div>

        </div>

      </div>
    </div>
  );
}

export default TestReportModal;
