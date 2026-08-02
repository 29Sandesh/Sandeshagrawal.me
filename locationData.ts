export interface CityData {
    name: string;
    rawName: string;
    slug: string;
    stateName: string;
    stateSlug: string;
    tier: 'metro' | 'tier2' | 'tier3';
    population: string;
    industries: string[];
    gtmFocus: string;
}

export interface StateData {
    name: string;
    slug: string;
    capital: string;
    industries: string[];
    businessDensity: 'Very High' | 'High' | 'Medium' | 'Emerging';
    gtmOpportunity: string;
}

export const STATES_DATA: Record<string, StateData> = {
    "andhra-pradesh": {
        "name": "Andhra Pradesh",
        "capital": "Amaravati",
        "industries": [
            "Pharma",
            "Agriculture & Agtech",
            "IT & Electronics",
            "Port Logistics"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Rapidly expanding IT parks in Visakhapatnam and Vijayawada create high demand for automated outbound engines and RevOps workflows.",
        "slug": "andhra-pradesh"
    },
    "arunachal-pradesh": {
        "name": "Arunachal Pradesh",
        "capital": "Itanagar",
        "industries": [
            "Eco-Tourism",
            "Hydro Power",
            "Handicrafts",
            "Agriculture"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Growing digital initiatives in Itanagar and Naharlagun require modern lead generation systems for regional enterprises.",
        "slug": "arunachal-pradesh"
    },
    "assam": {
        "name": "Assam",
        "capital": "Dispur",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Guwahati serves as the commercial hub of Northeast India, where tech-enabled GTM strategies unlock major B2B expansion.",
        "slug": "assam"
    },
    "bihar": {
        "name": "Bihar",
        "capital": "Patna",
        "industries": [
            "Agriculture & FMCG",
            "Textiles",
            "Education & EdTech",
            "Healthcare"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Surging entrepreneurial growth in Patna, Gaya, and Muzaffarpur demands automated lead discovery and RevOps infrastructure.",
        "slug": "bihar"
    },
    "chhattisgarh": {
        "name": "Chhattisgarh",
        "capital": "Raipur",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Industrial strongholds like Raipur and Bhilai are transitioning from traditional sales to modern GTM automation platforms.",
        "slug": "chhattisgarh"
    },
    "goa": {
        "name": "Goa",
        "capital": "Panaji",
        "industries": [
            "Hospitality & Tourism",
            "Pharmaceuticals",
            "Maritime & Shipping",
            "Tech Startups"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Goa's booming remote tech hub and hospitality sector benefit immensely from AI-driven outbound personalization.",
        "slug": "goa"
    },
    "gujarat": {
        "name": "Gujarat",
        "capital": "Gandhinagar",
        "industries": [
            "Chemicals & Petrochemicals",
            "Textiles",
            "Diamonds & Jewelry",
            "SaaS & IT Hubs"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Industrial juggernauts in Ahmedabad, Surat, and Vadodara are adopting GTM engineering to scale international exports.",
        "slug": "gujarat"
    },
    "haryana": {
        "name": "Haryana",
        "capital": "Chandigarh",
        "industries": [
            "Automotive",
            "IT & SaaS",
            "Real Estate",
            "Financial Services"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Gurugram and Faridabad house top B2B SaaS and enterprise brands seeking sophisticated waterfall enrichment engines.",
        "slug": "haryana"
    },
    "himachal-pradesh": {
        "name": "Himachal Pradesh",
        "capital": "Shimla",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Pharma hubs in Baddi and Solan require compliance-friendly, automated lead routing and CRM architecture.",
        "slug": "himachal-pradesh"
    },
    "jharkhand": {
        "name": "Jharkhand",
        "capital": "Ranchi",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Ranchi, Jamshedpur, and Dhanbad offer prime opportunities for B2B industrial sales pipeline automation.",
        "slug": "jharkhand"
    },
    "karnataka": {
        "name": "Karnataka",
        "capital": "Bengaluru",
        "industries": [
            "B2B SaaS & Tech",
            "Biotechnology",
            "Aerospace & Defense",
            "E-Commerce"
        ],
        "businessDensity": "Very High",
        "gtmOpportunity": "Bengaluru is India's Silicon Valley \u2014 demand for elite GTM Engineers to build outbound engines and RevOps is at an all-time high.",
        "slug": "karnataka"
    },
    "kerala": {
        "name": "Kerala",
        "capital": "Thiruvananthapuram",
        "industries": [
            "IT & Technoparks",
            "Tourism & Wellness",
            "Spices & Seafood",
            "Healthcare"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Tech hubs in Kochi and Trivandrum are leveraging programmatic SEO and AI outbound to capture global software deals.",
        "slug": "kerala"
    },
    "madhya-pradesh": {
        "name": "Madhya Pradesh",
        "capital": "Bhopal",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT & Logistics"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Indore and Bhopal are emerging tech centers where GTM automation accelerates client acquisition for fast-growing startups.",
        "slug": "madhya-pradesh"
    },
    "maharashtra": {
        "name": "Maharashtra",
        "capital": "Mumbai",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Entertainment",
            "Manufacturing & Trade"
        ],
        "businessDensity": "Very High",
        "gtmOpportunity": "Mumbai and Pune form India's commercial backbone \u2014 GTM Engineers automate high-ticket deal flows across corporate corridors.",
        "slug": "maharashtra"
    },
    "manipur": {
        "name": "Manipur",
        "capital": "Imphal",
        "industries": [
            "Handloom & Agriculture",
            "Tourism",
            "Sports Goods",
            "Cross-Border Trade"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Digital adoption in Imphal is opening new avenues for B2B regional commerce and automated outreach systems.",
        "slug": "manipur"
    },
    "meghalaya": {
        "name": "Meghalaya",
        "capital": "Shillong",
        "industries": [
            "Tourism & Eco-Resorts",
            "Mining",
            "Agriculture & Floriculture",
            "Handicrafts"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Shillong's growing services sector utilizes targeted outbound pipelines to connect with national corporate clients.",
        "slug": "meghalaya"
    },
    "mizoram": {
        "name": "Mizoram",
        "capital": "Aizawl",
        "industries": [
            "Bamboo & Forestry",
            "Agriculture",
            "Handlooms",
            "Tourism"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Digital connectivity in Aizawl enables local entrepreneurs to implement streamlined CRM lead capture architectures.",
        "slug": "mizoram"
    },
    "nagaland": {
        "name": "Nagaland",
        "capital": "Kohima",
        "industries": [
            "Agriculture & Horticulture",
            "Tourism",
            "Handlooms",
            "Wood Products"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Kohima and Dimapur businesses are establishing digital GTM footprints to access Pan-India buyer networks.",
        "slug": "nagaland"
    },
    "odisha": {
        "name": "Odisha",
        "capital": "Bhubaneswar",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Ports & Logistics",
            "Renewables"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Bhubaneswar's rapidly growing IT corridor relies on modern data enrichment and AI qualification for pipeline velocity.",
        "slug": "odisha"
    },
    "punjab": {
        "name": "Punjab",
        "capital": "Chandigarh",
        "industries": [
            "Agriculture & Food Processing",
            "Textiles & Hosiery",
            "Auto Components",
            "Sports Goods"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Export powerhouses in Ludhiana, Jalandhar, and Amritsar require automated B2B buyer discovery systems.",
        "slug": "punjab"
    },
    "rajasthan": {
        "name": "Rajasthan",
        "capital": "Jaipur",
        "industries": [
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "Solar Energy",
            "Textiles & Mining"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Jaipur, Jodhpur, and Udaipur startups and exporters use programmatic SEO and RevOps to drive international revenue.",
        "slug": "rajasthan"
    },
    "sikkim": {
        "name": "Sikkim",
        "capital": "Gangtok",
        "industries": [
            "Organic Agriculture",
            "Pharmaceuticals",
            "Eco-Tourism",
            "Hydropower"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Pharma units and hospitality brands in Gangtok leverage digital lead automation for direct consumer and B2B sales.",
        "slug": "sikkim"
    },
    "tamil-nadu": {
        "name": "Tamil Nadu",
        "capital": "Chennai",
        "industries": [
            "Automotive & SaaS",
            "Textiles & Leather",
            "Hardware Manufacturing",
            "Healthcare"
        ],
        "businessDensity": "Very High",
        "gtmOpportunity": "Chennai and Coimbatore are premier engineering and SaaS hubs where Technical GTM plays a central role in ARR growth.",
        "slug": "tamil-nadu"
    },
    "telangana": {
        "name": "Telangana",
        "capital": "Hyderabad",
        "industries": [
            "IT & Cloud Infrastructure",
            "Pharma & Biotech",
            "Defense",
            "Real Estate"
        ],
        "businessDensity": "Very High",
        "gtmOpportunity": "Hyderabad's HITEC City hosts global tech enterprises needing complex CRM object modeling and automated outbound engines.",
        "slug": "telangana"
    },
    "tripura": {
        "name": "Tripura",
        "capital": "Agartala",
        "industries": [
            "Rubber & Tea",
            "Handicrafts",
            "Tourism",
            "Food Processing"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Agartala enterprises adopt modern digital lead pipelines to connect regional producers with national buyers.",
        "slug": "tripura"
    },
    "uttar-pradesh": {
        "name": "Uttar Pradesh",
        "capital": "Lucknow",
        "industries": [
            "IT & Electronics",
            "Leather & Footwear",
            "Textiles & Brassware",
            "Agriculture"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Noida, Lucknow, Kanpur, and Varanasi represent India's massive growth market for automated GTM lead discovery.",
        "slug": "uttar-pradesh"
    },
    "uttarakhand": {
        "name": "Uttarakhand",
        "capital": "Dehradun",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Dehradun, Haridwar, and Pantnagar industrial zones utilize automated lead scoring and CRM enrichment.",
        "slug": "uttarakhand"
    },
    "west-bengal": {
        "name": "West Bengal",
        "capital": "Kolkata",
        "industries": [
            "IT & Tech Parks",
            "Steel & Mining",
            "Tea & Agriculture",
            "Leather & Textiles"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Kolkata, Durgapur, and Siliguri businesses leverage waterfall enrichment and LLM email engines to capture national market share.",
        "slug": "west-bengal"
    },
    "andaman-and-nicobar-islands": {
        "name": "Andaman and Nicobar Islands",
        "capital": "Port Blair",
        "industries": [
            "Tourism & Hospitality",
            "Fisheries & Agriculture",
            "Maritime Logistics"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Port Blair hospitality and maritime operators use automated digital outreach to attract mainland corporate clients.",
        "slug": "andaman-and-nicobar-islands"
    },
    "chandigarh": {
        "name": "Chandigarh",
        "capital": "Chandigarh",
        "industries": [
            "IT & BPO",
            "Education",
            "Healthcare",
            "Retail & Trade"
        ],
        "businessDensity": "High",
        "gtmOpportunity": "Chandigarh serves as the commercial epicenter for Punjab and Haryana, driving demand for modern GTM engineering.",
        "slug": "chandigarh"
    },
    "dadra-and-nagar-haveli-and-daman-and-diu": {
        "name": "Dadra and Nagar Haveli and Daman and Diu",
        "capital": "Daman",
        "industries": [
            "Plastics & Manufacturing",
            "Textiles",
            "Tourism",
            "Chemicals"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Industrial manufacturing units in Daman and Silvassa benefit from automated B2B supplier outbound engines.",
        "slug": "dadra-and-nagar-haveli-and-daman-and-diu"
    },
    "delhi-ncr": {
        "name": "Delhi NCR",
        "capital": "New Delhi",
        "industries": [
            "Enterprise SaaS",
            "BFSI",
            "E-Commerce",
            "Government & Defense"
        ],
        "businessDensity": "Very High",
        "gtmOpportunity": "Delhi NCR is the corporate nerve center of India \u2014 GTM Engineers architect enterprise RevOps pipelines driving millions in ARR.",
        "slug": "delhi-ncr"
    },
    "jammu-and-kashmir": {
        "name": "Jammu and Kashmir",
        "capital": "Srinagar / Jammu",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Srinagar and Jammu businesses leverage digital outreach and programmatic SEO to access global trade networks.",
        "slug": "jammu-and-kashmir"
    },
    "ladakh": {
        "name": "Ladakh",
        "capital": "Leh",
        "industries": [
            "Eco-Tourism",
            "Renewable Energy",
            "Handicrafts",
            "Agriculture"
        ],
        "businessDensity": "Emerging",
        "gtmOpportunity": "Leh hospitality and solar enterprises utilize automated lead engines to connect with national investors.",
        "slug": "ladakh"
    },
    "puducherry": {
        "name": "Puducherry",
        "capital": "Puducherry",
        "industries": [
            "Tourism & Hospitality",
            "Chemicals & Textiles",
            "IT Services",
            "Education"
        ],
        "businessDensity": "Medium",
        "gtmOpportunity": "Puducherry tech startups and hospitality brands deploy AI qualification agents for high-intent customer acquisition.",
        "slug": "puducherry"
    }
};

export const CITIES_LIST: CityData[] = [
    {
        "name": "AP Kot",
        "rawName": "AP Kot",
        "slug": "ap-kot",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in AP Kot."
    },
    {
        "name": "Abohar",
        "rawName": "Abohar",
        "slug": "abohar",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Abohar."
    },
    {
        "name": "Abu Road",
        "rawName": "Abu Road",
        "slug": "abu-road",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Abu Road."
    },
    {
        "name": "Achalpur-Paratwada",
        "rawName": "Achalpur-Paratwada",
        "slug": "achalpur-paratwada",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Achalpur-Paratwada."
    },
    {
        "name": "Adilabad",
        "rawName": "Adilabad",
        "slug": "adilabad",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Adilabad."
    },
    {
        "name": "Adoni",
        "rawName": "Adoni",
        "slug": "adoni",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Adoni."
    },
    {
        "name": "Agartala",
        "rawName": "Agartala",
        "slug": "agartala",
        "stateName": "Tripura",
        "stateSlug": "tripura",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Rubber & Tea",
            "Handicrafts",
            "Tourism",
            "Food Processing"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Agartala outperform national competitors."
    },
    {
        "name": "Agra",
        "rawName": "Agra",
        "slug": "agra",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Agra outperform national competitors."
    },
    {
        "name": "Ahmedabad",
        "rawName": "Ahmedabad",
        "slug": "ahmedabad",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Ahmedabad."
    },
    {
        "name": "Ahmednagar",
        "rawName": "Ahmednagar",
        "slug": "ahmednagar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Ahmednagar outperform national competitors."
    },
    {
        "name": "Aizawl",
        "rawName": "Aizawl",
        "slug": "aizawl",
        "stateName": "Mizoram",
        "stateSlug": "mizoram",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Bamboo & Forestry",
            "Agriculture",
            "Handlooms",
            "Tourism"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Aizawl outperform national competitors."
    },
    {
        "name": "Ajmer",
        "rawName": "Ajmer",
        "slug": "ajmer",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Ajmer outperform national competitors."
    },
    {
        "name": "Akbarpur",
        "rawName": "Akbarpur",
        "slug": "akbarpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Akbarpur."
    },
    {
        "name": "Akkalkot",
        "rawName": "Akkalkot",
        "slug": "akkalkot",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Akkalkot."
    },
    {
        "name": "Akluj",
        "rawName": "Akluj",
        "slug": "akluj",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Akluj."
    },
    {
        "name": "Akola",
        "rawName": "Akola",
        "slug": "akola",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Akola."
    },
    {
        "name": "Alappuzha",
        "rawName": "Alappuzha",
        "slug": "alappuzha",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Alappuzha."
    },
    {
        "name": "Aligarh",
        "rawName": "Aligarh",
        "slug": "aligarh",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Aligarh outperform national competitors."
    },
    {
        "name": "Alipurduar",
        "rawName": "Alipurduar",
        "slug": "alipurduar",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Alipurduar."
    },
    {
        "name": "Allahabad",
        "rawName": "Allahabad",
        "slug": "allahabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Allahabad."
    },
    {
        "name": "Almora",
        "rawName": "Almora",
        "slug": "almora",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Almora."
    },
    {
        "name": "Alwar",
        "rawName": "Alwar",
        "slug": "alwar",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Alwar outperform national competitors."
    },
    {
        "name": "Amalapuram",
        "rawName": "Amalapuram",
        "slug": "amalapuram",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Amalapuram."
    },
    {
        "name": "Amalner",
        "rawName": "Amalner",
        "slug": "amalner",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Amalner."
    },
    {
        "name": "Ambad",
        "rawName": "Ambad",
        "slug": "ambad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ambad."
    },
    {
        "name": "Ambaji",
        "rawName": "Ambaji",
        "slug": "ambaji",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ambaji."
    },
    {
        "name": "Ambajogai",
        "rawName": "Ambajogai",
        "slug": "ambajogai",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ambajogai."
    },
    {
        "name": "Ambala",
        "rawName": "Ambala",
        "slug": "ambala",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ambala."
    },
    {
        "name": "Ambikapur",
        "rawName": "Ambikapur",
        "slug": "ambikapur",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ambikapur."
    },
    {
        "name": "Ambur",
        "rawName": "Ambur",
        "slug": "ambur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ambur."
    },
    {
        "name": "Amravati",
        "rawName": "Amravati",
        "slug": "amravati",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Amravati."
    },
    {
        "name": "Amreli",
        "rawName": "Amreli",
        "slug": "amreli",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Amreli."
    },
    {
        "name": "Amritsar",
        "rawName": "Amritsar",
        "slug": "amritsar",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Amritsar outperform national competitors."
    },
    {
        "name": "Amroha",
        "rawName": "Amroha",
        "slug": "amroha",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Amroha."
    },
    {
        "name": "Amta",
        "rawName": "Amta",
        "slug": "amta",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Amta."
    },
    {
        "name": "Anakapalle",
        "rawName": "Anakapalle",
        "slug": "anakapalle",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Anakapalle."
    },
    {
        "name": "Anand",
        "rawName": "Anand",
        "slug": "anand",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Anand."
    },
    {
        "name": "Anand Nagar",
        "rawName": "Anand Nagar",
        "slug": "anand-nagar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Anand Nagar."
    },
    {
        "name": "Anantapur",
        "rawName": "Anantapur",
        "slug": "anantapur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Anantapur outperform national competitors."
    },
    {
        "name": "Anantnag",
        "rawName": "Anantnag",
        "slug": "anantnag",
        "stateName": "Jammu and Kashmir",
        "stateSlug": "jammu-and-kashmir",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Anantnag."
    },
    {
        "name": "Angul",
        "rawName": "Angul",
        "slug": "angul",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Angul."
    },
    {
        "name": "Anjangaon",
        "rawName": "Anjangaon",
        "slug": "anjangaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Anjangaon."
    },
    {
        "name": "Anjar",
        "rawName": "Anjar",
        "slug": "anjar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Anjar."
    },
    {
        "name": "Ankleshwar",
        "rawName": "Ankleshwar",
        "slug": "ankleshwar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ankleshwar."
    },
    {
        "name": "Annur",
        "rawName": "Annur",
        "slug": "annur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Annur."
    },
    {
        "name": "Arakkonam",
        "rawName": "Arakkonam",
        "slug": "arakkonam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Arakkonam."
    },
    {
        "name": "Arambag",
        "rawName": "Arambag",
        "slug": "arambag",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Arambag."
    },
    {
        "name": "Arani",
        "rawName": "Arani",
        "slug": "arani",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Arani."
    },
    {
        "name": "Aranthangi",
        "rawName": "Aranthangi",
        "slug": "aranthangi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Aranthangi."
    },
    {
        "name": "Araria",
        "rawName": "Araria",
        "slug": "araria",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Araria."
    },
    {
        "name": "Ariyalur",
        "rawName": "Ariyalur",
        "slug": "ariyalur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ariyalur."
    },
    {
        "name": "Arrah",
        "rawName": "Arrah",
        "slug": "arrah",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Arrah."
    },
    {
        "name": "Arsikere",
        "rawName": "Arsikere",
        "slug": "arsikere",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Arsikere."
    },
    {
        "name": "Aruppukottai",
        "rawName": "Aruppukottai",
        "slug": "aruppukottai",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Aruppukottai."
    },
    {
        "name": "Arvi",
        "rawName": "Arvi",
        "slug": "arvi",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Arvi."
    },
    {
        "name": "Asansol",
        "rawName": "Asansol",
        "slug": "asansol",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Asansol outperform national competitors."
    },
    {
        "name": "Ashoknagar",
        "rawName": "Ashoknagar",
        "slug": "ashoknagar",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ashoknagar."
    },
    {
        "name": "Ashta",
        "rawName": "Ashta",
        "slug": "ashta",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ashta."
    },
    {
        "name": "Ashta",
        "rawName": "Ashta (MP)",
        "slug": "ashta-mp",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ashta."
    },
    {
        "name": "Atrauli",
        "rawName": "Atrauli",
        "slug": "atrauli",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Atrauli."
    },
    {
        "name": "Attingal",
        "rawName": "Attingal",
        "slug": "attingal",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Attingal."
    },
    {
        "name": "Attur",
        "rawName": "Attur",
        "slug": "attur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Attur."
    },
    {
        "name": "Auraiya",
        "rawName": "Auraiya",
        "slug": "auraiya",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Auraiya."
    },
    {
        "name": "Aurangabad",
        "rawName": "Aurangabad",
        "slug": "aurangabad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Aurangabad outperform national competitors."
    },
    {
        "name": "Azamgarh",
        "rawName": "Azamgarh",
        "slug": "azamgarh",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Azamgarh."
    },
    {
        "name": "Baddi",
        "rawName": "Baddi",
        "slug": "baddi",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Baddi."
    },
    {
        "name": "Bagalkot",
        "rawName": "Bagalkot",
        "slug": "bagalkot",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bagalkot."
    },
    {
        "name": "Baghpat",
        "rawName": "Baghpat",
        "slug": "baghpat",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Baghpat."
    },
    {
        "name": "Bagnan",
        "rawName": "Bagnan",
        "slug": "bagnan",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bagnan."
    },
    {
        "name": "Bagula",
        "rawName": "Bagula",
        "slug": "bagula",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bagula."
    },
    {
        "name": "Bahadurgarh",
        "rawName": "Bahadurgarh",
        "slug": "bahadurgarh",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bahadurgarh."
    },
    {
        "name": "Baheri",
        "rawName": "Baheri",
        "slug": "baheri",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Baheri."
    },
    {
        "name": "Bahraich",
        "rawName": "Bahraich",
        "slug": "bahraich",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bahraich."
    },
    {
        "name": "Bailhongal",
        "rawName": "Bailhongal",
        "slug": "bailhongal",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bailhongal."
    },
    {
        "name": "Balaghat",
        "rawName": "Balaghat",
        "slug": "balaghat",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Balaghat."
    },
    {
        "name": "Balangir",
        "rawName": "Balangir",
        "slug": "balangir",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Balangir."
    },
    {
        "name": "Balasore",
        "rawName": "Balasore",
        "slug": "balasore",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Balasore."
    },
    {
        "name": "Ballarpur",
        "rawName": "Ballarpur",
        "slug": "ballarpur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ballarpur."
    },
    {
        "name": "Ballia",
        "rawName": "Ballia",
        "slug": "ballia",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ballia."
    },
    {
        "name": "Balotra",
        "rawName": "Balotra",
        "slug": "balotra",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Balotra."
    },
    {
        "name": "Balrampur",
        "rawName": "Balrampur",
        "slug": "balrampur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Balrampur."
    },
    {
        "name": "Balurghat",
        "rawName": "Balurghat",
        "slug": "balurghat",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Balurghat."
    },
    {
        "name": "Banda",
        "rawName": "Banda",
        "slug": "banda",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Banda."
    },
    {
        "name": "Bandikui",
        "rawName": "Bandikui",
        "slug": "bandikui",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bandikui."
    },
    {
        "name": "Bangaon",
        "rawName": "Bangaon",
        "slug": "bangaon",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bangaon."
    },
    {
        "name": "Bangarapet",
        "rawName": "Bangarapet",
        "slug": "bangarapet",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bangarapet."
    },
    {
        "name": "Banka",
        "rawName": "Banka",
        "slug": "banka",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Banka."
    },
    {
        "name": "Bankura",
        "rawName": "Bankura",
        "slug": "bankura",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bankura."
    },
    {
        "name": "Banswara",
        "rawName": "Banswara",
        "slug": "banswara",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Banswara."
    },
    {
        "name": "Bantwal",
        "rawName": "Bantwal",
        "slug": "bantwal",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bantwal."
    },
    {
        "name": "Bapatla",
        "rawName": "Bapatla",
        "slug": "bapatla",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bapatla."
    },
    {
        "name": "Barabanki",
        "rawName": "Barabanki",
        "slug": "barabanki",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barabanki."
    },
    {
        "name": "Baramati",
        "rawName": "Baramati",
        "slug": "baramati",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Baramati."
    },
    {
        "name": "Baramulla",
        "rawName": "Baramulla",
        "slug": "baramulla",
        "stateName": "Jammu and Kashmir",
        "stateSlug": "jammu-and-kashmir",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Baramulla."
    },
    {
        "name": "Baran",
        "rawName": "Baran",
        "slug": "baran",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Baran."
    },
    {
        "name": "Barara",
        "rawName": "Barara",
        "slug": "barara",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barara."
    },
    {
        "name": "Baraut",
        "rawName": "Baraut",
        "slug": "baraut",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Baraut."
    },
    {
        "name": "Bardhaman",
        "rawName": "Bardhaman",
        "slug": "bardhaman",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bardhaman outperform national competitors."
    },
    {
        "name": "Bardoli",
        "rawName": "Bardoli",
        "slug": "bardoli",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bardoli."
    },
    {
        "name": "Bareilly",
        "rawName": "Bareilly",
        "slug": "bareilly",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bareilly outperform national competitors."
    },
    {
        "name": "Barh",
        "rawName": "Barh",
        "slug": "barh",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barh."
    },
    {
        "name": "Baripada",
        "rawName": "Baripada",
        "slug": "baripada",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Baripada."
    },
    {
        "name": "Barmer",
        "rawName": "Barmer",
        "slug": "barmer",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barmer."
    },
    {
        "name": "Barnala",
        "rawName": "Barnala",
        "slug": "barnala",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barnala."
    },
    {
        "name": "Barpeta Road",
        "rawName": "Barpeta Road",
        "slug": "barpeta-road",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barpeta Road."
    },
    {
        "name": "Barshi",
        "rawName": "Barshi",
        "slug": "barshi",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barshi."
    },
    {
        "name": "Barwala",
        "rawName": "Barwala",
        "slug": "barwala",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barwala."
    },
    {
        "name": "Barwani",
        "rawName": "Barwani",
        "slug": "barwani",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Barwani."
    },
    {
        "name": "Basavakalyan",
        "rawName": "Basavakalyan",
        "slug": "basavakalyan",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Basavakalyan."
    },
    {
        "name": "Basirhat",
        "rawName": "Basirhat",
        "slug": "basirhat",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Basirhat."
    },
    {
        "name": "Basmath",
        "rawName": "Basmath",
        "slug": "basmath",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Basmath."
    },
    {
        "name": "Basti",
        "rawName": "Basti",
        "slug": "basti",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Basti."
    },
    {
        "name": "Batala",
        "rawName": "Batala",
        "slug": "batala",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Batala."
    },
    {
        "name": "Bathinda",
        "rawName": "Bathinda",
        "slug": "bathinda",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bathinda outperform national competitors."
    },
    {
        "name": "Bavla",
        "rawName": "Bavla",
        "slug": "bavla",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bavla."
    },
    {
        "name": "Bazpur",
        "rawName": "Bazpur",
        "slug": "bazpur",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bazpur."
    },
    {
        "name": "Beawar",
        "rawName": "Beawar",
        "slug": "beawar",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Beawar."
    },
    {
        "name": "Beed",
        "rawName": "Beed",
        "slug": "beed",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Beed."
    },
    {
        "name": "Begusarai",
        "rawName": "Begusarai",
        "slug": "begusarai",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Begusarai."
    },
    {
        "name": "Behror",
        "rawName": "Behror",
        "slug": "behror",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Behror."
    },
    {
        "name": "Bela Pratapgarh",
        "rawName": "Bela Pratapgarh",
        "slug": "bela-pratapgarh",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bela Pratapgarh."
    },
    {
        "name": "Belgaum",
        "rawName": "Belgaum",
        "slug": "belgaum",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Belgaum."
    },
    {
        "name": "Bellary",
        "rawName": "Bellary",
        "slug": "bellary",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bellary."
    },
    {
        "name": "Belthangady",
        "rawName": "Belthangady",
        "slug": "belthangady",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Belthangady."
    },
    {
        "name": "Bengaluru",
        "rawName": "Bengaluru",
        "slug": "bengaluru",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Bengaluru."
    },
    {
        "name": "Berhampore",
        "rawName": "Berhampore",
        "slug": "berhampore",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Berhampore."
    },
    {
        "name": "Berhampur",
        "rawName": "Berhampur",
        "slug": "berhampur",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Berhampur outperform national competitors."
    },
    {
        "name": "Bettiah",
        "rawName": "Bettiah",
        "slug": "bettiah",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bettiah."
    },
    {
        "name": "Betul",
        "rawName": "Betul",
        "slug": "betul",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Betul."
    },
    {
        "name": "Bhabhua",
        "rawName": "Bhabhua",
        "slug": "bhabhua",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhabhua."
    },
    {
        "name": "Bhadohi",
        "rawName": "Bhadohi",
        "slug": "bhadohi",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhadohi."
    },
    {
        "name": "Bhadra",
        "rawName": "Bhadra",
        "slug": "bhadra",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhadra."
    },
    {
        "name": "Bhadrachalam",
        "rawName": "Bhadrachalam",
        "slug": "bhadrachalam",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhadrachalam."
    },
    {
        "name": "Bhadrak",
        "rawName": "Bhadrak",
        "slug": "bhadrak",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhadrak."
    },
    {
        "name": "Bhadravati",
        "rawName": "Bhadravati",
        "slug": "bhadravati",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhadravati."
    },
    {
        "name": "Bhagalpur",
        "rawName": "Bhagalpur",
        "slug": "bhagalpur",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bhagalpur outperform national competitors."
    },
    {
        "name": "Bhandara",
        "rawName": "Bhandara",
        "slug": "bhandara",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhandara."
    },
    {
        "name": "Bharatpur",
        "rawName": "Bharatpur",
        "slug": "bharatpur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bharatpur."
    },
    {
        "name": "Bharthana",
        "rawName": "Bharthana",
        "slug": "bharthana",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bharthana."
    },
    {
        "name": "Bharuch",
        "rawName": "Bharuch",
        "slug": "bharuch",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bharuch."
    },
    {
        "name": "Bhatapara",
        "rawName": "Bhatapara",
        "slug": "bhatapara",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhatapara."
    },
    {
        "name": "Bhatkal",
        "rawName": "Bhatkal",
        "slug": "bhatkal",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhatkal."
    },
    {
        "name": "Bhavnagar",
        "rawName": "Bhavnagar",
        "slug": "bhavnagar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bhavnagar outperform national competitors."
    },
    {
        "name": "Bhawanipatna",
        "rawName": "Bhawanipatna",
        "slug": "bhawanipatna",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhawanipatna."
    },
    {
        "name": "Bhilwara",
        "rawName": "Bhilwara",
        "slug": "bhilwara",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bhilwara outperform national competitors."
    },
    {
        "name": "Bhimavaram",
        "rawName": "Bhimavaram",
        "slug": "bhimavaram",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhimavaram."
    },
    {
        "name": "Bhind",
        "rawName": "Bhind",
        "slug": "bhind",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhind."
    },
    {
        "name": "Bhinmal",
        "rawName": "Bhinmal",
        "slug": "bhinmal",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhinmal."
    },
    {
        "name": "Bhiwadi",
        "rawName": "Bhiwadi",
        "slug": "bhiwadi",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhiwadi."
    },
    {
        "name": "Bhiwani",
        "rawName": "Bhiwani",
        "slug": "bhiwani",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhiwani."
    },
    {
        "name": "Bhopal",
        "rawName": "Bhopal",
        "slug": "bhopal",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bhopal outperform national competitors."
    },
    {
        "name": "Bhubaneswar",
        "rawName": "Bhubaneswar",
        "slug": "bhubaneswar",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bhubaneswar outperform national competitors."
    },
    {
        "name": "Bhuj",
        "rawName": "Bhuj",
        "slug": "bhuj",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhuj."
    },
    {
        "name": "Bhusawal",
        "rawName": "Bhusawal",
        "slug": "bhusawal",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bhusawal."
    },
    {
        "name": "Biaora",
        "rawName": "Biaora",
        "slug": "biaora",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Biaora."
    },
    {
        "name": "Bidar",
        "rawName": "Bidar",
        "slug": "bidar",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bidar."
    },
    {
        "name": "Bihar",
        "rawName": "Bihar",
        "slug": "bihar",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bihar."
    },
    {
        "name": "Bihar Sharif",
        "rawName": "Bihar Sharif",
        "slug": "bihar-sharif",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bihar Sharif outperform national competitors."
    },
    {
        "name": "Bihta",
        "rawName": "Bihta",
        "slug": "bihta",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bihta."
    },
    {
        "name": "Bijapur",
        "rawName": "Bijapur",
        "slug": "bijapur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bijapur outperform national competitors."
    },
    {
        "name": "Bijnor",
        "rawName": "Bijnor",
        "slug": "bijnor",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bijnor."
    },
    {
        "name": "Bikaner",
        "rawName": "Bikaner",
        "slug": "bikaner",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bikaner."
    },
    {
        "name": "Bilaspur",
        "rawName": "Bilaspur",
        "slug": "bilaspur",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Bilaspur outperform national competitors."
    },
    {
        "name": "Bilaspur",
        "rawName": "Bilaspur (HP)",
        "slug": "bilaspur-hp",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bilaspur."
    },
    {
        "name": "Bilimora",
        "rawName": "Bilimora",
        "slug": "bilimora",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bilimora."
    },
    {
        "name": "Bina",
        "rawName": "Bina",
        "slug": "bina",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bina."
    },
    {
        "name": "Biswan",
        "rawName": "Biswan",
        "slug": "biswan",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Biswan."
    },
    {
        "name": "Biswanath Chariali",
        "rawName": "Biswanath Chariali",
        "slug": "biswanath-chariali",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Biswanath Chariali."
    },
    {
        "name": "Bobbili",
        "rawName": "Bobbili",
        "slug": "bobbili",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bobbili."
    },
    {
        "name": "Bodhan",
        "rawName": "Bodhan",
        "slug": "bodhan",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bodhan."
    },
    {
        "name": "Bodinayakanur",
        "rawName": "Bodinayakanur",
        "slug": "bodinayakanur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bodinayakanur."
    },
    {
        "name": "Bokaro",
        "rawName": "Bokaro",
        "slug": "bokaro",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bokaro."
    },
    {
        "name": "Bolpur",
        "rawName": "Bolpur",
        "slug": "bolpur",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bolpur."
    },
    {
        "name": "Bongaigaon",
        "rawName": "Bongaigaon",
        "slug": "bongaigaon",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bongaigaon."
    },
    {
        "name": "Borsad",
        "rawName": "Borsad",
        "slug": "borsad",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Borsad."
    },
    {
        "name": "Botad",
        "rawName": "Botad",
        "slug": "botad",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Botad."
    },
    {
        "name": "Budaun",
        "rawName": "Budaun",
        "slug": "budaun",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Budaun."
    },
    {
        "name": "Bulandshahr",
        "rawName": "Bulandshahr",
        "slug": "bulandshahr",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bulandshahr."
    },
    {
        "name": "Buldhana",
        "rawName": "Buldhana",
        "slug": "buldhana",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Buldhana."
    },
    {
        "name": "Bundi",
        "rawName": "Bundi",
        "slug": "bundi",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Bundi."
    },
    {
        "name": "Burhanpur",
        "rawName": "Burhanpur",
        "slug": "burhanpur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Burhanpur."
    },
    {
        "name": "Burhar",
        "rawName": "Burhar",
        "slug": "burhar",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Burhar."
    },
    {
        "name": "Buxar",
        "rawName": "Buxar",
        "slug": "buxar",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Buxar."
    },
    {
        "name": "Byasanagar",
        "rawName": "Byasanagar",
        "slug": "byasanagar",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Byasanagar."
    },
    {
        "name": "Canning",
        "rawName": "Canning",
        "slug": "canning",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Canning."
    },
    {
        "name": "Chaibasa",
        "rawName": "Chaibasa",
        "slug": "chaibasa",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chaibasa."
    },
    {
        "name": "Chakdaha",
        "rawName": "Chakdaha",
        "slug": "chakdaha",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chakdaha."
    },
    {
        "name": "Chakradharpur",
        "rawName": "Chakradharpur",
        "slug": "chakradharpur",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chakradharpur."
    },
    {
        "name": "Chalisgaon",
        "rawName": "Chalisgaon",
        "slug": "chalisgaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chalisgaon."
    },
    {
        "name": "Challakere",
        "rawName": "Challakere",
        "slug": "challakere",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Challakere."
    },
    {
        "name": "Chamarajanagar",
        "rawName": "Chamarajanagar",
        "slug": "chamarajanagar",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chamarajanagar."
    },
    {
        "name": "Chandausi",
        "rawName": "Chandausi",
        "slug": "chandausi",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chandausi."
    },
    {
        "name": "Chandigarh",
        "rawName": "Chandigarh",
        "slug": "chandigarh",
        "stateName": "Chandigarh",
        "stateSlug": "chandigarh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & BPO",
            "Education",
            "Healthcare",
            "Retail & Trade"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Chandigarh outperform national competitors."
    },
    {
        "name": "Chandpur",
        "rawName": "Chandpur",
        "slug": "chandpur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chandpur."
    },
    {
        "name": "Chandrapur",
        "rawName": "Chandrapur",
        "slug": "chandrapur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Chandrapur outperform national competitors."
    },
    {
        "name": "Channarayapatna",
        "rawName": "Channarayapatna",
        "slug": "channarayapatna",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Channarayapatna."
    },
    {
        "name": "Chapra",
        "rawName": "Chapra",
        "slug": "chapra",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chapra."
    },
    {
        "name": "Charkhi Dadri",
        "rawName": "Charkhi Dadri",
        "slug": "charkhi-dadri",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Charkhi Dadri."
    },
    {
        "name": "Chatra",
        "rawName": "Chatra",
        "slug": "chatra",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chatra."
    },
    {
        "name": "Chauri Chaura",
        "rawName": "Chauri Chaura",
        "slug": "chauri-chaura",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chauri Chaura."
    },
    {
        "name": "Cheeka",
        "rawName": "Cheeka",
        "slug": "cheeka",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Cheeka."
    },
    {
        "name": "Chennai",
        "rawName": "Chennai",
        "slug": "chennai",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Chennai."
    },
    {
        "name": "Cherthala",
        "rawName": "Cherthala",
        "slug": "cherthala",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Cherthala."
    },
    {
        "name": "Chevella",
        "rawName": "Chevella",
        "slug": "chevella",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chevella."
    },
    {
        "name": "Chhatarpur",
        "rawName": "Chhatarpur",
        "slug": "chhatarpur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chhatarpur."
    },
    {
        "name": "Chhindwara",
        "rawName": "Chhindwara",
        "slug": "chhindwara",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chhindwara."
    },
    {
        "name": "Chidambaram",
        "rawName": "Chidambaram",
        "slug": "chidambaram",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chidambaram."
    },
    {
        "name": "Chikhli",
        "rawName": "Chikhli",
        "slug": "chikhli",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chikhli."
    },
    {
        "name": "Chikkaballapur",
        "rawName": "Chikkaballapur",
        "slug": "chikkaballapur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chikkaballapur."
    },
    {
        "name": "Chikkodi",
        "rawName": "Chikkodi",
        "slug": "chikkodi",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chikkodi."
    },
    {
        "name": "Chikmagalur",
        "rawName": "Chikmagalur",
        "slug": "chikmagalur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chikmagalur."
    },
    {
        "name": "Chilakaluripet",
        "rawName": "Chilakaluripet",
        "slug": "chilakaluripet",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chilakaluripet."
    },
    {
        "name": "Chintamani",
        "rawName": "Chintamani",
        "slug": "chintamani",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chintamani."
    },
    {
        "name": "Chiplun City",
        "rawName": "Chiplun City",
        "slug": "chiplun-city",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chiplun City."
    },
    {
        "name": "Chirala",
        "rawName": "Chirala",
        "slug": "chirala",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chirala."
    },
    {
        "name": "Chirawa",
        "rawName": "Chirawa",
        "slug": "chirawa",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chirawa."
    },
    {
        "name": "Chitradurga",
        "rawName": "Chitradurga",
        "slug": "chitradurga",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chitradurga."
    },
    {
        "name": "Chittoor",
        "rawName": "Chittoor",
        "slug": "chittoor",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chittoor."
    },
    {
        "name": "Chittorgarh",
        "rawName": "Chittorgarh",
        "slug": "chittorgarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chittorgarh."
    },
    {
        "name": "Chittur-Tattamangalam",
        "rawName": "Chittur-Tattamangalam",
        "slug": "chittur-tattamangalam",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chittur-Tattamangalam."
    },
    {
        "name": "Chomu",
        "rawName": "Chomu",
        "slug": "chomu",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chomu."
    },
    {
        "name": "Chopda",
        "rawName": "Chopda",
        "slug": "chopda",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Chopda."
    },
    {
        "name": "Churu",
        "rawName": "Churu",
        "slug": "churu",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Churu."
    },
    {
        "name": "Coimbatore",
        "rawName": "Coimbatore",
        "slug": "coimbatore",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Coimbatore outperform national competitors."
    },
    {
        "name": "Contai",
        "rawName": "Contai",
        "slug": "contai",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Contai."
    },
    {
        "name": "Cooch Behar",
        "rawName": "Cooch Behar",
        "slug": "cooch-behar",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Cooch Behar."
    },
    {
        "name": "Coonoor",
        "rawName": "Coonoor",
        "slug": "coonoor",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Coonoor."
    },
    {
        "name": "Cuddalore",
        "rawName": "Cuddalore",
        "slug": "cuddalore",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Cuddalore."
    },
    {
        "name": "Cumbum",
        "rawName": "Cumbum",
        "slug": "cumbum",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Cumbum."
    },
    {
        "name": "Cuttack",
        "rawName": "Cuttack",
        "slug": "cuttack",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Cuttack outperform national competitors."
    },
    {
        "name": "Dabhoi",
        "rawName": "Dabhoi",
        "slug": "dabhoi",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dabhoi."
    },
    {
        "name": "Dabra",
        "rawName": "Dabra",
        "slug": "dabra",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dabra."
    },
    {
        "name": "Dahanu",
        "rawName": "Dahanu",
        "slug": "dahanu",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dahanu."
    },
    {
        "name": "Dahod",
        "rawName": "Dahod",
        "slug": "dahod",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dahod."
    },
    {
        "name": "Dalsingh Sarai",
        "rawName": "Dalsingh Sarai",
        "slug": "dalsingh-sarai",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dalsingh Sarai."
    },
    {
        "name": "Daltonganj",
        "rawName": "Daltonganj",
        "slug": "daltonganj",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Daltonganj."
    },
    {
        "name": "Daman",
        "rawName": "Daman",
        "slug": "daman",
        "stateName": "Dadra and Nagar Haveli and Daman and Diu",
        "stateSlug": "dadra-and-nagar-haveli-and-daman-and-diu",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Plastics & Manufacturing",
            "Textiles",
            "Tourism",
            "Chemicals"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Daman outperform national competitors."
    },
    {
        "name": "Damoh",
        "rawName": "Damoh",
        "slug": "damoh",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Damoh."
    },
    {
        "name": "Darbhanga",
        "rawName": "Darbhanga",
        "slug": "darbhanga",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Darbhanga outperform national competitors."
    },
    {
        "name": "Darjeeling",
        "rawName": "Darjeeling",
        "slug": "darjeeling",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Darjeeling."
    },
    {
        "name": "Dasuya",
        "rawName": "Dasuya",
        "slug": "dasuya",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dasuya."
    },
    {
        "name": "Datia",
        "rawName": "Datia",
        "slug": "datia",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Datia."
    },
    {
        "name": "Daudnagar",
        "rawName": "Daudnagar",
        "slug": "daudnagar",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Daudnagar."
    },
    {
        "name": "Daund",
        "rawName": "Daund",
        "slug": "daund",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Daund."
    },
    {
        "name": "Dausa",
        "rawName": "Dausa",
        "slug": "dausa",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dausa."
    },
    {
        "name": "Davanagere",
        "rawName": "Davanagere",
        "slug": "davanagere",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Davanagere."
    },
    {
        "name": "Deesa",
        "rawName": "Deesa",
        "slug": "deesa",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Deesa."
    },
    {
        "name": "Deglur",
        "rawName": "Deglur",
        "slug": "deglur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Deglur."
    },
    {
        "name": "Dehradun",
        "rawName": "Dehradun",
        "slug": "dehradun",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Dehradun outperform national competitors."
    },
    {
        "name": "Dehri",
        "rawName": "Dehri",
        "slug": "dehri",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dehri."
    },
    {
        "name": "Delhi",
        "rawName": "Delhi NCR",
        "slug": "delhi-ncr",
        "stateName": "Delhi NCR",
        "stateSlug": "delhi-ncr",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "Enterprise SaaS",
            "E-Commerce",
            "EdTech",
            "FinTech"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Delhi."
    },
    {
        "name": "Deoband",
        "rawName": "Deoband",
        "slug": "deoband",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Deoband."
    },
    {
        "name": "Deoghar",
        "rawName": "Deoghar",
        "slug": "deoghar",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Deoghar."
    },
    {
        "name": "Deoria City",
        "rawName": "Deoria City",
        "slug": "deoria-city",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Deoria City."
    },
    {
        "name": "Dewas",
        "rawName": "Dewas",
        "slug": "dewas",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Dewas outperform national competitors."
    },
    {
        "name": "Dhampur",
        "rawName": "Dhampur",
        "slug": "dhampur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhampur."
    },
    {
        "name": "Dhamtari",
        "rawName": "Dhamtari",
        "slug": "dhamtari",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhamtari."
    },
    {
        "name": "Dhanbad",
        "rawName": "Dhanbad",
        "slug": "dhanbad",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Dhanbad outperform national competitors."
    },
    {
        "name": "Dhar",
        "rawName": "Dhar",
        "slug": "dhar",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhar."
    },
    {
        "name": "Dharamshala",
        "rawName": "Dharamshala",
        "slug": "dharamshala",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Dharamshala outperform national competitors."
    },
    {
        "name": "Dharapuram",
        "rawName": "Dharapuram",
        "slug": "dharapuram",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dharapuram."
    },
    {
        "name": "Dharmanagar",
        "rawName": "Dharmanagar",
        "slug": "dharmanagar",
        "stateName": "Tripura",
        "stateSlug": "tripura",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Rubber & Tea",
            "Handicrafts",
            "Tourism",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dharmanagar."
    },
    {
        "name": "Dharmapuri",
        "rawName": "Dharmapuri",
        "slug": "dharmapuri",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dharmapuri."
    },
    {
        "name": "Dharmavaram",
        "rawName": "Dharmavaram",
        "slug": "dharmavaram",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dharmavaram."
    },
    {
        "name": "Dharwad",
        "rawName": "Dharwad",
        "slug": "dharwad",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dharwad."
    },
    {
        "name": "Dhemaji",
        "rawName": "Dhemaji",
        "slug": "dhemaji",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhemaji."
    },
    {
        "name": "Dhenkanal",
        "rawName": "Dhenkanal",
        "slug": "dhenkanal",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhenkanal."
    },
    {
        "name": "Dholka",
        "rawName": "Dholka",
        "slug": "dholka",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dholka."
    },
    {
        "name": "Dholpur",
        "rawName": "Dholpur",
        "slug": "dholpur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dholpur."
    },
    {
        "name": "Dhoraji",
        "rawName": "Dhoraji",
        "slug": "dhoraji",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhoraji."
    },
    {
        "name": "Dhrangadhra",
        "rawName": "Dhrangadhra",
        "slug": "dhrangadhra",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhrangadhra."
    },
    {
        "name": "Dhubri",
        "rawName": "Dhubri",
        "slug": "dhubri",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhubri."
    },
    {
        "name": "Dhule",
        "rawName": "Dhule",
        "slug": "dhule",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Dhule outperform national competitors."
    },
    {
        "name": "Dhupguri",
        "rawName": "Dhupguri",
        "slug": "dhupguri",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhupguri."
    },
    {
        "name": "Dhuri",
        "rawName": "Dhuri",
        "slug": "dhuri",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dhuri."
    },
    {
        "name": "Diamond Harbour",
        "rawName": "Diamond Harbour",
        "slug": "diamond-harbour",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Diamond Harbour."
    },
    {
        "name": "Dibrugarh",
        "rawName": "Dibrugarh",
        "slug": "dibrugarh",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dibrugarh."
    },
    {
        "name": "Digboi",
        "rawName": "Digboi",
        "slug": "digboi",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Digboi."
    },
    {
        "name": "Digha",
        "rawName": "Digha",
        "slug": "digha",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Digha."
    },
    {
        "name": "Digras",
        "rawName": "Digras",
        "slug": "digras",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Digras."
    },
    {
        "name": "Dimapur",
        "rawName": "Dimapur",
        "slug": "dimapur",
        "stateName": "Nagaland",
        "stateSlug": "nagaland",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agriculture & Horticulture",
            "Tourism",
            "Handlooms",
            "Wood Products"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dimapur."
    },
    {
        "name": "Dindigul",
        "rawName": "Dindigul",
        "slug": "dindigul",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dindigul."
    },
    {
        "name": "Diphu",
        "rawName": "Diphu",
        "slug": "diphu",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Diphu."
    },
    {
        "name": "Diu",
        "rawName": "Diu",
        "slug": "diu",
        "stateName": "Dadra and Nagar Haveli and Daman and Diu",
        "stateSlug": "dadra-and-nagar-haveli-and-daman-and-diu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Plastics & Manufacturing",
            "Textiles",
            "Tourism",
            "Chemicals"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Diu."
    },
    {
        "name": "Doddaballapura",
        "rawName": "Doddaballapura",
        "slug": "doddaballapura",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Doddaballapura."
    },
    {
        "name": "Duliajan",
        "rawName": "Duliajan",
        "slug": "duliajan",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Duliajan."
    },
    {
        "name": "Dumka",
        "rawName": "Dumka",
        "slug": "dumka",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dumka."
    },
    {
        "name": "Dungarpur",
        "rawName": "Dungarpur",
        "slug": "dungarpur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dungarpur."
    },
    {
        "name": "Durg Bhilai",
        "rawName": "Durg Bhilai",
        "slug": "durg-bhilai",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Durg Bhilai."
    },
    {
        "name": "Durgapur",
        "rawName": "Durgapur",
        "slug": "durgapur",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Durgapur outperform national competitors."
    },
    {
        "name": "Dwarka",
        "rawName": "Dwarka",
        "slug": "dwarka",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Dwarka."
    },
    {
        "name": "Edappal",
        "rawName": "Edappal",
        "slug": "edappal",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Edappal."
    },
    {
        "name": "Ellenabad",
        "rawName": "Ellenabad",
        "slug": "ellenabad",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ellenabad."
    },
    {
        "name": "Eluru",
        "rawName": "Eluru",
        "slug": "eluru",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Eluru outperform national competitors."
    },
    {
        "name": "Erattupetta",
        "rawName": "Erattupetta",
        "slug": "erattupetta",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Erattupetta."
    },
    {
        "name": "Erode",
        "rawName": "Erode",
        "slug": "erode",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Erode."
    },
    {
        "name": "Etah",
        "rawName": "Etah",
        "slug": "etah",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Etah."
    },
    {
        "name": "Etawah",
        "rawName": "Etawah",
        "slug": "etawah",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Etawah."
    },
    {
        "name": "Faizabad-Ayodhya",
        "rawName": "Faizabad-Ayodhya",
        "slug": "faizabad-ayodhya",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Faizabad-Ayodhya."
    },
    {
        "name": "Faridkot",
        "rawName": "Faridkot",
        "slug": "faridkot",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Faridkot."
    },
    {
        "name": "Farrukhabad",
        "rawName": "Farrukhabad",
        "slug": "farrukhabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Farrukhabad."
    },
    {
        "name": "Farukh Nagar",
        "rawName": "Farukh Nagar",
        "slug": "farukh-nagar",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Farukh Nagar."
    },
    {
        "name": "Fatehabad",
        "rawName": "Fatehabad",
        "slug": "fatehabad",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Fatehabad."
    },
    {
        "name": "Fatehgarh",
        "rawName": "Fatehgarh",
        "slug": "fatehgarh",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Fatehgarh."
    },
    {
        "name": "Fatehpur",
        "rawName": "Fatehpur",
        "slug": "fatehpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Fatehpur."
    },
    {
        "name": "Fazilka",
        "rawName": "Fazilka",
        "slug": "fazilka",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Fazilka."
    },
    {
        "name": "Firozabad",
        "rawName": "Firozabad",
        "slug": "firozabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Firozabad outperform national competitors."
    },
    {
        "name": "Firozpur",
        "rawName": "Firozpur",
        "slug": "firozpur",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Firozpur."
    },
    {
        "name": "Forbesganj",
        "rawName": "Forbesganj",
        "slug": "forbesganj",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Forbesganj."
    },
    {
        "name": "Gadag-Betageri",
        "rawName": "Gadag-Betageri",
        "slug": "gadag-betageri",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gadag-Betageri."
    },
    {
        "name": "Gadarwara",
        "rawName": "Gadarwara",
        "slug": "gadarwara",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gadarwara."
    },
    {
        "name": "Gadchiroli",
        "rawName": "Gadchiroli",
        "slug": "gadchiroli",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gadchiroli."
    },
    {
        "name": "Gadhinglaj",
        "rawName": "Gadhinglaj",
        "slug": "gadhinglaj",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gadhinglaj."
    },
    {
        "name": "Gadwal",
        "rawName": "Gadwal",
        "slug": "gadwal",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gadwal."
    },
    {
        "name": "Ganaur",
        "rawName": "Ganaur",
        "slug": "ganaur",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ganaur."
    },
    {
        "name": "Gandhidham",
        "rawName": "Gandhidham",
        "slug": "gandhidham",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gandhidham."
    },
    {
        "name": "Gangakhed",
        "rawName": "Gangakhed",
        "slug": "gangakhed",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gangakhed."
    },
    {
        "name": "Gangapur",
        "rawName": "Gangapur",
        "slug": "gangapur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gangapur."
    },
    {
        "name": "Gangarampur",
        "rawName": "Gangarampur",
        "slug": "gangarampur",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gangarampur."
    },
    {
        "name": "Gangavathi",
        "rawName": "Gangavathi",
        "slug": "gangavathi",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gangavathi."
    },
    {
        "name": "Gangtok",
        "rawName": "Gangtok",
        "slug": "gangtok",
        "stateName": "Sikkim",
        "stateSlug": "sikkim",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Organic Agriculture",
            "Pharmaceuticals",
            "Eco-Tourism",
            "Hydropower"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Gangtok outperform national competitors."
    },
    {
        "name": "Garhwa",
        "rawName": "Garhwa",
        "slug": "garhwa",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Garhwa."
    },
    {
        "name": "Gauribidanur",
        "rawName": "Gauribidanur",
        "slug": "gauribidanur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gauribidanur."
    },
    {
        "name": "Gauriganj",
        "rawName": "Gauriganj",
        "slug": "gauriganj",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gauriganj."
    },
    {
        "name": "Gaya",
        "rawName": "Gaya",
        "slug": "gaya",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Gaya outperform national competitors."
    },
    {
        "name": "Georai",
        "rawName": "Georai",
        "slug": "georai",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Georai."
    },
    {
        "name": "Gharaunda",
        "rawName": "Gharaunda",
        "slug": "gharaunda",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gharaunda."
    },
    {
        "name": "Ghatsila",
        "rawName": "Ghatsila",
        "slug": "ghatsila",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ghatsila."
    },
    {
        "name": "Ghazipur",
        "rawName": "Ghazipur",
        "slug": "ghazipur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ghazipur."
    },
    {
        "name": "Gingee",
        "rawName": "Gingee",
        "slug": "gingee",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gingee."
    },
    {
        "name": "Giridih",
        "rawName": "Giridih",
        "slug": "giridih",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Giridih."
    },
    {
        "name": "Goa",
        "rawName": "Goa",
        "slug": "goa",
        "stateName": "Goa",
        "stateSlug": "goa",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Hospitality & Tourism",
            "Pharmaceuticals",
            "Maritime & Shipping",
            "Tech Startups"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Goa."
    },
    {
        "name": "Goalpara",
        "rawName": "Goalpara",
        "slug": "goalpara",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Goalpara."
    },
    {
        "name": "Gobardanga",
        "rawName": "Gobardanga",
        "slug": "gobardanga",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gobardanga."
    },
    {
        "name": "Gobichettipalayam",
        "rawName": "Gobichettipalayam",
        "slug": "gobichettipalayam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gobichettipalayam."
    },
    {
        "name": "Godda",
        "rawName": "Godda",
        "slug": "godda",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Godda."
    },
    {
        "name": "Godhra",
        "rawName": "Godhra",
        "slug": "godhra",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Godhra."
    },
    {
        "name": "Gohana",
        "rawName": "Gohana",
        "slug": "gohana",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gohana."
    },
    {
        "name": "Gokak",
        "rawName": "Gokak",
        "slug": "gokak",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gokak."
    },
    {
        "name": "Gokarna",
        "rawName": "Gokarna",
        "slug": "gokarna",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gokarna."
    },
    {
        "name": "Gola Gokaran Nath",
        "rawName": "Gola Gokaran Nath",
        "slug": "gola-gokaran-nath",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gola Gokaran Nath."
    },
    {
        "name": "Golaghat",
        "rawName": "Golaghat",
        "slug": "golaghat",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Golaghat."
    },
    {
        "name": "Gonda",
        "rawName": "Gonda",
        "slug": "gonda",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gonda."
    },
    {
        "name": "Gondal",
        "rawName": "Gondal",
        "slug": "gondal",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gondal."
    },
    {
        "name": "Gondia",
        "rawName": "Gondia",
        "slug": "gondia",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gondia."
    },
    {
        "name": "Gopalganj",
        "rawName": "Gopalganj",
        "slug": "gopalganj",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gopalganj."
    },
    {
        "name": "Gorakhpur",
        "rawName": "Gorakhpur",
        "slug": "gorakhpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gorakhpur."
    },
    {
        "name": "Gudalur",
        "rawName": "Gudalur",
        "slug": "gudalur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gudalur."
    },
    {
        "name": "Gudivada",
        "rawName": "Gudivada",
        "slug": "gudivada",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gudivada."
    },
    {
        "name": "Gudiyatham",
        "rawName": "Gudiyatham",
        "slug": "gudiyatham",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gudiyatham."
    },
    {
        "name": "Gudur",
        "rawName": "Gudur",
        "slug": "gudur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gudur."
    },
    {
        "name": "Gulbarga",
        "rawName": "Gulbarga",
        "slug": "gulbarga",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Gulbarga outperform national competitors."
    },
    {
        "name": "Gumla",
        "rawName": "Gumla",
        "slug": "gumla",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gumla."
    },
    {
        "name": "Guna",
        "rawName": "Guna",
        "slug": "guna",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Guna."
    },
    {
        "name": "Guntakal",
        "rawName": "Guntakal",
        "slug": "guntakal",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Guntakal."
    },
    {
        "name": "Guntur",
        "rawName": "Guntur",
        "slug": "guntur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Guntur outperform national competitors."
    },
    {
        "name": "Gunupur",
        "rawName": "Gunupur",
        "slug": "gunupur",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gunupur."
    },
    {
        "name": "Gurdaspur",
        "rawName": "Gurdaspur",
        "slug": "gurdaspur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Gurdaspur."
    },
    {
        "name": "Guwahati",
        "rawName": "Guwahati",
        "slug": "guwahati",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Guwahati outperform national competitors."
    },
    {
        "name": "Gwalior",
        "rawName": "Gwalior",
        "slug": "gwalior",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Gwalior outperform national competitors."
    },
    {
        "name": "Habra",
        "rawName": "Habra",
        "slug": "habra",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Habra."
    },
    {
        "name": "Haflong",
        "rawName": "Haflong",
        "slug": "haflong",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Haflong."
    },
    {
        "name": "Haldia",
        "rawName": "Haldia",
        "slug": "haldia",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Haldia."
    },
    {
        "name": "Haldwani",
        "rawName": "Haldwani",
        "slug": "haldwani",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Haldwani."
    },
    {
        "name": "Hamirpur",
        "rawName": "Hamirpur",
        "slug": "hamirpur",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hamirpur."
    },
    {
        "name": "Hamirpur",
        "rawName": "Hamirpur (UP)",
        "slug": "hamirpur-up",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hamirpur."
    },
    {
        "name": "Hampi-Hospet",
        "rawName": "Hampi-Hospet",
        "slug": "hampi-hospet",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hampi-Hospet."
    },
    {
        "name": "Hansi",
        "rawName": "Hansi",
        "slug": "hansi",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hansi."
    },
    {
        "name": "Hanumangarh",
        "rawName": "Hanumangarh",
        "slug": "hanumangarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hanumangarh."
    },
    {
        "name": "Hapur",
        "rawName": "Hapur",
        "slug": "hapur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hapur."
    },
    {
        "name": "Harda",
        "rawName": "Harda",
        "slug": "harda",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Harda."
    },
    {
        "name": "Hardoi",
        "rawName": "Hardoi",
        "slug": "hardoi",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hardoi."
    },
    {
        "name": "Haridwar",
        "rawName": "Haridwar",
        "slug": "haridwar",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Haridwar."
    },
    {
        "name": "Harihar",
        "rawName": "Harihar",
        "slug": "harihar",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Harihar."
    },
    {
        "name": "Hassan",
        "rawName": "Hassan",
        "slug": "hassan",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hassan."
    },
    {
        "name": "Hathras",
        "rawName": "Hathras",
        "slug": "hathras",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hathras."
    },
    {
        "name": "Haveri",
        "rawName": "Haveri",
        "slug": "haveri",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Haveri."
    },
    {
        "name": "Hazaribagh",
        "rawName": "Hazaribagh",
        "slug": "hazaribagh",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hazaribagh."
    },
    {
        "name": "Himatnagar",
        "rawName": "Himatnagar",
        "slug": "himatnagar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Himatnagar."
    },
    {
        "name": "Hindaun",
        "rawName": "Hindaun",
        "slug": "hindaun",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hindaun."
    },
    {
        "name": "Hindupur",
        "rawName": "Hindupur",
        "slug": "hindupur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hindupur."
    },
    {
        "name": "Hinganghat",
        "rawName": "Hinganghat",
        "slug": "hinganghat",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hinganghat."
    },
    {
        "name": "Hingoli",
        "rawName": "Hingoli",
        "slug": "hingoli",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hingoli."
    },
    {
        "name": "Hiriyur",
        "rawName": "Hiriyur",
        "slug": "hiriyur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hiriyur."
    },
    {
        "name": "Hisar",
        "rawName": "Hisar",
        "slug": "hisar",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hisar."
    },
    {
        "name": "Hodal",
        "rawName": "Hodal",
        "slug": "hodal",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hodal."
    },
    {
        "name": "Hojai",
        "rawName": "Hojai",
        "slug": "hojai",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hojai."
    },
    {
        "name": "Hoshangabad",
        "rawName": "Hoshangabad",
        "slug": "hoshangabad",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hoshangabad."
    },
    {
        "name": "Hoshiarpur",
        "rawName": "Hoshiarpur",
        "slug": "hoshiarpur",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hoshiarpur."
    },
    {
        "name": "Hosur",
        "rawName": "Hosur",
        "slug": "hosur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Hosur."
    },
    {
        "name": "Hubli",
        "rawName": "Hubli",
        "slug": "hubli",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Hubli outperform national competitors."
    },
    {
        "name": "Humnabad",
        "rawName": "Humnabad",
        "slug": "humnabad",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Humnabad."
    },
    {
        "name": "Hyderabad",
        "rawName": "Hyderabad",
        "slug": "hyderabad",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Hyderabad."
    },
    {
        "name": "Ichalkaranji",
        "rawName": "Ichalkaranji",
        "slug": "ichalkaranji",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Ichalkaranji outperform national competitors."
    },
    {
        "name": "Ilkal",
        "rawName": "Ilkal",
        "slug": "ilkal",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ilkal."
    },
    {
        "name": "Imphal",
        "rawName": "Imphal",
        "slug": "imphal",
        "stateName": "Manipur",
        "stateSlug": "manipur",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Handloom & Agriculture",
            "Tourism",
            "Sports Goods",
            "Cross-Border Trade"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Imphal outperform national competitors."
    },
    {
        "name": "Indore",
        "rawName": "Indore",
        "slug": "indore",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Indore outperform national competitors."
    },
    {
        "name": "Islampur",
        "rawName": "Islampur",
        "slug": "islampur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Islampur."
    },
    {
        "name": "Itanagar",
        "rawName": "Itanagar",
        "slug": "itanagar",
        "stateName": "Arunachal Pradesh",
        "stateSlug": "arunachal-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Eco-Tourism",
            "Hydro Power",
            "Handicrafts",
            "Agriculture"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Itanagar outperform national competitors."
    },
    {
        "name": "Itarsi",
        "rawName": "Itarsi",
        "slug": "itarsi",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Itarsi."
    },
    {
        "name": "Jabalpur",
        "rawName": "Jabalpur",
        "slug": "jabalpur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jabalpur outperform national competitors."
    },
    {
        "name": "Jagatsinghpur",
        "rawName": "Jagatsinghpur",
        "slug": "jagatsinghpur",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jagatsinghpur."
    },
    {
        "name": "Jagdalpur",
        "rawName": "Jagdalpur",
        "slug": "jagdalpur",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jagdalpur."
    },
    {
        "name": "Jagraon",
        "rawName": "Jagraon",
        "slug": "jagraon",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jagraon."
    },
    {
        "name": "Jagtial",
        "rawName": "Jagtial",
        "slug": "jagtial",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jagtial."
    },
    {
        "name": "Jahangirabad",
        "rawName": "Jahangirabad",
        "slug": "jahangirabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jahangirabad."
    },
    {
        "name": "Jaigaon",
        "rawName": "Jaigaon",
        "slug": "jaigaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jaigaon."
    },
    {
        "name": "Jaipur",
        "rawName": "Jaipur",
        "slug": "jaipur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jaipur outperform national competitors."
    },
    {
        "name": "Jaisalmer",
        "rawName": "Jaisalmer",
        "slug": "jaisalmer",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jaisalmer."
    },
    {
        "name": "Jajpur Road",
        "rawName": "Jajpur Road",
        "slug": "jajpur-road",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jajpur Road."
    },
    {
        "name": "Jalalabad",
        "rawName": "Jalalabad",
        "slug": "jalalabad",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jalalabad."
    },
    {
        "name": "Jalandhar",
        "rawName": "Jalandhar",
        "slug": "jalandhar",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jalandhar outperform national competitors."
    },
    {
        "name": "Jalaun",
        "rawName": "Jalaun",
        "slug": "jalaun",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jalaun."
    },
    {
        "name": "Jalgaon",
        "rawName": "Jalgaon",
        "slug": "jalgaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jalgaon."
    },
    {
        "name": "Jalna",
        "rawName": "Jalna",
        "slug": "jalna",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jalna outperform national competitors."
    },
    {
        "name": "Jalpaiguri",
        "rawName": "Jalpaiguri",
        "slug": "jalpaiguri",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jalpaiguri."
    },
    {
        "name": "Jamakhandi",
        "rawName": "Jamakhandi",
        "slug": "jamakhandi",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jamakhandi."
    },
    {
        "name": "Jambusar",
        "rawName": "Jambusar",
        "slug": "jambusar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jambusar."
    },
    {
        "name": "Jamkhambhaliya",
        "rawName": "Jamkhambhaliya",
        "slug": "jamkhambhaliya",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jamkhambhaliya."
    },
    {
        "name": "Jammu",
        "rawName": "Jammu",
        "slug": "jammu",
        "stateName": "Jammu and Kashmir",
        "stateSlug": "jammu-and-kashmir",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jammu outperform national competitors."
    },
    {
        "name": "Jamnagar",
        "rawName": "Jamnagar",
        "slug": "jamnagar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jamnagar outperform national competitors."
    },
    {
        "name": "Jamshedpur",
        "rawName": "Jamshedpur",
        "slug": "jamshedpur",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jamshedpur outperform national competitors."
    },
    {
        "name": "Jamui",
        "rawName": "Jamui",
        "slug": "jamui",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jamui."
    },
    {
        "name": "Jangaon",
        "rawName": "Jangaon",
        "slug": "jangaon",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jangaon."
    },
    {
        "name": "Jangareddygudem",
        "rawName": "Jangareddygudem",
        "slug": "jangareddygudem",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jangareddygudem."
    },
    {
        "name": "Jangipur",
        "rawName": "Jangipur",
        "slug": "jangipur",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jangipur."
    },
    {
        "name": "Janjgir",
        "rawName": "Janjgir",
        "slug": "janjgir",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Janjgir."
    },
    {
        "name": "Jaora",
        "rawName": "Jaora",
        "slug": "jaora",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jaora."
    },
    {
        "name": "Jaspur",
        "rawName": "Jaspur",
        "slug": "jaspur",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jaspur."
    },
    {
        "name": "Jaunpur",
        "rawName": "Jaunpur",
        "slug": "jaunpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jaunpur."
    },
    {
        "name": "Jehanabad",
        "rawName": "Jehanabad",
        "slug": "jehanabad",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jehanabad."
    },
    {
        "name": "Jetpur",
        "rawName": "Jetpur",
        "slug": "jetpur",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jetpur."
    },
    {
        "name": "Jeypore",
        "rawName": "Jeypore",
        "slug": "jeypore",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jeypore."
    },
    {
        "name": "Jhajjar",
        "rawName": "Jhajjar",
        "slug": "jhajjar",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jhajjar."
    },
    {
        "name": "Jhalawar",
        "rawName": "Jhalawar",
        "slug": "jhalawar",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jhalawar."
    },
    {
        "name": "Jhansi",
        "rawName": "Jhansi",
        "slug": "jhansi",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jhansi outperform national competitors."
    },
    {
        "name": "Jhargram",
        "rawName": "Jhargram",
        "slug": "jhargram",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jhargram."
    },
    {
        "name": "Jharsuguda",
        "rawName": "Jharsuguda",
        "slug": "jharsuguda",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jharsuguda."
    },
    {
        "name": "Jhumri Telaiya",
        "rawName": "Jhumri Telaiya",
        "slug": "jhumri-telaiya",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jhumri Telaiya."
    },
    {
        "name": "Jhunjhunu",
        "rawName": "Jhunjhunu",
        "slug": "jhunjhunu",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jhunjhunu."
    },
    {
        "name": "Jiaganj",
        "rawName": "Jiaganj",
        "slug": "jiaganj",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jiaganj."
    },
    {
        "name": "Jind",
        "rawName": "Jind",
        "slug": "jind",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jind."
    },
    {
        "name": "Joda",
        "rawName": "Joda",
        "slug": "joda",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Joda."
    },
    {
        "name": "Jodhpur",
        "rawName": "Jodhpur",
        "slug": "jodhpur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Jodhpur outperform national competitors."
    },
    {
        "name": "Joginder Nagar",
        "rawName": "Joginder Nagar",
        "slug": "joginder-nagar",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Joginder Nagar."
    },
    {
        "name": "Jorhat",
        "rawName": "Jorhat",
        "slug": "jorhat",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Jorhat."
    },
    {
        "name": "Junagadh",
        "rawName": "Junagadh",
        "slug": "junagadh",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Junagadh outperform national competitors."
    },
    {
        "name": "Kadapa",
        "rawName": "Kadapa",
        "slug": "kadapa",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kadapa outperform national competitors."
    },
    {
        "name": "Kadayanallur",
        "rawName": "Kadayanallur",
        "slug": "kadayanallur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kadayanallur."
    },
    {
        "name": "Kadi",
        "rawName": "Kadi",
        "slug": "kadi",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kadi."
    },
    {
        "name": "Kadiri",
        "rawName": "Kadiri",
        "slug": "kadiri",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kadiri."
    },
    {
        "name": "Kaduru",
        "rawName": "Kaduru",
        "slug": "kaduru",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kaduru."
    },
    {
        "name": "Kahalgaon",
        "rawName": "Kahalgaon",
        "slug": "kahalgaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kahalgaon."
    },
    {
        "name": "Kaithal",
        "rawName": "Kaithal",
        "slug": "kaithal",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kaithal."
    },
    {
        "name": "Kakinada",
        "rawName": "Kakinada",
        "slug": "kakinada",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kakinada outperform national competitors."
    },
    {
        "name": "Kalameshwar",
        "rawName": "Kalameshwar",
        "slug": "kalameshwar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kalameshwar."
    },
    {
        "name": "Kalimpong",
        "rawName": "Kalimpong",
        "slug": "kalimpong",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kalimpong."
    },
    {
        "name": "Kallakurichi",
        "rawName": "Kallakurichi",
        "slug": "kallakurichi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kallakurichi."
    },
    {
        "name": "Kalna",
        "rawName": "Kalna",
        "slug": "kalna",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kalna."
    },
    {
        "name": "Kalol",
        "rawName": "Kalol",
        "slug": "kalol",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kalol."
    },
    {
        "name": "Kalpetta",
        "rawName": "Kalpetta",
        "slug": "kalpetta",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kalpetta."
    },
    {
        "name": "Kamareddy",
        "rawName": "Kamareddy",
        "slug": "kamareddy",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kamareddy."
    },
    {
        "name": "Kanchipuram",
        "rawName": "Kanchipuram",
        "slug": "kanchipuram",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kanchipuram."
    },
    {
        "name": "Kandhla",
        "rawName": "Kandhla",
        "slug": "kandhla",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kandhla."
    },
    {
        "name": "Kandi",
        "rawName": "Kandi",
        "slug": "kandi",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kandi."
    },
    {
        "name": "Kandukur",
        "rawName": "Kandukur",
        "slug": "kandukur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kandukur."
    },
    {
        "name": "Kangeyam",
        "rawName": "Kangeyam",
        "slug": "kangeyam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kangeyam."
    },
    {
        "name": "Kangra",
        "rawName": "Kangra",
        "slug": "kangra",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kangra."
    },
    {
        "name": "Kanhangad",
        "rawName": "Kanhangad",
        "slug": "kanhangad",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kanhangad."
    },
    {
        "name": "Kanker",
        "rawName": "Kanker",
        "slug": "kanker",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kanker."
    },
    {
        "name": "Kannauj",
        "rawName": "Kannauj",
        "slug": "kannauj",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kannauj."
    },
    {
        "name": "Kannur",
        "rawName": "Kannur",
        "slug": "kannur",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kannur."
    },
    {
        "name": "Kanpur",
        "rawName": "Kanpur",
        "slug": "kanpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kanpur outperform national competitors."
    },
    {
        "name": "Kanyakumari",
        "rawName": "Kanyakumari",
        "slug": "kanyakumari",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kanyakumari."
    },
    {
        "name": "Kapadvanj",
        "rawName": "Kapadvanj",
        "slug": "kapadvanj",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kapadvanj."
    },
    {
        "name": "Kapura",
        "rawName": "Kapura",
        "slug": "kapura",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kapura."
    },
    {
        "name": "Kapurthala",
        "rawName": "Kapurthala",
        "slug": "kapurthala",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kapurthala."
    },
    {
        "name": "Karad",
        "rawName": "Karad",
        "slug": "karad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karad."
    },
    {
        "name": "Karaikal",
        "rawName": "Karaikal",
        "slug": "karaikal",
        "stateName": "Puducherry",
        "stateSlug": "puducherry",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tourism & Hospitality",
            "Chemicals & Textiles",
            "IT Services",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karaikal."
    },
    {
        "name": "Karaikudi",
        "rawName": "Karaikudi",
        "slug": "karaikudi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karaikudi."
    },
    {
        "name": "Karanja",
        "rawName": "Karanja",
        "slug": "karanja",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karanja."
    },
    {
        "name": "Karauli",
        "rawName": "Karauli",
        "slug": "karauli",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karauli."
    },
    {
        "name": "Karimganj",
        "rawName": "Karimganj",
        "slug": "karimganj",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karimganj."
    },
    {
        "name": "Karimnagar",
        "rawName": "Karimnagar",
        "slug": "karimnagar",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karimnagar."
    },
    {
        "name": "Karjat",
        "rawName": "Karjat",
        "slug": "karjat",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karjat."
    },
    {
        "name": "Karkala",
        "rawName": "Karkala",
        "slug": "karkala",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karkala."
    },
    {
        "name": "Karnal",
        "rawName": "Karnal",
        "slug": "karnal",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Karnal outperform national competitors."
    },
    {
        "name": "Karumathampatti",
        "rawName": "Karumathampatti",
        "slug": "karumathampatti",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karumathampatti."
    },
    {
        "name": "Karur",
        "rawName": "Karur",
        "slug": "karur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karur."
    },
    {
        "name": "Karwar",
        "rawName": "Karwar",
        "slug": "karwar",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karwar."
    },
    {
        "name": "Karwi",
        "rawName": "Karwi",
        "slug": "karwi",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Karwi."
    },
    {
        "name": "Kasaragod",
        "rawName": "Kasaragod",
        "slug": "kasaragod",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kasaragod."
    },
    {
        "name": "Kasganj",
        "rawName": "Kasganj",
        "slug": "kasganj",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kasganj."
    },
    {
        "name": "Kashipur",
        "rawName": "Kashipur",
        "slug": "kashipur",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kashipur."
    },
    {
        "name": "Kathua",
        "rawName": "Kathua",
        "slug": "kathua",
        "stateName": "Jammu and Kashmir",
        "stateSlug": "jammu-and-kashmir",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kathua."
    },
    {
        "name": "Katihar",
        "rawName": "Katihar",
        "slug": "katihar",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Katihar."
    },
    {
        "name": "Katni",
        "rawName": "Katni",
        "slug": "katni",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Katni."
    },
    {
        "name": "Katol",
        "rawName": "Katol",
        "slug": "katol",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Katol."
    },
    {
        "name": "Katra",
        "rawName": "Katra",
        "slug": "katra",
        "stateName": "Jammu and Kashmir",
        "stateSlug": "jammu-and-kashmir",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Katra."
    },
    {
        "name": "Katwa",
        "rawName": "Katwa",
        "slug": "katwa",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Katwa."
    },
    {
        "name": "Kavali",
        "rawName": "Kavali",
        "slug": "kavali",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kavali."
    },
    {
        "name": "Kayamkulam",
        "rawName": "Kayamkulam",
        "slug": "kayamkulam",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kayamkulam."
    },
    {
        "name": "Kendrapara",
        "rawName": "Kendrapara",
        "slug": "kendrapara",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kendrapara."
    },
    {
        "name": "Keonjhar",
        "rawName": "Keonjhar",
        "slug": "keonjhar",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Keonjhar."
    },
    {
        "name": "Keshod",
        "rawName": "Keshod",
        "slug": "keshod",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Keshod."
    },
    {
        "name": "Kevadia",
        "rawName": "Kevadia",
        "slug": "kevadia",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kevadia."
    },
    {
        "name": "Khagaria",
        "rawName": "Khagaria",
        "slug": "khagaria",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khagaria."
    },
    {
        "name": "Khajuraho",
        "rawName": "Khajuraho",
        "slug": "khajuraho",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khajuraho."
    },
    {
        "name": "Khalilabad",
        "rawName": "Khalilabad",
        "slug": "khalilabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khalilabad."
    },
    {
        "name": "Khambhat",
        "rawName": "Khambhat",
        "slug": "khambhat",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khambhat."
    },
    {
        "name": "Khamgaon",
        "rawName": "Khamgaon",
        "slug": "khamgaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khamgaon."
    },
    {
        "name": "Khammam",
        "rawName": "Khammam",
        "slug": "khammam",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Khammam outperform national competitors."
    },
    {
        "name": "Khandwa",
        "rawName": "Khandwa",
        "slug": "khandwa",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khandwa."
    },
    {
        "name": "Khanna",
        "rawName": "Khanna",
        "slug": "khanna",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khanna."
    },
    {
        "name": "Kharagpur",
        "rawName": "Kharagpur",
        "slug": "kharagpur",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kharagpur."
    },
    {
        "name": "Kharagpur",
        "rawName": "Kharagpur Bihar",
        "slug": "kharagpur-bihar",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kharagpur."
    },
    {
        "name": "Khargone",
        "rawName": "Khargone",
        "slug": "khargone",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khargone."
    },
    {
        "name": "Khatauli",
        "rawName": "Khatauli",
        "slug": "khatauli",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khatauli."
    },
    {
        "name": "Kheda",
        "rawName": "Kheda",
        "slug": "kheda",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kheda."
    },
    {
        "name": "Khopoli",
        "rawName": "Khopoli",
        "slug": "khopoli",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khopoli."
    },
    {
        "name": "Khordha",
        "rawName": "Khordha",
        "slug": "khordha",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khordha."
    },
    {
        "name": "Khunti",
        "rawName": "Khunti",
        "slug": "khunti",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khunti."
    },
    {
        "name": "Khurai",
        "rawName": "Khurai",
        "slug": "khurai",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khurai."
    },
    {
        "name": "Khurja",
        "rawName": "Khurja",
        "slug": "khurja",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Khurja."
    },
    {
        "name": "Kiccha",
        "rawName": "Kiccha",
        "slug": "kiccha",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kiccha."
    },
    {
        "name": "Kilakarai",
        "rawName": "Kilakarai",
        "slug": "kilakarai",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kilakarai."
    },
    {
        "name": "Kishanganj",
        "rawName": "Kishanganj",
        "slug": "kishanganj",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kishanganj."
    },
    {
        "name": "Kishangarh",
        "rawName": "Kishangarh",
        "slug": "kishangarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kishangarh."
    },
    {
        "name": "Kochi",
        "rawName": "Kochi",
        "slug": "kochi",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kochi outperform national competitors."
    },
    {
        "name": "Kodad",
        "rawName": "Kodad",
        "slug": "kodad",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kodad."
    },
    {
        "name": "Kodaikanal",
        "rawName": "Kodaikanal",
        "slug": "kodaikanal",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kodaikanal."
    },
    {
        "name": "Kodinar",
        "rawName": "Kodinar",
        "slug": "kodinar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kodinar."
    },
    {
        "name": "Kodungallur",
        "rawName": "Kodungallur",
        "slug": "kodungallur",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kodungallur."
    },
    {
        "name": "Kohima",
        "rawName": "Kohima",
        "slug": "kohima",
        "stateName": "Nagaland",
        "stateSlug": "nagaland",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Agriculture & Horticulture",
            "Tourism",
            "Handlooms",
            "Wood Products"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kohima outperform national competitors."
    },
    {
        "name": "Kokrajhar",
        "rawName": "Kokrajhar",
        "slug": "kokrajhar",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kokrajhar."
    },
    {
        "name": "Kolar",
        "rawName": "Kolar",
        "slug": "kolar",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kolar."
    },
    {
        "name": "Kolhapur",
        "rawName": "Kolhapur",
        "slug": "kolhapur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kolhapur outperform national competitors."
    },
    {
        "name": "Kolkata",
        "rawName": "Kolkata",
        "slug": "kolkata",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Kolkata."
    },
    {
        "name": "Kollam",
        "rawName": "Kollam",
        "slug": "kollam",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kollam outperform national competitors."
    },
    {
        "name": "Kondotty",
        "rawName": "Kondotty",
        "slug": "kondotty",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kondotty."
    },
    {
        "name": "Koothattukulam",
        "rawName": "Koothattukulam",
        "slug": "koothattukulam",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Koothattukulam."
    },
    {
        "name": "Kopargaon",
        "rawName": "Kopargaon",
        "slug": "kopargaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kopargaon."
    },
    {
        "name": "Koppal",
        "rawName": "Koppal",
        "slug": "koppal",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Koppal."
    },
    {
        "name": "Koraput",
        "rawName": "Koraput",
        "slug": "koraput",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Koraput."
    },
    {
        "name": "Korba",
        "rawName": "Korba",
        "slug": "korba",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Korba outperform national competitors."
    },
    {
        "name": "Korutla",
        "rawName": "Korutla",
        "slug": "korutla",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Korutla."
    },
    {
        "name": "Kosamba",
        "rawName": "Kosamba",
        "slug": "kosamba",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kosamba."
    },
    {
        "name": "Kot",
        "rawName": "Kot",
        "slug": "kot",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kot."
    },
    {
        "name": "Kota",
        "rawName": "Kota",
        "slug": "kota",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kota outperform national competitors."
    },
    {
        "name": "Kotagiri",
        "rawName": "Kotagiri",
        "slug": "kotagiri",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kotagiri."
    },
    {
        "name": "Kotdwar",
        "rawName": "Kotdwar",
        "slug": "kotdwar",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kotdwar."
    },
    {
        "name": "Kothagudem",
        "rawName": "Kothagudem",
        "slug": "kothagudem",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kothagudem."
    },
    {
        "name": "Kothamangalam",
        "rawName": "Kothamangalam",
        "slug": "kothamangalam",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kothamangalam."
    },
    {
        "name": "Kotputli",
        "rawName": "Kotputli",
        "slug": "kotputli",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kotputli."
    },
    {
        "name": "Kottakkal",
        "rawName": "Kottakkal",
        "slug": "kottakkal",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kottakkal."
    },
    {
        "name": "Kottayam",
        "rawName": "Kottayam",
        "slug": "kottayam",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kottayam."
    },
    {
        "name": "Kovilpatti",
        "rawName": "Kovilpatti",
        "slug": "kovilpatti",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kovilpatti."
    },
    {
        "name": "Koyilandy",
        "rawName": "Koyilandy",
        "slug": "koyilandy",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Koyilandy."
    },
    {
        "name": "Kozhikode",
        "rawName": "Kozhikode",
        "slug": "kozhikode",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Kozhikode outperform national competitors."
    },
    {
        "name": "Krishnagiri",
        "rawName": "Krishnagiri",
        "slug": "krishnagiri",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Krishnagiri."
    },
    {
        "name": "Krishnanagar",
        "rawName": "Krishnanagar",
        "slug": "krishnanagar",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Krishnanagar."
    },
    {
        "name": "Kuchaman",
        "rawName": "Kuchaman",
        "slug": "kuchaman",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kuchaman."
    },
    {
        "name": "Kullu",
        "rawName": "Kullu",
        "slug": "kullu",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kullu."
    },
    {
        "name": "Kumbakonam",
        "rawName": "Kumbakonam",
        "slug": "kumbakonam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kumbakonam."
    },
    {
        "name": "Kumbhalgarh",
        "rawName": "Kumbhalgarh",
        "slug": "kumbhalgarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kumbhalgarh."
    },
    {
        "name": "Kumta",
        "rawName": "Kumta",
        "slug": "kumta",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kumta."
    },
    {
        "name": "Kundapura-Koteshwar",
        "rawName": "Kundapura-Koteshwar",
        "slug": "kundapura-koteshwar",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kundapura-Koteshwar."
    },
    {
        "name": "Kunnamkulam",
        "rawName": "Kunnamkulam",
        "slug": "kunnamkulam",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kunnamkulam."
    },
    {
        "name": "Kurali",
        "rawName": "Kurali",
        "slug": "kurali",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kurali."
    },
    {
        "name": "Kurnool",
        "rawName": "Kurnool",
        "slug": "kurnool",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kurnool."
    },
    {
        "name": "Kurseong",
        "rawName": "Kurseong",
        "slug": "kurseong",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kurseong."
    },
    {
        "name": "Kurukshetra",
        "rawName": "Kurukshetra",
        "slug": "kurukshetra",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kurukshetra."
    },
    {
        "name": "Kushalnagar",
        "rawName": "Kushalnagar",
        "slug": "kushalnagar",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kushalnagar."
    },
    {
        "name": "Kushinagar",
        "rawName": "Kushinagar",
        "slug": "kushinagar",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kushinagar."
    },
    {
        "name": "Kuthuparamba",
        "rawName": "Kuthuparamba",
        "slug": "kuthuparamba",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Kuthuparamba."
    },
    {
        "name": "Ladwa",
        "rawName": "Ladwa",
        "slug": "ladwa",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ladwa."
    },
    {
        "name": "Lakhimpur",
        "rawName": "Lakhimpur",
        "slug": "lakhimpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Lakhimpur."
    },
    {
        "name": "Lakhisarai",
        "rawName": "Lakhisarai",
        "slug": "lakhisarai",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Lakhisarai."
    },
    {
        "name": "Lalganj",
        "rawName": "Lalganj",
        "slug": "lalganj",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Lalganj."
    },
    {
        "name": "Lalitpur",
        "rawName": "Lalitpur",
        "slug": "lalitpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Lalitpur."
    },
    {
        "name": "Latur",
        "rawName": "Latur",
        "slug": "latur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Latur outperform national competitors."
    },
    {
        "name": "Laxmangarh",
        "rawName": "Laxmangarh",
        "slug": "laxmangarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Laxmangarh."
    },
    {
        "name": "Leh",
        "rawName": "Leh",
        "slug": "leh",
        "stateName": "Ladakh",
        "stateSlug": "ladakh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Eco-Tourism",
            "Renewable Energy",
            "Handicrafts",
            "Agriculture"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Leh outperform national competitors."
    },
    {
        "name": "Limbdi",
        "rawName": "Limbdi",
        "slug": "limbdi",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Limbdi."
    },
    {
        "name": "Lohardaga",
        "rawName": "Lohardaga",
        "slug": "lohardaga",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Lohardaga."
    },
    {
        "name": "Loni",
        "rawName": "Loni",
        "slug": "loni",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Loni."
    },
    {
        "name": "Lucknow",
        "rawName": "Lucknow",
        "slug": "lucknow",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Lucknow outperform national competitors."
    },
    {
        "name": "Ludhiana",
        "rawName": "Ludhiana",
        "slug": "ludhiana",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Ludhiana outperform national competitors."
    },
    {
        "name": "Lunawada",
        "rawName": "Lunawada",
        "slug": "lunawada",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Lunawada."
    },
    {
        "name": "Lunglei",
        "rawName": "Lunglei",
        "slug": "lunglei",
        "stateName": "Mizoram",
        "stateSlug": "mizoram",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Bamboo & Forestry",
            "Agriculture",
            "Handlooms",
            "Tourism"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Lunglei."
    },
    {
        "name": "Machilipatnam",
        "rawName": "Machilipatnam",
        "slug": "machilipatnam",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Machilipatnam."
    },
    {
        "name": "Madanapalle",
        "rawName": "Madanapalle",
        "slug": "madanapalle",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Madanapalle."
    },
    {
        "name": "Madhepura",
        "rawName": "Madhepura",
        "slug": "madhepura",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Madhepura."
    },
    {
        "name": "Madhopur",
        "rawName": "Madhopur",
        "slug": "madhopur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Madhopur."
    },
    {
        "name": "Madhubani",
        "rawName": "Madhubani",
        "slug": "madhubani",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Madhubani."
    },
    {
        "name": "Madhupur",
        "rawName": "Madhupur",
        "slug": "madhupur",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Madhupur."
    },
    {
        "name": "Madikeri",
        "rawName": "Madikeri",
        "slug": "madikeri",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Madikeri."
    },
    {
        "name": "Madurai",
        "rawName": "Madurai",
        "slug": "madurai",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Madurai outperform national competitors."
    },
    {
        "name": "Mahabaleshwar",
        "rawName": "Mahabaleshwar",
        "slug": "mahabaleshwar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahabaleshwar."
    },
    {
        "name": "Mahad",
        "rawName": "Mahad",
        "slug": "mahad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahad."
    },
    {
        "name": "Maharajganj",
        "rawName": "Maharajganj",
        "slug": "maharajganj",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Maharajganj."
    },
    {
        "name": "Mahasamund",
        "rawName": "Mahasamund",
        "slug": "mahasamund",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahasamund."
    },
    {
        "name": "Mahbubnagar",
        "rawName": "Mahbubnagar",
        "slug": "mahbubnagar",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahbubnagar."
    },
    {
        "name": "Mahemdavad",
        "rawName": "Mahemdavad",
        "slug": "mahemdavad",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahemdavad."
    },
    {
        "name": "Mahendragarh",
        "rawName": "Mahendragarh",
        "slug": "mahendragarh",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahendragarh."
    },
    {
        "name": "Mahmudabad",
        "rawName": "Mahmudabad",
        "slug": "mahmudabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahmudabad."
    },
    {
        "name": "Mahoba",
        "rawName": "Mahoba",
        "slug": "mahoba",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahoba."
    },
    {
        "name": "Mahuva",
        "rawName": "Mahuva",
        "slug": "mahuva",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mahuva."
    },
    {
        "name": "Maihar",
        "rawName": "Maihar",
        "slug": "maihar",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Maihar."
    },
    {
        "name": "Mainpuri",
        "rawName": "Mainpuri",
        "slug": "mainpuri",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mainpuri."
    },
    {
        "name": "Majalgaon",
        "rawName": "Majalgaon",
        "slug": "majalgaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Majalgaon."
    },
    {
        "name": "Makrana",
        "rawName": "Makrana",
        "slug": "makrana",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Makrana."
    },
    {
        "name": "Malappuram",
        "rawName": "Malappuram",
        "slug": "malappuram",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Malappuram."
    },
    {
        "name": "Malavalli",
        "rawName": "Malavalli",
        "slug": "malavalli",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Malavalli."
    },
    {
        "name": "Malda",
        "rawName": "Malda",
        "slug": "malda",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Malda."
    },
    {
        "name": "Malegaon",
        "rawName": "Malegaon",
        "slug": "malegaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Malegaon."
    },
    {
        "name": "Malerkotla",
        "rawName": "Malerkotla",
        "slug": "malerkotla",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Malerkotla."
    },
    {
        "name": "Malkapur",
        "rawName": "Malkapur",
        "slug": "malkapur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Malkapur."
    },
    {
        "name": "Malout",
        "rawName": "Malout",
        "slug": "malout",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Malout."
    },
    {
        "name": "Manali",
        "rawName": "Manali",
        "slug": "manali",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Manali."
    },
    {
        "name": "Mananthavady",
        "rawName": "Mananthavady",
        "slug": "mananthavady",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mananthavady."
    },
    {
        "name": "Mancherial",
        "rawName": "Mancherial",
        "slug": "mancherial",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mancherial."
    },
    {
        "name": "Mandapeta",
        "rawName": "Mandapeta",
        "slug": "mandapeta",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mandapeta."
    },
    {
        "name": "Mandi",
        "rawName": "Mandi",
        "slug": "mandi",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mandi."
    },
    {
        "name": "Mandi Dabwali",
        "rawName": "Mandi Dabwali",
        "slug": "mandi-dabwali",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mandi Dabwali."
    },
    {
        "name": "Mandideep",
        "rawName": "Mandideep",
        "slug": "mandideep",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mandideep."
    },
    {
        "name": "Mandla",
        "rawName": "Mandla",
        "slug": "mandla",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mandla."
    },
    {
        "name": "Mandsaur",
        "rawName": "Mandsaur",
        "slug": "mandsaur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mandsaur."
    },
    {
        "name": "Mandvi",
        "rawName": "Mandvi",
        "slug": "mandvi",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mandvi."
    },
    {
        "name": "Mandya",
        "rawName": "Mandya",
        "slug": "mandya",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mandya."
    },
    {
        "name": "Mangalore",
        "rawName": "Mangalore",
        "slug": "mangalore",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Mangalore outperform national competitors."
    },
    {
        "name": "Mangrol",
        "rawName": "Mangrol",
        "slug": "mangrol",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mangrol."
    },
    {
        "name": "Mangrulpir",
        "rawName": "Mangrulpir",
        "slug": "mangrulpir",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mangrulpir."
    },
    {
        "name": "Manipal",
        "rawName": "Manipal",
        "slug": "manipal",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Manipal."
    },
    {
        "name": "Manjeri",
        "rawName": "Manjeri",
        "slug": "manjeri",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Manjeri."
    },
    {
        "name": "Manmad",
        "rawName": "Manmad",
        "slug": "manmad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Manmad."
    },
    {
        "name": "Mannargudi",
        "rawName": "Mannargudi",
        "slug": "mannargudi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mannargudi."
    },
    {
        "name": "Mannarkkad",
        "rawName": "Mannarkkad",
        "slug": "mannarkkad",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mannarkkad."
    },
    {
        "name": "Mansa",
        "rawName": "Mansa",
        "slug": "mansa",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mansa."
    },
    {
        "name": "Markapur",
        "rawName": "Markapur",
        "slug": "markapur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Markapur."
    },
    {
        "name": "Masaurhi",
        "rawName": "Masaurhi",
        "slug": "masaurhi",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Masaurhi."
    },
    {
        "name": "Mathura",
        "rawName": "Mathura",
        "slug": "mathura",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Mathura outperform national competitors."
    },
    {
        "name": "Mattannur",
        "rawName": "Mattannur",
        "slug": "mattannur",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mattannur."
    },
    {
        "name": "Mau",
        "rawName": "Mau",
        "slug": "mau",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mau."
    },
    {
        "name": "Mayiladuthurai",
        "rawName": "Mayiladuthurai",
        "slug": "mayiladuthurai",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mayiladuthurai."
    },
    {
        "name": "Medak",
        "rawName": "Medak",
        "slug": "medak",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Medak."
    },
    {
        "name": "Meerut",
        "rawName": "Meerut",
        "slug": "meerut",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Meerut outperform national competitors."
    },
    {
        "name": "Mehsana",
        "rawName": "Mehsana",
        "slug": "mehsana",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mehsana."
    },
    {
        "name": "Merta",
        "rawName": "Merta",
        "slug": "merta",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Merta."
    },
    {
        "name": "Mettupalayam",
        "rawName": "Mettupalayam",
        "slug": "mettupalayam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mettupalayam."
    },
    {
        "name": "Mettur",
        "rawName": "Mettur",
        "slug": "mettur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mettur."
    },
    {
        "name": "Miryalaguda",
        "rawName": "Miryalaguda",
        "slug": "miryalaguda",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Miryalaguda."
    },
    {
        "name": "Mirzapur",
        "rawName": "Mirzapur",
        "slug": "mirzapur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mirzapur."
    },
    {
        "name": "Modasa",
        "rawName": "Modasa",
        "slug": "modasa",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Modasa."
    },
    {
        "name": "Modinagar",
        "rawName": "Modinagar",
        "slug": "modinagar",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Modinagar."
    },
    {
        "name": "Moga",
        "rawName": "Moga",
        "slug": "moga",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Moga."
    },
    {
        "name": "Moirang",
        "rawName": "Moirang",
        "slug": "moirang",
        "stateName": "Manipur",
        "stateSlug": "manipur",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Handloom & Agriculture",
            "Tourism",
            "Sports Goods",
            "Cross-Border Trade"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Moirang."
    },
    {
        "name": "Mokameh Khas",
        "rawName": "Mokameh Khas",
        "slug": "mokameh-khas",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mokameh Khas."
    },
    {
        "name": "Mokokchung",
        "rawName": "Mokokchung",
        "slug": "mokokchung",
        "stateName": "Nagaland",
        "stateSlug": "nagaland",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agriculture & Horticulture",
            "Tourism",
            "Handlooms",
            "Wood Products"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mokokchung."
    },
    {
        "name": "Moodbidri",
        "rawName": "Moodbidri",
        "slug": "moodbidri",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Moodbidri."
    },
    {
        "name": "Moradabad",
        "rawName": "Moradabad",
        "slug": "moradabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Moradabad outperform national competitors."
    },
    {
        "name": "Morbi",
        "rawName": "Morbi",
        "slug": "morbi",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Morbi."
    },
    {
        "name": "Morena",
        "rawName": "Morena",
        "slug": "morena",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Morena."
    },
    {
        "name": "Motihari",
        "rawName": "Motihari",
        "slug": "motihari",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Motihari."
    },
    {
        "name": "Mount Abu",
        "rawName": "Mount Abu",
        "slug": "mount-abu",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mount Abu."
    },
    {
        "name": "Mughalsarai",
        "rawName": "Mughalsarai",
        "slug": "mughalsarai",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mughalsarai."
    },
    {
        "name": "Mukerian",
        "rawName": "Mukerian",
        "slug": "mukerian",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mukerian."
    },
    {
        "name": "Muktsar",
        "rawName": "Muktsar",
        "slug": "muktsar",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Muktsar."
    },
    {
        "name": "Mukundgarh",
        "rawName": "Mukundgarh",
        "slug": "mukundgarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mukundgarh."
    },
    {
        "name": "Mullana",
        "rawName": "Mullana",
        "slug": "mullana",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mullana."
    },
    {
        "name": "Multai",
        "rawName": "Multai",
        "slug": "multai",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Multai."
    },
    {
        "name": "Mumbai",
        "rawName": "Mumbai",
        "slug": "mumbai",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Mumbai."
    },
    {
        "name": "Mundra",
        "rawName": "Mundra",
        "slug": "mundra",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mundra."
    },
    {
        "name": "Munger",
        "rawName": "Munger",
        "slug": "munger",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Munger."
    },
    {
        "name": "Munnar",
        "rawName": "Munnar",
        "slug": "munnar",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Munnar."
    },
    {
        "name": "Muradnagar",
        "rawName": "Muradnagar",
        "slug": "muradnagar",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Muradnagar."
    },
    {
        "name": "Murdeshwar",
        "rawName": "Murdeshwar",
        "slug": "murdeshwar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Murdeshwar."
    },
    {
        "name": "Murshidabad",
        "rawName": "Murshidabad",
        "slug": "murshidabad",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Murshidabad."
    },
    {
        "name": "Musiri",
        "rawName": "Musiri",
        "slug": "musiri",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Musiri."
    },
    {
        "name": "Mussoorie",
        "rawName": "Mussoorie",
        "slug": "mussoorie",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Mussoorie."
    },
    {
        "name": "Muvattupuzha",
        "rawName": "Muvattupuzha",
        "slug": "muvattupuzha",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Muvattupuzha."
    },
    {
        "name": "Muzaffarnagar",
        "rawName": "Muzaffarnagar",
        "slug": "muzaffarnagar",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Muzaffarnagar outperform national competitors."
    },
    {
        "name": "Muzaffarpur",
        "rawName": "Muzaffarpur",
        "slug": "muzaffarpur",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Muzaffarpur."
    },
    {
        "name": "Mysore",
        "rawName": "Mysore",
        "slug": "mysore",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Mysore outperform national competitors."
    },
    {
        "name": "Nabadwip",
        "rawName": "Nabadwip",
        "slug": "nabadwip",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nabadwip."
    },
    {
        "name": "Nadiad",
        "rawName": "Nadiad",
        "slug": "nadiad",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nadiad."
    },
    {
        "name": "Nagaon",
        "rawName": "Nagaon",
        "slug": "nagaon",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nagaon."
    },
    {
        "name": "Nagapattinam",
        "rawName": "Nagapattinam",
        "slug": "nagapattinam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nagapattinam."
    },
    {
        "name": "Nagaur",
        "rawName": "Nagaur",
        "slug": "nagaur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nagaur."
    },
    {
        "name": "Nagda",
        "rawName": "Nagda",
        "slug": "nagda",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nagda."
    },
    {
        "name": "Nagercoil",
        "rawName": "Nagercoil",
        "slug": "nagercoil",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nagercoil."
    },
    {
        "name": "Nagina",
        "rawName": "Nagina",
        "slug": "nagina",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nagina."
    },
    {
        "name": "Nagpur",
        "rawName": "Nagpur",
        "slug": "nagpur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Nagpur outperform national competitors."
    },
    {
        "name": "Nahan",
        "rawName": "Nahan",
        "slug": "nahan",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nahan."
    },
    {
        "name": "Naharlagun",
        "rawName": "Naharlagun",
        "slug": "naharlagun",
        "stateName": "Arunachal Pradesh",
        "stateSlug": "arunachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Eco-Tourism",
            "Hydro Power",
            "Handicrafts",
            "Agriculture"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Naharlagun."
    },
    {
        "name": "Naidupeta",
        "rawName": "Naidupeta",
        "slug": "naidupeta",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Naidupeta."
    },
    {
        "name": "Nainital",
        "rawName": "Nainital",
        "slug": "nainital",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nainital."
    },
    {
        "name": "Najibabad",
        "rawName": "Najibabad",
        "slug": "najibabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Najibabad."
    },
    {
        "name": "Nakodar",
        "rawName": "Nakodar",
        "slug": "nakodar",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nakodar."
    },
    {
        "name": "Nalbari",
        "rawName": "Nalbari",
        "slug": "nalbari",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nalbari."
    },
    {
        "name": "Nalgonda",
        "rawName": "Nalgonda",
        "slug": "nalgonda",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nalgonda."
    },
    {
        "name": "Namakkal",
        "rawName": "Namakkal",
        "slug": "namakkal",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Namakkal."
    },
    {
        "name": "Nanded",
        "rawName": "Nanded",
        "slug": "nanded",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Nanded outperform national competitors."
    },
    {
        "name": "Nandura",
        "rawName": "Nandura",
        "slug": "nandura",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nandura."
    },
    {
        "name": "Nandurbar",
        "rawName": "Nandurbar",
        "slug": "nandurbar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nandurbar."
    },
    {
        "name": "Nandyal",
        "rawName": "Nandyal",
        "slug": "nandyal",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nandyal."
    },
    {
        "name": "Nangal",
        "rawName": "Nangal",
        "slug": "nangal",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nangal."
    },
    {
        "name": "Nanjangud",
        "rawName": "Nanjangud",
        "slug": "nanjangud",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nanjangud."
    },
    {
        "name": "Nanpara",
        "rawName": "Nanpara",
        "slug": "nanpara",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nanpara."
    },
    {
        "name": "Naraingarh",
        "rawName": "Naraingarh",
        "slug": "naraingarh",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Naraingarh."
    },
    {
        "name": "Narasaraopet",
        "rawName": "Narasaraopet",
        "slug": "narasaraopet",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Narasaraopet."
    },
    {
        "name": "Narnaul",
        "rawName": "Narnaul",
        "slug": "narnaul",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Narnaul."
    },
    {
        "name": "Narsapur",
        "rawName": "Narsapur",
        "slug": "narsapur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Narsapur."
    },
    {
        "name": "Narsinghpur",
        "rawName": "Narsinghpur",
        "slug": "narsinghpur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Narsinghpur."
    },
    {
        "name": "Narsipatnam",
        "rawName": "Narsipatnam",
        "slug": "narsipatnam",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Narsipatnam."
    },
    {
        "name": "Narwana",
        "rawName": "Narwana",
        "slug": "narwana",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Narwana."
    },
    {
        "name": "Nashik",
        "rawName": "Nashik",
        "slug": "nashik",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Nashik outperform national competitors."
    },
    {
        "name": "Nasirabad",
        "rawName": "Nasirabad",
        "slug": "nasirabad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nasirabad."
    },
    {
        "name": "Nathdwara",
        "rawName": "Nathdwara",
        "slug": "nathdwara",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nathdwara."
    },
    {
        "name": "Naugachhia",
        "rawName": "Naugachhia",
        "slug": "naugachhia",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Naugachhia."
    },
    {
        "name": "Navsari",
        "rawName": "Navsari",
        "slug": "navsari",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Navsari."
    },
    {
        "name": "Nawada",
        "rawName": "Nawada",
        "slug": "nawada",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nawada."
    },
    {
        "name": "Nawalgarh",
        "rawName": "Nawalgarh",
        "slug": "nawalgarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nawalgarh."
    },
    {
        "name": "Nawanshahr",
        "rawName": "Nawanshahr",
        "slug": "nawanshahr",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nawanshahr."
    },
    {
        "name": "Nayagarh",
        "rawName": "Nayagarh",
        "slug": "nayagarh",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nayagarh."
    },
    {
        "name": "Neemrana",
        "rawName": "Neemrana",
        "slug": "neemrana",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Neemrana."
    },
    {
        "name": "Neemuch",
        "rawName": "Neemuch",
        "slug": "neemuch",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Neemuch."
    },
    {
        "name": "Nelamangala",
        "rawName": "Nelamangala",
        "slug": "nelamangala",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nelamangala."
    },
    {
        "name": "Nellore",
        "rawName": "Nellore",
        "slug": "nellore",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nellore."
    },
    {
        "name": "Neyveli",
        "rawName": "Neyveli",
        "slug": "neyveli",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Neyveli."
    },
    {
        "name": "Nidadavolu",
        "rawName": "Nidadavolu",
        "slug": "nidadavolu",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nidadavolu."
    },
    {
        "name": "Nilanga",
        "rawName": "Nilanga",
        "slug": "nilanga",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nilanga."
    },
    {
        "name": "Nimapada",
        "rawName": "Nimapada",
        "slug": "nimapada",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nimapada."
    },
    {
        "name": "Nimbahera",
        "rawName": "Nimbahera",
        "slug": "nimbahera",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nimbahera."
    },
    {
        "name": "Nipani",
        "rawName": "Nipani",
        "slug": "nipani",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nipani."
    },
    {
        "name": "Nirmal",
        "rawName": "Nirmal",
        "slug": "nirmal",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nirmal."
    },
    {
        "name": "Nizamabad",
        "rawName": "Nizamabad",
        "slug": "nizamabad",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Nizamabad outperform national competitors."
    },
    {
        "name": "Noorpur",
        "rawName": "Noorpur",
        "slug": "noorpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Noorpur."
    },
    {
        "name": "North Lakhimpur",
        "rawName": "North Lakhimpur",
        "slug": "north-lakhimpur",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in North Lakhimpur."
    },
    {
        "name": "Nuzividu",
        "rawName": "Nuzividu",
        "slug": "nuzividu",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Nuzividu."
    },
    {
        "name": "Oddanchatram",
        "rawName": "Oddanchatram",
        "slug": "oddanchatram",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Oddanchatram."
    },
    {
        "name": "Ojhar",
        "rawName": "Ojhar",
        "slug": "ojhar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ojhar."
    },
    {
        "name": "Omerga",
        "rawName": "Omerga",
        "slug": "omerga",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Omerga."
    },
    {
        "name": "Ongole",
        "rawName": "Ongole",
        "slug": "ongole",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ongole."
    },
    {
        "name": "Ooty",
        "rawName": "Ooty",
        "slug": "ooty",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ooty."
    },
    {
        "name": "Orai",
        "rawName": "Orai",
        "slug": "orai",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Orai."
    },
    {
        "name": "Orchha",
        "rawName": "Orchha",
        "slug": "orchha",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Orchha."
    },
    {
        "name": "Osmanabad",
        "rawName": "Osmanabad",
        "slug": "osmanabad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Osmanabad."
    },
    {
        "name": "Ottapalam",
        "rawName": "Ottapalam",
        "slug": "ottapalam",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ottapalam."
    },
    {
        "name": "Pachmarhi",
        "rawName": "Pachmarhi",
        "slug": "pachmarhi",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pachmarhi."
    },
    {
        "name": "Pachora",
        "rawName": "Pachora",
        "slug": "pachora",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pachora."
    },
    {
        "name": "Padra",
        "rawName": "Padra",
        "slug": "padra",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Padra."
    },
    {
        "name": "Padrauna",
        "rawName": "Padrauna",
        "slug": "padrauna",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Padrauna."
    },
    {
        "name": "Paithan",
        "rawName": "Paithan",
        "slug": "paithan",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Paithan."
    },
    {
        "name": "Pakur",
        "rawName": "Pakur",
        "slug": "pakur",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pakur."
    },
    {
        "name": "Palakkad",
        "rawName": "Palakkad",
        "slug": "palakkad",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palakkad."
    },
    {
        "name": "Palakollu",
        "rawName": "Palakollu",
        "slug": "palakollu",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palakollu."
    },
    {
        "name": "Palamaner",
        "rawName": "Palamaner",
        "slug": "palamaner",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palamaner."
    },
    {
        "name": "Palampur",
        "rawName": "Palampur",
        "slug": "palampur",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palampur."
    },
    {
        "name": "Palani",
        "rawName": "Palani",
        "slug": "palani",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palani."
    },
    {
        "name": "Palanpur",
        "rawName": "Palanpur",
        "slug": "palanpur",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palanpur."
    },
    {
        "name": "Palasa-Kasibugga",
        "rawName": "Palasa-Kasibugga",
        "slug": "palasa-kasibugga",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palasa-Kasibugga."
    },
    {
        "name": "Pali",
        "rawName": "Pali",
        "slug": "pali",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pali."
    },
    {
        "name": "Palia Kalan",
        "rawName": "Palia Kalan",
        "slug": "palia-kalan",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palia Kalan."
    },
    {
        "name": "Palitana",
        "rawName": "Palitana",
        "slug": "palitana",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palitana."
    },
    {
        "name": "Palladam",
        "rawName": "Palladam",
        "slug": "palladam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palladam."
    },
    {
        "name": "Palwal",
        "rawName": "Palwal",
        "slug": "palwal",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Palwal."
    },
    {
        "name": "Panchgani",
        "rawName": "Panchgani",
        "slug": "panchgani",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Panchgani."
    },
    {
        "name": "Pandharpur",
        "rawName": "Pandharpur",
        "slug": "pandharpur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pandharpur."
    },
    {
        "name": "Panipat",
        "rawName": "Panipat",
        "slug": "panipat",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Panipat outperform national competitors."
    },
    {
        "name": "Panskura",
        "rawName": "Panskura",
        "slug": "panskura",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Panskura."
    },
    {
        "name": "Paonta Sahib",
        "rawName": "Paonta Sahib",
        "slug": "paonta-sahib",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Paonta Sahib."
    },
    {
        "name": "Paradeep",
        "rawName": "Paradeep",
        "slug": "paradeep",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Paradeep."
    },
    {
        "name": "Paramakudi",
        "rawName": "Paramakudi",
        "slug": "paramakudi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Paramakudi."
    },
    {
        "name": "Parbhani",
        "rawName": "Parbhani",
        "slug": "parbhani",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Parbhani outperform national competitors."
    },
    {
        "name": "Parli Vaijnath",
        "rawName": "Parli Vaijnath",
        "slug": "parli-vaijnath",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Parli Vaijnath."
    },
    {
        "name": "Parvathipuram",
        "rawName": "Parvathipuram",
        "slug": "parvathipuram",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Parvathipuram."
    },
    {
        "name": "Pasighat",
        "rawName": "Pasighat",
        "slug": "pasighat",
        "stateName": "Arunachal Pradesh",
        "stateSlug": "arunachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Eco-Tourism",
            "Hydro Power",
            "Handicrafts",
            "Agriculture"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pasighat."
    },
    {
        "name": "Patan",
        "rawName": "Patan",
        "slug": "patan",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Patan."
    },
    {
        "name": "Pataudi",
        "rawName": "Pataudi",
        "slug": "pataudi",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pataudi."
    },
    {
        "name": "Pathanamthitta",
        "rawName": "Pathanamthitta",
        "slug": "pathanamthitta",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pathanamthitta."
    },
    {
        "name": "Pathankot",
        "rawName": "Pathankot",
        "slug": "pathankot",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pathankot."
    },
    {
        "name": "Patiala",
        "rawName": "Patiala",
        "slug": "patiala",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Patiala."
    },
    {
        "name": "Patna",
        "rawName": "Patna",
        "slug": "patna",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Patna outperform national competitors."
    },
    {
        "name": "Patratu",
        "rawName": "Patratu",
        "slug": "patratu",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Patratu."
    },
    {
        "name": "Pattambi",
        "rawName": "Pattambi",
        "slug": "pattambi",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pattambi."
    },
    {
        "name": "Pattukkottai",
        "rawName": "Pattukkottai",
        "slug": "pattukkottai",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pattukkottai."
    },
    {
        "name": "Pavagada",
        "rawName": "Pavagada",
        "slug": "pavagada",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pavagada."
    },
    {
        "name": "Payyannur",
        "rawName": "Payyannur",
        "slug": "payyannur",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Payyannur."
    },
    {
        "name": "Pehowa",
        "rawName": "Pehowa",
        "slug": "pehowa",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pehowa."
    },
    {
        "name": "Pen",
        "rawName": "Pen",
        "slug": "pen",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pen."
    },
    {
        "name": "Perambalur",
        "rawName": "Perambalur",
        "slug": "perambalur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Perambalur."
    },
    {
        "name": "Perinthalmanna",
        "rawName": "Perinthalmanna",
        "slug": "perinthalmanna",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Perinthalmanna."
    },
    {
        "name": "Periyakulam",
        "rawName": "Periyakulam",
        "slug": "periyakulam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Periyakulam."
    },
    {
        "name": "Peth Vadgaon",
        "rawName": "Peth Vadgaon",
        "slug": "peth-vadgaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Peth Vadgaon."
    },
    {
        "name": "Petlad",
        "rawName": "Petlad",
        "slug": "petlad",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Petlad."
    },
    {
        "name": "Phagwara",
        "rawName": "Phagwara",
        "slug": "phagwara",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Phagwara."
    },
    {
        "name": "Phaltan",
        "rawName": "Phaltan",
        "slug": "phaltan",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Phaltan."
    },
    {
        "name": "Phillaur",
        "rawName": "Phillaur",
        "slug": "phillaur",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Phillaur."
    },
    {
        "name": "Phulia",
        "rawName": "Phulia",
        "slug": "phulia",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Phulia."
    },
    {
        "name": "Phusro",
        "rawName": "Phusro",
        "slug": "phusro",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Phusro."
    },
    {
        "name": "Pilani",
        "rawName": "Pilani",
        "slug": "pilani",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pilani."
    },
    {
        "name": "Pilibhit",
        "rawName": "Pilibhit",
        "slug": "pilibhit",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pilibhit."
    },
    {
        "name": "Pilkhuwa",
        "rawName": "Pilkhuwa",
        "slug": "pilkhuwa",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pilkhuwa."
    },
    {
        "name": "Pinjore",
        "rawName": "Pinjore",
        "slug": "pinjore",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pinjore."
    },
    {
        "name": "Pipariya",
        "rawName": "Pipariya",
        "slug": "pipariya",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pipariya."
    },
    {
        "name": "Pithampur",
        "rawName": "Pithampur",
        "slug": "pithampur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pithampur."
    },
    {
        "name": "Pithapuram",
        "rawName": "Pithapuram",
        "slug": "pithapuram",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pithapuram."
    },
    {
        "name": "Pithoragarh",
        "rawName": "Pithoragarh",
        "slug": "pithoragarh",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pithoragarh."
    },
    {
        "name": "Pollachi",
        "rawName": "Pollachi",
        "slug": "pollachi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pollachi."
    },
    {
        "name": "Polur",
        "rawName": "Polur",
        "slug": "polur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Polur."
    },
    {
        "name": "Ponnani",
        "rawName": "Ponnani",
        "slug": "ponnani",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ponnani."
    },
    {
        "name": "Porbandar",
        "rawName": "Porbandar",
        "slug": "porbandar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Porbandar."
    },
    {
        "name": "Port Blair",
        "rawName": "Port Blair",
        "slug": "port-blair",
        "stateName": "Andaman and Nicobar Islands",
        "stateSlug": "andaman-and-nicobar-islands",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Tourism & Hospitality",
            "Fisheries & Agriculture",
            "Maritime Logistics"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Port Blair outperform national competitors."
    },
    {
        "name": "Pratapgarh",
        "rawName": "Pratapgarh",
        "slug": "pratapgarh",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pratapgarh."
    },
    {
        "name": "Proddatur",
        "rawName": "Proddatur",
        "slug": "proddatur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Proddatur."
    },
    {
        "name": "Puducherry",
        "rawName": "Puducherry",
        "slug": "puducherry",
        "stateName": "Puducherry",
        "stateSlug": "puducherry",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Tourism & Hospitality",
            "Chemicals & Textiles",
            "IT Services",
            "Education"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Puducherry outperform national competitors."
    },
    {
        "name": "Pudukkottai",
        "rawName": "Pudukkottai",
        "slug": "pudukkottai",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pudukkottai."
    },
    {
        "name": "Puliangudi",
        "rawName": "Puliangudi",
        "slug": "puliangudi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Puliangudi."
    },
    {
        "name": "Pune",
        "rawName": "Pune",
        "slug": "pune",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Pune."
    },
    {
        "name": "Puranpur",
        "rawName": "Puranpur",
        "slug": "puranpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Puranpur."
    },
    {
        "name": "Puri",
        "rawName": "Puri",
        "slug": "puri",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Puri."
    },
    {
        "name": "Purnea",
        "rawName": "Purnea",
        "slug": "purnea",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Purnea."
    },
    {
        "name": "Purulia",
        "rawName": "Purulia",
        "slug": "purulia",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Purulia."
    },
    {
        "name": "Pusad",
        "rawName": "Pusad",
        "slug": "pusad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pusad."
    },
    {
        "name": "Pushkar",
        "rawName": "Pushkar",
        "slug": "pushkar",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Pushkar."
    },
    {
        "name": "Puttur",
        "rawName": "Puttur",
        "slug": "puttur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Puttur."
    },
    {
        "name": "Raebareli",
        "rawName": "Raebareli",
        "slug": "raebareli",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Raebareli."
    },
    {
        "name": "Raghunathpur",
        "rawName": "Raghunathpur",
        "slug": "raghunathpur",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Raghunathpur."
    },
    {
        "name": "Raichur",
        "rawName": "Raichur",
        "slug": "raichur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Raichur."
    },
    {
        "name": "Raiganj",
        "rawName": "Raiganj",
        "slug": "raiganj",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Raiganj."
    },
    {
        "name": "Raigarh",
        "rawName": "Raigarh",
        "slug": "raigarh",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Raigarh."
    },
    {
        "name": "Raipur",
        "rawName": "Raipur",
        "slug": "raipur",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Raipur outperform national competitors."
    },
    {
        "name": "Raisen",
        "rawName": "Raisen",
        "slug": "raisen",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Raisen."
    },
    {
        "name": "Rajahmundry",
        "rawName": "Rajahmundry",
        "slug": "rajahmundry",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Rajahmundry outperform national competitors."
    },
    {
        "name": "Rajam",
        "rawName": "Rajam",
        "slug": "rajam",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajam."
    },
    {
        "name": "Rajampet",
        "rawName": "Rajampet",
        "slug": "rajampet",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajampet."
    },
    {
        "name": "Rajapalayam",
        "rawName": "Rajapalayam",
        "slug": "rajapalayam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajapalayam."
    },
    {
        "name": "Rajgarh",
        "rawName": "Rajgarh (MP)",
        "slug": "rajgarh-mp",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajgarh."
    },
    {
        "name": "Rajgir",
        "rawName": "Rajgir",
        "slug": "rajgir",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajgir."
    },
    {
        "name": "Rajkot",
        "rawName": "Rajkot",
        "slug": "rajkot",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Rajkot outperform national competitors."
    },
    {
        "name": "Rajnandgaon",
        "rawName": "Rajnandgaon",
        "slug": "rajnandgaon",
        "stateName": "Chhattisgarh",
        "stateSlug": "chhattisgarh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Steel & Mining",
            "Power Generation",
            "Agriculture",
            "Industrial Goods"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajnandgaon."
    },
    {
        "name": "Rajpipla",
        "rawName": "Rajpipla",
        "slug": "rajpipla",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajpipla."
    },
    {
        "name": "Rajpura",
        "rawName": "Rajpura",
        "slug": "rajpura",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajpura."
    },
    {
        "name": "Rajsamand",
        "rawName": "Rajsamand",
        "slug": "rajsamand",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rajsamand."
    },
    {
        "name": "Ramachandrapuram",
        "rawName": "Ramachandrapuram",
        "slug": "ramachandrapuram",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ramachandrapuram."
    },
    {
        "name": "Ramagundham",
        "rawName": "Ramagundham",
        "slug": "ramagundham",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ramagundham."
    },
    {
        "name": "Ramanagara",
        "rawName": "Ramanagara",
        "slug": "ramanagara",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ramanagara."
    },
    {
        "name": "Ramanathapuram",
        "rawName": "Ramanathapuram",
        "slug": "ramanathapuram",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ramanathapuram."
    },
    {
        "name": "Rameswaram",
        "rawName": "Rameswaram",
        "slug": "rameswaram",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rameswaram."
    },
    {
        "name": "Ramgarh",
        "rawName": "Ramgarh",
        "slug": "ramgarh",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ramgarh."
    },
    {
        "name": "Ramnagar",
        "rawName": "Ramnagar",
        "slug": "ramnagar",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ramnagar."
    },
    {
        "name": "Rampur",
        "rawName": "Rampur",
        "slug": "rampur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Rampur outperform national competitors."
    },
    {
        "name": "Rampur",
        "rawName": "Rampur (HP)",
        "slug": "rampur-hp",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rampur."
    },
    {
        "name": "Rampurhat",
        "rawName": "Rampurhat",
        "slug": "rampurhat",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rampurhat."
    },
    {
        "name": "Ranaghat",
        "rawName": "Ranaghat",
        "slug": "ranaghat",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ranaghat."
    },
    {
        "name": "Ranchi",
        "rawName": "Ranchi",
        "slug": "ranchi",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Ranchi outperform national competitors."
    },
    {
        "name": "Ranebennuru",
        "rawName": "Ranebennuru",
        "slug": "ranebennuru",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ranebennuru."
    },
    {
        "name": "Rangpo Majitar",
        "rawName": "Rangpo Majitar",
        "slug": "rangpo-majitar",
        "stateName": "Sikkim",
        "stateSlug": "sikkim",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Organic Agriculture",
            "Pharmaceuticals",
            "Eco-Tourism",
            "Hydropower"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rangpo Majitar."
    },
    {
        "name": "Raniganj",
        "rawName": "Raniganj",
        "slug": "raniganj",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Raniganj."
    },
    {
        "name": "Ratangarh",
        "rawName": "Ratangarh",
        "slug": "ratangarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ratangarh."
    },
    {
        "name": "Ratlam",
        "rawName": "Ratlam",
        "slug": "ratlam",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ratlam."
    },
    {
        "name": "Ratnagiri",
        "rawName": "Ratnagiri",
        "slug": "ratnagiri",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ratnagiri."
    },
    {
        "name": "Ravulapalem",
        "rawName": "Ravulapalem",
        "slug": "ravulapalem",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ravulapalem."
    },
    {
        "name": "Rawatbhata",
        "rawName": "Rawatbhata",
        "slug": "rawatbhata",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rawatbhata."
    },
    {
        "name": "Raxaul",
        "rawName": "Raxaul",
        "slug": "raxaul",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Raxaul."
    },
    {
        "name": "Rayachoty",
        "rawName": "Rayachoty",
        "slug": "rayachoty",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rayachoty."
    },
    {
        "name": "Rayagada",
        "rawName": "Rayagada",
        "slug": "rayagada",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rayagada."
    },
    {
        "name": "Rewa",
        "rawName": "Rewa",
        "slug": "rewa",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rewa."
    },
    {
        "name": "Rewari",
        "rawName": "Rewari",
        "slug": "rewari",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rewari."
    },
    {
        "name": "Rishikesh",
        "rawName": "Rishikesh",
        "slug": "rishikesh",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rishikesh."
    },
    {
        "name": "Robertsganj",
        "rawName": "Robertsganj",
        "slug": "robertsganj",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Robertsganj."
    },
    {
        "name": "Robertsonpet",
        "rawName": "Robertsonpet",
        "slug": "robertsonpet",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Robertsonpet."
    },
    {
        "name": "Roha",
        "rawName": "Roha",
        "slug": "roha",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Roha."
    },
    {
        "name": "Rohtak",
        "rawName": "Rohtak",
        "slug": "rohtak",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rohtak."
    },
    {
        "name": "Roorkee",
        "rawName": "Roorkee",
        "slug": "roorkee",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Roorkee."
    },
    {
        "name": "Ropar",
        "rawName": "Ropar",
        "slug": "ropar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ropar."
    },
    {
        "name": "Rourkela",
        "rawName": "Rourkela",
        "slug": "rourkela",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Rourkela outperform national competitors."
    },
    {
        "name": "Rudrapur",
        "rawName": "Rudrapur",
        "slug": "rudrapur",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Rudrapur."
    },
    {
        "name": "Sagar",
        "rawName": "Sagar",
        "slug": "sagar",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sagar."
    },
    {
        "name": "Sagara",
        "rawName": "Sagara",
        "slug": "sagara",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sagara."
    },
    {
        "name": "Saharanpur",
        "rawName": "Saharanpur",
        "slug": "saharanpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Saharanpur."
    },
    {
        "name": "Saharsa",
        "rawName": "Saharsa",
        "slug": "saharsa",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Saharsa."
    },
    {
        "name": "Sahib",
        "rawName": "Sahib",
        "slug": "sahib",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sahib."
    },
    {
        "name": "Sahibganj",
        "rawName": "Sahibganj",
        "slug": "sahibganj",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sahibganj."
    },
    {
        "name": "Sahjanwa",
        "rawName": "Sahjanwa",
        "slug": "sahjanwa",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sahjanwa."
    },
    {
        "name": "Sahnewal",
        "rawName": "Sahnewal",
        "slug": "sahnewal",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sahnewal."
    },
    {
        "name": "Sailu",
        "rawName": "Sailu",
        "slug": "sailu",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sailu."
    },
    {
        "name": "Sakleshpur",
        "rawName": "Sakleshpur",
        "slug": "sakleshpur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sakleshpur."
    },
    {
        "name": "Salem",
        "rawName": "Salem",
        "slug": "salem",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Salem outperform national competitors."
    },
    {
        "name": "Salempur",
        "rawName": "Salempur",
        "slug": "salempur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Salempur."
    },
    {
        "name": "Salipur",
        "rawName": "Salipur",
        "slug": "salipur",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Salipur."
    },
    {
        "name": "Samalkha",
        "rawName": "Samalkha",
        "slug": "samalkha",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Samalkha."
    },
    {
        "name": "Samana",
        "rawName": "Samana",
        "slug": "samana",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Samana."
    },
    {
        "name": "Samastipur",
        "rawName": "Samastipur",
        "slug": "samastipur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Samastipur."
    },
    {
        "name": "Samba",
        "rawName": "Samba",
        "slug": "samba",
        "stateName": "Jammu and Kashmir",
        "stateSlug": "jammu-and-kashmir",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Samba."
    },
    {
        "name": "Sambalpur",
        "rawName": "Sambalpur",
        "slug": "sambalpur",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Sambalpur outperform national competitors."
    },
    {
        "name": "Sambhal",
        "rawName": "Sambhal",
        "slug": "sambhal",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sambhal."
    },
    {
        "name": "Sampla",
        "rawName": "Sampla",
        "slug": "sampla",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sampla."
    },
    {
        "name": "Samrala",
        "rawName": "Samrala",
        "slug": "samrala",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Samrala."
    },
    {
        "name": "Sanand",
        "rawName": "Sanand",
        "slug": "sanand",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sanand."
    },
    {
        "name": "Sandila",
        "rawName": "Sandila",
        "slug": "sandila",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sandila."
    },
    {
        "name": "Sangamner",
        "rawName": "Sangamner",
        "slug": "sangamner",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sangamner."
    },
    {
        "name": "Sangli",
        "rawName": "Sangli",
        "slug": "sangli",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sangli."
    },
    {
        "name": "Sangrur",
        "rawName": "Sangrur",
        "slug": "sangrur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sangrur."
    },
    {
        "name": "Sankagiri",
        "rawName": "Sankagiri",
        "slug": "sankagiri",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sankagiri."
    },
    {
        "name": "Sankarankovil",
        "rawName": "Sankarankovil",
        "slug": "sankarankovil",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sankarankovil."
    },
    {
        "name": "Sankeshwar",
        "rawName": "Sankeshwar",
        "slug": "sankeshwar",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sankeshwar."
    },
    {
        "name": "Santipur",
        "rawName": "Santipur",
        "slug": "santipur",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Santipur."
    },
    {
        "name": "Saoner",
        "rawName": "Saoner",
        "slug": "saoner",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Saoner."
    },
    {
        "name": "Sarangpur",
        "rawName": "Sarangpur",
        "slug": "sarangpur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sarangpur."
    },
    {
        "name": "Sardarshahar",
        "rawName": "Sardarshahar",
        "slug": "sardarshahar",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sardarshahar."
    },
    {
        "name": "Sasaram",
        "rawName": "Sasaram",
        "slug": "sasaram",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sasaram."
    },
    {
        "name": "Saswad",
        "rawName": "Saswad",
        "slug": "saswad",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Saswad."
    },
    {
        "name": "Satara",
        "rawName": "Satara",
        "slug": "satara",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Satara outperform national competitors."
    },
    {
        "name": "Sathyamangalam",
        "rawName": "Sathyamangalam",
        "slug": "sathyamangalam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sathyamangalam."
    },
    {
        "name": "Satna",
        "rawName": "Satna",
        "slug": "satna",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Satna."
    },
    {
        "name": "Saunda",
        "rawName": "Saunda",
        "slug": "saunda",
        "stateName": "Jharkhand",
        "stateSlug": "jharkhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Mining & Steel",
            "Heavy Engineering",
            "Power & Energy",
            "Automotive Parts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Saunda."
    },
    {
        "name": "Sawai",
        "rawName": "Sawai",
        "slug": "sawai",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sawai."
    },
    {
        "name": "Sawantwadi",
        "rawName": "Sawantwadi",
        "slug": "sawantwadi",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sawantwadi."
    },
    {
        "name": "Sehore",
        "rawName": "Sehore",
        "slug": "sehore",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sehore."
    },
    {
        "name": "Semiliguda",
        "rawName": "Semiliguda",
        "slug": "semiliguda",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Semiliguda."
    },
    {
        "name": "Seoni",
        "rawName": "Seoni",
        "slug": "seoni",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Seoni."
    },
    {
        "name": "Shahabad Markanda",
        "rawName": "Shahabad Markanda",
        "slug": "shahabad-markanda",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shahabad Markanda."
    },
    {
        "name": "Shahada",
        "rawName": "Shahada",
        "slug": "shahada",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shahada."
    },
    {
        "name": "Shahdol",
        "rawName": "Shahdol",
        "slug": "shahdol",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shahdol."
    },
    {
        "name": "Shahganj",
        "rawName": "Shahganj",
        "slug": "shahganj",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shahganj."
    },
    {
        "name": "Shahjahanpur",
        "rawName": "Shahjahanpur",
        "slug": "shahjahanpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Shahjahanpur outperform national competitors."
    },
    {
        "name": "Shajapur",
        "rawName": "Shajapur",
        "slug": "shajapur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shajapur."
    },
    {
        "name": "Shamli",
        "rawName": "Shamli",
        "slug": "shamli",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shamli."
    },
    {
        "name": "Shegaon",
        "rawName": "Shegaon",
        "slug": "shegaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shegaon."
    },
    {
        "name": "Sheikhpura",
        "rawName": "Sheikhpura",
        "slug": "sheikhpura",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sheikhpura."
    },
    {
        "name": "Sheopur",
        "rawName": "Sheopur",
        "slug": "sheopur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sheopur."
    },
    {
        "name": "Shikohabad",
        "rawName": "Shikohabad",
        "slug": "shikohabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shikohabad."
    },
    {
        "name": "Shillong",
        "rawName": "Shillong",
        "slug": "shillong",
        "stateName": "Meghalaya",
        "stateSlug": "meghalaya",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Tourism & Eco-Resorts",
            "Mining",
            "Agriculture & Floriculture",
            "Handicrafts"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Shillong outperform national competitors."
    },
    {
        "name": "Shimla",
        "rawName": "Shimla",
        "slug": "shimla",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Shimla outperform national competitors."
    },
    {
        "name": "Shimoga",
        "rawName": "Shimoga",
        "slug": "shimoga",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Shimoga outperform national competitors."
    },
    {
        "name": "Shirdi",
        "rawName": "Shirdi",
        "slug": "shirdi",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shirdi."
    },
    {
        "name": "Shirpur",
        "rawName": "Shirpur",
        "slug": "shirpur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shirpur."
    },
    {
        "name": "Shivpuri",
        "rawName": "Shivpuri",
        "slug": "shivpuri",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shivpuri."
    },
    {
        "name": "Sholingur",
        "rawName": "Sholingur",
        "slug": "sholingur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sholingur."
    },
    {
        "name": "Shrirampur",
        "rawName": "Shrirampur",
        "slug": "shrirampur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shrirampur."
    },
    {
        "name": "Shujalpur",
        "rawName": "Shujalpur",
        "slug": "shujalpur",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Shujalpur."
    },
    {
        "name": "Siddharthnagar",
        "rawName": "Siddharthnagar",
        "slug": "siddharthnagar",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Siddharthnagar."
    },
    {
        "name": "Siddhpur",
        "rawName": "Siddhpur",
        "slug": "siddhpur",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Siddhpur."
    },
    {
        "name": "Siddipet",
        "rawName": "Siddipet",
        "slug": "siddipet",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Siddipet."
    },
    {
        "name": "Sidhi",
        "rawName": "Sidhi",
        "slug": "sidhi",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sidhi."
    },
    {
        "name": "Sidlaghatta",
        "rawName": "Sidlaghatta",
        "slug": "sidlaghatta",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sidlaghatta."
    },
    {
        "name": "Sihora",
        "rawName": "Sihora",
        "slug": "sihora",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sihora."
    },
    {
        "name": "Sikandrabad",
        "rawName": "Sikandrabad",
        "slug": "sikandrabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sikandrabad."
    },
    {
        "name": "Sikar",
        "rawName": "Sikar",
        "slug": "sikar",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sikar."
    },
    {
        "name": "Silapathar",
        "rawName": "Silapathar",
        "slug": "silapathar",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Silapathar."
    },
    {
        "name": "Silchar",
        "rawName": "Silchar",
        "slug": "silchar",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Silchar."
    },
    {
        "name": "Siliguri",
        "rawName": "Siliguri",
        "slug": "siliguri",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Siliguri outperform national competitors."
    },
    {
        "name": "Sillod",
        "rawName": "Sillod",
        "slug": "sillod",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sillod."
    },
    {
        "name": "Silvassa",
        "rawName": "Silvassa",
        "slug": "silvassa",
        "stateName": "Dadra and Nagar Haveli and Daman and Diu",
        "stateSlug": "dadra-and-nagar-haveli-and-daman-and-diu",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Plastics & Manufacturing",
            "Textiles",
            "Tourism",
            "Chemicals"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Silvassa outperform national competitors."
    },
    {
        "name": "Sindagi",
        "rawName": "Sindagi",
        "slug": "sindagi",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sindagi."
    },
    {
        "name": "Sindhanur",
        "rawName": "Sindhanur",
        "slug": "sindhanur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sindhanur."
    },
    {
        "name": "Singhana",
        "rawName": "Singhana",
        "slug": "singhana",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Singhana."
    },
    {
        "name": "Singrauli",
        "rawName": "Singrauli",
        "slug": "singrauli",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Singrauli."
    },
    {
        "name": "Singur",
        "rawName": "Singur",
        "slug": "singur",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Singur."
    },
    {
        "name": "Sinnar",
        "rawName": "Sinnar",
        "slug": "sinnar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sinnar."
    },
    {
        "name": "Sircilla",
        "rawName": "Sircilla",
        "slug": "sircilla",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sircilla."
    },
    {
        "name": "Sirkazhi",
        "rawName": "Sirkazhi",
        "slug": "sirkazhi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sirkazhi."
    },
    {
        "name": "Sirohi",
        "rawName": "Sirohi",
        "slug": "sirohi",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sirohi."
    },
    {
        "name": "Sironj",
        "rawName": "Sironj",
        "slug": "sironj",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sironj."
    },
    {
        "name": "Sirsa",
        "rawName": "Sirsa",
        "slug": "sirsa",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sirsa."
    },
    {
        "name": "Sirsi",
        "rawName": "Sirsi",
        "slug": "sirsi",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sirsi."
    },
    {
        "name": "Sitamarhi",
        "rawName": "Sitamarhi",
        "slug": "sitamarhi",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sitamarhi."
    },
    {
        "name": "Sitapur",
        "rawName": "Sitapur",
        "slug": "sitapur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sitapur."
    },
    {
        "name": "Sitarganj",
        "rawName": "Sitarganj",
        "slug": "sitarganj",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sitarganj."
    },
    {
        "name": "Sivaganga",
        "rawName": "Sivaganga",
        "slug": "sivaganga",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sivaganga."
    },
    {
        "name": "Sivakasi",
        "rawName": "Sivakasi",
        "slug": "sivakasi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sivakasi."
    },
    {
        "name": "Sivasagar",
        "rawName": "Sivasagar",
        "slug": "sivasagar",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sivasagar."
    },
    {
        "name": "Siwan",
        "rawName": "Siwan",
        "slug": "siwan",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Siwan."
    },
    {
        "name": "Siyana",
        "rawName": "Siyana",
        "slug": "siyana",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Siyana."
    },
    {
        "name": "Sohna",
        "rawName": "Sohna",
        "slug": "sohna",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sohna."
    },
    {
        "name": "Solan",
        "rawName": "Solan",
        "slug": "solan",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Solan."
    },
    {
        "name": "Solapur",
        "rawName": "Solapur",
        "slug": "solapur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Solapur outperform national competitors."
    },
    {
        "name": "Sonipat",
        "rawName": "Sonipat",
        "slug": "sonipat",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sonipat."
    },
    {
        "name": "Soro",
        "rawName": "Soro",
        "slug": "soro",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Soro."
    },
    {
        "name": "Sri Dungargarh",
        "rawName": "Sri Dungargarh",
        "slug": "sri-dungargarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sri Dungargarh."
    },
    {
        "name": "Sri Ganganagar",
        "rawName": "Sri Ganganagar",
        "slug": "sri-ganganagar",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sri Ganganagar."
    },
    {
        "name": "Srikakulam",
        "rawName": "Srikakulam",
        "slug": "srikakulam",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Srikakulam."
    },
    {
        "name": "Srikalahasti",
        "rawName": "Srikalahasti",
        "slug": "srikalahasti",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Srikalahasti."
    },
    {
        "name": "Srinagar",
        "rawName": "Srinagar",
        "slug": "srinagar",
        "stateName": "Jammu and Kashmir",
        "stateSlug": "jammu-and-kashmir",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Srinagar outperform national competitors."
    },
    {
        "name": "Srinagar",
        "rawName": "Srinagar (UK)",
        "slug": "srinagar-uk",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Srinagar."
    },
    {
        "name": "Sriperumbudur",
        "rawName": "Sriperumbudur",
        "slug": "sriperumbudur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sriperumbudur."
    },
    {
        "name": "Srivilliputhur",
        "rawName": "Srivilliputhur",
        "slug": "srivilliputhur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Srivilliputhur."
    },
    {
        "name": "Sujangarh",
        "rawName": "Sujangarh",
        "slug": "sujangarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sujangarh."
    },
    {
        "name": "Sullurpeta",
        "rawName": "Sullurpeta",
        "slug": "sullurpeta",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sullurpeta."
    },
    {
        "name": "Sultanpur",
        "rawName": "Sultanpur",
        "slug": "sultanpur",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sultanpur."
    },
    {
        "name": "Sulthan Bathery",
        "rawName": "Sulthan Bathery",
        "slug": "sulthan-bathery",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sulthan Bathery."
    },
    {
        "name": "Sumerpur",
        "rawName": "Sumerpur",
        "slug": "sumerpur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sumerpur."
    },
    {
        "name": "Sundar Nagar",
        "rawName": "Sundar Nagar",
        "slug": "sundar-nagar",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sundar Nagar."
    },
    {
        "name": "Sundergarh",
        "rawName": "Sundergarh",
        "slug": "sundergarh",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Sundergarh."
    },
    {
        "name": "Supaul",
        "rawName": "Supaul",
        "slug": "supaul",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Supaul."
    },
    {
        "name": "Surat",
        "rawName": "Surat",
        "slug": "surat",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Surat outperform national competitors."
    },
    {
        "name": "Suratgarh",
        "rawName": "Suratgarh",
        "slug": "suratgarh",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Suratgarh."
    },
    {
        "name": "Surendranagar",
        "rawName": "Surendranagar",
        "slug": "surendranagar",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Surendranagar."
    },
    {
        "name": "Suri",
        "rawName": "Suri",
        "slug": "suri",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Suri."
    },
    {
        "name": "Suryapet",
        "rawName": "Suryapet",
        "slug": "suryapet",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Suryapet."
    },
    {
        "name": "Tadepalligudem",
        "rawName": "Tadepalligudem",
        "slug": "tadepalligudem",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tadepalligudem."
    },
    {
        "name": "Talcher",
        "rawName": "Talcher",
        "slug": "talcher",
        "stateName": "Odisha",
        "stateSlug": "odisha",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Software",
            "Metals & Mining",
            "Port Logistics",
            "Renewables"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Talcher."
    },
    {
        "name": "Taliparamba",
        "rawName": "Taliparamba",
        "slug": "taliparamba",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Taliparamba."
    },
    {
        "name": "Tamluk",
        "rawName": "Tamluk",
        "slug": "tamluk",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tamluk."
    },
    {
        "name": "Tanda",
        "rawName": "Tanda",
        "slug": "tanda",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tanda."
    },
    {
        "name": "Tandur",
        "rawName": "Tandur",
        "slug": "tandur",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tandur."
    },
    {
        "name": "Tanjore",
        "rawName": "Tanjore",
        "slug": "tanjore",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tanjore."
    },
    {
        "name": "Tanuku",
        "rawName": "Tanuku",
        "slug": "tanuku",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tanuku."
    },
    {
        "name": "Taraori",
        "rawName": "Taraori",
        "slug": "taraori",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Taraori."
    },
    {
        "name": "Tarapith",
        "rawName": "Tarapith",
        "slug": "tarapith",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tarapith."
    },
    {
        "name": "Tarkeswar",
        "rawName": "Tarkeswar",
        "slug": "tarkeswar",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tarkeswar."
    },
    {
        "name": "Tarn Taran",
        "rawName": "Tarn Taran",
        "slug": "tarn-taran",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tarn Taran."
    },
    {
        "name": "Tasgaon",
        "rawName": "Tasgaon",
        "slug": "tasgaon",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tasgaon."
    },
    {
        "name": "Tehri",
        "rawName": "Tehri",
        "slug": "tehri",
        "stateName": "Uttarakhand",
        "stateSlug": "uttarakhand",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Wellness",
            "FMCG",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tehri."
    },
    {
        "name": "Tekari",
        "rawName": "Tekari",
        "slug": "tekari",
        "stateName": "Bihar",
        "stateSlug": "bihar",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "FMCG & Retail",
            "Agri-Business",
            "EdTech",
            "Healthcare Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tekari."
    },
    {
        "name": "Tenali",
        "rawName": "Tenali",
        "slug": "tenali",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tenali."
    },
    {
        "name": "Tenkasi",
        "rawName": "Tenkasi",
        "slug": "tenkasi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tenkasi."
    },
    {
        "name": "Tezpur",
        "rawName": "Tezpur",
        "slug": "tezpur",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tezpur."
    },
    {
        "name": "Thalassery",
        "rawName": "Thalassery",
        "slug": "thalassery",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thalassery."
    },
    {
        "name": "Thamarassery",
        "rawName": "Thamarassery",
        "slug": "thamarassery",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thamarassery."
    },
    {
        "name": "Theni",
        "rawName": "Theni",
        "slug": "theni",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Theni."
    },
    {
        "name": "Thirthahalli",
        "rawName": "Thirthahalli",
        "slug": "thirthahalli",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thirthahalli."
    },
    {
        "name": "Thiruvalla",
        "rawName": "Thiruvalla",
        "slug": "thiruvalla",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thiruvalla."
    },
    {
        "name": "Thiruvallur",
        "rawName": "Thiruvallur",
        "slug": "thiruvallur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thiruvallur."
    },
    {
        "name": "Thiruvarur",
        "rawName": "Thiruvarur",
        "slug": "thiruvarur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thiruvarur."
    },
    {
        "name": "Thodupuzha",
        "rawName": "Thodupuzha",
        "slug": "thodupuzha",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thodupuzha."
    },
    {
        "name": "Thoothukudi",
        "rawName": "Thoothukudi",
        "slug": "thoothukudi",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thoothukudi."
    },
    {
        "name": "Thoubal",
        "rawName": "Thoubal",
        "slug": "thoubal",
        "stateName": "Manipur",
        "stateSlug": "manipur",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Handloom & Agriculture",
            "Tourism",
            "Sports Goods",
            "Cross-Border Trade"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thoubal."
    },
    {
        "name": "Thrissur",
        "rawName": "Thrissur",
        "slug": "thrissur",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Thrissur outperform national competitors."
    },
    {
        "name": "Thuraiyur",
        "rawName": "Thuraiyur",
        "slug": "thuraiyur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Thuraiyur."
    },
    {
        "name": "Tikamgarh",
        "rawName": "Tikamgarh",
        "slug": "tikamgarh",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tikamgarh."
    },
    {
        "name": "Tindivanam",
        "rawName": "Tindivanam",
        "slug": "tindivanam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tindivanam."
    },
    {
        "name": "Tinsukia",
        "rawName": "Tinsukia",
        "slug": "tinsukia",
        "stateName": "Assam",
        "stateSlug": "assam",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tea & Food Processing",
            "Petroleum & Refineries",
            "Tourism",
            "Retail & Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tinsukia."
    },
    {
        "name": "Tiptur",
        "rawName": "Tiptur",
        "slug": "tiptur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tiptur."
    },
    {
        "name": "Tiruchendur",
        "rawName": "Tiruchendur",
        "slug": "tiruchendur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tiruchendur."
    },
    {
        "name": "Tirukkoyilur",
        "rawName": "Tirukkoyilur",
        "slug": "tirukkoyilur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tirukkoyilur."
    },
    {
        "name": "Tirumangalam",
        "rawName": "Tirumangalam",
        "slug": "tirumangalam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tirumangalam."
    },
    {
        "name": "Tirunelveli",
        "rawName": "Tirunelveli",
        "slug": "tirunelveli",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tirunelveli."
    },
    {
        "name": "Tirupati",
        "rawName": "Tirupati",
        "slug": "tirupati",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tirupati."
    },
    {
        "name": "Tirupattur",
        "rawName": "Tirupattur",
        "slug": "tirupattur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tirupattur."
    },
    {
        "name": "Tiruppur",
        "rawName": "Tiruppur",
        "slug": "tiruppur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tiruppur."
    },
    {
        "name": "Tirur",
        "rawName": "Tirur",
        "slug": "tirur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tirur."
    },
    {
        "name": "Tiruttani",
        "rawName": "Tiruttani",
        "slug": "tiruttani",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tiruttani."
    },
    {
        "name": "Tiruvannamalai",
        "rawName": "Tiruvannamalai",
        "slug": "tiruvannamalai",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tiruvannamalai."
    },
    {
        "name": "Tirwaganj",
        "rawName": "Tirwaganj",
        "slug": "tirwaganj",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tirwaganj."
    },
    {
        "name": "Tohana",
        "rawName": "Tohana",
        "slug": "tohana",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tohana."
    },
    {
        "name": "Tonk",
        "rawName": "Tonk",
        "slug": "tonk",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tonk."
    },
    {
        "name": "Trichy",
        "rawName": "Trichy",
        "slug": "trichy",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Trichy."
    },
    {
        "name": "Triprayar",
        "rawName": "Triprayar",
        "slug": "triprayar",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Triprayar."
    },
    {
        "name": "Trivandrum",
        "rawName": "Trivandrum",
        "slug": "trivandrum",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Trivandrum outperform national competitors."
    },
    {
        "name": "Tuljapur",
        "rawName": "Tuljapur",
        "slug": "tuljapur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tuljapur."
    },
    {
        "name": "Tumkur",
        "rawName": "Tumkur",
        "slug": "tumkur",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Tumkur outperform national competitors."
    },
    {
        "name": "Tumsar",
        "rawName": "Tumsar",
        "slug": "tumsar",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tumsar."
    },
    {
        "name": "Tundla",
        "rawName": "Tundla",
        "slug": "tundla",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tundla."
    },
    {
        "name": "Tuni",
        "rawName": "Tuni",
        "slug": "tuni",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tuni."
    },
    {
        "name": "Tura",
        "rawName": "Tura",
        "slug": "tura",
        "stateName": "Meghalaya",
        "stateSlug": "meghalaya",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tourism & Eco-Resorts",
            "Mining",
            "Agriculture & Floriculture",
            "Handicrafts"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Tura."
    },
    {
        "name": "Udaipur",
        "rawName": "Udaipur",
        "slug": "udaipur",
        "stateName": "Rajasthan",
        "stateSlug": "rajasthan",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Solar & Energy",
            "Tourism & Hospitality",
            "Handicrafts & Gems",
            "EdTech"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Udaipur outperform national competitors."
    },
    {
        "name": "Udgir",
        "rawName": "Udgir",
        "slug": "udgir",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Udgir."
    },
    {
        "name": "Udhampur",
        "rawName": "Udhampur",
        "slug": "udhampur",
        "stateName": "Jammu and Kashmir",
        "stateSlug": "jammu-and-kashmir",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Handicrafts & Horticulture",
            "Tourism",
            "Pharmaceuticals",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Udhampur."
    },
    {
        "name": "Udumalaipettai",
        "rawName": "Udumalaipettai",
        "slug": "udumalaipettai",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Udumalaipettai."
    },
    {
        "name": "Ujire",
        "rawName": "Ujire",
        "slug": "ujire",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Ujire."
    },
    {
        "name": "Ujjain",
        "rawName": "Ujjain",
        "slug": "ujjain",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Ujjain outperform national competitors."
    },
    {
        "name": "Uluberia",
        "rawName": "Uluberia",
        "slug": "uluberia",
        "stateName": "West Bengal",
        "stateSlug": "west-bengal",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Tech Parks",
            "Metals & Mining",
            "Logistics & Trade",
            "E-Commerce"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Uluberia."
    },
    {
        "name": "Umaria",
        "rawName": "Umaria",
        "slug": "umaria",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Umaria."
    },
    {
        "name": "Umred",
        "rawName": "Umred",
        "slug": "umred",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Umred."
    },
    {
        "name": "Umreth",
        "rawName": "Umreth",
        "slug": "umreth",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Umreth."
    },
    {
        "name": "Una",
        "rawName": "Una",
        "slug": "una",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Una."
    },
    {
        "name": "Una",
        "rawName": "Una (HP)",
        "slug": "una-hp",
        "stateName": "Himachal Pradesh",
        "stateSlug": "himachal-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharmaceuticals",
            "Tourism & Hospitality",
            "FMCG",
            "Renewable Energy"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Una."
    },
    {
        "name": "Halol",
        "rawName": "Halol",
        "slug": "halol",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Halol."
    },
    {
        "name": "Unchahar",
        "rawName": "Unchahar",
        "slug": "unchahar",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Unchahar."
    },
    {
        "name": "Unjha",
        "rawName": "Unjha",
        "slug": "unjha",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Unjha."
    },
    {
        "name": "Unnao",
        "rawName": "Unnao",
        "slug": "unnao",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Unnao."
    },
    {
        "name": "Upleta",
        "rawName": "Upleta",
        "slug": "upleta",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Upleta."
    },
    {
        "name": "Uran",
        "rawName": "Uran",
        "slug": "uran",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Uran."
    },
    {
        "name": "Uran Islampur",
        "rawName": "Uran Islampur",
        "slug": "uran-islampur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Uran Islampur."
    },
    {
        "name": "Vadodara",
        "rawName": "Vadodara",
        "slug": "vadodara",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Vadodara outperform national competitors."
    },
    {
        "name": "Vaijapur",
        "rawName": "Vaijapur",
        "slug": "vaijapur",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vaijapur."
    },
    {
        "name": "Valliyur",
        "rawName": "Valliyur",
        "slug": "valliyur",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Valliyur."
    },
    {
        "name": "Valsad",
        "rawName": "Valsad",
        "slug": "valsad",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Valsad."
    },
    {
        "name": "Vapi",
        "rawName": "Vapi",
        "slug": "vapi",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vapi."
    },
    {
        "name": "Varanasi",
        "rawName": "Varanasi",
        "slug": "varanasi",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Varanasi outperform national competitors."
    },
    {
        "name": "Vatakara",
        "rawName": "Vatakara",
        "slug": "vatakara",
        "stateName": "Kerala",
        "stateSlug": "kerala",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "HealthTech",
            "Tourism Tech",
            "IT Services",
            "Agri-Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vatakara."
    },
    {
        "name": "Vellakovil",
        "rawName": "Vellakovil",
        "slug": "vellakovil",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vellakovil."
    },
    {
        "name": "Vellore",
        "rawName": "Vellore",
        "slug": "vellore",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vellore."
    },
    {
        "name": "Veraval",
        "rawName": "Veraval",
        "slug": "veraval",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Veraval."
    },
    {
        "name": "Vidisha",
        "rawName": "Vidisha",
        "slug": "vidisha",
        "stateName": "Madhya Pradesh",
        "stateSlug": "madhya-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Textiles & Garments",
            "Automotive",
            "Pharma",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vidisha."
    },
    {
        "name": "Vijayawada",
        "rawName": "Vijayawada",
        "slug": "vijayawada",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Vijayawada outperform national competitors."
    },
    {
        "name": "Vikarabad",
        "rawName": "Vikarabad",
        "slug": "vikarabad",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vikarabad."
    },
    {
        "name": "Viluppuram",
        "rawName": "Viluppuram",
        "slug": "viluppuram",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Viluppuram."
    },
    {
        "name": "Virudhachalam",
        "rawName": "Virudhachalam",
        "slug": "virudhachalam",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Virudhachalam."
    },
    {
        "name": "Virudhunagar",
        "rawName": "Virudhunagar",
        "slug": "virudhunagar",
        "stateName": "Tamil Nadu",
        "stateSlug": "tamil-nadu",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "SaaS & Software",
            "Automotive",
            "Textiles & Exports",
            "Hardware"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Virudhunagar."
    },
    {
        "name": "Visakhapatnam",
        "rawName": "Visakhapatnam",
        "slug": "visakhapatnam",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Visakhapatnam outperform national competitors."
    },
    {
        "name": "Vita",
        "rawName": "Vita",
        "slug": "vita",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vita."
    },
    {
        "name": "Vizianagaram",
        "rawName": "Vizianagaram",
        "slug": "vizianagaram",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vizianagaram."
    },
    {
        "name": "Vrindavan",
        "rawName": "Vrindavan",
        "slug": "vrindavan",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vrindavan."
    },
    {
        "name": "Vyara",
        "rawName": "Vyara",
        "slug": "vyara",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Vyara."
    },
    {
        "name": "Wai",
        "rawName": "Wai",
        "slug": "wai",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Wai."
    },
    {
        "name": "Wanaparthy",
        "rawName": "Wanaparthy",
        "slug": "wanaparthy",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Wanaparthy."
    },
    {
        "name": "Wani",
        "rawName": "Wani",
        "slug": "wani",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Wani."
    },
    {
        "name": "Wankaner",
        "rawName": "Wankaner",
        "slug": "wankaner",
        "stateName": "Gujarat",
        "stateSlug": "gujarat",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Chemicals & Pharma",
            "Textiles & Exports",
            "Industrial SaaS",
            "Diamonds & Gems"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Wankaner."
    },
    {
        "name": "Warana Kodoli",
        "rawName": "Warana Kodoli",
        "slug": "warana-kodoli",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Warana Kodoli."
    },
    {
        "name": "Warangal",
        "rawName": "Warangal",
        "slug": "warangal",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Warangal outperform national competitors."
    },
    {
        "name": "Wardha",
        "rawName": "Wardha",
        "slug": "wardha",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Wardha."
    },
    {
        "name": "Warora",
        "rawName": "Warora",
        "slug": "warora",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Warora."
    },
    {
        "name": "Warud",
        "rawName": "Warud",
        "slug": "warud",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Warud."
    },
    {
        "name": "Washim",
        "rawName": "Washim",
        "slug": "washim",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Washim."
    },
    {
        "name": "Yadgir",
        "rawName": "Yadgir",
        "slug": "yadgir",
        "stateName": "Karnataka",
        "stateSlug": "karnataka",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "B2B SaaS",
            "AI & Cloud Infrastructure",
            "FinTech",
            "Deep Tech"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Yadgir."
    },
    {
        "name": "Yamuna Nagar",
        "rawName": "Yamuna Nagar",
        "slug": "yamuna-nagar",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Yamuna Nagar."
    },
    {
        "name": "Yanam",
        "rawName": "Yanam",
        "slug": "yanam",
        "stateName": "Puducherry",
        "stateSlug": "puducherry",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Tourism & Hospitality",
            "Chemicals & Textiles",
            "IT Services",
            "Education"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Yanam."
    },
    {
        "name": "Yavatmal",
        "rawName": "Yavatmal",
        "slug": "yavatmal",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Yavatmal."
    },
    {
        "name": "Yemmiganur",
        "rawName": "Yemmiganur",
        "slug": "yemmiganur",
        "stateName": "Andhra Pradesh",
        "stateSlug": "andhra-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "Port Logistics",
            "Agri-Tech",
            "IT Services"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Yemmiganur."
    },
    {
        "name": "Yeola",
        "rawName": "Yeola",
        "slug": "yeola",
        "stateName": "Maharashtra",
        "stateSlug": "maharashtra",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "BFSI & FinTech",
            "B2B SaaS",
            "Manufacturing",
            "Automotive"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Yeola."
    },
    {
        "name": "Zaheerabad",
        "rawName": "Zaheerabad",
        "slug": "zaheerabad",
        "stateName": "Telangana",
        "stateSlug": "telangana",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Pharma & Biotech",
            "IT & Cloud Services",
            "Enterprise Software",
            "Logistics"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Zaheerabad."
    },
    {
        "name": "Zira",
        "rawName": "Zira",
        "slug": "zira",
        "stateName": "Punjab",
        "stateSlug": "punjab",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "Agri-Tech",
            "Textiles & Hosiery",
            "Auto Components",
            "Food Processing"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Zira."
    },
    {
        "name": "Noida",
        "rawName": "Noida",
        "slug": "noida",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Noida."
    },
    {
        "name": "Greater Noida",
        "rawName": "Greater Noida",
        "slug": "greater-noida",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier3",
        "population": "200K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Cost-effective B2B lead discovery engines, automated cold outreach, and local SEO infrastructure for regional businesses in Greater Noida."
    },
    {
        "name": "Ghaziabad",
        "rawName": "Ghaziabad",
        "slug": "ghaziabad",
        "stateName": "Uttar Pradesh",
        "stateSlug": "uttar-pradesh",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "IT & Electronics",
            "Textiles & Leather",
            "Industrial Manufacturing",
            "Agri-Business"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Ghaziabad outperform national competitors."
    },
    {
        "name": "Gurugram",
        "rawName": "Gurugram",
        "slug": "gurugram",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in Gurugram."
    },
    {
        "name": "Faridabad",
        "rawName": "Faridabad",
        "slug": "faridabad",
        "stateName": "Haryana",
        "stateSlug": "haryana",
        "tier": "tier2",
        "population": "750K+",
        "industries": [
            "Auto & Manufacturing",
            "IT & SaaS",
            "Corporate Services",
            "Real Estate"
        ],
        "gtmFocus": "Outbound sales pipeline automation, n8n workflow integrations, and CRM object modeling to help growing companies in Faridabad outperform national competitors."
    },
    {
        "name": "New Delhi",
        "rawName": "New Delhi",
        "slug": "new-delhi",
        "stateName": "Delhi NCR",
        "stateSlug": "delhi-ncr",
        "tier": "metro",
        "population": "2.5M+",
        "industries": [
            "Enterprise SaaS",
            "E-Commerce",
            "EdTech",
            "FinTech"
        ],
        "gtmFocus": "Scalable GTM automation, multi-provider waterfall enrichment, and AI lead qualification agents for competitive B2B SaaS and enterprise brands in New Delhi."
    }
];

// Helper Index Lookup Maps
const CITY_BY_SLUG = new Map<string, CityData>();
const CITIES_BY_STATE = new Map<string, CityData[]>();

CITIES_LIST.forEach((city) => {
    CITY_BY_SLUG.set(city.slug, city);
    const existing = CITIES_BY_STATE.get(city.stateSlug) || [];
    existing.push(city);
    CITIES_BY_STATE.set(city.stateSlug, existing);
});

/**
 * Get city data by slug
 */
export function getCityBySlug(citySlug: string): CityData | undefined {
    if (!citySlug) return undefined;
    return CITY_BY_SLUG.get(citySlug.toLowerCase());
}

/**
 * Get state data by slug
 */
export function getStateBySlug(stateSlug: string): StateData | undefined {
    return STATES_DATA[stateSlug];
}

/**
 * Get all cities belonging to a state
 */
export function getCitiesByState(stateSlug: string): CityData[] {
    return CITIES_BY_STATE.get(stateSlug) || [];
}

/**
 * Get nearby sibling cities for internal linking
 */
export function getNearbyCities(citySlug: string, limit: number = 8): CityData[] {
    const currentCity = getCityBySlug(citySlug);
    if (!currentCity) return CITIES_LIST.slice(0, limit);
    
    const sameStateCities = getCitiesByState(currentCity.stateSlug).filter(c => c.slug !== currentCity.slug);
    if (sameStateCities.length >= limit) {
        return sameStateCities.slice(0, limit);
    }
    
    // Fill remaining from general pool
    const combined = [...sameStateCities, ...CITIES_LIST.filter(c => c.slug !== currentCity.slug && c.stateSlug !== currentCity.stateSlug)];
    return combined.slice(0, limit);
}
