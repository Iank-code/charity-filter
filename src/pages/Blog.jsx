import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";

function Blog() {
  const [data, setData] = useState();
  const [newData, setNewData] = useState();
  const [search, setSearch] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const categoryList = data && data.map((item) => item.category);
  const newCategory = new Set(categoryList);
  const newSetCategory = [...newCategory];

  useEffect(() => {
    fetch("https://project-react-charity-api.vercel.app/organizations")
      .then((response) => response.json())
      .then((data) => {
        /* data = {
            script: "",
            hasNext: true,
            nextOrgId: 221,
            organization : [
                {},
                {},
                {},
            ] 

            data.hasNext
            data.nextOrgId
            data.organization
         } 


         number = {
            first: 20,
            second: 47
         }

         number.first
         number.second
        */

        // console.log(data.organization);
        setData(data.organization);
        setNewData(data.organization);
      });
  }, []);

  //   useEffect for search
  useEffect(() => {
    if (search != "") {
      let filteredData =
        data &&
        data.filter((org) => {
          return (
            org.name.toLowerCase().includes(search) || org.category.toLowerCase().includes(search) || org.country.toLowerCase().includes(search)
          )
        });

      setNewData(filteredData);
    } else {
      setNewData(data);
    }
  }, [search]);

  //   useEffect for filter
  useEffect(() => {
    if (selectedCategory === null || selectedCategory === "") {
      return setNewData(data);
    }

    const filteredCategory =
      data && data.filter((item) => item.category === selectedCategory);
    console.log(filteredCategory);
    setNewData(filteredCategory);
  }, [selectedCategory]);

  //   logical &&
  // if left side is true then move right

  return (
    <div className="flex flex-col">
      <Navbar />
      <h1>This is the blog page</h1>

      <div>
        <select onChange={(event) => setSelectedCategory(event.target.value)}>
          <option value="">All Categories</option>

          {newSetCategory &&
            newSetCategory.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
        </select>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
          className="px-3 py-2 border-black border-2 rounded-md w-64"
        />
      </div>

      {/* display: grid */}
      <div className="flex flex-wrap gap-8 px-5">
        {newData &&
          newData.map((item, index) => {
            return (
              <div key={index} className="mx-3">
                <img src={item.logoUrl} alt="" />
                <h1>{item.name}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Blog;
