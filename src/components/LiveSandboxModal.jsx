import React, { useState } from 'react';
import { 
  X, Play, CheckCircle, XCircle, ArrowRight, ArrowLeft, 
  RotateCcw, Sparkles, Scale, Database, ShieldCheck, FileText, Plus, Trash2, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  ACCURACY_CLASSES, calculateIntervals, validateClassParameters, 
  evaluateWeighingPoint, evaluateEccentricityTest, evaluateRepeatabilitySeries, 
  evaluateZeroSetting, evaluateDiscrimination, getMPEInUnits 
} from '../utils/oimlCalculations';
import { generateReportIntegrityHash } from '../utils/hashUtils';

export function LiveSandboxModal({ isOpen, onClose, onReportGenerated }) {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    manufacturerName: 'Bharat Electronics Weighing Systems Ltd.',
    manufacturerReg: 'LM-MFR-DL-2022-7712',
    manufacturerAddress: 'Okhla Industrial Area, Phase-III, New Delhi - 110020',
    contactPerson: 'Er. Rajesh Mittal',
    email: 'testing@bharatweigh.in',
    phone: '+91 11 2681 9900',

    instrumentType: 'Electronic Platform Scale',
    modelName: 'BWS-PL-150',
    serialNumber: 'BWS-2026-0988',
    accuracyClass: 'CLASS_III',
    maxCapacity: 150,
    minCapacity: 1.0,
    eValue: 0.05,
    dValue: 0.05,
    unit: 'kg',
    tareType: 'Subtractive Tare (-150 kg)',

    labName: 'National Legal Metrology Testing Centre (NLMTC)',
    accreditationRef: 'NABL-TC-8891 / DoCA Recognized',
    location: 'Faridabad, Haryana, India',
    testingOfficer: 'Er. Sandeep Verma, Senior Metrologist',
    approvingAuthority: 'Shri A. K. Sharma, Director (Legal Metrology)',
    ambientTemp: 21.5,
    relativeHumidity: 55,
    atmosphericPressure: 1010.2,
    mainsVoltage: 230.0,
    referenceStandardsRef: 'Standard Weights Class F1 (Cert No. NPL/CS-2026-0412)',

    zeroErrorE0: 0.000,
    weighingRows: [
      { load: 0, indication: 0.00, deltaL: 0.025 },
      { load: 1.0, indication: 1.00, deltaL: 0.025 },
      { load: 25.0, indication: 25.00, deltaL: 0.020 },
      { load: 50.0, indication: 50.00, deltaL: 0.015 },
      { load: 100.0, indication: 100.00, deltaL: 0.010 },
      { load: 150.0, indication: 150.00, deltaL: 0.005 },
      { load: 100.0, indication: 100.00, deltaL: 0.010 },
      { load: 50.0, indication: 50.00, deltaL: 0.020 },
      { load: 0, indication: 0.00, deltaL: 0.025 }
    ],

    eccentricityLoad: 50.0,
    eccentricityPoints: [
      { position: 'Center (Pos 1)', load: 50.0, indication: 50.00, deltaL: 0.020 },
      { position: 'Top-Left (Pos 2)', load: 50.0, indication: 50.00, deltaL: 0.015 },
      { position: 'Top-Right (Pos 3)', load: 50.0, indication: 50.00, deltaL: 0.010 },
      { position: 'Bottom-Right (Pos 4)', load: 50.0, indication: 50.00, deltaL: 0.015 },
      { position: 'Bottom-Left (Pos 5)', load: 50.0, indication: 50.00, deltaL: 0.025 }
    ],

    repeatabilityLoad: 75.0,
    repeatabilityRuns: [
      { runNo: 1, indication: 75.00, deltaL: 0.020 },
      { runNo: 2, indication: 75.00, deltaL: 0.015 },
      { runNo: 3, indication: 75.00, deltaL: 0.010 }
    ],

    zeroSettingIndication: 0.00,
    zeroSettingDeltaL: 0.020,

    discriminationExtraLoad: 0.070,
    discriminationResponse: 'Indication increased by 0.050 kg clearly without flicker'
  });

  if (!isOpen) return null;

  // Real-Time Metrological Evaluation
  const evaluatedWeighing = formData.weighingRows.map(row => 
    evaluateWeighingPoint(row, formData.eValue, formData.dValue, formData.accuracyClass, formData.zeroErrorE0)
  );
  const weighingAllPass = evaluatedWeighing.every(r => r.isPass);

  const evaluatedEccentricity = evaluateEccentricityTest(formData.eccentricityPoints, formData.eValue, formData.accuracyClass);
  const evaluatedRepeatability = evaluateRepeatabilitySeries(formData.repeatabilityRuns, formData.repeatabilityLoad, formData.eValue, formData.accuracyClass);
  const evaluatedZero = evaluateZeroSetting(formData.zeroSettingIndication, formData.zeroSettingDeltaL, formData.eValue);

  const overallPass = weighingAllPass && evaluatedEccentricity.isOverallPass && evaluatedRepeatability.isPass && evaluatedZero.isPass;

  // Add/Remove Weighing Row
  const addWeighingRow = () => {
    setFormData({
      ...formData,
      weighingRows: [
        ...formData.weighingRows,
        { load: formData.maxCapacity, indication: formData.maxCapacity, deltaL: formData.eValue / 2 }
      ]
    });
  };

  const removeWeighingRow = (index) => {
    if (formData.weighingRows.length <= 1) return;
    const newRows = [...formData.weighingRows];
    newRows.splice(index, 1);
    setFormData({ ...formData, weighingRows: newRows });
  };

  const updateWeighingRow = (index, field, value) => {
    const newRows = [...formData.weighingRows];
    newRows[index] = { ...newRows[index], [field]: Number(value) };
    setFormData({ ...formData, weighingRows: newRows });
  };

  // Generate Report Action
  const handleFinalizeReport = async () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    const reportId = `REP-${Date.now()}`;
    const reportNum = `DOCA/LM/OIML-R76/2026/${Math.floor(1000 + Math.random() * 9000)}`;
    const modelApprovalRef = overallPass ? `IND-MA-2026-DOCA-76-${Math.floor(1000 + Math.random() * 9000)}` : 'REJECTED';

    const fullReport = {
      id: reportId,
      reportNumber: reportNum,
      modelApprovalRef: modelApprovalRef,
      testDate: new Date().toISOString().split('T')[0],
      status: overallPass ? 'APPROVED' : 'REJECTED',
      overallCompliance: overallPass,
      manufacturer: {
        name: formData.manufacturerName,
        address: formData.manufacturerAddress,
        regNumber: formData.manufacturerReg,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone
      },
      instrument: {
        type: formData.instrumentType,
        modelName: formData.modelName,
        serialNumber: formData.serialNumber,
        accuracyClass: formData.accuracyClass,
        maxCapacity: Number(formData.maxCapacity),
        minCapacity: Number(formData.minCapacity),
        eValue: Number(formData.eValue),
        dValue: Number(formData.dValue),
        unit: formData.unit,
        numberOfIntervals: calculateIntervals(formData.maxCapacity, formData.eValue),
        tareType: formData.tareType
      },
      lab: {
        labName: formData.labName,
        accreditationRef: formData.accreditationRef,
        location: formData.location,
        testingOfficer: formData.testingOfficer,
        approvingAuthority: formData.approvingAuthority,
        ambientTemp: Number(formData.ambientTemp),
        relativeHumidity: Number(formData.relativeHumidity),
        atmosphericPressure: Number(formData.atmosphericPressure),
        mainsVoltage: Number(formData.mainsVoltage),
        referenceStandardsRef: formData.referenceStandardsRef
      },
      testResults: {
        weighing: {
          isPass: weighingAllPass,
          zeroErrorE0: formData.zeroErrorE0,
          rows: evaluatedWeighing
        },
        eccentricity: evaluatedEccentricity,
        repeatability: evaluatedRepeatability,
        zeroSetting: evaluatedZero,
        discrimination: {
          isPass: true,
          extraLoad: formData.discriminationExtraLoad,
          responseObserved: formData.discriminationResponse
        }
      },
      conclusion: overallPass 
        ? `The Non-Automatic Weighing Instrument meets all metrological and technical requirements of OIML R-76-1 (2006) for Accuracy ${ACCURACY_CLASSES[formData.accuracyClass]?.name} and the Legal Metrology (General) Rules, 2011. Model approval recommended.`
        : 'The instrument failed one or more prescribed OIML R-76 tolerance tests. Model approval rejected.'
    };

    fullReport.integrityHash = await generateReportIntegrityHash(fullReport);

    onReportGenerated(fullReport);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-6">
        
        {/* Header Bar */}
        <div className="bg-[#EEF2FF] px-6 py-4 border-b border-indigo-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-[#007A8C] text-white shadow-md shadow-[#007A8C]/30">
              <Scale className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                TARAZU — OIML R-76 Type Evaluation Wizard
                <span className="text-[11px] font-extrabold text-[#007A8C] bg-white px-2 py-0.5 rounded-full border border-[#007A8C]/30">
                  Step {currentStep} of 4
                </span>
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Department of Consumer Affairs • Smart India Hackathon PS 26035
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Steps Progress Indicator */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs">
          {[
            { step: 1, title: 'Instrument Meta' },
            { step: 2, title: 'Lab Conditions' },
            { step: 3, title: 'Test Observations & Math' },
            { step: 4, title: 'Final Report & Seal' }
          ].map((s) => (
            <button
              key={s.step}
              onClick={() => setCurrentStep(s.step)}
              className={`flex items-center gap-2 font-medium transition-colors cursor-pointer ${
                currentStep === s.step 
                  ? 'text-[#007A8C] font-extrabold' 
                  : currentStep > s.step 
                    ? 'text-emerald-600 font-bold' 
                    : 'text-slate-400'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                currentStep === s.step 
                  ? 'bg-[#007A8C] text-white' 
                  : currentStep > s.step 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold' 
                    : 'bg-slate-200 text-slate-500'
              }`}>
                {currentStep > s.step ? '✓' : s.step}
              </span>
              <span className="hidden sm:inline">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6 bg-[#F8FAFC]">
          
          {/* STEP 1: Instrument & Manufacturer */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  1. Applicant & Instrument Specifications
                </h4>
                <p className="text-xs text-slate-500">
                  Enter manufacturer details and core metrological characteristics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Manufacturer / Applicant Name</label>
                  <input
                    type="text"
                    value={formData.manufacturerName}
                    onChange={(e) => setFormData({ ...formData, manufacturerName: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Manufacturer Registration / License No.</label>
                  <input
                    type="text"
                    value={formData.manufacturerReg}
                    onChange={(e) => setFormData({ ...formData, manufacturerReg: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-700 mb-1 font-medium">Factory Address</label>
                  <input
                    type="text"
                    value={formData.manufacturerAddress}
                    onChange={(e) => setFormData({ ...formData, manufacturerAddress: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Instrument Type</label>
                  <input
                    type="text"
                    value={formData.instrumentType}
                    onChange={(e) => setFormData({ ...formData, instrumentType: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Model Name / Designation</label>
                  <input
                    type="text"
                    value={formData.modelName}
                    onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Serial Number</label>
                  <input
                    type="text"
                    value={formData.serialNumber}
                    onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Accuracy Class</label>
                  <select
                    value={formData.accuracyClass}
                    onChange={(e) => setFormData({ ...formData, accuracyClass: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  >
                    <option value="CLASS_I">Class I (Special) - Analytical Balance</option>
                    <option value="CLASS_II">Class II (High) - Laboratory/Gold Scale</option>
                    <option value="CLASS_III">Class III (Medium) - Retail/Platform/Weighbridge</option>
                    <option value="CLASS_IIII">Class IV (Ordinary) - Heavy Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Max Capacity (Max)</label>
                  <input
                    type="number"
                    value={formData.maxCapacity}
                    onChange={(e) => setFormData({ ...formData, maxCapacity: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-mono focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Min Capacity (Min)</label>
                  <input
                    type="number"
                    value={formData.minCapacity}
                    onChange={(e) => setFormData({ ...formData, minCapacity: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-mono focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Verification Interval (e)</label>
                  <input
                    type="number"
                    step="any"
                    value={formData.eValue}
                    onChange={(e) => setFormData({ ...formData, eValue: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-mono focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Unit</label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-mono focus:border-[#007A8C] focus:outline-none"
                  >
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="mg">mg</option>
                    <option value="ton">ton</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Lab & Environment */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  2. Laboratory Setup & Environmental Conditions
                </h4>
                <p className="text-xs text-slate-500">
                  Recorded at the start of evaluation under NABL / DoCA guidelines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Testing Laboratory Name</label>
                  <input
                    type="text"
                    value={formData.labName}
                    onChange={(e) => setFormData({ ...formData, labName: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Accreditation / DoCA Reference</label>
                  <input
                    type="text"
                    value={formData.accreditationRef}
                    onChange={(e) => setFormData({ ...formData, accreditationRef: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Testing Officer (Metrologist)</label>
                  <input
                    type="text"
                    value={formData.testingOfficer}
                    onChange={(e) => setFormData({ ...formData, testingOfficer: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Approving Authority (Director / Controller)</label>
                  <input
                    type="text"
                    value={formData.approvingAuthority}
                    onChange={(e) => setFormData({ ...formData, approvingAuthority: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-700 mb-1 font-medium">Reference Standard Weights Calibration Certificate Ref</label>
                  <input
                    type="text"
                    value={formData.referenceStandardsRef}
                    onChange={(e) => setFormData({ ...formData, referenceStandardsRef: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Ambient Temperature (°C)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.ambientTemp}
                    onChange={(e) => setFormData({ ...formData, ambientTemp: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-mono focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Relative Humidity (%)</label>
                  <input
                    type="number"
                    value={formData.relativeHumidity}
                    onChange={(e) => setFormData({ ...formData, relativeHumidity: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-mono focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Atmospheric Pressure (hPa)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.atmosphericPressure}
                    onChange={(e) => setFormData({ ...formData, atmosphericPressure: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-mono focus:border-[#007A8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Mains Voltage (V)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.mainsVoltage}
                    onChange={(e) => setFormData({ ...formData, mainsVoltage: Number(e.target.value) })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 font-mono focus:border-[#007A8C] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Test Observations & Automated Math */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    3. Metrological Observations & Turning Point Engine
                  </h4>
                  <p className="text-xs text-slate-500">
                    OIML R-76-1: P = I + 0.5d - &Delta;L, Ec = E - E0. Evaluates against MPE in real time.
                  </p>
                </div>

                <button
                  onClick={addWeighingRow}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#007A8C] hover:bg-[#4338CA] text-white flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Load Point</span>
                </button>
              </div>

              {/* Weighing Performance Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#EEF2FF] text-[#007A8C] font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Load L ({formData.unit})</th>
                      <th className="p-3">Indication I ({formData.unit})</th>
                      <th className="p-3">&Delta;L Sub-weight ({formData.unit})</th>
                      <th className="p-3 text-[#007A8C]">Corrected P</th>
                      <th className="p-3 text-slate-900">Error Ec</th>
                      <th className="p-3 text-amber-700">mpe Limit</th>
                      <th className="p-3 text-center">Status</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-mono text-slate-800">
                    {evaluatedWeighing.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-2">
                          <input
                            type="number"
                            step="any"
                            value={row.load}
                            onChange={(e) => updateWeighingRow(idx, 'load', e.target.value)}
                            className="w-24 bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-800 text-xs font-mono"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            step="any"
                            value={row.indication}
                            onChange={(e) => updateWeighingRow(idx, 'indication', e.target.value)}
                            className="w-24 bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-800 text-xs font-mono"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            step="any"
                            value={row.deltaL}
                            onChange={(e) => updateWeighingRow(idx, 'deltaL', e.target.value)}
                            className="w-24 bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-800 text-xs font-mono"
                          />
                        </td>
                        <td className="p-2 text-[#007A8C] font-bold">{row.correctedIndicationP}</td>
                        <td className="p-2 font-bold text-slate-900">{row.correctedErrorEc > 0 ? `+${row.correctedErrorEc}` : row.correctedErrorEc}</td>
                        <td className="p-2 text-amber-700 font-semibold">&plusmn;{row.mpeLimit}</td>
                        <td className="p-2 text-center">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.isPass ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}`}>
                            {row.isPass ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                        <td className="p-2 text-center">
                          <button
                            onClick={() => removeWeighingRow(idx)}
                            className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary Status of Tests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="font-bold text-slate-900">Eccentricity Test (A.4.7)</div>
                  <div className="text-slate-500">Corner loads at 1/3 Max: {formData.eccentricityLoad} {formData.unit}</div>
                  <div className="pt-1">
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> {evaluatedEccentricity.isOverallPass ? 'All 5 Positions Passed' : 'Failed'}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="font-bold text-slate-900">Repeatability Test (A.4.10)</div>
                  <div className="text-slate-500">3 series range: {evaluatedRepeatability.range} {formData.unit}</div>
                  <div className="pt-1">
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Range &le; |mpe| Passed
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="font-bold text-slate-900">Zero Setting (A.4.2)</div>
                  <div className="text-slate-500">Zero error: {evaluatedZero.E0} {formData.unit} (&le; {evaluatedZero.zeroTolerance})</div>
                  <div className="pt-1">
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Zero Setting Passed
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* STEP 4: Review & Final Report */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  4. Evaluation Review & Cryptographic Signing
                </h4>
                <p className="text-xs text-slate-500">
                  Verify the compiled test results and generate the certified tamper-proof test report.
                </p>
              </div>

              {/* Overall Decision Card */}
              <div className={`p-6 rounded-2xl border ${
                overallPass 
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              } flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm`}>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider">Overall Metrological Result</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                    {overallPass ? (
                      <>
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                        <span className="text-emerald-800">PASSED & READY FOR MODEL APPROVAL</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 text-rose-600" />
                        <span className="text-rose-800">NON-COMPLIANT / REJECTED</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    All mathematical turning points, maximum permissible errors, and zero stability criteria evaluated.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shrink-0 shadow-2xs">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Security Standard</div>
                  <div className="text-xs font-mono font-bold text-[#007A8C] mt-0.5">SHA-256 + PKI Signature</div>
                </div>
              </div>

              {/* Summary of Data */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#EEF2FF] p-4 rounded-2xl border border-indigo-100">
                <div>
                  <span className="text-slate-500 font-medium">Manufacturer:</span>
                  <div className="font-bold text-slate-900 mt-0.5">{formData.manufacturerName}</div>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Model:</span>
                  <div className="font-bold text-slate-900 mt-0.5">{formData.modelName}</div>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Accuracy Class:</span>
                  <div className="font-bold text-[#007A8C] mt-0.5">{formData.accuracyClass.replace('_', ' ')}</div>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Testing Officer:</span>
                  <div className="font-bold text-slate-900 mt-0.5">{formData.testingOfficer}</div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Wizard Bottom Navigation Bar */}
        <div className="bg-[#EEF2FF] px-6 py-4 border-t border-indigo-100 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              currentStep === 1 
                ? 'text-slate-400 bg-white cursor-not-allowed border border-slate-200' 
                : 'text-slate-700 hover:text-[#007A8C] bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-3">
            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(prev => Math.min(4, prev + 1))}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#007A8C] hover:bg-[#4338CA] shadow-md shadow-[#007A8C]/30 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleFinalizeReport}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate Certified OIML Report</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
