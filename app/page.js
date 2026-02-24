import Hero from "@/components/Landingpage/Hero";
import Whychoose from "@/components/Landingpage/Whychoose";
import Industries from "@/components/Landingpage/Industries"
import AboutUs from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products";
import ProductCategorySection from "@/components/Landingpage/Categories";
import Certificates from "@/components/Landingpage/Certificates";
import Cta from "@/components/Landingpage/Cta";

import Form from "@/components/Landingpage/Form"
 import Faq from "@/components/Landingpage/Faq"
//  import Form from "@/components/Landingpage/Form"
import Testimonial from "@/components/Landingpage/Testmonial";

// import Enquiry from "@/components/Enquiry"
import Citeskeyword from "@/components/Citieskeyword";
import Support from "@/components/Landingpage/Support";
// import Check from "@/components/Landingpage/Check";
export default function Home() {
  return (
<>



<Hero></Hero>
{/* <Enquiry></Enquiry> */}

<Support></Support>
<Industries></Industries>

<ProductCategorySection></ProductCategorySection>

<Products></Products>

<Whychoose></Whychoose>


<Cta></Cta>
<AboutUs></AboutUs>

<Form></Form>


<Certificates></Certificates>


<Testimonial></Testimonial>
<Faq></Faq>
<Citeskeyword></Citeskeyword>
</>
  );
}
