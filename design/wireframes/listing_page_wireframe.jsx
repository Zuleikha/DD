```jsx
// Listing Page Wireframe - React Component Structure (for Vets, Parks, etc.)

// Header Component (same as homepage)
<Header>
  <Logo />
  <MainNavigation />
  <SearchBar />
  <MobileMenuToggle />
</Header>

// Page Header
<PageHeader>
  <h1>Find a Vet in Ireland</h1>
  <p>Locate trusted veterinary services across Ireland for your dog</p>
</PageHeader>

// Search and Filter Section
<SearchFilterSection>
  <SearchBar placeholder="Search vets by name or service..." />
  <FilterGroup>
    <CountySelector label="Select County" />
    <ServiceFilter label="Services">
      <CheckboxGroup>
        <Checkbox label="Emergency 24/7" />
        <Checkbox label="Surgical Services" />
        <Checkbox label="Dental Care" />
        <Checkbox label="Behavioral Consultation" />
      </CheckboxGroup>
    </ServiceFilter>
    <SortSelector label="Sort By">
      <Option value="distance">Distance</Option>
      <Option value="rating">Rating</Option>
      <Option value="name">Name (A-Z)</Option>
    </SortSelector>
  </FilterGroup>
</SearchFilterSection>

// Main Content Area with Map and Listings
<ContentLayout>
  {/* Left side: Map */}
  <MapContainer>
    <GoogleMap>
      {/* Map with pins for vets */}
      <MapControls>
        <ZoomControls />
        <FullscreenToggle />
      </MapControls>
    </GoogleMap>
    <MapLegend>
      <LegendItem icon="regular" label="Regular Vet" />
      <LegendItem icon="emergency" label="24/7 Emergency" />
      <LegendItem icon="specialty" label="Specialty Care" />
    </MapLegend>
  </MapContainer>

  {/* Right side: Listings */}
  <ListingsContainer>
    <ResultsCount>24 Vets Found</ResultsCount>
    
    <ListingCard featured={true}>
      <ListingImage src="happy-paws-vet.jpg" />
      <ListingContent>
        <ListingHeader>
          <h3>Happy Paws Veterinary Clinic</h3>
          <Rating value={4.8} />
        </ListingHeader>
        <ListingDetails>
          <Address>123 Main Street, Dublin 2</Address>
          <Phone>01 234 5678</Phone>
          <ServiceTags>
            <Tag>Emergency Care</Tag>
            <Tag>Surgical Services</Tag>
          </ServiceTags>
        </ListingDetails>
        <ListingActions>
          <DirectionsButton>Get Directions</DirectionsButton>
          <WebsiteButton>Visit Website</WebsiteButton>
          <SaveButton>Save</SaveButton>
        </ListingActions>
      </ListingContent>
    </ListingCard>
    
    {/* More listing cards */}
    <ListingCard>
      {/* Similar structure to above */}
    </ListingCard>
    <ListingCard>
      {/* Similar structure to above */}
    </ListingCard>
    
    <Pagination>
      <PrevButton />
      <PageNumbers>
        <PageNumber active={true}>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
      </PageNumbers>
      <NextButton />
    </Pagination>
  </ListingsContainer>
</ContentLayout>

// Related Content Section
<RelatedContent>
  <SectionHeading>Related Resources</SectionHeading>
  <ResourceGrid>
    <ResourceCard 
      icon="article" 
      title="When to Visit Emergency Vet" 
      link="/blog/emergency-vet-visits" 
    />
    <ResourceCard 
      icon="article" 
      title="Preparing for Vet Visits" 
      link="/blog/preparing-for-vet-visits" 
    />
    <ResourceCard 
      icon="forum" 
      title="Vet Recommendations" 
      link="/forum/vet-recommendations" 
    />
  </ResourceGrid>
</RelatedContent>

// Chatbot Component (fixed position, same as homepage)
<ChatbotWidget>
  <ChatbotToggle icon="paw" />
  <ChatbotDialog>
    {/* Chatbot interface */}
  </ChatbotDialog>
</ChatbotWidget>

// Footer (same as homepage)
<Footer>
  <FooterNavigation />
  <SocialLinks />
  <ExternalLinks />
  <Copyright>© 2025 DogDays.ie - All rights reserved</Copyright>
</Footer>
```
