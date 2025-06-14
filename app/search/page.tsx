import { format } from "date-fns";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";
import Map from "../components/Map";

// ✅ هنا بنستقبل searchParams مباشرة من Next.js
export default async function SearchResult({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const location = typeof searchParams?.location === "string" ? searchParams.location : "";
  const startDate = typeof searchParams?.startDate === "string" ? searchParams.startDate : "";
  const endDate = typeof searchParams?.endDate === "string" ? searchParams.endDate : "";
  const numOfGuests = typeof searchParams?.numOfGuests === "string" ? searchParams.numOfGuests : "";

  let formatedStartDate = "";
  let formatedEndDate = "";

  if (startDate && endDate) {
    try {
      formatedStartDate = format(new Date(startDate), "dd MMMM yy");
      formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    } catch (error) {
      console.error("Invalid date format", error);
    }
  }

  const range = `${formatedStartDate} - ${formatedEndDate}`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await getSearchResult();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>
        <section>
          <div className="container flex">
            <div className="pt-14 pr-4">
              <p className="text-xs">
                300+ Stays - {range} - for {numOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">
                Stays in {location}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                {filters.map((filter) => (
                  <button type="button" className="filter-btn" key={filter}>
                    {filter}
                  </button>
                ))}
              </div>
              <div>
                {searchResultData.map((listing) => (
                  <ListingCard
                    key={listing.title}
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                ))}
              </div>
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[600px]">
              <Map searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
