import Footer from 'components/layout/footer';

export const metadata = {
  description: 'Tunneling services as you need.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* <ThreeItemGrid /> */}
      {/* <Carousel /> */}
      <Footer />
    </>
  );
}
