import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { setCovidData, setCovidLoading, setCovidError } from "./redux/reducer";
import { useFetchCovidDataQuery } from "./redux/api";

const CovidData = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useFetchCovidDataQuery();

  useEffect(() => {
    dispatch(setCovidLoading());
    if (data) {
      dispatch(setCovidData(data.data[0]));
    } else if (isError) {
      dispatch(setCovidError("Error fetching data"));
    }
  }, [dispatch, data, isError]);

  const covidData = useSelector((state) => state.covid.covidData);
  console.log(covidData);
  const error = useSelector((state) => state.covid.error);

  if (isLoading || !covidData) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* Loading Skeleton */}
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="bg-white rounded-md p-4 shadow-md">
            <Skeleton height={100} />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="p-4 bg-red-200 text-red-800">{error}</div>;
  }

  if (!covidData) {
    return <div>No data available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <div
        key={covidData.id}
        className="bg-blue-200 rounded-md p-4 shadow-md cursor-pointer"
      >
        <h2 className="text-blue-800 text-lg font-semibold mb-2">COVID Data</h2>
        <p className="text-blue-700">Date: {covidData.date}</p>
        <p className="text-blue-700">Confirmed Cases: {covidData.confirmed}</p>
        <p className="text-blue-700">Deaths: {covidData.deaths}</p>
      </div>
      <div className="bg-green-200 rounded-md p-4 shadow-md cursor-pointer ">
        <h2 className="text-green-800 text-lg font-semibold mb-2">
          Region Information
        </h2>
        <p className="text-green-700">Region Name: {covidData.region.name}</p>
        <p className="text-green-700">Region ISO: {covidData.region.iso}</p>
        <p className="text-green-700">
          Region Province: {covidData.region.province}
        </p>
      </div>
     
    </div>
  );
};

export default CovidData;
