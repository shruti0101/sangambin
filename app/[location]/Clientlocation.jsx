"use client";

import Products from "@/components/Landingpage/Products";
import Link from "next/link";
import { useParams } from "next/navigation";
import Citieskeywords from "@/components/Citieskeyword";
 import Form from "@/components/Landingpage/Form"
 import Cta from "@/components/Landingpage/Cta";
export default function HomePage() {
  const params = useParams();
  const city = params.location?.split("-in-")?.[1];

  return (
    <main className="bg-[#f7f8fa] text-slate-800">
      {/* hero section  */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728776/aboutbg_xoifk1.webp)",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A49]/70 via-[#0A3A49]/60 to-[#0A3A49]/90"></div>

        {/*  CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div>
            <h1 className="text-3xl md:text-6xl font-serif font-extrabold tracking-tight drop-shadow-lg capitalize">
              Titanium Dioxide Wholesaler In {city}
            </h1>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="py-18 bg-[#FFFEF7]">
        <div className="w-full mx-auto px-16 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              About Aanya Enterprise
            </h2>

            <p className="mb-6 text-md text-black leading-relaxed">
              Aanya Enterprise is a reputed{" "}
              <strong className="capitalize">
                Titanium Dioxide Wholesaler in {city}
              </strong>
              , committed to provide high quality chemical solutions to
              industries in <span className="capitalize">{city}</span>. We are
              one of the Titanium Dioxide Wholesaler suppliers of highest
              quality of <strong>Titanium Dioxide (TiO 2 ) </strong> which
              guarantees the high performance, brightness and longevity of
              Titanium Dioxide in various industrial uses. Having been in the
              chemical distribution business over years, Aanya Enterprise has
              gained reputation as being reliable, consistent and professionally
              served. Manufacturers and businesses in the country use our
              products due to their high quality and performance. We offer an
              end-to-end solution at Aanya Enterprise where each client is
              furnished with the appropriate grade of{" "}
              <strong>Titanium Dioxide</strong> to suit his or her needs. Every
              batch is subjected to stringent quality audit of purity, stability
              and performance as an expression of our excellence. We have a
              strong distribution network across the country that guarantees
              timely and effective deliveries to the major industrial centers,
              and remote areas. We strive to make industries reliable in supply,
              high quality, and reliable support.
            </p>
          </div>

          <div className="rounded-3xl border bg-gradient-to-br from-slate-50 to-white p-10 shadow-lg">
            <ul className="grid gap-4 text-slate-700">
              {[
                "Paints & Coatings – Increases whiteness, solidness and UV protection.",
                "Plastics & Polymers – Enhances the retention of color, brightness, and longevity.",
                "Cosmetics – Sells safe and high-quality formulations.",
                "Paper & Printing – Makes it light and more interesting.",
                "Textiles & Rubber – Increases the color performance and product longevity.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-500">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <Products></Products>

      {/* ================= APPLICATIONS ================= */}
      {/* ================= APPLICATIONS / INDUSTRIES SERVED ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Applications / Industries Served- Aanya Enterprise
          </h2>

          <p className="text-lg text-black leading-relaxed mb-16">
            Being a renowned Treasured{" "}
            <strong className="capitalize">
              Titanium Dioxide Wholesaler in {city},
            </strong>{" "}
            Aanya Enterprise provides <strong>Titanium dioxide (TiO 2 )</strong>{" "}
            of the highest quality that supports the various needs of industries
            in the country. Our products are known to be of high whiteness,
            opacities, chemical stability and brightness, which makes our
            products to be outstanding in a variety of applications. Working
            with us, companies will get to the high quality of{" "}
            <strong>Titanium Dioxide</strong> that helps to improve the quality
            of products, efficiency, and reliability in their work.
          </p>

          <div className="space-y-10">
            {/* 1 */}
            <div className="rounded-3xl border bg-[#F7F9FB] p-10">
              <h3 className="text-2xl font-semibold mb-6">
                1. Paints & Coatings
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                Among the highest consumers of the Titanium Dioxide is the
                paints and coatings business. Our TiO₂ improves:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>
                  Opacity and hiding power: The same ensures that there is even
                  coverage, so there is no need of many coats.
                </li>
                <li>
                  Brightness and whiteness: Increases the visual quality and
                  colour in decorative paints.
                </li>
                <li>
                  Weather resistance: Safeguards against UV deterioration,
                  fading, and chalking in exterior paints.
                </li>
                <li>
                  Durability: Enhances abrasion and corrosion resistance in
                  industrial coating.
                </li>
              </ul>

              <p className="text-lg text-black leading-relaxed">
                It is used to create interior and exterior wall paints,
                industrial paints, automotive paints, and protective paints. The
                advantage of using Aanya Enterprise as their Wholesaler of
                Titanium Dioxide is that the quality of products remains the
                same and this increases their life span and satisfaction by the
                customers.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-3xl border bg-white p-10">
              <h3 className="text-2xl font-semibold mb-6">
                2. Plastics & Polymers
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                Titanium Dioxide is critical in plastics in enhancing color,
                opaque and UV protection. Applications include:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>
                  PVC sheets and pipes: Improves the durability and the UV
                  stability of outdoor installations.
                </li>
                <li>
                  Plastic wraps and packaging: It is also opaque and bright and
                  assures product integrity.
                </li>
                <li>
                  Masterbatches and molded parts: Can offer constant coloration
                  and quality finish.
                </li>
              </ul>

              <p className="text-lg text-black leading-relaxed mb-2">
                Benefits for plastics:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>Prolonged color and light-yellowing.</li>
                <li>Increased chemical and mechanical stability.</li>
                <li>Improved visual and structural characteristics.</li>
              </ul>

              <p className="text-lg text-black leading-relaxed">
                Our high grade Titanium Dioxide is able to give manufacturers of
                plastics high performance with less production defects and
                minimization of wastages.
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-3xl border bg-[#F7F9FB] p-10">
              <h3 className="text-2xl font-semibold mb-6">
                3. Cosmetics & Personal Care
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                Titanium Dioxide has a significant role in the cosmetic
                preparations and personal care products. It primarily finds use
                in:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>
                  Sunscreens: Excellent protection against the sun and safe
                  formulation.
                </li>
                <li>
                  Face powders and foundations: Provides smoothness and
                  consistency of texture and coverage.
                </li>
                <li>
                  Lotions, creams and skincare products: Provides brightness,
                  opacity and stability of the formulation.
                </li>
              </ul>

              <p className="text-lg text-black leading-relaxed mb-2">
                Benefits in cosmetics:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>Skin-safe and non-reactive</li>
                <li>Pinpointed color and appearance.</li>
                <li>Stability of various formulations (chemical)</li>
              </ul>

              <p className="text-lg text-black leading-relaxed">
                Being a trusted <strong>Titanium Dioxide Wholesaler</strong>{" "}
                Aanya Enterprise guarantees customers quality TiO₂ of cosmetic
                quality that is safe according to the international safety
                standards and thus brands can trust their products and quality.
              </p>
            </div>

            {/* 4 */}
            <div className="rounded-3xl border bg-white p-10">
              <h3 className="text-2xl font-semibold mb-6">
                4. Paper & Printing Industry
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                In paper making, Titanium Dioxide is common in improving:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>
                  Brightness and opacity: Guarantees quality printing and looks.
                </li>
                <li>
                  Surface smoothness: Enhancing coating and finishing on high
                  quality papers.
                </li>
                <li>
                  Retention of color: Remains white after some time, less
                  yellowing.
                </li>
              </ul>

              <p className="text-lg text-black leading-relaxed">
                Its uses are; writing and printing paper, coated paper,
                cardboard, and specialty paper. TiO 2 is an essential additive
                in giving the paper manufacturers a uniform brightness, sharper
                print, less wastage of materials among others.
              </p>
            </div>

            {/* 5 */}
            <div className="rounded-3xl border bg-[#F7F9FB] p-10">
              <h3 className="text-2xl font-semibold mb-6">
                5. Rubber & Adhesives
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                Titanium Dioxide enhances in the rubber and adhesives sector:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>
                  Uniformity of colors: Guarantees uniform coloring in sheets
                  and products of rubber.
                </li>
                <li>
                  Durability: Increases wear and environmental resistance.
                </li>
                <li>
                  Chemical stability: Retains performance when subjected to
                  heat, UV light and when subjected to mechanical load.
                </li>
              </ul>

              <p className="text-lg text-black leading-relaxed">
                It is used in automotive rubber products, industrial adhesives
                and consumer rubber products. Our products assist manufacturers
                in extending the lifespan and performance consistency of their
                products and build their reputation in the market.
              </p>
            </div>

            {/* 6 */}
            <div className="rounded-3xl border bg-white p-10">
              <h3 className="text-2xl font-semibold mb-6">
                6. Textiles & Ceramics
              </h3>

              <p className="text-lg text-black leading-relaxed mb-2">
                One important application of Titanium Dioxide is in textiles and
                in ceramics:
              </p>

              <p className="text-lg font-semibold mb-2">Textiles:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-4">
                <li>Enhances whiteness and brightness of fabric.</li>
                <li>
                  Increases fastness and retention of color after repeated
                  washing.
                </li>
                <li>
                  Offers consistency of fibers in production of high quality
                  fabrics.
                </li>
              </ul>

              <p className="text-lg font-semibold mb-2">Ceramics:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-black">
                <li>
                  Enhances the breaking through of surface and brightness of
                  tiles and ceramics.
                </li>
                <li>Improves the quality of glaze and beauty.</li>
                <li>
                  Maintains consistency in batches, which is required in
                  industrial ceramic manufacturing.
                </li>
              </ul>
            </div>

            {/* 7 */}
            <div className="rounded-3xl border bg-[#F7F9FB] p-10">
              <h3 className="text-2xl font-semibold mb-6">
                7. Specialty and Emerging Applications
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                In addition to conventional industries, Titanium Dioxide is also
                being applied in the modern industrial process and this
                includes:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>
                  Automotive, Aerospace and electronic high-performance
                  coatings.
                </li>
                <li>
                  High level polymers and composites which entail accurate
                  optical and mechanical characteristics.
                </li>
                <li>
                  New personal care and cosmetic formulations with high
                  specifications of brightness and opaqueness.
                </li>
              </ul>

              <p className="text-lg font-semibold mb-2">Benefits:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-6">
                <li>
                  Differentiated performance on industrial niche requirements.
                </li>
                <li>
                  Less production difficulties with enhanced particle sizes and
                  dispersibility.
                </li>
                <li>Improved product value and product life.</li>
              </ul>

              <p className="text-lg text-black leading-relaxed">
                It is through provision of customized grades that Aanya
                Enterprise can enable businesses to deliver high efficiency,
                consistency and high-quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* form */}

<Form></Form>

      {/* why choose */}

      {/* ================= WHY CHOOSE AANYA ENTERPRISE ================= */}
      <section className="py-24 bg-[#F3F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose Aanya Enterprise for Your Reliable{" "}
            <strong className="capitalize">
              Titanium Dioxide Wholesaler in {city}?
            </strong>
          </h2>

          <p className="text-lg text-black leading-relaxed max-w-4xl mx-auto text-center mb-20">
            Selecting the appropriate supplier of{" "}
            <strong>Titanium Dioxide Wholesalers</strong> can be a great factor
            in the quality, performance and efficiency of your industry. Aanya
            Enterprise is one of the numbers of{" "}
            <strong className="capitalize">
              Titanium Dioxide Wholesaler in {city}
            </strong>{" "}
            where we have integrated our excellence, reliability, and
            customer-centric solution. This is the reason why companies in{" "}
            <span className="capitalize">{city}</span>have been referring us to
            their Titanium Dioxide needs:
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 1 */}
            <div className="rounded-3xl bg-white border p-10 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">
                1. Long Experience and Industry Knowledge
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                Having years of experience in the distribution of chemical, the
                Aanya Enterprise has acquired expertise in the supply of
                Titanium Dioxide to many industries such as paints, coating,
                plastics, cosmetics, paper, textile, rubber, and ceramics.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-4">
                <li>
                  We comprehend particular needs and issues of every industry.
                </li>
                <li>
                  We deliver solutions and recommendations that are specific to
                  the industry.
                </li>
              </ul>

              <p className="text-lg text-black leading-relaxed">
                This experience guarantees that the clients are provided with
                the best TiO 2 grades in their respective special uses.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-3xl bg-white border p-10 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">
                2. Titanium Dioxide, High-Quality, Tested
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                Quality is our number one priority as a high-end{" "}
                <strong>Titanium Dioxide Wholesaler.</strong>
              </p>

              <p className="text-lg text-black leading-relaxed mb-4">
                Every batch is subjected to rigorous quality testing of purity,
                particle size, and opacity and chemical stability.
              </p>

              <p className="text-lg text-black leading-relaxed mb-4">
                Our products are also of international standards which guarantee
                the same level of performance in all industrial applications.
              </p>

              <p className="text-lg text-black leading-relaxed">
                We provide high grade TiO 2 to manufacturers to make the product
                more durable, whiter and of better quality.
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-3xl bg-white border p-10 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">
                3. National Distribution and Timely Delivery
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                Aanya Enterprise has set up a well-established distribution
                network, which covers all the large industrial sectors in{" "}
                <span className="capitalize">{city} </span>.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black mb-4">
                <li>Timely delivery will mean short downtime in production.</li>
                <li>
                  The efficiency of our logistical competence enables us to
                  deliver the bulk orders and the smaller customized ones.
                </li>
              </ul>

              <p className="text-lg text-black leading-relaxed">
                Clients would be assured of constant availability of Titanium
                Dioxide irrespective of their location.
              </p>
            </div>

            {/* 4 */}
            <div className="rounded-3xl bg-white border p-10 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">
                4. Competitive Pricing
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                We have known the significance of cost efficiency in industrial
                activities.
              </p>

              <p className="text-lg text-black leading-relaxed mb-4">
                Through the good relations with the suppliers and the maximized
                logistics, we offer the best quality of Titanium Dioxide at the
                best price.
              </p>

              <p className="text-lg text-black leading-relaxed">
                Our prices do not cut corners in order to provide clients with
                the highest value possible.
              </p>
            </div>

            {/* 5 */}
            <div className="rounded-3xl bg-white border p-10 shadow-md lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-6">
                5. Technical Support and Consultation.
              </h3>

              <p className="text-lg text-black leading-relaxed mb-4">
                In addition to providing{" "}
                <strong className="capitalize">
                  Titanium Dioxide Wholesaler in {city},
                </strong>{" "}
                Aanya Enterprise can provide technical advice to its clients to
                make the best use of the material.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-lg text-black">
                <li>
                  Help in choosing appropriate TiO 2 grade to use in particular
                  industrial processes.
                </li>
                <li>
                  Dispersion, compatibility and performance optimization advice.
                </li>
                <li>
                  Help desk to make inquiries and help troubleshoot and guide.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fff8e1]  text-white text-center">
        <h2 className="text-3xl text-black md:text-4xl font-bold capitalize">
          Your Reliable Titanium Dioxide Partner in {city}
        </h2>
        <p className="mt-6 text-lg text-black max-w-2xl mx-auto">
          Consistent quality, expert guidance, and dependable nationwide supply.
        </p>
        <div className="mt-10">
          <Link
            href="/contact-us"
            className=" bg-[#00537B] text-white px-12 py-4 rounded-2xl font-semibold shadow-xl  transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* case strudies */}
      {/* ================= CASE STUDIES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Case Studies with Aanya Enterprise- Client Success Story
          </h2>

          <p className="text-lg text-black leading-relaxed max-w-4xl mx-auto text-center mb-20">
            Being one of the largest{" "}
            <strong className="capitalize">
              Titanium Dioxide Wholesaler in {city},{" "}
            </strong>{" "}
            Aanya Enterprise has assisted industries in the country improve the
            quality of the products, streamline their operations and become
            effective in their operations. Excellent{" "}
            <strong>Titanium Dioxide (TiO 2 )</strong> combined with technical
            guidance and quality supply has been able to provide quantifiable
            value in industries. There are six case studies below that display
            our impact.
          </p>

          <div className="space-y-16">
            {/* CASE 1 */}
            <div className="rounded-3xl border bg-[#F7F9FB] p-12">
              <h3 className="text-2xl font-semibold mb-6">
                Case Study 1: Paint Manufacturer -Maharashtra
              </h3>

              <p className="font-semibold mb-2">Industry Background:</p>
              <p className="text-lg mb-4">
                The paints and coatings industry requires a high level of opaque
                pigments, which are resistant to weathering to ensure durability
                of the color.
              </p>

              <p className="font-semibold mb-2">Client Issue:</p>
              <p className="text-lg mb-4">
                A major paint manufacturer had a problem of poor hiding power
                and stability of colors in their exterior paints. This led to
                customer complaints, increased wastage and delay in production.
              </p>

              <p className="font-semibold mb-2">Aanya Enterprise Solution:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                <li>
                  Premium Rutile Titanium Dioxide, supplied and tested on the
                  basis of the attributes of the product of transparency,
                  brightness, and UV protection.
                </li>
                <li>
                  Technical advice in dispersion techniques and ideal dosing, to
                  be uniformly mixed and have equal outcomes.
                </li>
                <li>
                  Helped the client to streamline production processes to
                  minimize reworks and time loss in raw materials.
                </li>
              </ul>

              <p className="font-semibold mb-2">Results:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>
                  More than 30 percent increase in concealment of power and
                  color consistency.
                </li>
                <li>Wastage cut and reduced costs of operation.</li>
                <li>
                  Repeat orders and customer satisfaction, revenue increased by
                  15%.
                </li>
              </ul>
            </div>

            {/* CASE 2 */}
            <div className="rounded-3xl border bg-white p-12">
              <h3 className="text-2xl font-semibold mb-6">
                Case Study 2: Plastic Molding Company -Gujarat
              </h3>

              <p className="font-semibold mb-2">Industry Background:</p>
              <p className="text-lg mb-4">
                TiO 2 used in outdoor PVC products needs to offer the protection
                against the UV rays and maintain the color long-term.
              </p>

              <p className="font-semibold mb-2">Client Dilemma:</p>
              <p className="text-lg mb-4">
                The producer had a problem of yellowing and degrading of pipes
                that were exposed to the sun, which affected the performance of
                the products and the confidence of the clients.
              </p>

              <p className="font-semibold mb-2">Aanya Enterprise Solution:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                <li>
                  High-quality TiO 2 supplied to plastics, optimized on UV
                  stability and opacification.
                </li>
                <li>
                  Recommended on how to prepare masterbatches and how to
                  dispense the masterbatches to achieve uniform colors.
                </li>
                <li>
                  Timely delivery that is planned to maintain a continuous
                  production.
                </li>
              </ul>

              <p className="font-semibold mb-2">Results:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>
                  The products were bright and strong even after a long period
                  in UV light.
                </li>
                <li>Less rejects and rework by 25%.</li>
                <li>
                  Enhanced and better brand recognition in B2B and B2C markets.
                </li>
              </ul>
            </div>

            {/* CASE 3 */}
            <div className="rounded-3xl border bg-[#F7F9FB] p-12">
              <h3 className="text-2xl font-semibold mb-6">
                Case Study 3: Cosmetics Brand- Delhi NCR
              </h3>

              <p className="font-semibold mb-2">Industry Background:</p>
              <p className="text-lg mb-4">
                The cosmetic formulations need safe and stable pigmentation of
                high quality to meet the expectations of the consumers and
                regulatory requirements.
              </p>

              <p className="font-semibold mb-2">Client Problem:</p>
              <p className="text-lg mb-4">
                A cosmetic firm had the problem of uneven pigmentation of face
                powders and sunscreens which had implications on the consistency
                of products and customer confidence.
              </p>

              <p className="font-semibold mb-2">Aanya Enterprise Solution:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                <li>
                  Provided cosmetic grade Titanium Dioxide that meets the
                  standards of international safety and purity.
                </li>
                <li>
                  Offered advice on blending, optimization of particle size and
                  stability of the formulations.
                </li>
                <li>
                  Helped in batch testing so that there would be consistency in
                  color and texture.
                </li>
              </ul>

              <p className="font-semibold mb-2">Results:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Better product consistency and smoothness.</li>
                <li>
                  Aspect of safety and compliance with cosmetic regulations.
                </li>
                <li>
                  Increased market share and better customer satisfaction.
                </li>
              </ul>
            </div>

            {/* CASE 4 */}
            <div className="rounded-3xl border bg-white p-12">
              <h3 className="text-2xl font-semibold mb-6">
                Case Study 4: Paper Fabricator- Tamil Nadu
              </h3>

              <p className="font-semibold mb-2">Industry Background:</p>
              <p className="text-lg mb-4">
                TiO 2 is required in the paper mills to achieve brightness,
                printability and appearance of the paper, particularly in the
                coated and specialty papers.
              </p>

              <p className="font-semibold mb-2">Client Challenge:</p>
              <p className="text-lg mb-4">
                A local paper mill was complaining of low brightness, poor
                opacities, and poor consistency in print quality and therefore
                were receiving negative customer feedback and losing contracts.
              </p>

              <p className="font-semibold mb-2">Aanya Enterprise Solution:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                <li>
                  Offered Anatase Titanium Dioxide of a higher whiteness and
                  opaqueness.
                </li>
                <li>
                  Carried out technical consultation of the optimum dosing and
                  dispersion in the pulp and coating process.
                </li>
                <li>
                  Suggested testing methods to be used to ensure uniformity
                  between batches in the brightness of the paper.
                </li>
              </ul>

              <p className="font-semibold mb-2">Results:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>
                  The brightness and the level of opaqueness were enhanced by
                  more than 20 percent and the specification of the clients were
                  delivered.
                </li>
                <li>
                  Coated and uncoated paper resulted in much better print
                  quality.
                </li>
                <li>Less wastage of raw materials and cost of production.</li>
              </ul>
            </div>

            {/* CASE 5 */}
            <div className="rounded-3xl border bg-[#F7F9FB] p-12">
              <h3 className="text-2xl font-semibold mb-6">
                Case Study 5: Rubber Manufacturer -Karnataka
              </h3>

              <p className="font-semibold mb-2">Industry Background:</p>
              <p className="text-lg mb-4">
                Rubber products require TiO 2 to show color consistency,
                strength, and environmental stress limits.
              </p>

              <p className="font-semibold mb-2">Client Issue:</p>
              <p className="text-lg mb-4">
                An industrial rubber producer had difficulties in controlling
                coloring and strength, which influenced the quality of the
                rubber sheets and parts in general.
              </p>

              <p className="font-semibold mb-2">Aanya Enterprise Solution:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                <li>
                  Furnished specialty Titanium dioxide to be used in rubber.
                </li>
                <li>Educated the client on dispersion, dosage and blending.</li>
                <li>
                  Supervised first production batches and made sure that the
                  results were consistent.
                </li>
              </ul>

              <p className="font-semibold mb-2">Results:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Obtained uniform color and better product looks.</li>
                <li>Improved resistance to mechanical stress and UV.</li>
                <li>
                  Enhanced reputation of high-quality products in the market in
                  terms of rubber products.
                </li>
              </ul>
            </div>

            {/* CASE 6 */}
            <div className="rounded-3xl border bg-white p-12">
              <h3 className="text-2xl font-semibold mb-6">
                Case Study 6: Textile Company -Rajasthan
              </h3>

              <p className="font-semibold mb-2">Industry Background:</p>
              <p className="text-lg mb-4">
                TiO 2 is needed in the production of textiles to improve
                whiteness, brightness, and color retention on the fabrics.
              </p>

              <p className="font-semibold mb-2">Client Issue:</p>
              <p className="text-lg mb-4">
                A textile company had low brightness and poor color retention
                with the white fabrics and this had resulted into complaints
                during and after the washing processes and subsequent fading.
              </p>

              <p className="font-semibold mb-2">Aanya Enterprise Solution:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                <li>
                  Provided high-grade Titanium Dioxide to be used in textiles
                  which are optimized towards fabric whiteness and stability.
                </li>
                <li>Gave instructions on how to integrate and process best.</li>
                <li>
                  Performed quality checks of starting production batches to
                  check consistency.
                </li>
              </ul>

              <p className="font-semibold mb-2">Results:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>
                  Groundbreaking advancements in fabric brightness and the
                  quality in general.
                </li>
                <li>
                  Increased color saturation, less post production complaints.
                </li>
                <li>
                  Improved brand reputation and repeat business of the client.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

<Cta></Cta>

      <Citieskeywords></Citieskeywords>
    </main>
  );
}
