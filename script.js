const getCountryData = async (sort) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const response = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries${
      sort ? "?sort=population&order=desc" : ""
    }`
  );
  const data = await response.json();
  data.data.map((d) => {
    const div = document.createElement("div");
    div.className = "country_data_container";
    div.innerHTML = `
            <h1>Country Name: ${d.country}</h1>
            <p>Rank: ${d.Rank}</p>
            <p>Population: ${d.population}</p>
        `;
    container.appendChild(div);
  });
};
