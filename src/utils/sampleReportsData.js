/**
 * Comprehensive Benchmark Sample Reports for OIML R-76 Type Evaluation
 * Compliant with Legal Metrology Act 2009 / Model Approval standards
 */

export const INITIAL_REPORTS = [
  {
    id: 'REP-2026-001',
    reportNumber: 'DOCA/LM/OIML-R76/2026/0842',
    modelApprovalRef: 'IND-MA-2026-DOCA-76-0842',
    testDate: '2026-09-02',
    status: 'APPROVED',
    overallCompliance: true,
    integrityHash: 'a89f4b3e8c2d119e7a4f653b92d83a12f9b8c7e6d5a4b3c2e1f0d9c8b7a6e5f4',
    manufacturer: {
      name: 'Eagle Precision Weighing Systems Pvt. Ltd.',
      address: 'Plot 42, Electronics City Phase II, Bengaluru, Karnataka - 560100',
      regNumber: 'LM-MFR-KA-2018-9941',
      contactPerson: 'Dr. R. K. Nambiar',
      email: 'technical@eagleprecision.in',
      phone: '+91 80 2852 4410'
    },
    instrument: {
      type: 'Electronic Platform Scale',
      modelName: 'EPS-150-PRO',
      serialNumber: 'EPS2026-09-8821',
      accuracyClass: 'CLASS_III',
      maxCapacity: 150,
      minCapacity: 1.0,
      eValue: 0.05, // 50g in kg
      dValue: 0.05,
      unit: 'kg',
      numberOfIntervals: 3000,
      tareType: 'Subtractive Tare (-150 kg)',
      loadCellModel: 'Zemic H8C-C3-250kg-6B',
      indicatorModel: 'Metron-Ind-900A'
    },
    lab: {
      labName: 'National Legal Metrology Testing Centre (NLMTC)',
      accreditationRef: 'NABL-TC-8891 / DoCA Recognized',
      location: 'Faridabad, Haryana, India',
      testingOfficer: 'Er. Sandeep Verma, Senior Metrologist',
      approvingAuthority: 'Shri A. K. Sharma, Director (Legal Metrology)',
      ambientTemp: 21.4,
      relativeHumidity: 54,
      atmosphericPressure: 1008.2,
      mainsVoltage: 230.2,
      referenceStandardsRef: 'Standard Weights Class F1 (Cert No. NPL/CS-2026-0412)'
    },
    testResults: {
      weighing: {
        isPass: true,
        zeroErrorE0: 0.000,
        rows: [
          { load: 0, indication: 0.00, deltaL: 0.025, correctedIndicationP: 0.00, errorE: 0.00, correctedErrorEc: 0.00, mpeLimit: 0.025, isPass: true },
          { load: 1.0, indication: 1.00, deltaL: 0.025, correctedIndicationP: 1.00, errorE: 0.00, correctedErrorEc: 0.00, mpeLimit: 0.025, isPass: true },
          { load: 25.0, indication: 25.00, deltaL: 0.020, correctedIndicationP: 25.005, errorE: 0.005, correctedErrorEc: 0.005, mpeLimit: 0.025, isPass: true }, // 500e = 25kg
          { load: 50.0, indication: 50.00, deltaL: 0.015, correctedIndicationP: 50.010, errorE: 0.010, correctedErrorEc: 0.010, mpeLimit: 0.050, isPass: true },
          { load: 100.0, indication: 100.00, deltaL: 0.010, correctedIndicationP: 100.015, errorE: 0.015, correctedErrorEc: 0.015, mpeLimit: 0.050, isPass: true }, // 2000e = 100kg
          { load: 150.0, indication: 150.00, deltaL: 0.005, correctedIndicationP: 150.020, errorE: 0.020, correctedErrorEc: 0.020, mpeLimit: 0.075, isPass: true }, // Max = 150kg (3000e)
          { load: 100.0, indication: 100.00, deltaL: 0.010, correctedIndicationP: 100.015, errorE: 0.015, correctedErrorEc: 0.015, mpeLimit: 0.050, isPass: true }, // Descending
          { load: 50.0, indication: 50.00, deltaL: 0.020, correctedIndicationP: 50.005, errorE: 0.005, correctedErrorEc: 0.005, mpeLimit: 0.050, isPass: true },
          { load: 0, indication: 0.00, deltaL: 0.025, correctedIndicationP: 0.00, errorE: 0.00, correctedErrorEc: 0.00, mpeLimit: 0.025, isPass: true }
        ]
      },
      eccentricity: {
        isPass: true,
        testLoad: 50.0, // 1/3 Max
        mpeLimit: 0.050,
        evaluatedPoints: [
          { position: 'Center (Pos 1)', load: 50.0, indication: 50.00, deltaL: 0.020, correctedIndicationP: 50.005, correctedErrorEc: 0.005, isPass: true },
          { position: 'Top-Left (Pos 2)', load: 50.0, indication: 50.00, deltaL: 0.015, correctedIndicationP: 50.010, correctedErrorEc: 0.010, isPass: true },
          { position: 'Top-Right (Pos 3)', load: 50.0, indication: 50.00, deltaL: 0.010, correctedIndicationP: 50.015, correctedErrorEc: 0.015, isPass: true },
          { position: 'Bottom-Right (Pos 4)', load: 50.0, indication: 50.00, deltaL: 0.015, correctedIndicationP: 50.010, correctedErrorEc: 0.010, isPass: true },
          { position: 'Bottom-Left (Pos 5)', load: 50.0, indication: 50.00, deltaL: 0.025, correctedIndicationP: 50.000, correctedErrorEc: 0.000, isPass: true }
        ]
      },
      repeatability: {
        isPass: true,
        testLoad: 75.0, // 50% Max
        mpeLimit: 0.050,
        range: 0.015,
        runs: [
          { runNo: 1, indication: 75.00, deltaL: 0.020, correctedIndicationP: 75.005, correctedErrorEc: 0.005 },
          { runNo: 2, indication: 75.00, deltaL: 0.015, correctedIndicationP: 75.010, correctedErrorEc: 0.010 },
          { runNo: 3, indication: 75.00, deltaL: 0.010, correctedIndicationP: 75.015, correctedErrorEc: 0.015 }
        ]
      },
      zeroSetting: {
        isPass: true,
        zeroErrorE0: 0.005,
        tolerance: 0.0125, // 0.25e
        zeroTrackingFunctional: true
      },
      discrimination: {
        isPass: true,
        extraLoad: 0.070, // 1.4d
        responseObserved: 'Indication increased by 0.050 kg clearly without flicker'
      },
      temperatureInfluence: {
        isPass: true,
        tempPoints: [
          { temp: '20°C (Ref)', error: 0.005, mpe: 0.050, status: 'PASS' },
          { temp: '40°C (High)', error: 0.015, mpe: 0.050, status: 'PASS' },
          { temp: '-10°C (Low)', error: -0.010, mpe: 0.050, status: 'PASS' }
        ]
      }
    },
    conclusion: 'The Non-Automatic Weighing Instrument meets all metrological and technical requirements of OIML R-76-1 (2006) for Accuracy Class III and Legal Metrology (General) Rules 2011. Model approval recommended.'
  },
  {
    id: 'REP-2026-002',
    reportNumber: 'DOCA/LM/OIML-R76/2026/0914',
    modelApprovalRef: 'IND-MA-2026-DOCA-76-0914',
    testDate: '2026-09-03',
    status: 'APPROVED',
    overallCompliance: true,
    integrityHash: 'b72c91a3f5e8d02c4b6a9e1d8f7c3b5a2e9d4c1a7b3e5f8d2c6a0e4f9b1d7a3c',
    manufacturer: {
      name: 'Acura Scientific Metrology Instruments LLP',
      address: 'Plot 18, SEZ Phase 1, Hinjewadi, Pune, Maharashtra - 411057',
      regNumber: 'LM-MFR-MH-2020-4102',
      contactPerson: 'Smt. Priya Sen, Chief Metrologist',
      email: 'approvals@acurascientific.com',
      phone: '+91 20 6790 1200'
    },
    instrument: {
      type: 'Analytical Micro-Balance',
      modelName: 'AURUM-220EX',
      serialNumber: 'ANL-2026-0091',
      accuracyClass: 'CLASS_I',
      maxCapacity: 220, // g
      minCapacity: 0.01, // 10 mg
      eValue: 0.001, // 1 mg (0.001 g)
      dValue: 0.0001, // 0.1 mg (0.0001 g)
      unit: 'g',
      numberOfIntervals: 220000,
      tareType: 'Full Subtractive Tare',
      loadCellModel: 'Monolithic Electromagnetic Force Compensation (EMFC)',
      indicatorModel: 'OLED Smart Touch Metron-X'
    },
    lab: {
      labName: 'Regional Reference Standards Laboratory (RRSL)',
      accreditationRef: 'NABL-TC-0045 / RRSL Western Region',
      location: 'Ahmedabad, Gujarat, India',
      testingOfficer: 'Dr. Vivek Joshi, Metrology Scientist',
      approvingAuthority: 'Joint Director (Legal Metrology), RRSL',
      ambientTemp: 20.1,
      relativeHumidity: 48,
      atmosphericPressure: 1012.5,
      mainsVoltage: 230.0,
      referenceStandardsRef: 'Standard Weights Class E2 (Cert No. NPL/E2-2026-009)'
    },
    testResults: {
      weighing: {
        isPass: true,
        zeroErrorE0: 0.0000,
        rows: [
          { load: 0, indication: 0.0000, deltaL: 0.00005, correctedIndicationP: 0.0000, errorE: 0.0000, correctedErrorEc: 0.0000, mpeLimit: 0.0005, isPass: true },
          { load: 0.01, indication: 0.0100, deltaL: 0.00005, correctedIndicationP: 0.0100, errorE: 0.0000, correctedErrorEc: 0.0000, mpeLimit: 0.0005, isPass: true },
          { load: 50.0, indication: 50.0000, deltaL: 0.00003, correctedIndicationP: 50.0002, errorE: 0.0002, correctedErrorEc: 0.0002, mpeLimit: 0.0005, isPass: true }, // 50000e = 50g
          { load: 100.0, indication: 100.0001, deltaL: 0.00004, correctedIndicationP: 100.0002, errorE: 0.0002, correctedErrorEc: 0.0002, mpeLimit: 0.0010, isPass: true },
          { load: 200.0, indication: 200.0002, deltaL: 0.00002, correctedIndicationP: 200.0005, errorE: 0.0005, correctedErrorEc: 0.0005, mpeLimit: 0.0010, isPass: true }, // 200000e = 200g
          { load: 220.0, indication: 220.0004, deltaL: 0.00003, correctedIndicationP: 220.0006, errorE: 0.0006, correctedErrorEc: 0.0006, mpeLimit: 0.0015, isPass: true },
          { load: 0, indication: 0.0000, deltaL: 0.00005, correctedIndicationP: 0.0000, errorE: 0.0000, correctedErrorEc: 0.0000, mpeLimit: 0.0005, isPass: true }
        ]
      },
      eccentricity: {
        isPass: true,
        testLoad: 70.0,
        mpeLimit: 0.0010,
        evaluatedPoints: [
          { position: 'Center', load: 70.0, indication: 70.0000, deltaL: 0.00003, correctedIndicationP: 70.0002, correctedErrorEc: 0.0002, isPass: true },
          { position: 'Front-Left', load: 70.0, indication: 70.0001, deltaL: 0.00004, correctedIndicationP: 70.0002, correctedErrorEc: 0.0002, isPass: true },
          { position: 'Front-Right', load: 70.0, indication: 70.0001, deltaL: 0.00003, correctedIndicationP: 70.0003, correctedErrorEc: 0.0003, isPass: true },
          { position: 'Rear-Right', load: 70.0, indication: 70.0000, deltaL: 0.00004, correctedIndicationP: 70.0001, correctedErrorEc: 0.0001, isPass: true },
          { position: 'Rear-Left', load: 70.0, indication: 70.0000, deltaL: 0.00005, correctedIndicationP: 70.0000, correctedErrorEc: 0.0000, isPass: true }
        ]
      },
      repeatability: {
        isPass: true,
        testLoad: 100.0,
        mpeLimit: 0.0010,
        range: 0.0003,
        runs: [
          { runNo: 1, indication: 100.0001, deltaL: 0.00004, correctedIndicationP: 100.0002, correctedErrorEc: 0.0002 },
          { runNo: 2, indication: 100.0002, deltaL: 0.00003, correctedIndicationP: 100.0004, correctedErrorEc: 0.0004 },
          { runNo: 3, indication: 100.0000, deltaL: 0.00004, correctedIndicationP: 100.0001, correctedErrorEc: 0.0001 }
        ]
      },
      zeroSetting: {
        isPass: true,
        zeroErrorE0: 0.0001,
        tolerance: 0.00025,
        zeroTrackingFunctional: true
      },
      discrimination: {
        isPass: true,
        extraLoad: 0.00014,
        responseObserved: 'Clear transition detected on 0.1 mg division'
      }
    },
    conclusion: 'Complies with OIML R-76 Class I specifications. Precision EMFC mechanism verified. Model approval approved.'
  },
  {
    id: 'REP-2026-003',
    reportNumber: 'DOCA/LM/OIML-R76/2026/1029',
    modelApprovalRef: 'IND-MA-2026-DOCA-76-1029',
    testDate: '2026-09-04',
    status: 'APPROVED',
    overallCompliance: true,
    integrityHash: 'c43d21b7e9a5f08d1c7a8e2d9f6b4a3c1e0d5c2a8b4e6f9d3c7a1e5f0b2d8a4e',
    manufacturer: {
      name: 'Bharat Heavy Weighbridges & Automation Ltd.',
      address: 'Industrial Growth Centre, Phase-IV, Gwalior, Madhya Pradesh - 474015',
      regNumber: 'LM-MFR-MP-2015-7721',
      contactPerson: 'Er. Rajeshwar Tyagi',
      email: 'weighbridges@bharatauto.co.in',
      phone: '+91 751 248 9000'
    },
    instrument: {
      type: 'Pitless Electronic Road Weighbridge',
      modelName: 'DHARAM-KATA-60T',
      serialNumber: 'BHW-60T-2026-118',
      accuracyClass: 'CLASS_III',
      maxCapacity: 50000, // kg
      minCapacity: 400,
      eValue: 20, // 20 kg
      dValue: 20,
      unit: 'kg',
      numberOfIntervals: 2500,
      tareType: 'Preset Tare and Additive Tare',
      loadCellModel: 'Sensocar CS-40t Compression (x6 Cells)',
      indicatorModel: 'Digtal Terminal BHW-Matrix 5000'
    },
    lab: {
      labName: 'State Central Legal Metrology Laboratory',
      accreditationRef: 'DoCA/LM-LAB-STATE-014',
      location: 'Bhopal, Madhya Pradesh, India',
      testingOfficer: 'Shri Vikramaditya Solanki, Joint Controller (LM)',
      approvingAuthority: 'Controller of Legal Metrology, MP',
      ambientTemp: 28.5,
      relativeHumidity: 62,
      atmosphericPressure: 985.4,
      mainsVoltage: 232.0,
      referenceStandardsRef: 'Mobile Weighbridge Calibration Unit with 20 Ton Class M1 Test Weights (Cert No. RRSL-M1-2026-88)'
    },
    testResults: {
      weighing: {
        isPass: true,
        zeroErrorE0: 0,
        rows: [
          { load: 0, indication: 0, deltaL: 10, correctedIndicationP: 0, errorE: 0, correctedErrorEc: 0, mpeLimit: 10, isPass: true },
          { load: 400, indication: 400, deltaL: 10, correctedIndicationP: 400, errorE: 0, correctedErrorEc: 0, mpeLimit: 10, isPass: true },
          { load: 10000, indication: 10000, deltaL: 8, correctedIndicationP: 10002, errorE: 2, correctedErrorEc: 2, mpeLimit: 10, isPass: true }, // 500e = 10000kg
          { load: 25000, indication: 25000, deltaL: 6, correctedIndicationP: 25004, errorE: 4, correctedErrorEc: 4, mpeLimit: 20, isPass: true },
          { load: 40000, indication: 40000, deltaL: 4, correctedIndicationP: 40006, errorE: 6, correctedErrorEc: 6, mpeLimit: 20, isPass: true }, // 2000e = 40000kg
          { load: 50000, indication: 50000, deltaL: 2, correctedIndicationP: 50008, errorE: 8, correctedErrorEc: 8, mpeLimit: 30, isPass: true }, // Max = 50000kg (2500e)
          { load: 0, indication: 0, deltaL: 10, correctedIndicationP: 0, errorE: 0, correctedErrorEc: 0, mpeLimit: 10, isPass: true }
        ]
      },
      eccentricity: {
        isPass: true,
        testLoad: 15000, // over each of 6 load supports
        mpeLimit: 20,
        evaluatedPoints: [
          { position: 'Section 1 (Entry Pair)', load: 15000, indication: 15000, deltaL: 7, correctedIndicationP: 15003, correctedErrorEc: 3, isPass: true },
          { position: 'Section 2 (Middle Pair)', load: 15000, indication: 15000, deltaL: 6, correctedIndicationP: 15004, correctedErrorEc: 4, isPass: true },
          { position: 'Section 3 (Exit Pair)', load: 15000, indication: 15000, deltaL: 8, correctedIndicationP: 15002, correctedErrorEc: 2, isPass: true }
        ]
      },
      repeatability: {
        isPass: true,
        testLoad: 25000,
        mpeLimit: 20,
        range: 4,
        runs: [
          { runNo: 1, indication: 25000, deltaL: 7, correctedIndicationP: 25003, correctedErrorEc: 3 },
          { runNo: 2, indication: 25000, deltaL: 5, correctedIndicationP: 25005, correctedErrorEc: 5 },
          { runNo: 3, indication: 25000, deltaL: 8, correctedIndicationP: 25002, correctedErrorEc: 2 }
        ]
      },
      zeroSetting: {
        isPass: true,
        zeroErrorE0: 2,
        tolerance: 5,
        zeroTrackingFunctional: true
      },
      discrimination: {
        isPass: true,
        extraLoad: 28, // 1.4d
        responseObserved: 'Indicator incremented from 25,000 kg to 25,020 kg cleanly'
      }
    },
    conclusion: 'Heavy-duty weighbridge conforms fully to OIML R-76 Class III for trade transactions & toll road gross-mass verification.'
  }
];
