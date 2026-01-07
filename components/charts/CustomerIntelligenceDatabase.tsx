'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessOverviewRole: string
  industryVertical: string
  totalAnnualRevenue: string
  productTypeFocus: string
  transmissionModernizationStatus: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Professional Drivers (for Proposition 2 & 3)
  primaryMotivation: string
  upcomingTriggers: string
  riskLevel: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  budgetOwnership: string
  procurementModel: string
  budgetApproachTier: string
  preferredEngagementType: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType: string
  preferredDeploymentModel: string
  implementationTimeline: string
  serviceExpectations: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking: string
  additionalComments: string
}

// Sample data for demonstration - Transmission Industry
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'Power Grid Corporation of India',
    businessOverviewRole: 'Transmission Owner / Operator',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '5,200',
    productTypeFocus: 'EHV/UHV lines, HVDC, Substations',
    transmissionModernizationStatus: 'National grid expansion',
    keyContactPerson: 'Rajesh Kumar Singh',
    designation: 'Executive Director - Projects',
    emailAddress: 'r.singh@powergrid.co.in',
    phoneNumber: '+91 11 2345 6789',
    linkedInProfile: 'linkedin.com/in/rajeshkumarsingh',
    websiteUrl: 'www.powergrid.in',
    primaryMotivation: 'Renewable evacuation / National grid integration',
    upcomingTriggers: 'Green Energy Corridor Phase-II / National grid programs',
    riskLevel: 'High (curtailment penalties)',
    budgetOwnership: 'Utility Capex',
    procurementModel: 'ICB tenders / EPC turnkey',
    budgetApproachTier: 'National mega project / Capex-heavy',
    preferredEngagementType: 'Multi-year framework Design-Build-Maintain',
    preferredSolutionType: 'HVDC / EHV AC lines',
    preferredDeploymentModel: 'Greenfield',
    implementationTimeline: '36-60 months',
    serviceExpectations: 'Route survey, tower erection, stringing, commissioning, O&M support',
    customerBenchmarking: 'High potential - Market leader',
    additionalComments: 'Largest transmission utility in India, strong government backing'
  },
  {
    customerName: 'Saudi Electricity Company',
    businessOverviewRole: 'Transmission Owner / Operator',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '18,500',
    productTypeFocus: 'HV/EHV lines, HVDC, Smart grid',
    transmissionModernizationStatus: 'Regional rollout',
    keyContactPerson: 'Mohammed Al-Rashid',
    designation: 'VP - Transmission Development',
    emailAddress: 'm.alrashid@se.com.sa',
    phoneNumber: '+966 11 218 0000',
    linkedInProfile: 'linkedin.com/in/mohammedalrashid',
    websiteUrl: 'www.se.com.sa',
    primaryMotivation: 'Renewable evacuation / Grid reliability',
    upcomingTriggers: 'Vision 2030 / NEOM Power Infrastructure',
    riskLevel: 'Medium',
    budgetOwnership: 'Utility Capex / Ministry of Energy',
    procurementModel: 'EPC turnkey / Framework agreement',
    budgetApproachTier: 'National mega project / Capex-heavy',
    preferredEngagementType: 'EPC turnkey',
    preferredSolutionType: 'HVDC / Underground cables',
    preferredDeploymentModel: 'Hybrid',
    implementationTimeline: '24-36 months',
    serviceExpectations: 'Full EPC, commissioning, 5-year O&M',
    customerBenchmarking: 'High potential - Regional leader',
    additionalComments: 'Major investments planned under Vision 2030'
  },
  {
    customerName: 'Sterlite Power Transmission',
    businessOverviewRole: 'Developer / SPV',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '1,800',
    productTypeFocus: 'EHV lines, HVDC, Substations',
    transmissionModernizationStatus: 'Pilot corridor',
    keyContactPerson: 'Pratik Agarwal',
    designation: 'Managing Director',
    emailAddress: 'p.agarwal@sterlitepower.com',
    phoneNumber: '+91 22 6251 0000',
    linkedInProfile: 'linkedin.com/in/pratikagarwal',
    websiteUrl: 'www.sterlitepower.com',
    primaryMotivation: 'Cross-border power trade / Renewable evacuation',
    upcomingTriggers: 'TBCB projects / Cross-border interconnections',
    riskLevel: 'Medium',
    budgetOwnership: 'SPV Board / Private Equity',
    procurementModel: 'EPC+F / BOOT',
    budgetApproachTier: 'Regional grid / Capex-heavy',
    preferredEngagementType: 'EPC to PPP developer',
    preferredSolutionType: 'HVAC lines / HVDC',
    preferredDeploymentModel: 'Greenfield',
    implementationTimeline: '24-36 months',
    serviceExpectations: 'Route survey, tower erection, stringing, commissioning',
    customerBenchmarking: 'High potential - Fast growing',
    additionalComments: 'Active in India and Brazil transmission markets'
  },
  {
    customerName: 'Elia Group',
    businessOverviewRole: 'Transmission Owner / Operator',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '3,200',
    productTypeFocus: 'Offshore HVDC, Underground cables',
    transmissionModernizationStatus: 'Regional rollout',
    keyContactPerson: 'Stefan Kapferer',
    designation: 'CEO',
    emailAddress: 's.kapferer@elia.be',
    phoneNumber: '+32 2 546 7011',
    linkedInProfile: 'linkedin.com/in/stefankapferer',
    websiteUrl: 'www.elia.be',
    primaryMotivation: 'Renewable evacuation / Cross-border power trade',
    upcomingTriggers: 'North Sea Wind Power Hub / EU interconnections',
    riskLevel: 'Low',
    budgetOwnership: 'Utility Capex',
    procurementModel: 'Framework agreement / ICB tenders',
    budgetApproachTier: 'Regional grid',
    preferredEngagementType: 'Multi-year framework Design-Build-Maintain',
    preferredSolutionType: 'Submarine HVDC / Underground cables',
    preferredDeploymentModel: 'Greenfield',
    implementationTimeline: '36-60 months',
    serviceExpectations: 'Full EPC, marine installation, commissioning, O&M',
    customerBenchmarking: 'High potential - Innovation leader',
    additionalComments: 'Leading offshore grid development in Europe'
  },
  {
    customerName: 'State Grid Corporation of China',
    businessOverviewRole: 'Transmission Owner / Operator',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '460,000',
    productTypeFocus: 'UHV AC/DC, Smart grid',
    transmissionModernizationStatus: 'National grid expansion',
    keyContactPerson: 'Zhang Wei',
    designation: 'Director - International Cooperation',
    emailAddress: 'z.wei@sgcc.com.cn',
    phoneNumber: '+86 10 6359 3000',
    linkedInProfile: 'linkedin.com/in/zhangwei-sgcc',
    websiteUrl: 'www.sgcc.com.cn',
    primaryMotivation: 'Cross-border power trade / UHV technology deployment',
    upcomingTriggers: 'Global Energy Interconnection / Belt and Road',
    riskLevel: 'Low',
    budgetOwnership: 'Utility Capex / Ministry of Power',
    procurementModel: 'Direct purchase / Framework agreement',
    budgetApproachTier: 'National mega project / Capex-heavy',
    preferredEngagementType: 'Multi-year modernization program',
    preferredSolutionType: 'UHV DC / UHV AC',
    preferredDeploymentModel: 'Greenfield',
    implementationTimeline: '36-60 months',
    serviceExpectations: 'Technology transfer, local manufacturing, O&M',
    customerBenchmarking: 'High potential - Global leader',
    additionalComments: 'World largest utility, UHV technology pioneer'
  },
  {
    customerName: 'Adani Transmission Limited',
    businessOverviewRole: 'Developer / Operator',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '1,400',
    productTypeFocus: 'HV/EHV lines, Substations',
    transmissionModernizationStatus: 'Regional rollout',
    keyContactPerson: 'Anil Sardana',
    designation: 'Managing Director',
    emailAddress: 'a.sardana@adani.com',
    phoneNumber: '+91 79 2555 5555',
    linkedInProfile: 'linkedin.com/in/anilsardana',
    websiteUrl: 'www.adanitransmission.com',
    primaryMotivation: 'Renewable evacuation / Grid expansion',
    upcomingTriggers: 'TBCB projects / Green corridors',
    riskLevel: 'Medium',
    budgetOwnership: 'SPV Board',
    procurementModel: 'EPC turnkey / BOOT',
    budgetApproachTier: 'Regional grid / Capex-heavy',
    preferredEngagementType: 'EPC turnkey',
    preferredSolutionType: 'HVAC lines / Digital line monitoring',
    preferredDeploymentModel: 'Greenfield',
    implementationTimeline: '24-36 months',
    serviceExpectations: 'Route survey, tower erection, stringing, commissioning',
    customerBenchmarking: 'High potential - Fast growing',
    additionalComments: 'Largest private transmission company in India'
  },
  {
    customerName: 'Kenya Electricity Transmission Company',
    businessOverviewRole: 'Transmission Owner',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '180',
    productTypeFocus: 'HV lines, Substations',
    transmissionModernizationStatus: 'Feasibility study',
    keyContactPerson: 'Fernandes Barasa',
    designation: 'Managing Director',
    emailAddress: 'f.barasa@ketraco.co.ke',
    phoneNumber: '+254 20 222 0000',
    linkedInProfile: 'linkedin.com/in/fernandesbarasa',
    websiteUrl: 'www.ketraco.co.ke',
    primaryMotivation: 'Replace aging lines / Reduce losses',
    upcomingTriggers: 'East Africa Power Pool / Multilateral funding',
    riskLevel: 'High (blackouts)',
    budgetOwnership: 'Ministry of Energy / Multilateral Agency',
    procurementModel: 'ICB tenders / PPP',
    budgetApproachTier: 'Pilot corridor',
    preferredEngagementType: 'EPC turnkey',
    preferredSolutionType: 'HVAC lines',
    preferredDeploymentModel: 'Brownfield upgrade',
    implementationTimeline: '24-36 months',
    serviceExpectations: 'Route survey, tower erection, stringing, commissioning, training',
    customerBenchmarking: 'Medium potential - Growing market',
    additionalComments: 'Key player in East Africa regional interconnection'
  },
  {
    customerName: 'Tennet TSO',
    businessOverviewRole: 'Transmission Owner / Operator',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '5,800',
    productTypeFocus: 'Offshore HVDC, Underground cables, Substations',
    transmissionModernizationStatus: 'National grid expansion',
    keyContactPerson: 'Manon van Beek',
    designation: 'CEO',
    emailAddress: 'm.vanbeek@tennet.eu',
    phoneNumber: '+31 26 373 1111',
    linkedInProfile: 'linkedin.com/in/manonvanbeek',
    websiteUrl: 'www.tennet.eu',
    primaryMotivation: 'Renewable evacuation / Cross-border power trade',
    upcomingTriggers: 'German Energiewende / North Sea offshore wind',
    riskLevel: 'Low',
    budgetOwnership: 'Utility Capex',
    procurementModel: 'Framework agreement / ICB tenders',
    budgetApproachTier: 'National mega project',
    preferredEngagementType: 'Multi-year framework Design-Build-Maintain',
    preferredSolutionType: 'Offshore HVDC / Underground cables',
    preferredDeploymentModel: 'Greenfield',
    implementationTimeline: '36-60 months',
    serviceExpectations: 'Full EPC, offshore installation, commissioning, O&M',
    customerBenchmarking: 'High potential - Market leader',
    additionalComments: 'Major offshore grid developer in North Sea'
  },
  {
    customerName: 'Eskom Holdings',
    businessOverviewRole: 'Transmission Owner / Operator',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '12,500',
    productTypeFocus: 'HV/EHV lines, HVDC, Substations',
    transmissionModernizationStatus: 'Regional rollout',
    keyContactPerson: 'Andre de Ruyter',
    designation: 'Group Chief Executive',
    emailAddress: 'a.deruyter@eskom.co.za',
    phoneNumber: '+27 11 800 8111',
    linkedInProfile: 'linkedin.com/in/andrederuyter',
    websiteUrl: 'www.eskom.co.za',
    primaryMotivation: 'Replace aging lines / Improve reliability',
    upcomingTriggers: 'Just Energy Transition / Grid stability',
    riskLevel: 'High (blackouts)',
    budgetOwnership: 'Utility Capex / Multilateral Agency',
    procurementModel: 'ICB tenders / Framework agreement',
    budgetApproachTier: 'Regional grid / Capex-heavy',
    preferredEngagementType: 'EPC turnkey',
    preferredSolutionType: 'HVAC lines / HVDC',
    preferredDeploymentModel: 'Brownfield upgrade',
    implementationTimeline: '24-36 months',
    serviceExpectations: 'Route survey, tower erection, stringing, commissioning, O&M',
    customerBenchmarking: 'Medium potential - Restructuring',
    additionalComments: 'Undergoing unbundling, significant investment needed'
  },
  {
    customerName: 'National Grid Ventures',
    businessOverviewRole: 'Developer / Operator',
    industryVertical: 'Power Transmission & Grid Infrastructure',
    totalAnnualRevenue: '2,800',
    productTypeFocus: 'Submarine HVDC, Interconnectors',
    transmissionModernizationStatus: 'Regional rollout',
    keyContactPerson: 'Cordi O\'Hara',
    designation: 'President - National Grid Ventures',
    emailAddress: 'c.ohara@nationalgrid.com',
    phoneNumber: '+44 20 7004 3000',
    linkedInProfile: 'linkedin.com/in/cordiohara',
    websiteUrl: 'www.nationalgrid.com/ventures',
    primaryMotivation: 'Cross-border power trade / Renewable integration',
    upcomingTriggers: 'UK-Europe interconnectors / Offshore wind links',
    riskLevel: 'Low',
    budgetOwnership: 'SPV Board / Private Equity',
    procurementModel: 'EPC+F / Framework agreement',
    budgetApproachTier: 'Regional grid',
    preferredEngagementType: 'Multi-year framework Design-Build-Maintain',
    preferredSolutionType: 'Submarine HVDC',
    preferredDeploymentModel: 'Greenfield',
    implementationTimeline: '36-60 months',
    serviceExpectations: 'Marine survey, cable laying, commissioning, O&M',
    customerBenchmarking: 'High potential - Innovation leader',
    additionalComments: 'Leading interconnector developer in Europe'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Preposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Customer Name/Company Name</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Business Overview Role:</div>
              <div className="font-normal text-[10px] text-gray-600">Transmission Owner / Operator / Developer / SPV</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">Power Transmission & Grid Infrastructure</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[100px]">
              <div>Total Annual Revenue (US$ Million)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Product Type Focus</div>
              <div className="font-normal text-[10px] text-gray-600">Overhead lines, HV/EHV/UHV, HVDC, substations</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Transmission Modernization Status</div>
              <div className="font-normal text-[10px] text-gray-600">No activity / Feasibility study / Pilot corridor / Regional rollout / National grid</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation /Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverviewRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.productTypeFocus}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.transmissionModernizationStatus}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 2 Table - Same as Preposition 1 + Professional Drivers
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#C5A572] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Customer Name/Company Name</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Business Overview Role:</div>
              <div className="font-normal text-[10px] text-gray-600">Transmission Owner / Operator / Developer / SPV</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">Power Transmission & Grid Infrastructure</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[100px]">
              <div>Total Annual Revenue (US$ Million)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Product Type Focus</div>
              <div className="font-normal text-[10px] text-gray-600">Overhead lines, HV/EHV/UHV, HVDC, substations</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Transmission Modernization Status</div>
              <div className="font-normal text-[10px] text-gray-600">No activity / Feasibility study / Pilot corridor / Regional rollout / National grid expansion</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation /Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Professional Drivers */}
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Primary Motivation for Modernizing Access Control</div>
              <div className="font-normal text-[10px] text-gray-600">(Replace aging lines / Renewable evacuation / Reduce losses / Improve reliability / Cross-border power trade / HVDC adoption)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Upcoming Triggers / Initiatives -</div>
              <div className="font-normal text-[10px] text-gray-600">(New renewable zones / National grid programs / Climate resilience upgrades / Multilateral funding / Cross)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Risk Level from Non-Modernization</div>
              <div className="font-normal text-[10px] text-gray-600">(Low / Medium / High (blackouts, curtailment penalties))</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverviewRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.productTypeFocus}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.transmissionModernizationStatus}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryMotivation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggers}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.riskLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 3 Table - Same as Preposition 2 + Purchasing Behaviour Metrics + Solution Requirements + CMI Insights
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#C5A572] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
            <th colSpan={4} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={4} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
              <div>Customer Name/Company Name</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Business Overview Role:</div>
              <div className="font-normal text-[10px] text-gray-600">Transmission Owner / Operator / Developer / SPV</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">Power Transmission & Grid Infrastructure</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[100px]">
              <div>Total Annual Revenue (US$ Million)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Product Type Focus</div>
              <div className="font-normal text-[10px] text-gray-600">Overhead lines, HV/EHV/UHV, HVDC, substations</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Transmission Modernization Status</div>
              <div className="font-normal text-[10px] text-gray-600">No activity / Feasibility study / Pilot corridor / Regional rollout / National grid expansion</div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation /Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Professional Drivers */}
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Primary Motivation for Modernizing Access Control</div>
              <div className="font-normal text-[10px] text-gray-600">(Replace aging lines / Renewable evacuation / Reduce losses / Improve reliability / Cross-border power trade / HVDC adoption)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Upcoming Triggers / Initiatives -</div>
              <div className="font-normal text-[10px] text-gray-600">(New renewable zones / National grid programs / Climate resilience upgrades / Multilateral funding / Cross)</div>
            </th>
            <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Risk Level from Non-Modernization</div>
              <div className="font-normal text-[10px] text-gray-600">(Low / Medium / High (blackouts, curtailment penalties))</div>
            </th>
            {/* Purchasing Behaviour Metrics */}
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-600">(Utility Capex / Ministry of Power / SPV Board / Multilateral Agency)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(EPC turnkey / EPC+F / BOOT / PPP / ICB tenders)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Budget Approach / Tier</div>
              <div className="font-normal text-[10px] text-gray-600">(Pilot corridor / Regional grid / National mega project / Capex-heavy)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-600">(EPC turnkey / Multi-year framework Design-Build-Maintain / EPC to PPP developer)</div>
            </th>
            {/* Solution Requirements */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(HVAC lines / HVDC / Underground / Submarine / Digital line monitoring)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Preferred Deployment Model</div>
              <div className="font-normal text-[10px] text-gray-600">(Greenfield / Brownfield upgrade / Hybrid)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Implementation Timeline / Intensity</div>
              <div className="font-normal text-[10px] text-gray-600">(12-24 months / 24-36 months / 36-60 months)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Service Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">(Route survey, tower erection, stringing, commissioning, O&M support)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Additional Comments/ Notes By CMI team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverviewRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.productTypeFocus}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.transmissionModernizationStatus}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              {/* Professional Drivers */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryMotivation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggers}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.riskLevel}</td>
              {/* Purchasing Behaviour Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetOwnership}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetApproachTier}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredEngagementType}</td>
              {/* Solution Requirements */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredDeploymentModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.implementationTimeline}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.serviceExpectations}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Preposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Preposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Preposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
