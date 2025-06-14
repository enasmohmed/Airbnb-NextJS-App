import { format } from "date-fns";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";
import Map from "../components/Map";

// منع إعادة بناء ثابت (مهم لأن searchParams ديناميكي)
export const dynamic = 'force-dynamic';

export default async function SearchResult({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const location = typeof params.location === "string" ? params.location : "";
  const startDate = typeof params.startDate === "string" ? params.startDate : "";
  const endDate = typeof params.endDate === "string" ? params.endDate : "";
  const numOfGuests = typeof params.numOfGuests === "string" ? params.numOfGuests : "";

  let formatedStartDate = "";
  let formatedEndDate = "";
  if (startDate && endDate) {
    try {
      formatedStartDate = format(new Date(startDate), "dd MMMM yy");
      formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    } catch {
      console.error("Invalid date format", startDate, endDate);
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
      <main>{/* ...rest of code... */}</main>
      <Footer />
    </>
  );
}
