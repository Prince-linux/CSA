import { useEffect, useState } from "react";
import { Link } from "react-router";
// import webinar from "../assets/USATA-Webinar.png";
import { routes } from "../helpers/routes";
import axios from "axios";
import { endpoints } from "../api/endpoints";

const News = () => {
  const [externalNews, setExternalNews] = useState([]);

  useEffect(() => {
    axios
      .get(endpoints.rss.reutersAfrica)
      .then((res) => {
        const newsItems = res.data?.items;
        if (Array.isArray(newsItems)) {
          setExternalNews(newsItems);
        } else {
          console.warn("No valid news items found:", res.data);
          setExternalNews([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching RSS:", err);
        setExternalNews([]);
      });
  }, []);

  const webinarCard = {
    image: webinar,
    title: "Webinar Registration",
    date: "July 29, 2025",
    author: "CONFERENCE TEAM",
    type: "register",
  };

  const SkeletonCard = () => (
    <div className="animate-pulse bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-48 bg-gray-300" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-1/2" />
        <div className="h-6 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  );

  return (
    <div id="news" className="w-full bg-[#F5F5F5] pb-60 md:pb-50 lg:pb-40">
      <div className="max-w-[1280px] mx-auto min-h-[50vh] bg-[#F5F5F5] pt-12">
        {/* Header */}
        <div className="h-[8rem] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14">
          <h1
            style={{ fontFamily: "Oswald" }}
            className="text-black text-4xl font-normal leading-loose pl-5"
          >
            LATEST NEWS
          </h1>
          <div className="w-[1px] h-[50%] bg-red-600 hidden md:block"></div>
          <div className="h-[1px] w-[50%] bg-red-600 block md:hidden"></div>
          <div className="text-zinc-400 italic text-center md:text-start">
            <p>
              Stay updated with the latest developments, stories, and insights
              from around the world. <br />
              From global events to local highlights.
            </p>
          </div>
        </div>

        {/* Webinar Highlight Card */}
        <div className="my-10 px-4 flex justify-center">
          <div className="w-full max-w-4xl relative rounded-lg overflow-hidden shadow-md">
            <img
              src={webinarCard.image}
              alt={webinarCard.title}
              className="w-full h-auto object-cover"
            />
            <div className="bottom-0 left-0 right-0 bg-black/60 text-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-1">
                  {webinarCard.title}
                </h2>
                <p className="text-sm">{webinarCard.date}</p>
              </div>
              <Link
                to={routes[6].path}
                className="mt-4 md:mt-0 bg-green-600 !text-white px-6 py-2 rounded hover:bg-green-800 transition"
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Reuters Feed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10 px-4">
          {externalNews.length === 0 ? (
            <>
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </>
          ) : (
            externalNews.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                    No Image
                  </div>
                )}

                <div className="p-4">
                  <div className="text-red-600 text-sm mb-2">
                    {item.author} |{" "}
                    {new Date(item.published).toLocaleDateString()}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    {item.summary?.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 140)}
                    ...
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-600 underline hover:text-red-700"
                  >
                    READ FULL ARTICLE
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
