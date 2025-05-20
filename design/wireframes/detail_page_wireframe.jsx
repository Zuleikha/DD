```jsx
// Detail Page Wireframe - React Component Structure (for individual vet, park, etc.)

// Header Component (same as other pages)
<Header>
  <Logo />
  <MainNavigation />
  <SearchBar />
  <MobileMenuToggle />
</Header>

// Breadcrumb Navigation
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/vets">Vets</BreadcrumbItem>
  <BreadcrumbItem current>Happy Paws Veterinary Clinic</BreadcrumbItem>
</Breadcrumbs>

// Detail Hero Section
<DetailHero>
  <DetailImage src="happy-paws-vet-large.jpg" />
  <DetailOverlay>
    <h1>Happy Paws Veterinary Clinic</h1>
    <Rating value={4.8} reviewCount={124} />
    <DetailTags>
      <Tag>Emergency Care</Tag>
      <Tag>Surgical Services</Tag>
      <Tag>Dental Care</Tag>
    </DetailTags>
  </DetailOverlay>
</DetailHero>

// Main Content Area
<DetailContent>
  {/* Left Column: Main Information */}
  <MainInfoColumn>
    <InfoSection>
      <SectionHeading>About</SectionHeading>
      <p>Happy Paws Veterinary Clinic has been providing exceptional care for dogs across Dublin since 2010. Our team of experienced veterinarians specializes in preventative care, emergency services, and surgical procedures for all breeds.</p>
    </InfoSection>
    
    <InfoSection>
      <SectionHeading>Services</SectionHeading>
      <ServicesList>
        <ServiceItem>
          <ServiceIcon type="emergency" />
          <ServiceName>24/7 Emergency Care</ServiceName>
          <ServiceDescription>Round-the-clock emergency services for urgent situations</ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon type="surgery" />
          <ServiceName>Surgical Services</ServiceName>
          <ServiceDescription>Full range of surgical procedures with modern equipment</ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon type="dental" />
          <ServiceName>Dental Care</ServiceName>
          <ServiceDescription>Comprehensive dental examinations and treatments</ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon type="vaccine" />
          <ServiceName>Vaccinations</ServiceName>
          <ServiceDescription>Complete vaccination programs for puppies and adult dogs</ServiceDescription>
        </ServiceItem>
      </ServicesList>
    </InfoSection>
    
    <InfoSection>
      <SectionHeading>Reviews</SectionHeading>
      <ReviewSummary>
        <AverageRating value={4.8} />
        <RatingBreakdown>
          <RatingBar stars={5} percentage={85} />
          <RatingBar stars={4} percentage={10} />
          <RatingBar stars={3} percentage={3} />
          <RatingBar stars={2} percentage={1} />
          <RatingBar stars={1} percentage={1} />
        </RatingBreakdown>
      </ReviewSummary>
      
      <ReviewsList>
        <ReviewItem>
          <ReviewHeader>
            <ReviewerName>John D.</ReviewerName>
            <ReviewRating value={5} />
            <ReviewDate>March 15, 2025</ReviewDate>
          </ReviewHeader>
          <ReviewContent>
            Excellent care for my Golden Retriever. The staff was friendly and professional, and the facilities are clean and modern.
          </ReviewContent>
        </ReviewItem>
        <ReviewItem>
          <ReviewHeader>
            <ReviewerName>Sarah M.</ReviewerName>
            <ReviewRating value={4} />
            <ReviewDate>February 28, 2025</ReviewDate>
          </ReviewHeader>
          <ReviewContent>
            Great service during an emergency situation. The only reason for 4 stars is the wait time, but that's understandable for emergency care.
          </ReviewContent>
        </ReviewItem>
        <MoreReviewsButton>Read All 124 Reviews</MoreReviewsButton>
      </ReviewsList>
    </InfoSection>
  </MainInfoColumn>
  
  {/* Right Column: Contact & Map */}
  <SideInfoColumn>
    <ContactCard>
      <ContactHeading>Contact Information</ContactHeading>
      <AddressBlock>
        <AddressIcon />
        <AddressText>123 Main Street, Dublin 2</AddressText>
        <DirectionsButton>Get Directions</DirectionsButton>
      </AddressBlock>
      <ContactItem>
        <PhoneIcon />
        <ContactText>01 234 5678</ContactText>
      </ContactItem>
      <ContactItem>
        <EmailIcon />
        <ContactText>info@happypawsvet.ie</ContactText>
      </ContactItem>
      <ContactItem>
        <WebsiteIcon />
        <ContactText>www.happypawsvet.ie</ContactText>
        <WebsiteButton>Visit Website</WebsiteButton>
      </ContactItem>
      <HoursBlock>
        <HoursHeading>Opening Hours</HoursHeading>
        <HoursItem day="Monday-Friday" hours="8:00 AM - 7:00 PM" />
        <HoursItem day="Saturday" hours="9:00 AM - 5:00 PM" />
        <HoursItem day="Sunday" hours="10:00 AM - 4:00 PM" />
        <HoursNote>Emergency services available 24/7</HoursNote>
      </HoursBlock>
    </ContactCard>
    
    <MapCard>
      <LocationMap>
        {/* Google Map with pin for this location */}
      </LocationMap>
      <NearbyNote>Located 2.3 km from Dublin City Centre</NearbyNote>
    </MapCard>
    
    <ShareSaveCard>
      <ShareButton>Share</ShareButton>
      <SaveButton>Save to Favorites</SaveButton>
      <ReportButton>Report Issue</ReportButton>
    </ShareSaveCard>
  </SideInfoColumn>
</DetailContent>

// Related Listings Section
<RelatedListings>
  <SectionHeading>Other Vets Nearby</SectionHeading>
  <ListingGrid>
    <ListingCard mini={true}>
      {/* Simplified listing card */}
    </ListingCard>
    <ListingCard mini={true}>
      {/* Simplified listing card */}
    </ListingCard>
    <ListingCard mini={true}>
      {/* Simplified listing card */}
    </ListingCard>
  </ListingGrid>
</RelatedListings>

// Chatbot Component (fixed position, same as other pages)
<ChatbotWidget>
  <ChatbotToggle icon="paw" />
  <ChatbotDialog>
    {/* Chatbot interface */}
  </ChatbotDialog>
</ChatbotWidget>

// Footer (same as other pages)
<Footer>
  <FooterNavigation />
  <SocialLinks />
  <ExternalLinks />
  <Copyright>© 2025 DogDays.ie - All rights reserved</Copyright>
</Footer>
```
