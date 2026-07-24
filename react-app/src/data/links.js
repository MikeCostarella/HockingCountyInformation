// Hocking County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-24

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Pivot Point";

export const LINKS = [
  // ---------- Government ----------
  { name: "Hocking County (Official Site)", category: "Government", subcategory: "County", url: "https://hocking.oh.gov/", description: "Official government portal for Hocking County, Ohio (county seat: Logan)." },
  { name: "Hocking County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditor.hocking.oh.gov/", description: "Property records, valuations, and parcel/property search (hosted on the Pivot Point platform)." },
  { name: "Hocking County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/hocking/", description: "Voter registration, polling locations, and election administration." },
  // ---------- Education ----------
  { name: "Logan-Hocking County District Library", category: "Education", subcategory: "Library", url: "https://www.loganhockinglibrary.org/", description: "County district public library, based in Logan." },
  { name: "Logan-Hocking Local School District", category: "Education", subcategory: "K-12", url: "https://loganhocking.k12.oh.us/", description: "Public school district serving Logan and Hocking County (home of the Chieftains)." },
  // ---------- Health ----------
  { name: "Hocking Valley Community Hospital", category: "Health", subcategory: "Hospital", url: "https://www.hvch.org/", description: "Community hospital serving Hocking County, based in Logan." },
  { name: "Hocking County Health Department", category: "Health", subcategory: "Public Health", url: "https://www.hockingcountyhealthdepartment.com/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  // ---------- Business & Economy ----------
  { name: "Hocking Hills Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.hockinghillschamber.com/", description: "Business advocacy, member support, and community resources across Hocking County." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Hocking County", category: "Community & Social", subcategory: "Workforce", url: "https://ohiomeansjobs.ohio.gov/", description: "Workforce, job-search, and employment services for county residents." },
  // ---------- Recreation & Tourism ----------
  { name: "Explore Hocking Hills", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.explorehockinghills.com/", description: "Official Hocking Hills tourism — state park, Old Man's Cave, cabins, trails, and events." },
  // ---------- News & Media ----------
  { name: "Logan Daily News", category: "News & Media", subcategory: "Newspaper", url: "https://www.logandaily.com/", description: "Logan's newspaper covering Hocking County news, sports, and events." },
];
