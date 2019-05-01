const segList = [
    {
        "code": "ABS",
        "name": "Abstract"
    },
    {
        "code": "ACC",
        "name": "Accident"
    },
    {
        "code": "ADD",
        "name": "Addendum"
    },
    {
        "code": "AFF",
        "name": "Professional Affiliation"
    },
    {
        "code": "AIG",
        "name": "Appointment Information -  General Resource"
    },
    {
        "code": "AIL",
        "name": "Appointment Information - Location Resource"
    },
    {
        "code": "AIP",
        "name": "Appointment Information - Personnel Resource"
    },
    {
        "code": "AIS",
        "name": "Appointment Information"
    },
    {
        "code": "AL1",
        "name": "Patient Allergy Information"
    },
    {
        "code": "APR",
        "name": "Appointment Preferences"
    },
    {
        "code": "ARQ",
        "name": "Appointment Request"
    },
    {
        "code": "AUT",
        "name": "Authorization Information"
    },
    {
        "code": "BLC",
        "name": "Blood Code"
    },
    {
        "code": "BLG",
        "name": "Billing"
    },
    {
        "code": "BPO",
        "name": "Blood product order"
    },
    {
        "code": "BPX",
        "name": "Blood product dispense status"
    },
    {
        "code": "BTX",
        "name": "Blood Product Transfusion/Disposition"
    },
    {
        "code": "CDM",
        "name": "Charge Description Master"
    },
    {
        "code": "CER",
        "name": "Certificate Detail"
    },
    {
        "code": "CM0",
        "name": "Clinical Study Master"
    },
    {
        "code": "CM1",
        "name": "Clinical Study Phase Master"
    },
    {
        "code": "CM2",
        "name": "Clinical Study Schedule Master"
    },
    {
        "code": "CNS",
        "name": "Clear Notification"
    },
    {
        "code": "CSP",
        "name": "Clinical Study Phase"
    },
    {
        "code": "CSR",
        "name": "Clinical Study Registration"
    },
    {
        "code": "CSS",
        "name": "Clinical Study Data Schedule Segment"
    },
    {
        "code": "CTD",
        "name": "Contact Data"
    },
    {
        "code": "CTI",
        "name": "Clinical Trial Identification"
    },
    {
        "code": "DB1",
        "name": "Disability"
    },
    {
        "code": "DG1",
        "name": "Diagnosis"
    },
    {
        "code": "DRG",
        "name": "Diagnosis Related Group"
    },
    {
        "code": "DSC",
        "name": "Continuation Pointer"
    },
    {
        "code": "DSP",
        "name": "Display Data"
    },
    {
        "code": "ECD",
        "name": "Equipment Command"
    },
    {
        "code": "ECR",
        "name": "Equipment Command Response"
    },
    {
        "code": "EDU",
        "name": "Educational Detail"
    },
    {
        "code": "EQL",
        "name": "Embedded Query Language"
    },
    {
        "code": "EQP",
        "name": "Equipment/log Service"
    },
    {
        "code": "EQU",
        "name": "Equipment Detail"
    },
    {
        "code": "ERQ",
        "name": "Event replay query"
    },
    {
        "code": "ERR",
        "name": "Error"
    },
    {
        "code": "EVN",
        "name": "Event Type"
    },
    {
        "code": "FAC",
        "name": "Facility"
    },
    {
        "code": "FT1",
        "name": "Financial Transaction"
    },
    {
        "code": "GOL",
        "name": "Goal Detail"
    },
    {
        "code": "GP1",
        "name": "Grouping/Reimbursement- Visit"
    },
    {
        "code": "GP2",
        "name": "Grouping/Reimbursement- Procedure Line Item"
    },
    {
        "code": "GT1",
        "name": "Guarantor"
    },
    {
        "code": "IAM",
        "name": "Patient Adverse Reaction Information"
    },
    {
        "code": "IIM",
        "name": "Inventory Item Master"
    },
    {
        "code": "IN1",
        "name": "Insurance"
    },
    {
        "code": "IN2",
        "name": "Insurance Additional Information"
    },
    {
        "code": "IN3",
        "name": "Insurance Additional Information, Certification"
    },
    {
        "code": "INV",
        "name": "Inventory Detail"
    },
    {
        "code": "IPC",
        "name": "Imaging Procedure Control Segment"
    },
    {
        "code": "ISD",
        "name": "Interaction Status Detail"
    },
    {
        "code": "LAN",
        "name": "Language Detail"
    },
    {
        "code": "LCC",
        "name": "Location Charge Code"
    },
    {
        "code": "LCH",
        "name": "Location Characteristic"
    },
    {
        "code": "LDP",
        "name": "Location Department"
    },
    {
        "code": "LOC",
        "name": "Location Identification"
    },
    {
        "code": "LRL",
        "name": "Location Relationship"
    },
    {
        "code": "MFA",
        "name": "Master File Acknowledgment"
    },
    {
        "code": "MFE",
        "name": "Master File Entry"
    },
    {
        "code": "MFI",
        "name": "Master File Identification"
    },
    {
        "code": "MRG",
        "name": "Merge Patient Information"
    },
    {
        "code": "MSA",
        "name": "Message Acknowledgment"
    },
    {
        "code": "MSH",
        "name": "Message Header"
    },
    {
        "code": "NCK",
        "name": "System Clock"
    },
    {
        "code": "NDS",
        "name": "Notification Detail"
    },
    {
        "code": "NK1",
        "name": "Next of Kin / Associated Parties"
    },
    {
        "code": "NPU",
        "name": "Bed Status Update"
    },
    {
        "code": "NSC",
        "name": "Application Status Change"
    },
    {
        "code": "NST",
        "name": "Application control level statistics"
    },
    {
        "code": "NTE",
        "name": "Notes and Comments"
    },
    {
        "code": "OBR",
        "name": "Observation Request"
    },
    {
        "code": "OBX",
        "name": "Observation/Result"
    },
    {
        "code": "ODS",
        "name": "Dietary Orders, Supplements, and Preferences"
    },
    {
        "code": "ODT",
        "name": "Diet Tray Instructions"
    },
    {
        "code": "OM1",
        "name": "General Segment"
    },
    {
        "code": "OM2",
        "name": "Numeric Observation"
    },
    {
        "code": "OM3",
        "name": "Categorical Service/Test/Observation"
    },
    {
        "code": "OM4",
        "name": "Observations that Require Specimens"
    },
    {
        "code": "OM5",
        "name": "Observation Batteries (Sets"
    },
    {
        "code": "OM6",
        "name": "Observations that are Calculated from Other Observations"
    },
    {
        "code": "OM7",
        "name": "Additional Basic Attributes"
    },
    {
        "code": "ORC",
        "name": "Common Order"
    },
    {
        "code": "ORG",
        "name": "Practitioner Organization Unit"
    },
    {
        "code": "OVR",
        "name": "Override Segment"
    },
    {
        "code": "PCR",
        "name": "Possible Causal Relationship"
    },
    {
        "code": "PD1",
        "name": "Patient Additional Demographic"
    },
    {
        "code": "PDA",
        "name": "Patient Death and Autopsy"
    },
    {
        "code": "PDC",
        "name": "Product Detail Country"
    },
    {
        "code": "PEO",
        "name": "Product Experience Observation"
    },
    {
        "code": "PES",
        "name": "Product Experience Sender"
    },
    {
        "code": "PID",
        "name": "Patient Identification"
    },
    {
        "code": "PR1",
        "name": "Procedures"
    },
    {
        "code": "PRA",
        "name": "Practitioner Detail"
    },
    {
        "code": "PRB",
        "name": "Problem Details"
    },
    {
        "code": "PRC",
        "name": "Pricing"
    },
    {
        "code": "PRD",
        "name": "Provider Data"
    },
    {
        "code": "PSH",
        "name": "Product Summary Header"
    },
    {
        "code": "PTH",
        "name": "Pathway"
    },
    {
        "code": "PV1",
        "name": "Patient Visit"
    },
    {
        "code": "PV2",
        "name": "Patient Visit - Additional Information"
    },
    {
        "code": "QAK",
        "name": "Query Acknowledgment"
    },
    {
        "code": "QID",
        "name": "Query Identification"
    },
    {
        "code": "QPD",
        "name": "Query Parameter Definition"
    },
    {
        "code": "QRD",
        "name": "Original -Style Query Definition"
    },
    {
        "code": "QRF",
        "name": "Original style query filter"
    },
    {
        "code": "QRI",
        "name": "Query Response Instance"
    },
    {
        "code": "RCP",
        "name": "Response Control Parameter"
    },
    {
        "code": "RDF",
        "name": "Table Row Definition"
    },
    {
        "code": "RDT",
        "name": "Table Row Data"
    },
    {
        "code": "RF1",
        "name": "Referral Information"
    },
    {
        "code": "RGS",
        "name": "Resource Group"
    },
    {
        "code": "RMI",
        "name": "Risk Management Incident"
    },
    {
        "code": "ROL",
        "name": "Role"
    },
    {
        "code": "RQ1",
        "name": "Requisition Detail-1"
    },
    {
        "code": "RQD",
        "name": "Requisition Detail"
    },
    {
        "code": "RXA",
        "name": "Pharmacy/Treatment Administration"
    },
    {
        "code": "RXC",
        "name": "Pharmacy/Treatment Component Order"
    },
    {
        "code": "RXD",
        "name": "Pharmacy/Treatment Dispense"
    },
    {
        "code": "RXE",
        "name": "Pharmacy/Treatment Encoded Order"
    },
    {
        "code": "RXG",
        "name": "Pharmacy/Treatment Give"
    },
    {
        "code": "RXO",
        "name": "Pharmacy/Treatment Order"
    },
    {
        "code": "RXR",
        "name": "Pharmacy/Treatment Route"
    },
    {
        "code": "SAC",
        "name": "Specimen Container detail"
    },
    {
        "code": "SCH",
        "name": "Scheduling Activity Information"
    },
    {
        "code": "SFT",
        "name": "Software Segment"
    },
    {
        "code": "SID",
        "name": "Substance Identifier"
    },
    {
        "code": "SPM",
        "name": "Specimen"
    },
    {
        "code": "SPR",
        "name": "Stored Procedure Request Definition"
    },
    {
        "code": "STF",
        "name": "Staff Identification"
    },
    {
        "code": "TCC",
        "name": "Test Code Configuration"
    },
    {
        "code": "TCD",
        "name": "Test Code Detail"
    },
    {
        "code": "TQ1",
        "name": "Timing/Quantity"
    },
    {
        "code": "TQ2",
        "name": "Timing/Quantity Relationship"
    },
    {
        "code": "TXA",
        "name": "Transcription Document Header"
    },
    {
        "code": "UB1",
        "name": "UB82"
    },
    {
        "code": "UB2",
        "name": "UB92 Data"
    },
    {
        "code": "URD",
        "name": "Results/update Definition"
    },
    {
        "code": "URS",
        "name": "Unsolicited Selection"
    },
    {
        "code": "VAR",
        "name": "Variance"
    }
]

export default segList