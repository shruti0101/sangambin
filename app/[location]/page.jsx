import Clientlocation from "./Clientlocation";
import notFound from "../not-found";
/* ✅ REQUIRED FOR STATIC EXPORT */
export async function generateStaticParams() {
  const cities = [
    "ajmer",
    "aligarh",
    "ambala",
    "ayodhya",
    "alwar",
    "bahadurgarh",
    "bareilly",
    "bathinda",
    "bengaluru",
    "bharatpur",
    "bhiwani",
    "bhiwadi",
    "bhopal",
    "bhubaneswar",
    "bihar",
    "bikaner",
    "bulandshahr",
    "chandigarh",
    "chennai",
    "chhattisgarh",
    "daman",
    "dehradun",
    "delhi-ncr",
    "faizabad",
    "faridabad",
    "gandhinagar",
    "ghaziabad",
    "goa",
    "greater-noida",
    "gujarat",
    "gurdaspur",
    "gurgaon",
    "guwahati",
    "gwalior",
    "hardoi",
    "haridwar",
    "haryana",
    "himachal-pradesh",
    "hoshiarpur",
    "howrah",
    "hooghly",
    "hyderabad",
    "indore",
    "jabalpur",
    "jaipur",
    "jammu-kashmir",
    "jhajjar",
    "jhansi",
    "jharkhand",
    "jind",
    "jodhpur",
    "kanpur",
    "kapurthala",
    "karnal",
    "karnataka",
    "kerala",
    "kolkata",
    "kota",
    "kundli",
    "kurukshetra",
    "leh",
    "lucknow",
    "ludhiana",
    "madhya-pradesh",
    "madurai",
    "maharashtra",
    "manali",
    "manesar",
    "mathura",
    "meerut",
    "mohali",
    "moradabad",
    "mumbai",
    "murshidabad",
    "muzaffarpur",
    "nadia",
    "nagpur",
    "noida",
    "odisha",
    "panipat",
    "panchkula",
    "patiala",
    "patna",
    "puducherry-pondicherry",
    "pune",
    "punjab",
    "raipur",
    "rajasthan",
    "rajkot",
    "ranchi",
    "rohtak",
    "roorkee",
    "rudrapur",
    "shahjahanpur",
    "shimla",
    "sikkim",
    "sirsa",
    "sonipat",
    "srinagar",
    "surat",
    "tamil-nadu",
    "telangana",
    "thiruvananthapuram",
    "uttar-pradesh",
    "uttarakhand",
    "vadodara",
    "varanasi",
    "west-bengal",
    "yamuna-nagar",
    "rewari"
  ];

  return cities.map(city => ({
    location: `titanium-dioxide-wholesaler-in-${city}`
  }));
}

/* ✅ SEO METADATA */
export async function generateMetadata({ params }) {
  
  const slug =  params.location;

  const city = slug
    .replace("titanium-dioxide-wholesaler-in-", "")
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Titanium Dioxide Wholesaler in ${city}`,
    description: `Looking for a reliable Titanium Dioxide Wholesaler in ${city}? Aanya Enterprises offers high-quality TiO₂ for paints, plastics, coatings, inks, and industrial applications with timely delivery and competitive prices.`
  };
}

/* ✅ PAGE */
export default async function Page({ params }) {

   const { location } = await params;

  // 🔥 Must contain "-in-"
  if (!location.includes("in-")) {
    notFound();
  }

  // 🔥 Extract city part after "in-"
  const city = location.split("in-")[1];

  // 🔥 If city is empty or invalid → redirect to Home
  if (!city || city.trim().length === 0) {
    notFound();
  }

  return <Clientlocation location={params.location} />;
}
