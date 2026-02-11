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

import Enquiry from "@/components/Enquiry"
// import Citeskeyword from "@/components/Citieskeyword";
import Check from "@/components/Landingpage/Check";
export default function Home() {
  return (
<>



<Hero></Hero>
<Enquiry></Enquiry>


<AboutUs></AboutUs>
{/* <Check></Check> */}
<ProductCategorySection></ProductCategorySection>

<Products></Products>

<Whychoose></Whychoose>


<Cta></Cta>

<Industries></Industries>
<Form></Form>


<Certificates></Certificates>
{/* <Form></Form> */}

<Testimonial></Testimonial>
<Faq></Faq>
{/* <Citeskeyword></Citeskeyword> */}
</>
  );
}
