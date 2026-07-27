import BulkCTA from '@/components/bulk/BulkCTA'
import BulkEnquiry from '@/components/bulk/BulkEnquiry'
import Header from '@/components/bulk/Header'
import Hero from '@/components/bulk/Hero'
import ProductsSection from '@/components/bulk/ProductsSection'
import StatsSection from '@/components/bulk/StatsSection'
import TestimonialsModern from '@/components/bulk/TestimonialsModern'
import WhyChoose from '@/components/bulk/WhyChoose'
import WhyChoose2 from '@/components/bulk/WhyChoose2'
import Certificates from '@/components/Landingpage/Certificates'
import FooterInquiry from '@/components/Landingpage/FooterInquiry'
import React from 'react'

export default function BulkInquiry() {
  return (
    <>
    <Header/>
    <Hero/>
    <StatsSection/>
    <Certificates/>
    <ProductsSection/>
    <WhyChoose/>
    <BulkEnquiry/>
    <WhyChoose2/>
    <TestimonialsModern/>
    <BulkCTA/>
    <FooterInquiry />
    </>
  )
}
